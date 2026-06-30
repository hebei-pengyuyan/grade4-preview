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
      this.rewardedUnits = [];      // 已发过奖励的单元列表（满分通过才算）
      this.totalCorrectAnswers = 0; // 累计正确答题数
      this.lastVisitedUnit = null;  // { subject, unitId }
      this.dailyLearningSeconds = 0; // 今日学习秒数
      this.dailyLearningDate = null; // 学习日期
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
      wrongAnswers: this.wrongAnswers,
      rewardedUnits: this.rewardedUnits,
      totalCorrectAnswers: this.totalCorrectAnswers,
      lastVisitedUnit: this.lastVisitedUnit,
      dailyLearningSeconds: this.dailyLearningSeconds,
      dailyLearningDate: this.dailyLearningDate
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
    // 签到奖励梯度
    let baseStars = 2;
    let bonusStars = 0;
    let bonusMsg = '';
    if (this.consecutiveDays === 3) {
      bonusStars = 2;
      bonusMsg = '连续3天！额外奖励 +2⭐';
    } else if (this.consecutiveDays === 7) {
      bonusStars = 5;
      bonusMsg = '连续7天达成！额外奖励 +5⭐ + 彩蛋🥚';
    }
    const totalEarned = baseStars + bonusStars;
    if (totalEarned > 0) this.addStars(totalEarned);
    this.signInBonusMsg = bonusMsg;
    this.signInTotalEarned = totalEarned;
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

  // ======== 奖励系统 ========
  getRewardAmount() {
    // 已发过奖励的单元数 + 1 = 本次是第几个获奖单元
    const count = this.rewardedUnits.length + 1;
    return Math.min(count, 5);
  }

  markUnitRewarded(unitId) {
    if (!this.rewardedUnits.includes(unitId)) {
      this.rewardedUnits.push(unitId);
      this.save();
    }
  }

  isUnitRewarded(unitId) {
    return this.rewardedUnits.includes(unitId);
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
let currentShuffledIndices = []; // 当前题目的选项映射（打乱后）

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
      text: '🌟 安淇，欢迎来到你的学习乐园！<br>每天进步一点点，你就会发现<br>自己比想象中更厉害哦！🚀' },
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
        ${state.totalCorrectAnswers > 0 ? `· 累计答对 <strong style="color:var(--purple);">${state.totalCorrectAnswers}</strong> 题` : ''}
      </div>
    </div>

    ${renderContinueCard()}

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

    <div class="fun-zone" style="background:linear-gradient(135deg, #ffeaa7 0%, #fdcb6e 100%);" onclick="showJoke()">
      <h3>😂 轻松一刻</h3>
      <div class="fun-fact">学习累了？来听个笑话放松一下！</div>
    </div>
  `;
}

// ======== 继续学习卡片 ========
function renderContinueCard() {
  const lv = state.lastVisitedUnit;
  if (!lv || !lv.subject || !lv.unitId) return '';

  const subj = CURRICULUM[lv.subject];
  if (!subj) return '';
  const unit = subj.units.find(u => u.id === lv.unitId);
  if (!unit) return '';

  return `
    <div class="continue-card" onclick="continueLearning()">
      <span class="continue-icon">${unit.emoji}</span>
      <div class="continue-info">
        <h4>📌 继续上次的学习</h4>
        <p>${subj.icon} ${subj.name} · ${unit.title}</p>
      </div>
      <span class="continue-arrow">➡</span>
    </div>
  `;
}

function continueLearning() {
  const lv = state.lastVisitedUnit;
  if (lv && lv.subject && lv.unitId) {
    currentSubject = lv.subject;
    startUnit(lv.subject, lv.unitId);
  }
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
  // 记录最后访问的单元
  state.lastVisitedUnit = { subject, unitId };
  state.save();
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
  startLearningTimer();

  showPage('quiz-page');
  renderQuestion();
}

function renderQuestion() {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  const questions = unit.questions;
  const total = questions.length;
  const q = questions[currentQuestionIndex];

  // 先锁定，防止上一题的点击事件触发新题
  isAnswering = true;

  // 进度条
  const pct = ((currentQuestionIndex) / total * 100);
  $('#quiz-progress-fill').style.width = `${pct}%`;
  $('#quiz-counter').textContent = `${currentQuestionIndex + 1} / ${total}`;
  $('#quiz-score-display').textContent = `⭐ ${quizScore}`;

  // 难度标签
  const diff = getDifficulty(currentQuestionIndex, total);
  const diffLabel = `<span class="difficulty-badge ${diff.css}">${diff.emoji} ${diff.label}</span>`;

  // 语音按钮（英语科目）
  const speakBtn = currentSubject === 'english'
    ? `<button class="speak-btn" onclick="event.stopPropagation();speakText('${escapeHTML(q.question)}')" title="🔊 朗读题目">🔊</button>`
    : '';

  // 根据题目类型分发渲染
  const qType = q.type || 'choice';
  switch (qType) {
    case 'fill':
      renderFillQuestion(q, total, diffLabel, speakBtn);
      break;
    case 'match':
      renderMatchQuestion(q, total, diffLabel, speakBtn);
      break;
    case 'order':
      renderOrderQuestion(q, total, diffLabel, speakBtn);
      break;
    default:
      renderChoiceQuestion(q, total, diffLabel, speakBtn);
  }

  // 进度地图
  const progressHTML = questions.map((_, i) => {
    let cls = 'map-node';
    if (i < currentQuestionIndex) cls += ' completed';
    else if (i === currentQuestionIndex) cls += ' current';
    // 难度分段视觉标识
    const diffI = getDifficulty(i, total);
    cls += ` ${diffI.css}-tier`;
    let icon;
    if (i < currentQuestionIndex) {
      // 已答过的题：查 quizAnswers 判断对错
      const ans = quizAnswers.find(a => a.questionIndex === i);
      icon = ans && ans.correct ? '✅' : '❌';
    } else if (i === currentQuestionIndex) {
      icon = '📍';
    } else {
      icon = '○';
    }
    // 在分段边界插入分隔符
    let separator = '';
    if (i === 9 || i === 15) {
      separator = `<div class="map-separator"></div>`;
    }
    return `
      ${separator}
      <div class="${cls}" title="${diffI.label}">${icon}</div>
      ${i < questions.length - 1 ? `<div class="map-line ${i < currentQuestionIndex ? 'completed' : ''}"></div>` : ''}
    `;
  }).join('');
  $('#question-progress-map').innerHTML = progressHTML;
}

// ======== 难度分级 ========
function getDifficulty(index, total) {
  if (total === 20) {
    if (index < 10) return { label: '基础巩固', emoji: '🌱', css: 'basic' };
    if (index < 16) return { label: '应用提高', emoji: '📈', css: 'medium' };
    return { label: '拓展挑战', emoji: '🚀', css: 'hard' };
  }
  // 非 20 题的单元，按比例分
  const ratio = index / total;
  if (ratio < 0.5) return { label: '基础巩固', emoji: '🌱', css: 'basic' };
  if (ratio < 0.8) return { label: '应用提高', emoji: '📈', css: 'medium' };
  return { label: '拓展挑战', emoji: '🚀', css: 'hard' };
}

// ======== 选择题渲染 ========
function renderChoiceQuestion(q, total, diffLabel, speakBtn) {
  const questions = CURRICULUM[currentSubject].units.find(u => u.id === currentUnit).questions;
  const labels = ['A', 'B', 'C', 'D'];

  const indices = [0, 1, 2, 3];
  const shuffled = shuffleArray([...indices]);
  currentShuffledIndices = shuffled;
  const shuffledAnswer = shuffled.indexOf(q.answer);

  $('#question-area').innerHTML = `
    <div class="question-card">
      <div class="question-text">${q.question}${diffLabel}${speakBtn}</div>
      <div class="options-grid">
        ${shuffled.map((origIdx, i) => {
          const opt = q.options[origIdx];
          return `
            <button class="option-btn" onclick="selectOption(this, ${i}, ${shuffledAnswer})" data-index="${i}" data-ready="false">
              <span class="option-label">${labels[i]}</span>
              <span>${opt}</span>
              ${currentSubject === 'english' ? `<button class="speak-btn speak-btn-sm" onclick="event.stopPropagation();speakText('${escapeHTML(opt)}')" title="🔊 朗读">🔊</button>` : ''}
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;

  setTimeout(() => {
    isAnswering = false;
    $$('#question-area .option-btn').forEach(b => b.setAttribute('data-ready', 'true'));
  }, 300);
}

// ======== 填空题渲染 ========
function renderFillQuestion(q, total, diffLabel, speakBtn) {
  $('#question-area').innerHTML = `
    <div class="question-card">
      <div class="question-text">${q.question}${diffLabel}${speakBtn}</div>
      <div class="fill-input-wrapper">
        <input type="text" class="fill-input" id="fill-answer-input" placeholder="在这里输入你的答案..."
          onkeydown="if(event.key==='Enter')submitFillAnswer()" autocomplete="off">
        <button class="btn btn-primary fill-submit-btn" onclick="submitFillAnswer()">
          ✅ 提交答案
        </button>
      </div>
    </div>
  `;

  setTimeout(() => {
    isAnswering = false;
    // 自动聚焦输入框
    const input = document.getElementById('fill-answer-input');
    if (input) input.focus();
  }, 300);
}

// ======== 连线题渲染 ========
function renderMatchQuestion(q, total, diffLabel, speakBtn) {
  // 随机打乱右侧选项顺序
  const rightOrder = shuffleArray([...Array(q.rightItems.length).keys()]);
  window._matchRightOrder = rightOrder;
  window._matchAnswer = q.answer;

  const rows = q.leftItems.map((left, i) => `
    <div class="match-row" id="match-row-${i}">
      <span class="match-left">${i + 1}. ${left}</span>
      <span class="match-connector">➡</span>
      <select class="match-select" id="match-select-${i}">
        <option value="">-- 请选择 --</option>
        ${rightOrder.map(ri => `
          <option value="${ri}">${q.rightItems[ri]}</option>
        `).join('')}
      </select>
      <span class="match-result-icon" id="match-icon-${i}"></span>
    </div>
  `).join('');

  $('#question-area').innerHTML = `
    <div class="question-card">
      <div class="question-text">${q.question}${diffLabel}</div>
      <div class="match-table">${rows}</div>
      <button class="btn btn-primary match-submit-btn" onclick="submitMatchAnswer()" id="match-submit-btn">
        ✅ 提交答案
      </button>
    </div>
  `;

  setTimeout(() => { isAnswering = false; }, 300);
}

// ======== 排序题渲染 ========
function renderOrderQuestion(q, total, diffLabel, speakBtn) {
  window._orderItems = [...q.items];
  window._orderAnswer = q.answer;

  const renderOrderList = () => {
    const items = window._orderItems;
    const listEl = document.getElementById('order-list-inner');
    if (!listEl) return;
    listEl.innerHTML = items.map((item, i) => `
      <div class="order-item">
        <span class="order-number">${i + 1}</span>
        <span class="order-text">${item}</span>
        <div class="order-arrows">
          <button class="order-arrow" onclick="moveOrderItem(${i}, -1)" ${i === 0 ? 'disabled' : ''}>▲</button>
          <button class="order-arrow" onclick="moveOrderItem(${i}, 1)" ${i === items.length - 1 ? 'disabled' : ''}>▼</button>
        </div>
      </div>
    `).join('');
  };

  $('#question-area').innerHTML = `
    <div class="question-card">
      <div class="question-text">${q.question}${diffLabel}</div>
      <div class="order-list" id="order-list-inner"></div>
      <button class="btn btn-primary order-submit-btn" onclick="submitOrderAnswer()">
        ✅ 提交排序
      </button>
    </div>
  `;

  renderOrderList();
  setTimeout(() => { isAnswering = false; }, 300);
}

function moveOrderItem(index, direction) {
  if (isAnswering) return;
  const items = window._orderItems;
  const newIndex = index + direction;
  if (newIndex < 0 || newIndex >= items.length) return;
  [items[index], items[newIndex]] = [items[newIndex], items[index]];
  // 重新渲染
  const listEl = document.getElementById('order-list-inner');
  if (!listEl) return;
  items.forEach((item, i) => {
    const row = listEl.children[i];
    if (row) {
      row.querySelector('.order-number').textContent = i + 1;
      row.querySelector('.order-text').textContent = item;
    }
  });
  // 更新箭头状态
  Array.from(listEl.children).forEach((row, i) => {
    row.querySelectorAll('.order-arrow')[0].disabled = (i === 0);
    row.querySelectorAll('.order-arrow')[1].disabled = (i === items.length - 1);
  });
}

function selectOption(el, selected, correct) {
  if (isAnswering) return;
  // 按钮未就绪时不允许点击（防止上一题残留事件）
  if (el.getAttribute('data-ready') !== 'true') return;
  isAnswering = true;

  const allOptions = $$('.option-btn');
  allOptions.forEach(btn => btn.disabled = true);

  // 标记正确和错误
  allOptions.forEach((btn, i) => {
    if (i === correct) btn.classList.add('correct');
    if (i === selected && selected !== correct) btn.classList.add('wrong');
    if (i === selected && selected === correct) btn.classList.add('selected');
  });

  // 记录答题结果供回顾（使用原始索引）
  const origCorrect = currentShuffledIndices[correct];
  const origSelected = currentShuffledIndices[selected];
  quizAnswers.push({ questionIndex: currentQuestionIndex, selected: origSelected, correct: selected === correct, origCorrect });

  if (selected === correct) {
    quizScore++;
    answeredQuestions++;
    state.totalCorrectAnswers = (state.totalCorrectAnswers || 0) + 1;
    state.save();
    launchConfetti(30);
    showFeedback(true);
    // 彩蛋：答对时有概率触发趣味知识
    if (Math.random() < 0.3) {
      setTimeout(() => showMiniEasterEgg(), 800);
    }
  } else {
    answeredQuestions++;
    showFeedback(false);
    // 答错：追踪到错题本（使用原始索引）
    const subj = CURRICULUM[currentSubject];
    const unit = subj.units.find(u => u.id === currentUnit);
    const q = unit.questions[currentQuestionIndex];
    const originalSelected = currentShuffledIndices[selected];
    state.addWrongAnswer(currentUnit, {
      questionIndex: currentQuestionIndex,
      question: q.question,
      options: q.options,
      answer: q.answer,
      selected: originalSelected,
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

// ======== 填空题判定 ========
function submitFillAnswer() {
  if (isAnswering) return;
  isAnswering = true;

  const input = document.getElementById('fill-answer-input');
  if (!input) return;
  const userAnswer = input.value.trim();
  if (!userAnswer) {
    isAnswering = false;
    return;
  }

  const q = CURRICULUM[currentSubject].units.find(u => u.id === currentUnit).questions[currentQuestionIndex];
  // 支持多个可接受答案
  const acceptAnswers = Array.isArray(q.answer) ? q.answer : [q.answer];
  const isCorrect = acceptAnswers.some(a => normalizeAnswer(userAnswer) === normalizeAnswer(a));

  // 记录答题
  quizAnswers.push({
    questionIndex: currentQuestionIndex,
    type: 'fill',
    userAnswer,
    correctAnswer: acceptAnswers[0],
    correct: isCorrect
  });

  // 禁用输入
  input.disabled = true;
  document.querySelector('.fill-submit-btn').disabled = true;
  input.classList.add(isCorrect ? 'correct' : 'wrong');

  processQuestionResult(isCorrect, q);
}

// ======== 连线题判定 ========
function submitMatchAnswer() {
  if (isAnswering) return;
  isAnswering = true;

  const q = CURRICULUM[currentSubject].units.find(u => u.id === currentUnit).questions[currentQuestionIndex];
  const n = q.leftItems.length;
  const userMatches = [];
  let allCorrect = true;

  for (let i = 0; i < n; i++) {
    const select = document.getElementById(`match-select-${i}`);
    const selected = select ? parseInt(select.value) : -1;
    userMatches.push(isNaN(selected) ? -1 : selected);
    if (selected !== q.answer[i]) allCorrect = false;

    // 视觉反馈
    const row = document.getElementById(`match-row-${i}`);
    const icon = document.getElementById(`match-icon-${i}`);
    if (row && icon) {
      if (selected === q.answer[i]) {
        row.classList.add('matched-correct');
        icon.textContent = '✅';
      } else {
        row.classList.add('matched-wrong');
        icon.textContent = '❌';
      }
      select.disabled = true;
    }
  }

  document.getElementById('match-submit-btn').disabled = true;

  quizAnswers.push({
    questionIndex: currentQuestionIndex,
    type: 'match',
    userMatches,
    correctAnswer: q.answer,
    leftItems: q.leftItems,
    rightItems: q.rightItems,
    correct: allCorrect
  });

  processQuestionResult(allCorrect, q);
}

// ======== 排序题判定 ========
function submitOrderAnswer() {
  if (isAnswering) return;
  isAnswering = true;

  const q = CURRICULUM[currentSubject].units.find(u => u.id === currentUnit).questions[currentQuestionIndex];
  // 将当前排列映射回原索引
  const currentItems = window._orderItems;
  const originalItems = q.items;
  const userOrder = currentItems.map(item => originalItems.indexOf(item));
  const isCorrect = userOrder.every((idx, i) => idx === q.answer[i]);

  // 视觉反馈
  const listEl = document.getElementById('order-list-inner');
  if (listEl) {
    Array.from(listEl.children).forEach((row, i) => {
      row.classList.add(userOrder[i] === q.answer[i] ? 'correct-pos' : 'wrong-pos');
    });
  }
  document.querySelector('.order-submit-btn').disabled = true;

  quizAnswers.push({
    questionIndex: currentQuestionIndex,
    type: 'order',
    userOrder,
    correctAnswer: q.answer,
    items: q.items,
    correct: isCorrect
  });

  processQuestionResult(isCorrect, q);
}

// ======== 答案标准化（填空题用）========
function normalizeAnswer(str) {
  return str.replace(/\s+/g, '').replace(/[，。！？、；：""''《》（）()\[\]【】]/g, '').toLowerCase();
}

// ======== 统一结果处理 ========
function processQuestionResult(isCorrect, q) {
  answeredQuestions++;

  if (isCorrect) {
    quizScore++;
    state.totalCorrectAnswers = (state.totalCorrectAnswers || 0) + 1;
    state.save();
    launchConfetti(30);
    showFeedback(true);
    if (Math.random() < 0.3) {
      setTimeout(() => showMiniEasterEgg(), 800);
    }
  } else {
    showFeedback(false);
    // 错题追踪
    state.addWrongAnswer(currentUnit, {
      questionIndex: currentQuestionIndex,
      question: q.question,
      type: q.type || 'choice',
      options: q.options || null,
      answer: q.answer,
      leftItems: q.leftItems || null,
      rightItems: q.rightItems || null,
      items: q.items || null,
      explanation: q.explanation || '',
      hint: q.hint || ''
    });
  }

  if (!isCorrect) {
    showQuizExplanationNew(q);
    return;
  }

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

// ======== 新题型解析展示 ========
function showQuizExplanationNew(q) {
  const area = $('#question-area');
  const qType = q.type || 'choice';
  let correctInfo = '';

  if (qType === 'fill') {
    const ans = Array.isArray(q.answer) ? q.answer[0] : q.answer;
    correctInfo = `<p><strong>正确答案：</strong>${ans}</p>`;
  } else if (qType === 'match') {
    correctInfo = `<p><strong>正确连线：</strong></p>
      ${q.leftItems.map((left, i) => `<p>${left} ➡ ${q.rightItems[q.answer[i]]}</p>`).join('')}`;
  } else if (qType === 'order') {
    correctInfo = `<p><strong>正确顺序：</strong></p>
      <ol style="margin-left:20px;">${q.answer.map(i => `<li>${q.items[i]}</li>`).join('')}</ol>`;
  }

  const div = document.createElement('div');
  div.className = 'explanation-box wrong';
  div.innerHTML = `
    <div class="explanation-header">💡 看看为什么错了</div>
    <div class="explanation-body">
      ${correctInfo}
      ${q.explanation ? `<div class="explanation-detail">${q.explanation}</div>` : ''}
    </div>
    <button class="btn btn-primary btn-block" onclick="continueQuizAfterWrong()" style="margin-top:12px;">
      继续 ➡
    </button>
  `;
  area.appendChild(div);
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

  // 判断是否是首次满分
  const isPerfect = pct === 100;
  const alreadyRewarded = state.isUnitRewarded(currentUnit);
  const shouldReward = isPerfect && !alreadyRewarded;
  let rewardAmount = 0;

  // 如果是首次满分，先标记发奖
  if (shouldReward) {
    rewardAmount = state.getRewardAmount();
    state.markUnitRewarded(currentUnit);
    state.perfectScores++;
    state.save();
  } else if (isPerfect) {
    state.perfectScores++;
    state.save();
  }

  let emoji, message;
  if (isPerfect) {
    emoji = '🏆';
    message = shouldReward
      ? '满分通关！🎉 奖励马上揭晓…'
      : '满分！你就是学习小天才！🎉（该单元奖励已领取）';
  } else if (pct >= 80) {
    emoji = '🌟';
    message = '太棒了！学得很扎实！继续加油冲击满分拿奖励哦！';
  } else if (pct >= 60) {
    emoji = '👍';
    message = '不错哦！再复习一下冲击满分就能拿奖励！';
  } else {
    emoji = '💪';
    message = '加油！多练习几次，拿到满分就能领奖啦！';
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
          <div class="stat-value">${state.rewardedUnits.length}</div>
          <div class="stat-label">已获奖单元</div>
        </div>
      </div>
      <div style="display:flex;gap:12px;flex-wrap:wrap;justify-content:center;">
        ${!isPerfect ? `
          <button class="btn btn-gold btn-lg" onclick="startQuiz()" style="font-size:18px;padding:14px 32px;">
            🔄 重新挑战（冲击满分拿💰）
          </button>
        ` : `
          <button class="btn btn-primary" onclick="startQuiz()">🔄 重新测验</button>
        `}
        ${pct < 80 ? `
          <button class="btn btn-review-important btn-lg" onclick="showAnswerReview()" style="font-size:18px;padding:14px 32px;">
            📖 查看解析（重点！有 ${total - quizScore} 题需要复习）
          </button>
        ` : `
          <button class="btn btn-outline" onclick="showAnswerReview()">📖 查看解析</button>
        `}
        <button class="btn btn-outline" onclick="navigateToSubject('${currentSubject}')">📚 返回单元</button>
        ${pct < 80 ? `
          <button class="btn btn-pink" onclick="showWrongBook()">📕 复习错题（${state.getTotalWrongCount()} 题）</button>
        ` : ''}
        <button class="btn btn-outline" onclick="goHome()">🏠 首页</button>
      </div>
    </div>
  `;

  // ======== 延迟弹窗调度：避开成就弹窗 ========
  // 成就弹窗在 saveQuizResult 时已经排期（500ms），
  // 奖励弹窗要在成就之后（1000ms）才显示，避免被覆盖
  if (shouldReward) {
    // 用更长的延迟确保不被成就弹窗覆盖
    setTimeout(() => {
      // 关闭可能正在显示的成就弹窗
      $('#modal-overlay').classList.remove('show');
      // 等一小段再显示奖励
      setTimeout(() => {
        showRewardModal(rewardAmount);
        playRewardSound();
        launchConfetti(100);
        setTimeout(() => launchConfetti(80), 500);
      }, 100);
    }, 1000);
  }

  // ======== 单元完成后弹趣味小知识 ========
  setTimeout(() => {
    // 只在不弹奖励时才弹小知识（避免弹窗打架）
    if (!shouldReward) {
      const idx = pickRandomAvoidRecent(EASTER_EGGS, recentEggs, MAX_RECENT_EGGS);
      const egg = EASTER_EGGS[idx];
      showModal(
        egg.emoji,
        '🎉 单元完成！' + egg.title,
        egg.text + '<br><br><small style="color:var(--text-light);">学完一个单元啦，真棒！继续加油～</small>',
        '知道啦！👌'
      );
    }
  }, shouldReward ? 2500 : 800);
}

// ======== 奖励独立弹窗 ========
function showRewardModal(amount) {
  const overlay = $('#modal-overlay');
  overlay.onclick = null; // 防止与 showModal 的 onclick 冲突
  overlay.classList.add('show');
  overlay.innerHTML = `
    <div class="reward-modal-content">
      <div class="reward-modal-sparkle">✨💰✨</div>
      <div class="reward-coins-big">
        ${Array.from({length: Math.min(amount, 5)}, (_, i) => `
          <span class="coin-big coin-${i+1}" style="animation-delay:${i*0.25}s">🪙</span>
        `).join('')}
      </div>
      <div class="reward-amount-big">
        <span class="reward-yuan">¥</span><span class="reward-num">${amount}</span>
      </div>
      <div class="reward-title-big">🎊 恭喜！满分通关奖励！</div>
      <div class="reward-subtitle">
        这是你第 <strong>${state.rewardedUnits.length}</strong> 个满分通过的单元
      </div>
      <div class="reward-screenshot-tip">
        <span style="font-size:28px;">📸</span><br>
        <span style="font-size:20px;font-weight:900;color:#ff4444;background:#fff3cd;padding:8px 20px;border-radius:12px;display:inline-block;margin-top:8px;">
          凭此截图找爸爸领钱！
        </span>
      </div>
      <button class="btn btn-gold btn-lg" onclick="hideRewardModal()" style="margin-top:20px;font-size:20px;padding:16px 40px;">
        😄 好的！我去找爸爸～
      </button>
    </div>
  `;
}

function hideRewardModal() {
  $('#modal-overlay').classList.remove('show');
  // 回到首页
  goHome();
}

// ======== 奖励音效 ========
function playRewardSound() {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    // 欢快的上升音阶 + 金币声
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + i * 0.15);
      gain.gain.setValueAtTime(0.3, audioCtx.currentTime + i * 0.15);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + i * 0.15 + 0.3);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + i * 0.15);
      osc.stop(audioCtx.currentTime + i * 0.15 + 0.3);
    });
    // 模拟金币叮当声（高频短音）
    [1200, 1400, 1600, 1800].forEach((freq, i) => {
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, audioCtx.currentTime + 0.6 + i * 0.08);
      gain.gain.setValueAtTime(0.2, audioCtx.currentTime + 0.6 + i * 0.08);
      gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.6 + i * 0.08 + 0.15);
      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(audioCtx.currentTime + 0.6 + i * 0.08);
      osc.stop(audioCtx.currentTime + 0.6 + i * 0.08 + 0.15);
    });
  } catch (e) {
    // 静默处理不支持的情况
  }
}

