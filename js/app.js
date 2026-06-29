/* ========================================
   冀教版四年级上学期 · 趣味预习课程
   主要应用逻辑
   ======================================== */

// ======== 状态管理 ========
class AppState {
  constructor() {
    this.load();
  }

  load() {
    const saved = localStorage.getItem('grade4_preview_state');
    if (saved) {
      const data = JSON.parse(saved);
      Object.assign(this, data);
    } else {
      this.totalStars = 0;
      this.completedUnits = [];
      this.unitProgress = {};        // { unitId: { bestScore, questionsDone, perfect } }
      this.perfectScores = 0;
      this.signInDays = [];          // ['2026-06-26', ...]
      this.lastSignIn = null;
      this.consecutiveDays = 0;
      this.achievementsUnlocked = [];
      this.easterEggsFound = 0;
      this.wrongAnswers = {};       // { unitId: [{ questionIndex, question, options, answer, selected, explanation, hint }] }
    }
    this.updateStarDisplay();
  }

  updateStarDisplay() {
    const el = document.getElementById('total-stars');
    if (el) el.textContent = this.totalStars;
  }

  save() {
    localStorage.setItem('grade4_preview_state', JSON.stringify({
      totalStars: this.totalStars,
      completedUnits: this.completedUnits,
      unitProgress: this.unitProgress,
      perfectScores: this.perfectScores,
      signInDays: this.signInDays,
      lastSignIn: this.lastSignIn,
      consecutiveDays: this.consecutiveDays,
      achievementsUnlocked: this.achievementsUnlocked,
      easterEggsFound: this.easterEggsFound,
      wrongAnswers: this.wrongAnswers
    }));
  }

  addStars(n) {
    this.totalStars += n;
    this.updateStarDisplay();
    this.save();
    this.checkAchievements();
  }

  completeUnit(unitId) {
    if (!this.completedUnits.includes(unitId)) {
      this.completedUnits.push(unitId);
    }
    this.save();
    this.checkAchievements();
  }

  saveQuizResult(unitId, score, total) {
    const pct = Math.round(score / total * 100);
    const prev = this.unitProgress[unitId] || { bestScore: 0, questionsDone: 0, perfect: false };
    if (pct > prev.bestScore) {
      prev.bestScore = pct;
    }
    prev.questionsDone = (prev.questionsDone || 0) + total;
    if (pct === 100 && !prev.perfect) {
      prev.perfect = true;
      this.perfectScores++;
    }
    this.unitProgress[unitId] = prev;
    if (pct >= 60) {
      this.completeUnit(unitId);
    }
    this.save();
    this.checkAchievements();
  }

  signIn() {
    const today = new Date().toISOString().split('T')[0];
    if (this.signInDays.includes(today)) return false;
    this.signInDays.push(today);
    const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];
    if (this.lastSignIn === yesterday) {
      this.consecutiveDays++;
    } else {
      this.consecutiveDays = 1;
    }
    this.lastSignIn = today;
    this.addStars(2);
    this.save();
    return true;
  }

  checkAchievements() {
    let newUnlocks = [];
    ACHIEVEMENTS.forEach(ach => {
      if (!this.achievementsUnlocked.includes(ach.id) && ach.check(this)) {
        this.achievementsUnlocked.push(ach.id);
        newUnlocks.push(ach);
      }
    });
    this.save();
    if (newUnlocks.length > 0) {
      newUnlocks.forEach(ach => {
        setTimeout(() => showAchievementModal(ach), 500);
      });
    }
  }

  // ======== 错题管理 ========
  addWrongAnswer(unitId, record) {
    if (!this.wrongAnswers[unitId]) {
      this.wrongAnswers[unitId] = [];
    }
    // 不重复添加同一题
    if (!this.wrongAnswers[unitId].some(w => w.questionIndex === record.questionIndex)) {
      this.wrongAnswers[unitId].push(record);
      this.save();
    }
  }

  removeWrongAnswer(unitId, questionIndex) {
    if (this.wrongAnswers[unitId]) {
      this.wrongAnswers[unitId] = this.wrongAnswers[unitId].filter(w => w.questionIndex !== questionIndex);
      if (this.wrongAnswers[unitId].length === 0) {
        delete this.wrongAnswers[unitId];
      }
      this.save();
    }
  }

  getWrongAnswers(unitId) {
    return this.wrongAnswers[unitId] || [];
  }

  getAllWrongAnswers() {
    return this.wrongAnswers;
  }

  getTotalWrongCount() {
    return Object.values(this.wrongAnswers).reduce((sum, arr) => sum + arr.length, 0);
  }

  getUnitWrongCount(unitId) {
    return (this.wrongAnswers[unitId] || []).length;
  }

  hasWrongAnswers(unitId) {
    return this.getUnitWrongCount(unitId) > 0;
  }

  getUnitStatus(unitId) {
    const p = this.unitProgress[unitId];
    if (!p) return 'pending';
    if (p.perfect) return 'completed';
    if (p.bestScore >= 60) return 'completed';
    if (p.questionsDone > 0) return 'partial';
    return 'pending';
  }
}