// ======== 彩蛋系统（带去重） ========
let recentEggs = [];   // 记录最近展示过的彩蛋索引，避免重复
let recentJokes = [];  // 记录最近展示过的笑话索引，避免重复
const MAX_RECENT_EGGS = 8;   // 彩蛋去重窗口（8/47 ≈ 避免17%的内容在最近出现）
const MAX_RECENT_JOKES = 5;  // 笑话去重窗口（5/23 ≈ 避免22%的内容在最近出现）

function pickRandomAvoidRecent(arr, recentArr, maxRecent) {
  // 从数组中随机选一个，避开最近出现过的
  const available = arr.map((_, i) => i).filter(i => !recentArr.includes(i));
  if (available.length === 0) {
    // 全部都是最近出现过的，清空记录重新开始
    recentArr.length = 0;
    return Math.floor(Math.random() * arr.length);
  }
  const idx = available[Math.floor(Math.random() * available.length)];
  recentArr.push(idx);
  if (recentArr.length > maxRecent) recentArr.shift();
  return idx;
}

function showRandomEasterEgg() {
  const idx = pickRandomAvoidRecent(EASTER_EGGS, recentEggs, MAX_RECENT_EGGS);
  const egg = EASTER_EGGS[idx];
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
  const idx = pickRandomAvoidRecent(EASTER_EGGS, recentEggs, MAX_RECENT_EGGS);
  const egg = EASTER_EGGS[idx];
  showModal(
    egg.emoji,
    '🎉 答对彩蛋！',
    egg.text,
    '哇！知道了👌'
  );
}