// ======== 应用初始化 ========
const state = new AppState();
let currentView = 'home';
let currentSubject = null;
let currentUnit = null;
let currentQuestionIndex = 0;
let quizScore = 0;
let answeredQuestions = 0;
let isAnswering = false;

// ======== 练习模式状态 ========
let isPracticeMode = false;
let practiceState = { currentIndex: 0, history: [] };
let wrongReviewMode = false;
let wrongReviewQuestions = [];

// ======== 测验回顾 ========
let quizAnswers = [];

// ======== DOM 引用 ========
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ======== 页面切换 ========
function showPage(pageId) {
  $$('.page').forEach(p => p.classList.remove('active'));
  $(`#${pageId}`).classList.add('active');
  currentView = pageId;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ======== 导航栏高亮 ========
function updateNav(activeId) {
  $$('.nav-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.page === activeId);
  });
}

// ======== 安淇专属鼓励语 ========
function getEncouragement() {
  const stars = state.totalStars;
  const completed = state.completedUnits.length;
  const totalUnits = 21;
  const signedIn = state.consecutiveDays;

  const messages = [
    { check: () => completed === 0 && stars === 0,
      text: '🌟 安淇，今天是你学习的第一天！<br>爸爸为你准备好了四年级的课程，<br>让我们一起开始吧，加油！💪' },
    { check: () => completed >= totalUnits && stars >= 50,
      text: '🏆 太厉害了安淇！你完成了所有课程！<br>你真是爸爸的骄傲！<br>继续保持这份学习的热情哦！🎉' },
    { check: () => signedIn >= 5,
      text: '🔥 安淇已经连续学习 ' + signedIn + ' 天了！<br>这份坚持比什么都珍贵！<br>爸爸为你感到自豪！🌟' },
    { check: () => stars >= 30,
      text: '💫 哇！安淇已经拿到 ' + stars + ' 颗星星了！<br>你越来越棒了，每一颗星星<br>都是你努力的证明！继续加油！🌈' },
    { check: () => stars >= 10,
      text: '⭐ 安淇真棒！已经获得 ' + stars + ' 颗星星啦！<br>每学会一个知识点，就离优秀更近一步！<br>爸爸相信你！❤️' },
    { check: () => completed >= 5,
      text: '📚 安淇已经完成了 ' + completed + ' 个单元！<br>学习贵在坚持，你做得非常好！<br>休息一下，再继续前进吧！🌻' },
    { check: () => completed >= 1,
      text: '🎉 安淇完成了第一个单元！真棒！<br>学习就像爬山，一步一步往上走，<br>山顶的风景一定很美！⛰️' },
    { check: () => completed > 0 && stars > 0,
      text: '👧 安淇，你今天又来学习了！<br>学习让我们的世界变得更大，<br>爸爸永远支持你！好好学习，天天向上！📖' },
  ];

  // 默认欢迎语
  const defaultMsg = '🌟 安淇，欢迎回来！<br>今天也想学习一下吗？<br>你认真的样子最可爱了！😊';

  // 如果有满足条件的特殊鼓励语，优先显示
  for (const m of messages) {
    if (m.check()) return m.text;
  }

  // 根据星星数量增加变化
  if (stars > 0 && completed > 0) {
    return '⭐ 安淇已经拿到 ' + stars + ' 颗星星，完成了 ' + completed + ' 个单元！<br>每一次学习都在让你变得更棒！<br>爸爸永远爱你，加油！❤️';
  }

  return defaultMsg;
}