function showJoke() {
  const idx = pickRandomAvoidRecent(JOKES, recentJokes, MAX_RECENT_JOKES);
  const joke = JOKES[idx];
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
  const reward = SIGNIN_REWARDS[rewardIdx] || '🏆 超级大礼包';

  showModal(
    '📅',
    alreadySigned ? '今日已签到 ✅' : '每日签到',
    `
      <div style="margin-bottom:16px;">
        <p style="font-size:14px;color:var(--text-light);margin-bottom:8px;">
          ${alreadySigned
            ? '明天再来签到哦！'
            : `连续签到 <strong>${state.consecutiveDays + 1}</strong> 天<br>
              奖励：<strong style="color:#ff6b35;">基础 2⭐</strong>` + (state.consecutiveDays + 1 >= 7 ? '<br>🔥 连续7天额外 +5⭐ + 彩蛋！' : state.consecutiveDays + 1 >= 3 ? '<br>🎉 连续3天额外 +2⭐！' : '')}
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
        ${state.consecutiveDays >= 7 ? ' 🏆' : state.consecutiveDays >= 3 ? ' 🎉' : ''}
      </p>
    `,
    '关闭'
  );
}

function doSignIn() {
  if (state.signIn()) {
    hideModal();
    launchConfetti(30);
    const bonusMsg = state.signInBonusMsg || '';
    const totalEarned = state.signInTotalEarned || 2;
    setTimeout(() => {
      showModal('🎉', '签到成功！',
        `获得 <strong style="color:#ff6b35;font-size:28px;">${totalEarned}</strong> ⭐ 星星奖励！<br>
        ${bonusMsg ? `<span style="color:#ff9800;">${bonusMsg}</span><br>` : ''}
        继续加油哦！`,
        '好开心！🌟');
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
    <div class="modal-content" onclick="event.stopPropagation()">
      <span class="modal-emoji">${emoji}</span>
      <div class="modal-title">${title}</div>
      <div class="modal-text">${text}</div>
      <button class="btn btn-primary btn-block" onclick="hideModal()">${btnText || '关闭'}</button>
    </div>
  `;
  // 点击遮罩层关闭
  overlay.onclick = hideModal;
}

function hideModal() {
  const overlay = $('#modal-overlay');
  overlay.classList.remove('show');
  overlay.onclick = null;
  // 清除休息提醒的倒计时
  if (overlay._restInterval) {
    clearInterval(overlay._restInterval);
    overlay._restInterval = null;
  }
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
  updateNav('home');
  renderHome();
}

// ===================================================================
//  🎯 练习模式
// ===================================================================

function startPractice() {
  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  if (!unit || !unit.questions.length) return;

  startLearningTimer();
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
      ${renderPracticeAnswerArea(q, isAnswered, record)}
    </div>
  `;

  // 如果已答题，显示解析
  if (isAnswered) {
    const area = $('#practice-question-area');
    const div = document.createElement('div');
    const isCorrect = record.correct;
    div.className = `explanation-box ${isCorrect ? 'correct' : 'wrong'}`;
    const qType = q.type || 'choice';
    let answerInfo = '';
    if (qType === 'choice') {
      answerInfo = `<p><strong>正确答案：</strong>${labels[q.answer]}. ${q.options[q.answer]}</p>`;
    } else if (qType === 'fill') {
      const ans = Array.isArray(q.answer) ? q.answer[0] : q.answer;
      answerInfo = `<p><strong>正确答案：</strong>${ans}</p>`;
    } else if (qType === 'match') {
      answerInfo = q.leftItems.map((left, j) => `<p>${left} ➡ ${q.rightItems[q.answer[j]]}</p>`).join('');
      answerInfo = `<p><strong>正确连线：</strong></p>${answerInfo}`;
    } else if (qType === 'order') {
      answerInfo = `<p><strong>正确顺序：</strong>${q.answer.map(idx => q.items[idx]).join(' → ')}</p>`;
    }
    div.innerHTML = `
      <div class="explanation-header">${isCorrect ? '✅ 答对了！' : '❌ 答错了，看看怎么解'}</div>
      <div class="explanation-body">
        ${answerInfo}
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

// ======== 练习模式题型分发渲染 ========
function renderPracticeAnswerArea(q, isAnswered, record) {
  const qType = q.type || 'choice';
  const labels = ['A', 'B', 'C', 'D'];

  switch (qType) {
    case 'fill':
      if (isAnswered) {
        const isCorrect = record.correct;
        return `
          <div class="fill-input-wrapper">
            <input type="text" class="fill-input ${isCorrect ? 'correct' : 'wrong'}" value="${escapeHTML(record.userAnswer || '')}" disabled>
            <p style="margin-top:8px;text-align:center;font-weight:600;color:${isCorrect ? '#155724' : '#721c24'};">
              ${isCorrect ? '✅ 正确！' : '❌ 错误'}
            </p>
          </div>`;
      }
      return `
        <div class="fill-input-wrapper">
          <input type="text" class="fill-input" id="practice-fill-input" placeholder="在这里输入你的答案..." autocomplete="off">
          <button class="btn btn-primary fill-submit-btn" onclick="practiceSubmitFill()">✅ 提交答案</button>
        </div>`;

    case 'match':
      if (isAnswered) {
        return q.leftItems.map((left, j) => {
          const userMatch = record.userMatches ? record.userMatches[j] : -1;
          const isMatchCorrect = userMatch === q.answer[j];
          return `<div class="review-option ${isMatchCorrect ? 'correct' : 'wrong'}">
            ${left} ➡ ${userMatch >= 0 ? q.rightItems[userMatch] : '未选择'}
            ${!isMatchCorrect ? ` (正确：${q.rightItems[q.answer[j]]})` : ''}
          </div>`;
        }).join('');
      }
      return `
        <p style="text-align:center;padding:40px;color:var(--text-light);">📋 连线题请在<strong>测验模式</strong>中练习</p>`;

    case 'order':
      if (isAnswered) {
        const userOrder = record.userOrder || [];
        return `
          <div>
            <p><strong>你的排序：</strong>${userOrder.map(idx => q.items[idx]).join(' → ')}</p>
            <p style="margin-top:4px;"><strong>正确排序：</strong>${q.answer.map(idx => q.items[idx]).join(' → ')}</p>
          </div>`;
      }
      return `
        <p style="text-align:center;padding:40px;color:var(--text-light);">📋 排序题请在<strong>测验模式</strong>中练习</p>`;

    default:
      // 选择题
      return `
        <div class="options-grid">
          ${(q.options || []).map((opt, i) => {
            let btnClass = 'option-btn';
            if (isAnswered) {
              if (i === q.answer) btnClass += ' correct';
              if (i === record?.selected && record?.selected !== q.answer) btnClass += ' wrong';
              if (i === record?.selected && record?.selected === q.answer) btnClass += ' selected';
            }
            return `
              <button class="${btnClass}" onclick="practiceSelectOption(${i})" ${isAnswered ? 'disabled' : ''} data-index="${i}">
                <span class="option-label">${labels[i]}</span>
                <span>${opt}</span>
              </button>
            `;
          }).join('')}
        </div>`;
  }
}

// ======== 练习模式填空题提交 ========
function practiceSubmitFill() {
  const input = document.getElementById('practice-fill-input');
  if (!input || !input.value.trim()) return;
  const idx = practiceState.currentIndex;
  if (practiceState.history[idx] !== null) return;

  const subj = CURRICULUM[currentSubject];
  const unit = subj.units.find(u => u.id === currentUnit);
  let questions = unit.questions;
  if (wrongReviewMode && wrongReviewQuestions.length > 0) {
    questions = wrongReviewQuestions;
  }
  const q = questions[idx];
  const userAnswer = input.value.trim();
  const acceptAnswers = Array.isArray(q.answer) ? q.answer : [q.answer];
  const isCorrect = acceptAnswers.some(a => normalizeAnswer(userAnswer) === normalizeAnswer(a));

  practiceState.history[idx] = { selected: 0, correct: isCorrect, userAnswer, type: 'fill' };

  if (isCorrect) {
    state.totalCorrectAnswers = (state.totalCorrectAnswers || 0) + 1;
    state.save();
  }
  // 错题追踪
  if (!isCorrect) {
    state.addWrongAnswer(currentUnit, {
      questionIndex: wrongReviewMode && q._originalIndex !== undefined ? q._originalIndex : idx,
      question: q.question,
      type: 'fill',
      options: null,
      answer: q.answer,
      explanation: q.explanation || '',
      hint: q.hint || ''
    });
  }

  renderPracticeQuestion();
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

  // 答对追踪
  if (isCorrect && !practiceState.history[idx]?.counted) {
    state.totalCorrectAnswers = (state.totalCorrectAnswers || 0) + 1;
    practiceState.history[idx].counted = true;
    state.save();
  }

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
  // 映射回原始索引
  const origCorrect = currentShuffledIndices[correct];
  const origSelected = currentShuffledIndices[selected];

  const area = $('#question-area');
  const div = document.createElement('div');
  div.className = 'explanation-box wrong';
  div.innerHTML = `
    <div class="explanation-header">💡 看看为什么错了</div>
    <div class="explanation-body">
      <p><strong>你的答案：</strong>${labels[selected]}. ${q.options[origSelected]}</p>
      <p><strong>正确答案：</strong>${labels[correct]}. ${q.options[origCorrect]}</p>
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
    const isCorrect = ans.correct;

    let answerDisplay = '';
    const qType = ans.type || 'choice';

    if (qType === 'fill') {
      answerDisplay = `
        <div class="review-fill-answer ${isCorrect ? 'correct' : 'wrong'}">
          <p>你的答案：<strong>${escapeHTML(ans.userAnswer || '')}</strong> ${isCorrect ? '✅' : '❌'}</p>
          ${!isCorrect ? `<p>正确答案：<strong>${escapeHTML(ans.correctAnswer)}</strong></p>` : ''}
        </div>`;
    } else if (qType === 'match') {
      answerDisplay = ans.leftItems.map((left, j) => {
        const userMatch = ans.userMatches[j];
        const correctMatch = ans.correctAnswer[j];
        const isMatchCorrect = userMatch === correctMatch;
        return `
          <div class="review-option ${isMatchCorrect ? 'correct' : 'wrong'}">
            ${left} ➡ ${userMatch >= 0 ? ans.rightItems[userMatch] : '未选择'}
            ${!isMatchCorrect ? ` (正确：${ans.rightItems[correctMatch]})` : ''}
          </div>`;
      }).join('');
    } else if (qType === 'order') {
      answerDisplay = `
        <div style="margin:8px 0;">
          <p><strong>你的排序：</strong></p>
          <ol style="margin-left:20px;">${ans.userOrder.map(idx => `<li>${escapeHTML(ans.items[idx])}</li>`).join('')}</ol>
          ${!isCorrect ? `
            <p style="margin-top:8px;"><strong>正确排序：</strong></p>
            <ol style="margin-left:20px;">${ans.correctAnswer.map(idx => `<li>${escapeHTML(ans.items[idx])}</li>`).join('')}</ol>
          ` : ''}
        </div>`;
    } else {
      // 选择题
      answerDisplay = q.options.map((opt, j) => {
        let cls = 'review-option';
        if (j === q.answer) cls += ' correct';
        if (j === ans.selected && ans.selected !== q.answer) cls += ' wrong';
        return `<div class="${cls}">${labels[j]}. ${opt}</div>`;
      }).join('');
    }

    return `
      <div class="review-item">
        <div class="review-header">
          <span class="review-number">第 ${i + 1} 题</span>
          <span class="review-status ${isCorrect ? 'correct' : 'wrong'}">${isCorrect ? '✅' : '❌'} ${isCorrect ? '正确' : '错误'}</span>
        </div>
        <div class="review-question">${q.question}</div>
        <div class="review-options">${answerDisplay}</div>
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
    type: w.type || 'choice',
    options: w.options,
    answer: w.answer,
    leftItems: w.leftItems || null,
    rightItems: w.rightItems || null,
    items: w.items || null,
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

// ======== 语音朗读（Web Speech API）========
function speakText(text) {
  if (!('speechSynthesis' in window)) {
    showModal('🔇', '语音不支持', '你的浏览器不支持语音朗读功能，可以试试用 Chrome 浏览器打开哦～', '知道了');
    return;
  }
  // 取消正在播放的语音
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  // 根据科目选择语音
  if (currentSubject === 'english') {
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // 英语稍慢一点
  } else {
    utterance.lang = 'zh-CN';
    utterance.rate = 0.9;
  }
  utterance.pitch = 1.1; // 稍高音调，更适合儿童

  // 标记所有朗读按钮
  $$('.speak-btn').forEach(b => b.classList.add('speaking'));
  utterance.onend = () => {
    $$('.speak-btn').forEach(b => b.classList.remove('speaking'));
  };
  utterance.onerror = () => {
    $$('.speak-btn').forEach(b => b.classList.remove('speaking'));
  };

  window.speechSynthesis.speak(utterance);
}

// ======== HTML 转义（防 XSS）========
function escapeHTML(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// ======== 学习报告 ========
function renderReport() {
  showPage('report-page');

  const totalUnits = { math: 9, chinese: 6, english: 6 };
  const done = { math: 0, chinese: 0, english: 0 };
  ['m1','m2','m3','m4','m5','m6','m7','m8','m9'].forEach(u => { if (state.completedUnits.includes(u)) done.math++; });
  ['c1','c2','c3','c4','c5','c6'].forEach(u => { if (state.completedUnits.includes(u)) done.chinese++; });
  ['e1','e2','e3','e4','e5','e6'].forEach(u => { if (state.completedUnits.includes(u)) done.english++; });

  const mathPct = Math.round(done.math / 9 * 100);
  const chinesePct = Math.round(done.chinese / 6 * 100);
  const englishPct = Math.round(done.english / 6 * 100);

  // 找出薄弱单元（错题最多）
  const weakUnits = Object.entries(state.wrongAnswers)
    .filter(([, arr]) => arr.length >= 3)
    .sort(([, a], [, b]) => b.length - a.length)
    .slice(0, 3);

  // 计算平均正确率
  let totalBestScores = 0, unitsWithProgress = 0;
  Object.values(state.unitProgress).forEach(p => {
    if (p.bestScore > 0) { totalBestScores += p.bestScore; unitsWithProgress++; }
  });
  const avgAccuracy = unitsWithProgress > 0 ? Math.round(totalBestScores / unitsWithProgress) : 0;

  const totalWrongCount = state.getTotalWrongCount();
  const signedDays = state.signInDays.length;
  const today = new Date().toISOString().split('T')[0];
  const todaySigned = state.signInDays.includes(today);

  const content = $('#report-content');
  content.innerHTML = `
    <div class="report-section">
      <h3>📈 学习概览</h3>
      <div class="report-stats">
        <div class="report-stat-item">
          <div class="rs-value">${state.totalStars}</div>
          <div class="rs-label">⭐ 总星星</div>
        </div>
        <div class="report-stat-item">
          <div class="rs-value">${state.consecutiveDays}</div>
          <div class="rs-label">🔥 连续学习天数</div>
        </div>
        <div class="report-stat-item">
          <div class="rs-value">${avgAccuracy}%</div>
          <div class="rs-label">📊 平均正确率</div>
        </div>
        <div class="report-stat-item">
          <div class="rs-value">${state.totalCorrectAnswers || 0}</div>
          <div class="rs-label">✅ 累计答对</div>
        </div>
        <div class="report-stat-item">
          <div class="rs-value">${state.rewardedUnits.length}</div>
          <div class="rs-label">💰 获奖单元</div>
        </div>
        <div class="report-stat-item">
          <div class="rs-value">${signedDays}</div>
          <div class="rs-label">📅 累计签到</div>
        </div>
      </div>
    </div>

    <div class="report-section">
      <h3>📚 各科进度</h3>
      <div class="report-subject-bar">
        <div class="rsb-header"><span>📐 数学</span><span>${done.math}/9 (${mathPct}%)</span></div>
        <div class="rsb-track"><div class="rsb-fill math" style="width:${mathPct}%"></div></div>
      </div>
      <div class="report-subject-bar">
        <div class="rsb-header"><span>📖 语文</span><span>${done.chinese}/6 (${chinesePct}%)</span></div>
        <div class="rsb-track"><div class="rsb-fill chinese" style="width:${chinesePct}%"></div></div>
      </div>
      <div class="report-subject-bar">
        <div class="rsb-header"><span>🇦🇺 英语</span><span>${done.english}/6 (${englishPct}%)</span></div>
        <div class="rsb-track"><div class="rsb-fill english" style="width:${englishPct}%"></div></div>
      </div>
    </div>

    <div class="report-section">
      <h3>🏅 成就进度</h3>
      <p style="text-align:center;font-size:36px;margin-bottom:8px;">
        ${state.achievementsUnlocked.length} / ${ACHIEVEMENTS.length}
      </p>
      <p style="text-align:center;color:var(--text-light);font-size:14px;">已解锁成就</p>
      <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-top:8px;">
        ${ACHIEVEMENTS.map(ach => {
          const unlocked = state.achievementsUnlocked.includes(ach.id);
          return `<span style="font-size:${unlocked ? '32px' : '20px'};opacity:${unlocked ? '1' : '0.3'};">${unlocked ? ach.icon : '🔒'}</span>`;
        }).join('')}
      </div>
      <button class="btn btn-outline btn-block" onclick="showAchievements()" style="margin-top:12px;">
        🏆 查看全部成就
      </button>
    </div>

    ${totalWrongCount > 0 ? `
      <div class="report-section">
        <h3>📕 错题本概览</h3>
        <p style="text-align:center;font-size:48px;color:var(--primary);font-weight:900;">${totalWrongCount}</p>
        <p style="text-align:center;color:var(--text-light);">道错题等待复习</p>
        <button class="btn btn-pink btn-block" onclick="showWrongBook()" style="margin-top:12px;">
          📕 去复习错题
        </button>
      </div>
    ` : `
      <div class="report-section">
        <h3>🎉 错题本清空啦！</h3>
        <p style="text-align:center;font-size:48px;">🎉</p>
        <p style="text-align:center;color:var(--text-light);">没有错题，太厉害了！</p>
      </div>
    `}

    ${weakUnits.length > 0 ? `
      <div class="report-section">
        <h3>🎯 重点关注单元</h3>
        ${weakUnits.map(([unitId, wrongs]) => {
          let unitName = unitId, subjIcon = '';
          for (const [sk, sv] of Object.entries(CURRICULUM)) {
            const u = sv.units.find(u => u.id === unitId);
            if (u) { unitName = u.title; subjIcon = sv.icon; break; }
          }
          return `
            <div class="report-weak" onclick="startWrongReview('${unitId}')" style="cursor:pointer;">
              <span class="weak-icon">${subjIcon}</span>
              <span>${unitName}：<strong>${wrongs.length} 道错题</strong>，点击复习</span>
            </div>
          `;
        }).join('')}
      </div>
    ` : ''}

    <div class="report-section">
      <h3>💾 数据管理</h3>
      <div class="report-export-btns">
        <button class="btn btn-primary" onclick="exportData()">📥 导出学习记录</button>
        <button class="btn btn-outline" onclick="document.getElementById('import-file-input').click()">📤 导入学习记录</button>
      </div>
      <input type="file" id="import-file-input" style="display:none;" accept=".json" onchange="importData(event)">
      <p style="font-size:12px;color:var(--text-light);text-align:center;margin-top:12px;">
        💡 建议定期导出备份，换设备或清缓存后可导入恢复
      </p>
      <button class="btn btn-outline btn-block" onclick="if(confirm('确定要清除所有学习数据吗？此操作不可恢复！（建议先导出备份）')) resetAllData();" style="margin-top:8px;color:var(--primary);border-color:var(--primary);">
        🗑️ 重置所有数据
      </button>
    </div>

    ${todaySigned ? '' : `
      <div class="report-section" style="background:linear-gradient(135deg,#fff3cd,#ffeaa7);cursor:pointer;" onclick="showSignInModal()">
        <h3>📅 今天还没签到哦！</h3>
        <p style="text-align:center;">点击签到领取星星奖励 ⭐</p>
      </div>
    `}
  `;
}

// ======== 数据导出 ========
function exportData() {
  const data = {
    app: 'grade4-preview',
    version: 1,
    exportDate: new Date().toISOString(),
    state: {
      totalStars: state.totalStars,
      completedUnits: state.completedUnits,
      unitProgress: state.unitProgress,
      perfectScores: state.perfectScores,
      signInDays: state.signInDays,
      lastSignIn: state.lastSignIn,
      consecutiveDays: state.consecutiveDays,
      achievementsUnlocked: state.achievementsUnlocked,
      easterEggsFound: state.easterEggsFound,
      wrongAnswers: state.wrongAnswers,
      rewardedUnits: state.rewardedUnits,
      totalCorrectAnswers: state.totalCorrectAnswers,
      lastVisitedUnit: state.lastVisitedUnit,
      dailyLearningSeconds: state.dailyLearningSeconds,
      dailyLearningDate: state.dailyLearningDate
    }
  };

  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `grade4-preview-backup-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showModal('✅', '导出成功！', '学习记录已保存为 JSON 文件<br>请妥善保管，换设备时可导入恢复', '太好了！');
}

// ======== 数据导入 ========
function importData(event) {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.app || data.app !== 'grade4-preview') {
        throw new Error('不是有效的学习记录文件');
      }
      if (!data.state) {
        throw new Error('文件格式不正确');
      }

      showModal(
        '⚠️',
        '确认导入',
        `<p style="font-size:15px;">将用导入的数据<strong style="color:var(--primary);">覆盖</strong>当前学习记录</p>
         <p style="font-size:13px;color:var(--text-light);margin-top:8px;">
           导出日期：${data.exportDate ? new Date(data.exportDate).toLocaleDateString('zh-CN') : '未知'}<br>
           ⭐ ${data.state.totalStars || 0} 颗 · 📚 ${(data.state.completedUnits || []).length} 个已完成单元
         </p>`,
        ''
      );

      // 在弹窗中加确认按钮
      const overlay = $('#modal-overlay');
      const btnArea = overlay.querySelector('.modal-text');
      if (btnArea) {
        btnArea.innerHTML += `
          <div style="display:flex;gap:12px;margin-top:16px;justify-content:center;">
            <button class="btn btn-primary" id="confirm-import-btn">✅ 确认导入</button>
            <button class="btn btn-outline" onclick="hideModal()">取消</button>
          </div>
        `;
        document.getElementById('confirm-import-btn').addEventListener('click', () => {
          // 保存导入的数据
          const ds = data.state;
          state.totalStars = ds.totalStars || 0;
          state.completedUnits = ds.completedUnits || [];
          state.unitProgress = ds.unitProgress || {};
          state.perfectScores = ds.perfectScores || 0;
          state.signInDays = ds.signInDays || [];
          state.lastSignIn = ds.lastSignIn || null;
          state.consecutiveDays = ds.consecutiveDays || 0;
          state.achievementsUnlocked = ds.achievementsUnlocked || [];
          state.easterEggsFound = ds.easterEggsFound || 0;
          state.wrongAnswers = ds.wrongAnswers || {};
          state.rewardedUnits = ds.rewardedUnits || [];
          state.totalCorrectAnswers = ds.totalCorrectAnswers || 0;
          state.lastVisitedUnit = ds.lastVisitedUnit || null;
          state.dailyLearningSeconds = ds.dailyLearningSeconds || 0;
          state.dailyLearningDate = ds.dailyLearningDate || null;
          state.save();
          state.updateStarDisplay();
          hideModal();
          renderReport();
          renderHome();
          launchConfetti(40);
          setTimeout(() => {
            showModal('✅', '导入成功！', '学习记录已恢复！<br>可以继续学习啦～', '太好了！🌟');
          }, 400);
        });
      }
    } catch (err) {
      showModal('❌', '导入失败', '文件格式不正确，请选择有效的学习记录备份文件', '知道了');
    }
  };
  reader.readAsText(file);
  // 重置 file input 以便可以重复选择同一文件
  event.target.value = '';
}

// ======== 重置数据 ========
function resetAllData() {
  localStorage.removeItem('grade4_preview_state');
  state.totalStars = 0;
  state.completedUnits = [];
  state.unitProgress = {};
  state.perfectScores = 0;
  state.signInDays = [];
  state.lastSignIn = null;
  state.consecutiveDays = 0;
  state.achievementsUnlocked = [];
  state.easterEggsFound = 0;
  state.wrongAnswers = {};
  state.rewardedUnits = [];
  state.totalCorrectAnswers = 0;
  state.lastVisitedUnit = null;
  state.dailyLearningSeconds = 0;
  state.dailyLearningDate = null;
  state.updateStarDisplay();
  goHome();
}

// ======== 休息提醒系统（番茄钟）========
let learningStartTime = null;

function startLearningTimer() {
  learningStartTime = Date.now();
}

function checkRestReminder() {
  if (!learningStartTime) return;
  const elapsed = Math.floor((Date.now() - learningStartTime) / 1000);
  if (elapsed >= 25 * 60) { // 25 分钟
    learningStartTime = null;
    showRestReminder();
  }
}

function showRestReminder() {
  const overlay = $('#modal-overlay');
  overlay.onclick = null;
  overlay.classList.add('show');
  overlay.innerHTML = `
    <div class="rest-reminder-content">
      <span class="rest-icon">😊</span>
      <div class="rest-title">该休息一下啦！</div>
      <div class="rest-text">
        你已经连续学习了 <strong>25 分钟</strong>，<br>
        起来活动一下，看看远处，<br>
        让眼睛休息 5 分钟吧！👀
      </div>
      <div class="rest-timer" id="rest-countdown">5:00</div>
      <button class="btn btn-primary btn-lg" onclick="hideRestReminder()" style="font-size:18px;">
        😌 休息好了，继续学习！
      </button>
    </div>
  `;

  // 倒计时
  let seconds = 300;
  const timerEl = document.getElementById('rest-countdown');
  const interval = setInterval(() => {
    seconds--;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    timerEl.textContent = `${mins}:${secs.toString().padStart(2, '0')}`;
    if (seconds <= 0) {
      clearInterval(interval);
      hideRestReminder();
    }
  }, 1000);

  // 存储 interval id 以便清除
  overlay._restInterval = interval;
}

function hideRestReminder() {
  const overlay = $('#modal-overlay');
  if (overlay._restInterval) {
    clearInterval(overlay._restInterval);
    overlay._restInterval = null;
  }
  overlay.classList.remove('show');
  // 重置计时器
  learningStartTime = Date.now();
}

// ======== 导航 ========
document.addEventListener('DOMContentLoaded', () => {
  // 导航按钮
  $$('.nav-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const page = btn.dataset.page;
      updateNav(page);
      switch (page) {
        case 'home':
          goHome();
          break;
        case 'wrongbook':
          showWrongBook();
          break;
        case 'report':
          renderReport();
          break;
        case 'achievements':
          showAchievements();
          break;
        case 'signin':
          showSignInModal();
          break;
      }
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
  });

  // 定期更新导航栏错题角标和休息提醒
  setInterval(() => {
    updateNavBadges();
    if (currentView === 'quiz-page' || currentView === 'practice-page') {
      checkRestReminder();
    }
  }, 30000); // 每 30 秒检查一次

  // 每天重置学习计时
  const today = new Date().toISOString().split('T')[0];
  if (state.dailyLearningDate !== today) {
    state.dailyLearningSeconds = 0;
    state.dailyLearningDate = today;
    state.save();
  }
});

// ======== 更新导航角标 ========
function updateNavBadges() {
  const wrongCount = state.getTotalWrongCount();
  const badge = document.getElementById('nav-wrong-count');
  if (badge) {
    if (wrongCount > 0) {
      badge.textContent = wrongCount;
      badge.style.display = '';
    } else {
      badge.style.display = 'none';
    }
  }
}

// ======== 工具函数 ========
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