// ======== 渲染主页 ========
function renderHome() {
  const container = $('#home-content');
  const today = new Date();
  const dateStr = `${today.getFullYear()}年${today.getMonth() + 1}月${today.getDate()}日`;

  // 计算各科进度
  let mathDone = 0, chineseDone = 0, englishDone = 0;
  ['m1','m2','m3','m4','m5','m6','m7','m8','m9'].forEach(u => { if (state.completedUnits.includes(u)) mathDone++; });
  ['c1','c2','c3','c4','c5','c6'].forEach(u => { if (state.completedUnits.includes(u)) chineseDone++; });
  ['e1','e2','e3','e4','e5','e6'].forEach(u => { if (state.completedUnits.includes(u)) englishDone++; });

  container.innerHTML = `
    <div class="welcome-section">
      <h2>🎉 安淇，欢迎回来！</h2>
      <p>${dateStr}</p>
      <div style="margin:12px auto;max-width:320px;padding:12px 16px;background:rgba(255,255,255,0.7);border-radius:16px;font-size:15px;line-height:1.8;color:#555;">
        ${getEncouragement()}
      </div>
      <div style="margin-top:12px;font-size:14px;color:#666;">
        已获得 <strong style="font-size:20px;color:var(--primary);">${state.totalStars}</strong> ⭐
        ${state.consecutiveDays >= 2 ? `· 连续学习 <strong style="color:var(--secondary);">${state.consecutiveDays}</strong> 天 🔥` : ''}
      </div>
    </div>

    <div class="subject-grid">
      <div class="subject-card math" onclick="navigateToSubject('math')">
        <span class="subject-icon">📐</span>
        <h3>数学</h3>
        <p>${mathDone}/9 单元</p>
      </div>
      <div class="subject-card chinese" onclick="navigateToSubject('chinese')">
        <span class="subject-icon">📖</span>
        <h3>语文</h3>
        <p>${chineseDone}/6 单元</p>
      </div>
      <div class="subject-card english" onclick="navigateToSubject('english')">
        <span class="subject-icon">🇦🇺</span>
        <h3>英语</h3>
        <p>${englishDone}/6 单元</p>
      </div>
    </div>

    <div class="fun-zone" onclick="showRandomEasterEgg()">
      <h3>🎁 每日小惊喜</h3>
      <div class="fun-fact">点击这里，看看今天有什么有趣的知识！</div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px;">
      <div style="background:white;border-radius:var(--radius);padding:16px;box-shadow:var(--shadow);cursor:pointer;" onclick="showSignInModal()">
        <div style="text-align:center;">
          <span style="font-size:32px;">📅</span>
          <h4 style="margin-top:8px;">每日签到</h4>
          <p style="font-size:13px;color:var(--text-light);">
            ${state.signInDays.includes(new Date().toISOString().split('T')[0])
              ? '✅ 今日已签到'
              : '点击签到领星星 ⭐'}
          </p>
        </div>
      </div>
      <div style="background:white;border-radius:var(--radius);padding:16px;box-shadow:var(--shadow);cursor:pointer;" onclick="showAchievements()">
        <div style="text-align:center;">
          <span style="font-size:32px;">🏆</span>
          <h4 style="margin-top:8px;">成就徽章</h4>
          <p style="font-size:13px;color:var(--text-light);">
            ${state.achievementsUnlocked.length} / ${ACHIEVEMENTS.length} 已解锁
          </p>
        </div>
      </div>
    </div>
    <div style="background:white;border-radius:var(--radius);padding:16px;box-shadow:var(--shadow);cursor:pointer;margin-bottom:20px;" onclick="showWrongBook()">
      <div style="text-align:center;">
        <span style="font-size:32px;">📕</span>
        <h4 style="margin-top:8px;">错题本</h4>
        <p style="font-size:13px;color:var(--text-light);">
          ${state.getTotalWrongCount()} 道题待复习
        </p>
      </div>
    </div>
  `;
}

// ======== 科目页面 ========
function navigateToSubject(subject) {
  currentSubject = subject;
  const subj = CURRICULUM[subject];
  showPage('subject-page');

  const colors = { math: 'var(--primary)', chinese: 'var(--orange)', english: 'var(--purple)' };
  const bgColors = { math: '#ffecd2', chinese: '#fce4ec', english: '#e8eaf6' };

  $('#subject-header').innerHTML = `
    <button class="back-btn" onclick="goHome()">←</button>
    <h2>${subj.icon} ${subj.name}</h2>
    <span class="subtitle">共 ${subj.units.length} 个单元</span>
  `;
  $('#subject-header').style.background = bgColors[subject];
  $('#subject-header').style.borderRadius = '20px';

  const list = $('#unit-list');
  list.innerHTML = subj.units.map(unit => {
    const status = state.getUnitStatus(unit.id);
    const statusText = { completed: '✅ 已完成', partial: '🔄 进行中', pending: '🔒 未开始' }[status];
    const statusClass = { completed: 'completed', partial: 'partial', pending: 'pending' }[status];
    const numColors = { math: colors[subject], chinese: colors[subject], english: colors[subject] };
    return `
      <div class="unit-item" onclick="startUnit('${subject}', '${unit.id}')">
        <div class="unit-num" style="background:${colors[subject]}">
          ${unit.emoji}
        </div>
        <div class="unit-info">
          <h4>${unit.title}</h4>
          <p>${unit.description}</p>
        </div>
        <span class="unit-status ${statusClass}">${statusText}</span>
      </div>
    `;
  }).join('');
}

// ======== 开始学习单元 ========
function startUnit(subject, unitId) {
  currentSubject = subject;
  currentUnit = unitId;
  const subj = CURRICULUM[subject];
  const unit = subj.units.find(u => u.id === unitId);
  if (!unit) return;

  showPage('lesson-page');

  $('#lesson-header').innerHTML = `
    <button class="back-btn" onclick="navigateToSubject('${subject}')">←</button>
    <h2>${unit.emoji} ${unit.title}</h2>
  `;

  const lesson = unit.lessons[0];
  $('#lesson-content').innerHTML = `
    <div class="lesson-card">
      <h3>📖 ${lesson.title}</h3>
      <div class="lesson-content">${lesson.content}</div>
      <div class="lesson-actions" style="flex-direction:column;">
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;width:100%;">
          <button class="btn btn-primary" onclick="startPractice()" style="justify-content:center;">
            📝 先练习一下
          </button>
          <button class="btn btn-pink" onclick="startQuiz()" style="justify-content:center;">
            🎯 开始测验
          </button>
        </div>
        <button class="btn btn-outline btn-block" onclick="goHome()">
          🏠 返回首页
        </button>
      </div>
    </div>
  `;
}

// ======== 测验系统 ========
function startQuiz() {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  if (!unit || !unit.questions.length) return;

  currentQuestionIndex = 0;
  quizScore = 0;
  answeredQuestions = 0;
  isAnswering = false;
  quizAnswers = [];

  showPage('quiz-page');
  renderQuestion();
}

function renderQuestion() {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  const questions = unit.questions;
  const total = questions.length;
  const q = questions[currentQuestionIndex];
  const labels = ['A', 'B', 'C', 'D'];

  // 进度条
  const pct = ((currentQuestionIndex) / total * 100);
  $('#quiz-progress-fill').style.width = `${pct}%`;
  $('#quiz-counter').textContent = `${currentQuestionIndex + 1} / ${total}`;
  $('#quiz-score-display').textContent = `⭐ ${quizScore}`;

  $('#question-area').innerHTML = `
    <div class="question-card">
      <div class="question-text">${q.question}</div>
      <div class="options-grid">
        ${q.options.map((opt, i) => `
          <button class="option-btn" onclick="selectOption(this, ${i}, ${q.answer})" data-index="${i}">
            <span class="option-label">${labels[i]}</span>
            <span>${opt}</span>
          </button>
        `).join('')}
      </div>
    </div>
  `;

  // 进度地图
  const progressHTML = questions.map((_, i) => {
    let cls = 'map-node';
    if (i < currentQuestionIndex) cls += ' completed';
    else if (i === currentQuestionIndex) cls += ' current';
    let icon = i < currentQuestionIndex ? '✅' : (i === currentQuestionIndex ? '📍' : '○');
    return `
      <div class="${cls}">${icon}</div>
      ${i < questions.length - 1 ? `<div class="map-line ${i < currentQuestionIndex ? 'completed' : ''}"></div>` : ''}
    `;
  }).join('');
  $('#question-progress-map').innerHTML = progressHTML;

  isAnswering = false;
}

function selectOption(el, selected, correct) {
  if (isAnswering) return;
  isAnswering = true;

  const allOptions = $$('.option-btn');
  allOptions.forEach(btn => btn.disabled = true);

  // 标记正确和错误
  allOptions.forEach((btn, i) => {
    if (i === correct) btn.classList.add('correct');
    if (i === selected && selected !== correct) btn.classList.add('wrong');
    if (i === selected) btn.classList.add('selected');
  });

  // 记录答题结果供回顾
  quizAnswers.push({ questionIndex: currentQuestionIndex, selected, correct: selected === correct });

  if (selected === correct) {
    quizScore++;
    answeredQuestions++;
    launchConfetti(30);
    showFeedback(true);
    // 彩蛋：答对时有概率触发趣味知识
    if (Math.random() < 0.3) {
      setTimeout(() => showMiniEasterEgg(), 800);
    }
  } else {
    answeredQuestions++;
    showFeedback(false);
    // 答错：追踪到错题本
    const subj = CURRICULUM[currentSubject];
    const unit = subj.units.find(u => u.id === currentUnit);
    const q = unit.questions[currentQuestionIndex];
    state.addWrongAnswer(currentUnit, {
      questionIndex: currentQuestionIndex,
      question: q.question,
      options: q.options,
      answer: q.answer,
      selected: selected,
      explanation: q.explanation || '',
      hint: q.hint || ''
    });
  }

  // 答错了 → 显示解析并手动继续
  if (selected !== correct) {
    showQuizExplanation(selected, correct);
    return; // 不自动跳转，等待用户点击"继续"
  }

  // 答对了 → 自动跳下一题（保持原有1200ms节奏）
  const total = CURRICULUM[currentSubject].units.find(u => u.id === currentUnit).questions.length;
  setTimeout(() => {
    if (currentQuestionIndex < total - 1) {
      currentQuestionIndex++;
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showFeedback(correct) {
  const area = $('#question-area');
  const feedback = document.createElement('div');
  feedback.style.cssText = `
    text-align:center;padding:16px;font-size:22px;font-weight:bold;
    border-radius:16px;margin-top:12px;
    animation: fadeIn 0.3s;
    background: ${correct ? '#d4edda' : '#f8d7da'};
    color: ${correct ? '#155724' : '#721c24'};
  `;
  feedback.textContent = correct ? '✅ 太棒了！答对了！' : '❌ 没关系，再想想！';
  area.appendChild(feedback);
}

function showResult() {
  const total = CURRICULUM[currentSubject].units.find(u => u.id === currentUnit).questions.length;
  const pct = Math.round(quizScore / total * 100);

  // 保存结果
  state.saveQuizResult(currentUnit, quizScore, total);
  const starsEarned = Math.ceil(quizScore / 2);
  if (starsEarned > 0) state.addStars(starsEarned);

  let emoji, message;
  if (pct === 100) {
    emoji = '🏆';
    message = '满分！你就是学习小天才！🎉';
    state.perfectScores++;
    state.save();
  } else if (pct >= 80) {
    emoji = '🌟';
    message = '太棒了！学得很扎实！继续保持！';
  } else if (pct >= 60) {
    emoji = '👍';
    message = '不错哦！再复习一下就更好了！';
  } else {
    emoji = '💪';
    message = '加油！多练习几次一定能掌握！';
  }

  if (pct >= 80) launchConfetti(60);

  showPage('result-page');
  $('#result-content').innerHTML = `
    <div class="result-container">
      <span class="result-emoji">${emoji}</span>
      <div class="result-score">${quizScore} / ${total}</div>
      <div class="result-message">${message}</div>
      <div class="result-details">
        <div class="result-stat">
          <div class="stat-value">${pct}%</div>
          <div class="stat-label">正确率</div>
        </div>
        <div class="result-stat">
          <div class="stat-value">+${starsEarned} ⭐</div>
          <div class="stat-label">获得星星</div>
        </div>
        <div class="result-stat">
          <div class="stat-value">${state.totalStars} ⭐</div>
          <div class="stat-label">总星星数</div>
        </div>
        <div class="result-stat">
          <div class="stat-value">${state.achievementsUnlocked.length}</div>
          <div class="stat-label">成就已解锁</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        <button class="btn btn-primary" onclick="startQuiz()">🔄 重新测验</button>
        <button class="btn btn-outline" onclick="navigateToSubject('${currentSubject}')">📚 返回单元</button>
        <button class="btn btn-outline" onclick="showAnswerReview()">📖 查看解析</button>
        <button class="btn btn-pink" onclick="goHome()">🏠 首页</button>
      </div>
    </div>
  `;
}

// ======== 彩蛋系统 ========
function showRandomEasterEgg() {
  const egg = EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)];
  state.easterEggsFound++;
  state.save();

  showModal(
    egg.emoji,
    egg.title,
    `${egg.text}<br><br><small style="color:var(--text-light);">已发现 ${state.easterEggsFound} 个彩蛋 🥚</small>`,
    '太有趣了！'
  );
}

function showMiniEasterEgg() {
  const egg = EASTER_EGGS[Math.floor(Math.random() * EASTER_EGGS.length)];
  showModal(
    egg.emoji,
    '🎉 答对彩蛋！',
    egg.text,
    '哇！知道了👌'
  );
}

function showJoke() {
  const joke = JOKES[Math.floor(Math.random() * JOKES.length)];
  showModal('😂', '轻松一下～', joke, '哈哈哈😂');
}

// ======== 签到系统 ========
function showSignInModal() {
  const today = new Date().toISOString().split('T')[0];
  const alreadySigned = state.signInDays.includes(today);
  const monthDays = new Date(today.slice(0,4), today.slice(5,7), 0).getDate();
  const weekDays = ['日', '一', '二', '三', '四', '五', '六'];

  let gridHTML = '';
  for (let d = 1; d <= monthDays; d++) {
    const dateStr = `${today.slice(0,7)}-${String(d).padStart(2, '0')}`;
    const checked = state.signInDays.includes(dateStr);
    const isToday = dateStr === today;
    gridHTML += `
      <div class="signin-day ${checked ? 'checked' : ''} ${isToday ? 'today' : ''}">
        <span>${d}</span>
        ${checked ? '✅' : (isToday ? '⭐' : '')}
      </div>
    `;
  }

  const rewardIdx = Math.min(state.consecutiveDays, 6);
  const reward = SIGNIN_REWARDS[rewardIdx] || '⭐ × 3';

  showModal(
    '📅',
    alreadySigned ? '今日已签到 ✅' : '每日签到',
    `
      <div style="margin-bottom:16px;">
        <p style="font-size:14px;color:var(--text-light);margin-bottom:8px;">
          ${alreadySigned
            ? '明天再来签到哦！'
            : `连续签到 <strong>${state.consecutiveDays + 1}</strong> 天可获得 <strong>${reward}</strong>`}
        </p>
        ${!alreadySigned ? `
          <button class="btn btn-pink btn-block" onclick="doSignIn()" style="margin-top:8px;">
            ✅ 签到领星星
          </button>
        ` : ''}
      </div>
      <div class="signin-grid">${gridHTML}</div>
      <p style="font-size:12px;color:var(--text-light);margin-top:12px;">
        🔥 连续签到 ${state.consecutiveDays} 天
      </p>
    `,
    '关闭'
  );
}

function doSignIn() {
  if (state.signIn()) {
    hideModal();
    launchConfetti(30);
    setTimeout(() => {
      showModal('🎉', '签到成功！', '获得 2 ⭐ 星星奖励！<br>继续加油哦！', '好开心！🌟');
      renderHome();
    }, 300);
  }
}

// ======== 成就系统 ========
function showAchievements() {
  const grid = ACHIEVEMENTS.map(ach => {
    const unlocked = state.achievementsUnlocked.includes(ach.id);
    return `
      <div class="achievement-card ${unlocked ? '' : 'locked'}">
        <span class="ach-icon">${unlocked ? ach.icon : '🔒'}</span>
        <div class="ach-name">${unlocked ? ach.name : '???'}</div>
        <div class="ach-desc">${unlocked ? ach.desc : '尚未解锁'}</div>
      </div>
    `;
  }).join('');

  showModal(
    '🏆',
    `成就徽章 (${state.achievementsUnlocked.length}/${ACHIEVEMENTS.length})`,
    `<div class="achievement-grid">${grid}</div>`,
    '关闭'
  );
}

function showAchievementModal(ach) {
  showModal('🎊', `🏆 解锁新成就！`, `
    <div style="font-size:48px;margin-bottom:12px;">${ach.icon}</div>
    <div style="font-size:20px;font-weight:bold;margin-bottom:4px;">${ach.name}</div>
    <div style="font-size:14px;color:var(--text-light);">${ach.desc}</div>
  `, '太棒了！🎉');
  launchConfetti(50);
}

// ======== Modal ========
function showModal(emoji, title, text, btnText) {
  const overlay = $('#modal-overlay');
  overlay.classList.add('show');
  overlay.innerHTML = `
    <div class="modal-content">
      <span class="modal-emoji">${emoji}</span>
      <div class="modal-title">${title}</div>
      <div class="modal-text">${text}</div>
      <button class="btn btn-primary btn-block" onclick="hideModal()">${btnText || '关闭'}</button>
    </div>
  `;
}

function hideModal() {
  $('#modal-overlay').classList.remove('show');
}

// ======== Confetti 效果 ========
function launchConfetti(count = 50) {
  const container = document.createElement('div');
  container.className = 'confetti-container';
  document.body.appendChild(container);

  const colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#A66CFF', '#FF9F43', '#FF85A2', '#45B7D1'];

  for (let i = 0; i < count; i++) {
    const piece = document.createElement('div');
    piece.className = 'confetti-piece';
    piece.style.left = `${Math.random() * 100}%`;
    piece.style.width = `${Math.random() * 8 + 4}px`;
    piece.style.height = `${Math.random() * 8 + 4}px`;
    piece.style.background = colors[Math.floor(Math.random() * colors.length)];
    piece.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    piece.style.animationDuration = `${Math.random() * 2 + 2}s`;
    piece.style.animationDelay = `${Math.random() * 0.5}s`;
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    container.appendChild(piece);
  }

  setTimeout(() => container.remove(), 4000);
}

// ======== 导航 ========
function goHome() {
  showPage('home-page');
  renderHome();
}

// ===================================================================
//  🎯 练习模式
// ===================================================================

function startPractice() {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  if (!unit || !unit.questions.length) return;

  isPracticeMode = true;
  wrongReviewMode = false;
  practiceState = {
    currentIndex: 0,
    history: unit.questions.map(() => null)
  };

  showPage('practice-page');
  renderPracticeQuestion();
}

function renderPracticeQuestion() {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  let questions = unit.questions;

  // 如果是错题复习模式，使用错题列表
  if (wrongReviewMode && wrongReviewQuestions.length > 0) {
    questions = wrongReviewQuestions;
  }

  const total = questions.length;
  const idx = practiceState.currentIndex;
  const q = questions[idx];
  const record = practiceState.history[idx];
  const labels = ['A', 'B', 'C', 'D'];

  // 进度
  const answeredCount = practiceState.history.filter(r => r !== null).length;
  const pct = (idx / total) * 100;
  $('#practice-progress-fill').style.width = `${pct}%`;

  const label = wrongReviewMode ? '错题复习' : '练习';
  $('#practice-counter').textContent = `${label} ${answeredCount} / ${total} 题`;

  // 是否已回答
  const isAnswered = record !== null;

  // 动作按钮提示/看知识点（已回答时隐藏提示）
  const actionsHTML = isAnswered ? '' : `
    <button class="practice-btn" onclick="showLessonReference()">📖 看知识点</button>
    <button class="practice-btn" onclick="showPracticeHint()">💡 提示</button>
  `;
  $('#practice-actions').innerHTML = actionsHTML;

  $('#practice-question-area').innerHTML = `
    <div class="question-card">
      <div class="question-text">${q.question}</div>
      <div class="options-grid">
        ${q.options.map((opt, i) => {
          let btnClass = 'option-btn';
          if (isAnswered) {
            if (i === q.answer) btnClass += ' correct';
            if (i === record?.selected && record?.selected !== q.answer) btnClass += ' wrong';
            if (i === record?.selected) btnClass += ' selected';
          }
          return `
            <button class="${btnClass}" onclick="practiceSelectOption(${i})" ${isAnswered ? 'disabled' : ''} data-index="${i}">
              <span class="option-label">${labels[i]}</span>
              <span>${opt}</span>
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;

  // 如果已答题，显示解析
  if (isAnswered) {
    const isCorrect = record.selected === q.answer;
    const area = $('#practice-question-area');
    const div = document.createElement('div');
    div.className = `explanation-box ${isCorrect ? 'correct' : 'wrong'}`;
    div.innerHTML = `
      <div class="explanation-header">${isCorrect ? '✅ 答对了！' : '❌ 答错了，看看怎么解'}</div>
      <div class="explanation-body">
        <p><strong>正确答案：</strong>${labels[q.answer]}. ${q.options[q.answer]}</p>
        ${q.explanation ? `<div class="explanation-detail">${q.explanation}</div>` : ''}
      </div>
    `;
    area.appendChild(div);
    if (isCorrect) launchConfetti(15);
  }

  // 导航按钮状态
  const prevBtn = $('#prev-practice-btn');
  const nextBtn = $('#next-practice-btn');
  if (prevBtn) prevBtn.disabled = idx === 0;
  if (nextBtn) {
    nextBtn.textContent = idx < total - 1 ? '下一题 ➡' : '完成练习 ✅';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function practiceSelectOption(selected) {
  if (isAnswering) return;
  const idx = practiceState.currentIndex;
  if (practiceState.history[idx] !== null) return; // 已答过

  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  let questions = unit.questions;
  if (wrongReviewMode && wrongReviewQuestions.length > 0) {
    questions = wrongReviewQuestions;
  }
  const q = questions[idx];
  const isCorrect = selected === q.answer;

  // 记录答题结果
  practiceState.history[idx] = { selected, correct: isCorrect };

  // 错题追踪
  if (!isCorrect) {
    state.addWrongAnswer(currentUnit, {
      questionIndex: wrongReviewMode && q._originalIndex !== undefined ? q._originalIndex : idx,
      question: q.question,
      options: q.options,
      answer: q.answer,
      selected: selected,
      explanation: q.explanation || '',
      hint: q.hint || ''
    });
  } else if (wrongReviewMode && q._originalIndex !== undefined) {
    // 错题复习中答对了，从错题本移除
    state.removeWrongAnswer(currentUnit, q._originalIndex);
  }

  renderPracticeQuestion();
}

function showPracticeHint() {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  let questions = unit.questions;
  if (wrongReviewMode && wrongReviewQuestions.length > 0) {
    questions = wrongReviewQuestions;
  }
  const q = questions[practiceState.currentIndex];

  if (q.hint) {
    showModal('💡', '小提示', `<div style="font-size:16px;line-height:1.8;">${q.hint}</div>`, '我知道了！');
  } else {
    showModal('💡', '小提示', '仔细读题，想想这节课学到的知识哦！', '好的！');
  }
}

function showLessonReference() {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  if (unit && unit.lessons[0]) {
    showModal('📖', unit.emoji + ' ' + unit.title, unit.lessons[0].content, '关闭');
  }
}

function prevPracticeQuestion() {
  if (practiceState.currentIndex > 0) {
    practiceState.currentIndex--;
    renderPracticeQuestion();
  }
}

function nextPracticeQuestion() {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  let questions = unit.questions;
  if (wrongReviewMode && wrongReviewQuestions.length > 0) {
    questions = wrongReviewQuestions;
  }
  const total = questions.length;

  if (practiceState.currentIndex < total - 1) {
    practiceState.currentIndex++;
    renderPracticeQuestion();
  } else {
    endPractice();
  }
}

function endPractice() {
  isPracticeMode = false;

  if (wrongReviewMode) {
    wrongReviewMode = false;
    wrongReviewQuestions = [];
    showWrongBook();
    return;
  }

  const answered = practiceState.history.filter(r => r !== null).length;
  const total = practiceState.history.length;
  showModal(
    '📝',
    '练习结束！',
    `<div style="font-size:48px;margin-bottom:12px;">${answered === total ? '🎉' : '💪'}</div>
     <p style="font-size:18px;">完成了 <strong>${answered}</strong> / ${total} 题</p>
     <p style="font-size:14px;color:var(--text-light);margin-top:8px;">
       ${answered === total ? '全部完成，真棒！可以去测验了！' : '继续加油哦！'}
     </p>`,
    '好的！'
  );

  // 回到科目页面
  navigateToSubject(currentSubject);
}

// ===================================================================
//  📖 测验模式增强
// ===================================================================

function showQuizExplanation(selected, correct) {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  const q = unit.questions[currentQuestionIndex];
  const labels = ['A', 'B', 'C', 'D'];

  const area = $('#question-area');
  const div = document.createElement('div');
  div.className = 'explanation-box wrong';
  div.innerHTML = `
    <div class="explanation-header">💡 看看为什么错了</div>
    <div class="explanation-body">
      <p><strong>正确答案：</strong>${labels[correct]}. ${q.options[correct]}</p>
      ${q.explanation ? `<div class="explanation-detail">${q.explanation}</div>` : ''}
    </div>
    <button class="btn btn-primary btn-block" onclick="continueQuizAfterWrong()" style="margin-top:12px;">
      继续 ➡
    </button>
  `;
  area.appendChild(div);
}

function continueQuizAfterWrong() {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  const total = unit.questions.length;

  if (currentQuestionIndex < total - 1) {
    currentQuestionIndex++;
    renderQuestion();
  } else {
    showResult();
  }
}

function showAnswerReview() {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  const labels = ['A', 'B', 'C', 'D'];

  if (quizAnswers.length === 0) {
    showModal('📖', '查看解析', '暂无答题记录', '关闭');
    return;
  }

  const itemsHTML = quizAnswers.map((ans, i) => {
    const q = unit.questions[ans.questionIndex];
    if (!q) return '';
    const isCorrect = ans.selected === q.answer;
    const statusIcon = isCorrect ? '✅' : '❌';
    const statusText = isCorrect ? '正确' : '错误';

    const optionsHTML = q.options.map((opt, j) => {
      let cls = 'review-option';
      if (j === q.answer) cls += ' correct';
      if (j === ans.selected && ans.selected !== q.answer) cls += ' wrong';
      return `<div class="${cls}">${labels[j]}. ${opt}</div>`;
    }).join('');

    return `
      <div class="review-item">
        <div class="review-header">
          <span class="review-number">第 ${i + 1} 题</span>
          <span class="review-status ${isCorrect ? 'correct' : 'wrong'}">${statusIcon} ${statusText}</span>
        </div>
        <div class="review-question">${q.question}</div>
        <div class="review-options">${optionsHTML}</div>
        ${!isCorrect && q.explanation ? `
          <div class="explanation-detail">${q.explanation}</div>
        ` : ''}
      </div>
    `;
  }).join('');

  showModal(
    '📖',
    '全部解析',
    `<div class="review-scroll-container">${itemsHTML}</div>`,
    '关闭'
  );
}

// ===================================================================
//  📕 错题本
// ===================================================================

function showWrongBook() {
  showPage('wrongbook-page');

  const allWrong = state.getAllWrongAnswers();
  const unitIds = Object.keys(allWrong);

  $('#wrongbook-header').innerHTML = `
    <button class="back-btn" onclick="goHome()">←</button>
    <h2>📕 错题本</h2>
    <span class="subtitle">${state.getTotalWrongCount()} 道题待复习</span>
  `;

  const content = $('#wrongbook-content');

  if (unitIds.length === 0) {
    content.innerHTML = `
      <div class="wrongbook-empty">
        <span class="empty-icon">🎉</span>
        <p>太棒了，没有错题！</p>
        <button class="btn btn-primary" onclick="goHome()">🏠 回首页</button>
      </div>
    `;
    return;
  }

  let html = '';
  unitIds.forEach(unitId => {
    // 查找对应的科目和单元信息
    for (const [subjKey, subj] of Object.entries(CURRICULUM)) {
      const unit = subj.units.find(u => u.id === unitId);
      if (unit) {
        const count = allWrong[unitId].length;
        html += `
          <div class="wrongbook-group-title">${unit.emoji} ${unit.title}</div>
          <div class="wrongbook-item" onclick="startWrongReview('${unitId}')">
            <span class="wb-icon">${unit.emoji}</span>
            <div class="wb-info">
              <h4>${subj.icon} ${subj.name} · ${unit.title}</h4>
              <p>${count} 道题需要复习</p>
            </div>
            <span class="wb-count">${count}</span>
          </div>
        `;
        break;
      }
    }
  });

  content.innerHTML = html;
}

function startWrongReview(unitId) {
  const wrongs = state.getWrongAnswers(unitId);
  if (wrongs.length === 0) {
    showModal('🎉', '没有错题', '你已经掌握了这个单元的所有题目！', '太好了！');
    return;
  }

  // 查找科目和单元
  for (const [subjKey, subj] of Object.entries(CURRICULUM)) {
    const unit = subj.units.find(u => u.id === unitId);
    if (unit) {
      currentSubject = subjKey;
      currentUnit = unitId;
      break;
    }
  }

  // 构建错题列表
  wrongReviewQuestions = wrongs.map(w => ({
    question: w.question,
    options: w.options,
    answer: w.answer,
    hint: w.hint || '',
    explanation: w.explanation || '',
    _originalIndex: w.questionIndex
  }));

  wrongReviewMode = true;
  isPracticeMode = true;

  practiceState = {
    currentIndex: 0,
    history: wrongReviewQuestions.map(() => null)
  };

  showPage('practice-page');
  renderPracticeQuestion();
}

// ======== 导航 ========
document.addEventListener('DOMContentLoaded', () => {
  // 导航按钮
  $$('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      updateNav(page);
      if (page === 'home') goHome();
    });
  });

  // 首页渲染
  renderHome();

  // 浮动彩蛋按钮 - 笑话
  const floatingBtn = document.createElement('button');
  floatingBtn.className = 'floating-egg';
  floatingBtn.innerHTML = '🎪';
  floatingBtn.title = '点我有个小惊喜！';
  floatingBtn.onclick = () => {
    if (Math.random() < 0.5) {
      showRandomEasterEgg();
    } else {
      showJoke();
    }
  };
  document.body.appendChild(floatingBtn);

  // 键盘事件
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') hideModal();
    if (e.key === 'Enter' && currentView === 'quiz-page') {
      // 可以用于提交（但需要选中答案）
    }
  });
});

// ======== 工具函数 ========
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
