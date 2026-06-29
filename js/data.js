/* ========================================
   冀教版四年级上学期 · 课程数据
   根据2025-2026学年实际教材目录编制
   ======================================== */

const CURRICULUM = {
  math: {
    name: '数学',
    icon: '📐',
    color: '#FF6B6B',
    units: [
      // ====== 第一单元：升和毫升 ======
      {
        id: 'm1',
        title: '升和毫升',
        emoji: '🧪',
        description: '认识容量单位，掌握升和毫升的换算',
        lessons: [
          {
            title: '认识升和毫升',
            content: `
              <p>升（L）和毫升（mL）是常用的容量单位。</p>
              <div class="highlight">1 升 = 1000 毫升</div>
              <p>生活中，大瓶饮料常用 <strong>升</strong> 做单位，小瓶药水常用 <strong>毫升</strong> 做单位。</p>
              <div class="tip-box">
                💡 <strong>小窍门：</strong>1升水大约相当于2瓶500毫升的矿泉水！
              </div>
              <div class="example-box">
                <strong>📝 想一想：</strong><br>
                一瓶矿泉水约500mL，2瓶这样的矿泉水一共是：<br>
                500mL + 500mL = 1000mL = <strong>1L</strong>
              </div>
            `
          }
        ],
        questions: [
          {
            question: '1升等于多少毫升？',
            options: ['10毫升', '100毫升', '1000毫升', '10000毫升'],
            answer: 2,
            hint: '想想"升"和"毫升"之间的换算关系，1升是1000的倍数。',
            explanation: '<strong>解题步骤：</strong><br>① 升（L）和毫升（mL）都是容量单位。<br>② 它们之间的换算关系是：<strong>1升 = 1000毫升</strong><br>③ 所以答案是 <strong>1000毫升</strong>，选 C。<br><div class="tip-box">💡 记住：1L = 1000mL，大单位换小单位要乘以1000哦！</div>'
          },
          {
            question: '下面哪个物品的容量最适合用"升"作单位？',
            options: ['一个眼药水瓶', '一桶食用油', '一个茶杯', '一个滴管'],
            answer: 1,
            hint: '想想看，升（L）用来测量比较大的容量，毫升（mL）用来测量比较小的容量。',
            explanation: '<strong>解题步骤：</strong><br>① 升是较大的容量单位，适合测量容量较大的物品。<br>② 眼药水瓶、茶杯、滴管装的液体很少，用"毫升"更合适。<br>③ 一桶食用油比较大，用<strong>"升"</strong>作单位最合适。选 B。'
          },
          {
            question: '2升 = ______ 毫升',
            options: ['200', '2000', '20', '20000'],
            answer: 1,
            hint: '1升=1000毫升，那么2升就是2个1000毫升。',
            explanation: '<strong>解题步骤：</strong><br>① 已知：<strong>1升 = 1000毫升</strong><br>② 2升 = 2 × 1000 = <strong>2000毫升</strong><br>③ 所以选 B。<br><div class="tip-box">💡 升换算成毫升，乘以1000就行！</div>'
          },
          {
            question: '500mL + 500mL = ？',
            options: ['500mL', '1L', '100mL', '10L'],
            answer: 1,
            hint: '先把500+500算出来，再看等于多少升。',
            explanation: '<strong>解题步骤：</strong><br>① 500mL + 500mL = <strong>1000mL</strong><br>② 1000mL = <strong>1L</strong>（因为1升 = 1000毫升）<br>③ 所以选 B。<br><div class="tip-box">💡 两瓶500mL的矿泉水加起来就是1升哦！</div>'
          },
          {
            question: '一个保温壶大约能装水多少？',
            options: ['20毫升', '200毫升', '2升', '200升'],
            answer: 2,
            hint: '先想一下平时见到的保温壶有多大，再用排除法试试。',
            explanation: '<strong>解题步骤：</strong><br>① 先看单位：保温壶不小，应该用"升"作单位。<br>② 排除法：<br>　- 20mL和200mL太小了（一个保温杯都不止）<br>　- 200升太大了（相当于200个保温壶）<br>③ 所以大约是 <strong>2升</strong>，选 C。'
          },
          {
            question: '下面哪个单位是用来测量容量的？',
            options: ['米', '千克', '升', '平方米'],
            answer: 2,
            hint: '想想看，测量液体（比如水、牛奶）的体积用什么单位？',
            explanation: '<strong>解题步骤：</strong><br>① <strong>米</strong>是长度单位（测量有多长）<br>② <strong>千克</strong>是重量单位（测量有多重）<br>③ <strong>升</strong>是<strong>容量单位</strong>（测量能装多少）<br>④ <strong>平方米</strong>是面积单位（测量有多大）<br>⑤ 所以用来测量容量的单位是 <strong>升</strong>，选 C。'
          },
          {
            question: '3L = ______ mL',
            options: ['30', '300', '3000', '30000'],
            answer: 2,
            hint: '用同样的方法：1L=1000mL，3L就是3个1000。',
            explanation: '<strong>解题步骤：</strong><br>① 已知：<strong>1升 = 1000毫升</strong><br>② 3升 = 3 × 1000 = <strong>3000毫升</strong><br>③ 所以选 C。'
          },
          {
            question: '一瓶墨水大约有60______，括号里填什么单位合适？',
            options: ['升', '毫升', '米', '千克'],
            answer: 1,
            hint: '墨水是很小的瓶子，想想它装得下60升吗？',
            explanation: '<strong>解题步骤：</strong><br>① 先看<strong>米</strong>和<strong>千克</strong>：一个是长度单位、一个是重量单位，都不对。<br>② <strong>60升</strong>很大（相当于60个大矿泉水瓶），一瓶墨水不可能装60升。<br>③ 所以应该填 <strong>毫升</strong>，选 B。<br><div class="tip-box">💡 小瓶液体一般用"毫升"作单位，大瓶的用"升"。</div>'
          },
          {
            question: '2000mL = ______ L',
            options: ['2', '20', '200', '0.2'],
            answer: 0,
            hint: '反过来想：1000mL=1L，那么2000mL里有几个1000？',
            explanation: '<strong>解题步骤：</strong><br>① 已知：<strong>1000毫升 = 1升</strong><br>② 2000mL ÷ 1000 = <strong>2L</strong><br>③ 所以选 A。<br><div class="tip-box">💡 毫升换算成升，除以1000就行！</div>'
          },
          {
            question: '下面哪个容量最大？',
            options: ['500mL', '1L', '800mL', '300mL'],
            answer: 1,
            hint: '把所有的选项都换算成同一个单位再比。1L是多少毫升？',
            explanation: '<strong>解题步骤：</strong><br>① 先把所有选项换算成毫升：<br>　- 500mL = 500mL<br>　- <strong>1L = 1000mL</strong><br>　- 800mL = 800mL<br>　- 300mL = 300mL<br>② 比较大小：1000 > 800 > 500 > 300<br>③ 所以<strong>1L容量最大</strong>，选 B。'
          },
          // === 新增题 11-15 ===
          {
            question: '4升 = ______ 毫升',
            options: ['40', '400', '4000', '40000'],
            answer: 2,
            hint: '1升等于1000毫升，4升就是4个1000。',
            explanation: '<strong>解题步骤：</strong><br>① 1L = 1000mL<br>② 4L = 4 × 1000 = <strong>4000mL</strong><br>③ 选 C。'
          },
          {
            question: '一杯水大约有250______，括号里填什么单位？',
            options: ['升', '毫升', '吨', '千米'],
            answer: 1,
            hint: '一杯水不会太大，应该用较小的容量单位。',
            explanation: '<strong>解题步骤：</strong><br>① 排除法：吨和千米不是容量单位。<br>② 250升太大了（相当于250瓶矿泉水），不可能是茶杯的容量。<br>③ 所以一杯水大约是 <strong>250毫升</strong>，选 B。'
          },
          {
            question: '爸爸买了一桶5L的食用油，相当于多少毫升？',
            options: ['50mL', '500mL', '5000mL', '50000mL'],
            answer: 2,
            hint: '升换算成毫升，乘以1000。',
            explanation: '<strong>解题步骤：</strong><br>① 1L = 1000mL<br>② 5L = 5 × 1000 = <strong>5000mL</strong><br>③ 选 C。'
          },
          {
            question: '哪个换算关系是正确的？',
            options: ['1L = 10mL', '1L = 100mL', '1L = 500mL', '1L = 1000mL'],
            answer: 3,
            hint: '回忆一下课上讲过的升和毫升的换算。',
            explanation: '<strong>解题步骤：</strong><br>① 逐个检查：<br>　- 1L = 10mL ❌（太小）<br>　- 1L = 100mL ❌（太小）<br>　- 1L = 500mL ❌（还差一半）<br>　- <strong>1L = 1000mL</strong> ✅<br>② 所以正确答案是 D。'
          },
          {
            question: '一个鱼缸大约能装水多少？',
            options: ['30毫升', '300毫升', '30升', '300升'],
            answer: 2,
            hint: '鱼缸比保温壶大很多，想想它大概能装多少瓶矿泉水？',
            explanation: '<strong>解题步骤：</strong><br>① 30mL和300mL都太小了（一瓶矿泉水都不够）。<br>② 300升太大了（相当于300个1升的瓶子）。<br>③ 普通鱼缸大约能装 <strong>30升</strong>水，选 C。'
          }
        ]
      },

      // ====== 第二单元：三位数除以两位数 ======
      {
        id: 'm2',
        title: '三位数除以两位数',
        emoji: '➗',
        description: '掌握三位数除以两位数的计算方法',
        lessons: [
          {
            title: '三位数除以两位数',
            content: `
              <p>三位数除以两位数，先看被除数的前两位是否大于除数。</p>
              <div class="tip-box">
                💡 <strong>计算步骤：</strong><br>
                ① 先看被除数的前两位<br>
                ② 前两位不够看前三位<br>
                ③ 除到哪一位，商就写在哪一位上面
              </div>
              <div class="example-box">
                <strong>📝 例如：</strong> 240 ÷ 30 = <strong>8</strong><br>
                因为 30 × 8 = 240，所以 240 ÷ 30 = 8
              </div>
              <p style="margin-top:12px;"><strong>商不变的规律：</strong>被除数和除数同时乘或除以一个相同的数（0除外），商不变。</p>
            `
          }
        ],
        questions: [
          {
            question: '240 ÷ 30 = ？',
            options: ['6', '7', '8', '9'],
            answer: 2,
            hint: '想一下30乘以多少等于240？',
            explanation: '<strong>解题步骤：</strong><br>① 除法是乘法的逆运算：<strong>240 ÷ 30 = ？</strong><br>② 想乘法：30 × 8 = 240<br>③ 所以 240 ÷ 30 = <strong>8</strong>，选 C。'
          },
          {
            question: '560 ÷ 80 = ？',
            options: ['6', '7', '8', '9'],
            answer: 1,
            hint: '80乘以几等于560？想一下乘法口诀。',
            explanation: '<strong>解题步骤：</strong><br>① 80 × 7 = 560<br>② 所以 560 ÷ 80 = <strong>7</strong>，选 B。'
          },
          {
            question: '720 ÷ 90 = ？',
            options: ['6', '7', '8', '9'],
            answer: 2,
            hint: '90 × ? = 720，想想看。',
            explanation: '<strong>解题步骤：</strong><br>① 90 × 8 = 720<br>② 所以 720 ÷ 90 = <strong>8</strong>，选 C。'
          },
          {
            question: '三年级有120人，每30人一组，可以分成几组？',
            options: ['2组', '3组', '4组', '5组'],
            answer: 2,
            hint: '把120人每30人分一组，就是求120里面有几个30。',
            explanation: '<strong>解题步骤：</strong><br>① 120人每30人一组，用除法：<strong>120 ÷ 30</strong><br>② 30 × 4 = 120，所以 120 ÷ 30 = <strong>4</strong><br>③ 可以分成 <strong>4组</strong>，选 C。'
          },
          {
            question: '480 ÷ 60 = ？',
            options: ['6', '7', '8', '9'],
            answer: 2,
            hint: '60 × ? = 480，用乘法口诀想想。',
            explanation: '<strong>解题步骤：</strong><br>① 60 × 8 = 480<br>② 所以 480 ÷ 60 = <strong>8</strong>，选 C。'
          },
          {
            question: '360 ÷ 40 = ？',
            options: ['6', '7', '8', '9'],
            answer: 3,
            hint: '40 × 9 = ?，算出来就知道答案了。',
            explanation: '<strong>解题步骤：</strong><br>① 40 × 9 = 360<br>② 所以 360 ÷ 40 = <strong>9</strong>，选 D。'
          },
          {
            question: '540 ÷ 90 = ？',
            options: ['5', '6', '7', '8'],
            answer: 1,
            hint: '90 × ? = 540，想想看。',
            explanation: '<strong>解题步骤：</strong><br>① 90 × 6 = 540<br>② 所以 540 ÷ 90 = <strong>6</strong>，选 B。'
          },
          {
            question: '一本书210页，小明每天看30页，几天能看完？',
            options: ['5天', '6天', '7天', '8天'],
            answer: 2,
            hint: '210页每天看30页，就是求210里面有几个30。',
            explanation: '<strong>解题步骤：</strong><br>① 用除法：<strong>210 ÷ 30</strong><br>② 30 × 7 = 210，所以 210 ÷ 30 = <strong>7</strong><br>③ <strong>7天</strong>能看完，选 C。'
          },
          {
            question: '下面哪个算式的结果最大？',
            options: ['360÷60', '480÷80', '240÷30', '420÷70'],
            answer: 2,
            hint: '先把每个算式的结果算出来，再比大小。',
            explanation: '<strong>解题步骤：</strong><br>① 逐一计算：<br>　A. 360÷60 = 6<br>　B. 480÷80 = 6<br>　C. <strong>240÷30 = 8</strong><br>　D. 420÷70 = 6<br>② <strong>8最大</strong>，所以选 C。'
          },
          {
            question: '630 ÷ 70 = ？',
            options: ['7', '8', '9', '10'],
            answer: 2,
            hint: '70 × 9 = 630，对吗？',
            explanation: '<strong>解题步骤：</strong><br>① 70 × 9 = 630<br>② 所以 630 ÷ 70 = <strong>9</strong>，选 C。'
          },
          // === 新增题 11-15 ===
          {
            question: '810 ÷ 90 = ？',
            options: ['7', '8', '9', '10'],
            answer: 2,
            hint: '90 × ? = 810',
            explanation: '<strong>解题步骤：</strong><br>① 90 × 9 = 810<br>② 所以 810 ÷ 90 = <strong>9</strong>，选 C。'
          },
          {
            question: '学校有320本故事书，每40本放一箱，需要几个箱子？',
            options: ['6个', '7个', '8个', '9个'],
            answer: 2,
            hint: '问需要几个箱子，就是求320里面有几个40。',
            explanation: '<strong>解题步骤：</strong><br>① 用除法：<strong>320 ÷ 40</strong><br>② 40 × 8 = 320，所以 320 ÷ 40 = <strong>8</strong><br>③ 需要 <strong>8个箱子</strong>，选 C。'
          },
          {
            question: '540 ÷ 60 = ？',
            options: ['6', '7', '8', '9'],
            answer: 2,
            hint: '60 × 9 = 540，对不？',
            explanation: '<strong>解题步骤：</strong><br>① 60 × 9 = 540<br>② 所以 540 ÷ 60 = <strong>9</strong>，选 D。'
          },
          {
            question: '下面哪个算式的商是7？',
            options: ['240÷30', '280÷40', '360÷40', '450÷90'],
            answer: 1,
            hint: '把每个算式都算一遍，看哪个等于7。',
            explanation: '<strong>解题步骤：</strong><br>① A. 240÷30 = 8 ❌<br>② B. <strong>280÷40 = 7</strong> ✅<br>③ C. 360÷40 = 9 ❌<br>④ D. 450÷90 = 5 ❌<br>⑤ 所以商是7的是 <strong>280÷40</strong>，选 B。'
          },
          {
            question: '一条绳子长420厘米，每70厘米剪一段，可以剪几段？',
            options: ['5段', '6段', '7段', '8段'],
            answer: 1,
            hint: '420厘米每70厘米一段，就是求420里有几个70。',
            explanation: '<strong>解题步骤：</strong><br>① 用除法：<strong>420 ÷ 70</strong><br>② 70 × 6 = 420，所以 420 ÷ 70 = <strong>6</strong><br>③ 可以剪 <strong>6段</strong>，选 B。'
          }
        ]
      },

      // ====== 第三单元：解决问题 ======
      {
        id: 'm3',
        title: '解决问题',
        emoji: '🧩',
        description: '学习乘除两步计算和带小括号的混合运算',
        lessons: [
          {
            title: '乘除两步计算',
            content: `
              <p>在解决实际问题时，有时需要两步计算才能得到答案。</p>
              <div class="tip-box">
                💡 <strong>解题步骤：</strong><br>
                ① 读懂题意，找出已知条件和问题<br>
                ② 想清楚先算什么，再算什么<br>
                ③ 列式并计算
              </div>
              <div class="example-box">
                <strong>📝 例如：</strong><br>
                学校买来6箱矿泉水，每箱24瓶，分给8个班，每班分到多少瓶？<br>
                先算总瓶数：6 × 24 = 144（瓶）<br>
                再算每班：144 ÷ 8 = <strong>18（瓶）</strong>
              </div>
            `
          }
        ],
        questions: [
          {
            question: '3箱苹果每箱20斤，平均分给6个班，每班分多少斤？',
            options: ['10斤', '15斤', '20斤', '60斤'],
            answer: 0,
            hint: '先算一共有多少斤，再平均分给6个班。',
            explanation: '<strong>解题步骤：</strong><br>① 先算总斤数：3箱 × 20斤 = <strong>60斤</strong><br>② 再平均分：60斤 ÷ 6个班 = <strong>10斤</strong><br>③ 所以每班分10斤，选 A。'
          },
          {
            question: '小明买了4盒彩笔，每盒12元，付了50元，应找回多少元？',
            options: ['2元', '8元', '12元', '48元'],
            answer: 0,
            hint: '先算出买彩笔花了多少钱，再用付的钱减去花了的钱。',
            explanation: '<strong>解题步骤：</strong><br>① 先算花了多少钱：4盒 × 12元 = <strong>48元</strong><br>② 再算应找回：50元 − 48元 = <strong>2元</strong><br>③ 所以应找回2元，选 A。'
          },
          {
            question: '学校买来48盆花，每层楼放8盆，可以放几层？',
            options: ['4层', '6层', '8层', '12层'],
            answer: 1,
            hint: '48盆花每层放8盆，就是求48里面有几个8。',
            explanation: '<strong>解题步骤：</strong><br>① 用除法：48盆 ÷ 8盆 = <strong>6层</strong><br>② 所以可以放6层，选 B。'
          },
          {
            question: '小红4天看了32页书，照这样算，7天能看多少页？',
            options: ['48页', '56页', '64页', '72页'],
            answer: 1,
            hint: '先算出每天看多少页，再算7天看多少页。',
            explanation: '<strong>解题步骤：</strong><br>① 先算每天看多少页：32页 ÷ 4天 = <strong>8页</strong><br>② 再算7天看多少页：8页 × 7天 = <strong>56页</strong><br>③ 所以7天能看56页，选 B。'
          },
          {
            question: '一箱牛奶48元，每箱8瓶，买5瓶需要多少元？',
            options: ['30元', '24元', '40元', '48元'],
            answer: 0,
            hint: '先算每瓶牛奶多少钱，再算5瓶多少钱。',
            explanation: '<strong>解题步骤：</strong><br>① 先算每瓶多少钱：48元 ÷ 8瓶 = <strong>6元</strong><br>② 再算5瓶多少钱：6元 × 5瓶 = <strong>30元</strong><br>③ 所以买5瓶需要30元，选 A。'
          },
          {
            question: '张大爷5天卖了30筐苹果，照这样算，8天能卖多少筐？',
            options: ['40筐', '48筐', '56筐', '64筐'],
            answer: 1,
            hint: '先算每天卖多少筐，再算8天卖多少筐。',
            explanation: '<strong>解题步骤：</strong><br>① 先算每天卖多少筐：30筐 ÷ 5天 = <strong>6筐</strong><br>② 再算8天卖多少筐：6筐 × 8天 = <strong>48筐</strong><br>③ 所以8天能卖48筐，选 B。'
          },
          {
            question: '4个小朋友买了2盒饼干，每盒12块，平均每个小朋友分到几块？',
            options: ['3块', '4块', '6块', '8块'],
            answer: 2,
            hint: '先算一共有多少块饼干，再平均分给4个小朋友。',
            explanation: '<strong>解题步骤：</strong><br>① 先算总块数：2盒 × 12块 = <strong>24块</strong><br>② 再平均分：24块 ÷ 4人 = <strong>6块</strong><br>③ 所以每个小朋友分到6块，选 C。'
          },
          {
            question: '一个修路队3天修了180米，照这样算，7天可以修多少米？',
            options: ['360米', '420米', '540米', '600米'],
            answer: 1,
            hint: '先算每天修多少米，再算7天修多少米。',
            explanation: '<strong>解题步骤：</strong><br>① 先算每天修多少米：180米 ÷ 3天 = <strong>60米</strong><br>② 再算7天修多少米：60米 × 7天 = <strong>420米</strong><br>③ 所以7天可以修420米，选 B。'
          },
          {
            question: '妈妈买了3千克苹果，每千克8元，又买了5千克香蕉，每千克4元，一共花了多少钱？',
            options: ['40元', '44元', '48元', '52元'],
            answer: 1,
            hint: '分别算出苹果和香蕉的钱，再加起来。',
            explanation: '<strong>解题步骤：</strong><br>① 先算苹果花了多少钱：3千克 × 8元 = <strong>24元</strong><br>② 再算香蕉花了多少钱：5千克 × 4元 = <strong>20元</strong><br>③ 一共花了：24元 + 20元 = <strong>44元</strong><br>④ 所以选 B。'
          },
          {
            question: '每张桌子坐6人，有3张桌子，再来12人，一共能坐多少人？',
            options: ['18人', '30人', '24人', '36人'],
            answer: 1,
            hint: '先算原来能坐多少人，再加上新来的12人。',
            explanation: '<strong>解题步骤：</strong><br>① 先算3张桌子能坐多少人：3张 × 6人 = <strong>18人</strong><br>② 再来12人后一共：18人 + 12人 = <strong>30人</strong><br>③ 所以一共能坐30人，选 B。'
          },
          {
            question: '商店运来4箱饮料，每箱24瓶，卖出56瓶，还剩多少瓶？',
            options: ['30瓶', '36瓶', '40瓶', '48瓶'],
            answer: 2,
            hint: '先算一共有多少瓶，再减去卖出的。',
            explanation: '<strong>解题步骤：</strong><br>① 先算总瓶数：4箱 × 24瓶 = <strong>96瓶</strong><br>② 再算还剩：96瓶 − 56瓶 = <strong>40瓶</strong><br>③ 所以选 C。'
          },
          {
            question: '小明和小红一共折了128只纸鹤，每人折的同样多，每8只穿一串，可以穿几串？',
            options: ['12串', '14串', '16串', '18串'],
            answer: 2,
            hint: '先算每人折多少只，再算每人穿几串，最后加起来。',
            explanation: '<strong>解题步骤：</strong><br>① 每人折：128只 ÷ 2 = <strong>64只</strong><br>② 每人穿：64只 ÷ 8 = <strong>8串</strong><br>③ 一共穿：8串 + 8串 = <strong>16串</strong><br>④ 所以选 C。'
          },
          {
            question: '一辆汽车3小时行驶了240千米，照这样算，5小时能行驶多少千米？',
            options: ['360千米', '380千米', '400千米', '420千米'],
            answer: 2,
            hint: '先算每小时行驶多少千米，再算5小时。',
            explanation: '<strong>解题步骤：</strong><br>① 先算每小时行驶：240千米 ÷ 3小时 = <strong>80千米</strong><br>② 再算5小时行驶：80千米 × 5小时 = <strong>400千米</strong><br>③ 所以选 C。'
          },
          {
            question: '学校买了6个篮球，每个65元，又买了4个足球，每个48元，篮球比足球多花多少钱？',
            options: ['178元', '188元', '198元', '208元'],
            answer: 2,
            hint: '分别算出篮球和足球的总价，再相减。',
            explanation: '<strong>解题步骤：</strong><br>① 篮球总价：6个 × 65元 = <strong>390元</strong><br>② 足球总价：4个 × 48元 = <strong>192元</strong><br>③ 篮球比足球多花：390元 − 192元 = <strong>198元</strong><br>④ 所以选 C。'
          },
          {
            question: '3只燕子4天吃了720只害虫，平均每只燕子每天吃多少只害虫？',
            options: ['50只', '60只', '70只', '80只'],
            answer: 1,
            hint: '可以先算每只燕子4天吃多少，再算每天吃多少。',
            explanation: '<strong>解题步骤：</strong><br>① 每只燕子4天吃：720只 ÷ 3 = <strong>240只</strong><br>② 每只燕子每天吃：240只 ÷ 4天 = <strong>60只</strong><br>③ 所以平均每只燕子每天吃60只，选 B。<br><div class="tip-box">连除问题：总量÷数量÷天数=每份数</div>'
          }
        ]
      },

      // ====== 第四单元：线和角 ======
      {
        id: 'm4',
        title: '线和角',
        emoji: '📏',
        description: '认识线段、射线、直线和角，学会角的分类和画法',
        lessons: [
          {
            title: '线和角的认识',
            content: `
              <p><strong>线：</strong></p>
              <p>🔹 <strong>线段</strong>：有两个端点，可以量出长度。</p>
              <p>🔹 <strong>射线</strong>：有一个端点，向一端无限延伸。</p>
              <p>🔹 <strong>直线</strong>：没有端点，向两端无限延伸。</p>
              <div class="tip-box">
                💡 <strong>角的分类：</strong><br>
                🔹 锐角：大于0°小于90°<br>
                🔹 直角：等于90°<br>
                🔹 钝角：大于90°小于180°<br>
                🔹 平角：等于180°
              </div>
              <div class="example-box">
                <strong>📝 比一比：</strong><br>
                线段可以测量长度，射线和直线都不能测量长度哦！
              </div>
            `
          }
        ],
        questions: [
          {
            question: '下面哪个图形有两个端点？',
            options: ['直线', '射线', '线段', '角'],
            answer: 2,
            hint: '哪种线有两个端点，长度是有限的？',
            explanation: '<strong>解题步骤：</strong><br>① <strong>直线</strong>：没有端点，向两端无限延伸 ❌<br>② <strong>射线</strong>：有一个端点，向一端无限延伸 ❌<br>③ <strong>线段</strong>：有两个端点，可以量出长度 ✅<br>④ <strong>角</strong>：由一点引出的两条射线组成的图形 ❌<br>⑤ 所以选 C。<br><div class="tip-box">线段有两个端点，射线有一个端点，直线没有端点</div>'
          },
          {
            question: '小于90°的角叫做什么角？',
            options: ['锐角', '直角', '钝角', '平角'],
            answer: 0,
            hint: '比直角小的角叫什么角？',
            explanation: '<strong>解题步骤：</strong><br>① 角的分类：<br>　<strong>锐角</strong>：0°＜锐角＜90°<br>　直角：= 90°<br>　钝角：90°＜钝角＜180°<br>　平角：= 180°<br>② 小于90°的角是<strong>锐角</strong>，选 A。'
          },
          {
            question: '直角等于多少度？',
            options: ['45°', '90°', '180°', '360°'],
            answer: 1,
            hint: '想一想三角板上的直角是多少度。',
            explanation: '<strong>解题步骤：</strong><br>① 直角是基本的角，它的度数固定为<strong>90°</strong>。<br>② 45°是锐角，180°是平角，360°是周角。<br>③ 所以直角等于 <strong>90°</strong>，选 B。<br><div class="tip-box">直角 = 90°，记住这个标准！</div>'
          },
          {
            question: '钟表上3点整，时针和分针成什么角？',
            options: ['锐角', '直角', '钝角', '平角'],
            answer: 1,
            hint: '3点整时，时针指向3，分针指向12，它们相差3大格。',
            explanation: '<strong>解题步骤：</strong><br>① 钟表上每个大格是 360° ÷ 12 = <strong>30°</strong><br>② 3点整，时针指向3，分针指向12，相差3大格。<br>③ 角度 = 3 × 30° = <strong>90°</strong>，是直角。<br>④ 所以选 B。'
          },
          {
            question: '一条射线有____个端点。',
            options: ['0个', '1个', '2个', '3个'],
            answer: 1,
            hint: '射线有一个起点，朝一个方向无限延伸。',
            explanation: '<strong>解题步骤：</strong><br>① 射线：从一点出发，向一个方向无限延伸。<br>② 那个出发的点就是它的端点，所以有<strong>1个端点</strong>。<br>③ 选 B。<br><div class="tip-box">直线0个端点，射线1个端点，线段2个端点</div>'
          },
          {
            question: '大于90°而小于180°的角叫做什么角？',
            options: ['锐角', '直角', '钝角', '平角'],
            answer: 2,
            hint: '比直角大但比平角小的角叫什么？',
            explanation: '<strong>解题步骤：</strong><br>① 角的分类：<br>　锐角：＜90°<br>　直角：= 90°<br>　<strong>钝角：90°～180°</strong><br>　平角：= 180°<br>② 大于90°且小于180°的角是<strong>钝角</strong>，选 C。'
          },
          {
            question: '下面哪个可以无限延伸？',
            options: ['线段', '射线', '三角形的一条边', '长方形的边'],
            answer: 1,
            hint: '哪种线可以向一个方向无限延长？',
            explanation: '<strong>解题步骤：</strong><br>① 线段有两个端点，不能延伸 ❌<br>② <strong>射线</strong>有一个端点，可以向另一端无限延伸 ✅<br>③ 三角形的边是线段 ❌<br>④ 长方形的边也是线段 ❌<br>⑤ 所以选 B。'
          },
          {
            question: '度量角的工具是什么？',
            options: ['直尺', '三角板', '量角器', '圆规'],
            answer: 2,
            hint: '测量角的大小要用专门的工具，它上面有刻度。',
            explanation: '<strong>解题步骤：</strong><br>① <strong>直尺</strong>：测量长度 ❌<br>② <strong>三角板</strong>：画角和垂线，但不直接测量角度 ❌<br>③ <strong>量角器</strong>：专门用来测量角的度数 ✅<br>④ <strong>圆规</strong>：画圆和量长度 ❌<br>⑤ 所以选 C。'
          },
          {
            question: '钟表上6点整，时针和分针成什么角？',
            options: ['锐角', '直角', '钝角', '平角'],
            answer: 3,
            hint: '6点整，时针指向6，分针指向12，它们相差几大格？',
            explanation: '<strong>解题步骤：</strong><br>① 6点整，时针指向6，分针指向12，相差6大格。<br>② 角度 = 6 × 30° = <strong>180°</strong><br>③ 180°的角是<strong>平角</strong>，选 D。<br><div class="tip-box">平角 = 180°，6点整时针和分针成一条直线</div>'
          },
          {
            question: '两个锐角合起来可能是什么角？',
            options: ['一定是锐角', '一定是直角', '一定是钝角', '可能是锐角、直角或钝角'],
            answer: 3,
            hint: '锐角小于90°，两个锐角的和是多少？想一想范围。',
            explanation: '<strong>解题步骤：</strong><br>① 锐角范围：0°＜每个锐角＜90°<br>② 两个锐角的和：0°＜和＜180°<br>③ 和可以是锐角（如30°+40°=70°）、直角（45°+45°=90°）或钝角（50°+60°=110°）<br>④ 所以选 D。'
          },
          {
            question: '过一点可以画多少条直线？',
            options: ['1条', '2条', '无数条', '0条'],
            answer: 2,
            hint: '想象一下，过一点可以向不同方向画很多条直线。',
            explanation: '<strong>解题步骤：</strong><br>① 过一点可以向任意方向画直线。<br>② 方向有无数个，所以过一点可以画<strong>无数条直线</strong>。<br>③ 选 C。<br><div class="tip-box">过一点可以画无数条直线，过两点只能画一条直线</div>'
          },
          {
            question: '一个角的两条边是两条什么？',
            options: ['线段', '射线', '直线', '曲线'],
            answer: 1,
            hint: '角的定义：从一点引出两条什么线？',
            explanation: '<strong>解题步骤：</strong><br>① 角的定义：从<strong>一点</strong>引出<strong>两条射线</strong>所组成的图形叫做角。<br>② 这两条射线叫做角的边，这一点叫做角的顶点。<br>③ 所以选 B。'
          },
          {
            question: '钟面上2点整，时针和分针成什么角？',
            options: ['锐角', '直角', '钝角', '平角'],
            answer: 0,
            hint: '2点整，时针和分针相差2大格，每格30度。',
            explanation: '<strong>解题步骤：</strong><br>① 2点整，时针指向2，分针指向12，相差2大格。<br>② 角度 = 2 × 30° = <strong>60°</strong><br>③ 60°小于90°，是<strong>锐角</strong>，选 A。'
          },
          {
            question: '一个平角等于多少个直角？',
            options: ['1个', '2个', '3个', '4个'],
            answer: 1,
            hint: '平角=180°，直角=90°，算一下180÷90。',
            explanation: '<strong>解题步骤：</strong><br>① 平角 = <strong>180°</strong><br>② 直角 = <strong>90°</strong><br>③ 180° ÷ 90° = <strong>2个</strong><br>④ 所以一个平角等于<strong>2个直角</strong>，选 B。<br><div class="tip-box">1平角 = 2直角 = 180°</div>'
          },
          {
            question: '下面哪种线的长度可以测量？',
            options: ['直线', '射线', '线段', '以上都可以'],
            answer: 2,
            hint: '只有长度有限的线才能测量，哪种线的长度是固定的？',
            explanation: '<strong>解题步骤：</strong><br>① <strong>直线</strong>：无限延伸，不能量长度 ❌<br>② <strong>射线</strong>：向一端无限延伸，不能量长度 ❌<br>③ <strong>线段</strong>：有两个端点，长度有限，可以测量 ✅<br>④ 所以选 C。'
          }
        ]
      },

      // ====== 第五单元：倍数和因数 ======
      {
        id: 'm5',
        title: '倍数和因数',
        emoji: '🔢',
        description: '理解倍数、因数的概念，认识2、3、5的倍数特征',
        lessons: [
          {
            title: '倍数和因数',
            content: `
              <p><strong>因数：</strong>能整除一个数的数，叫做这个数的因数。</p>
              <p>例如：12的因数有 1, 2, 3, 4, 6, 12</p>
              <p><strong>倍数：</strong>一个数的倍数，就是这个数乘自然数的结果。</p>
              <p>例如：3的倍数有 3, 6, 9, 12, 15...</p>
              <div class="tip-box">
                💡 <strong>2、3、5的倍数特征：</strong><br>
                🔹 2的倍数：个位是0、2、4、6、8<br>
                🔹 5的倍数：个位是0或5<br>
                🔹 3的倍数：各位数字之和是3的倍数
              </div>
            `
          }
        ],
        questions: [
          {
            question: '12的因数有几个？',
            options: ['4个', '5个', '6个', '7个'],
            answer: 2,
            hint: '按顺序找：哪些数相乘等于12？',
            explanation: '<strong>解题步骤：</strong><br>① 一对一对地找：<br>　1 × 12 = 12<br>　2 × 6 = 12<br>　3 × 4 = 12<br>② 12的因数是：1, 2, 3, 4, 6, 12<br>③ 一共有<strong>6个</strong>，选 C。<br><div class="tip-box">找因数要一对一对找，不重复不遗漏</div>'
          },
          {
            question: '下面哪个数是3的倍数？',
            options: ['16', '20', '18', '25'],
            answer: 2,
            hint: '3的倍数特征：各位数字之和是3的倍数。',
            explanation: '<strong>解题步骤：</strong><br>① 用3的倍数特征判断：<br>　A. 16 → 1+6=7 ❌<br>　B. 20 → 2+0=2 ❌<br>　C. <strong>18 → 1+8=9</strong> ✅<br>　D. 25 → 2+5=7 ❌<br>② 所以选 C。'
          },
          {
            question: '个位上是0或5的数一定是哪个数的倍数？',
            options: ['2', '3', '5', '10'],
            answer: 2,
            hint: '想想5的倍数有什么特征。',
            explanation: '<strong>解题步骤：</strong><br>① 5的倍数特征：个位上是<strong>0或5</strong>。<br>② 所以个位是0或5的数一定是<strong>5的倍数</strong>。<br>③ 选 C。<br><div class="tip-box">5的倍数：个位是0或5</div>'
          },
          {
            question: '下面哪个数既是2的倍数，又是5的倍数？',
            options: ['12', '20', '25', '33'],
            answer: 1,
            hint: '同时是2和5的倍数，个位必须是0。',
            explanation: '<strong>解题步骤：</strong><br>① 2的倍数：个位是偶数（0,2,4,6,8）<br>② 5的倍数：个位是0或5<br>③ 既是2又是5的倍数，个位必须是<strong>0</strong>。<br>④ 20个位是0，所以选 B。<br><div class="tip-box">既是2又是5的倍数 → 个位是0</div>'
          },
          {
            question: '一个数最小的因数是多少？',
            options: ['0', '1', '它本身', '2'],
            answer: 1,
            hint: '1能整除任何数，所以1是什么数的因数？',
            explanation: '<strong>解题步骤：</strong><br>① 1可以整除任何一个自然数。<br>② 所以<strong>1</strong>是任何自然数的因数，也是最小的因数。<br>③ 选 B。<br><div class="tip-box">1是任何自然数的因数，也是最小的因数</div>'
          },
          {
            question: '下面哪个数是2的倍数？',
            options: ['13', '17', '24', '35'],
            answer: 2,
            hint: '2的倍数看个位是不是偶数。',
            explanation: '<strong>解题步骤：</strong><br>① 2的倍数特征：个位是<strong>0、2、4、6、8</strong>。<br>② 逐项检查：<br>　A. 13个位3 ❌　B. 17个位7 ❌<br>　C. <strong>24个位4</strong> ✅　D. 35个位5 ❌<br>③ 所以24是2的倍数，选 C。'
          },
          {
            question: '18的因数有多少个？',
            options: ['4个', '5个', '6个', '7个'],
            answer: 2,
            hint: '从1开始找能整除18的数。',
            explanation: '<strong>解题步骤：</strong><br>① 18的因数：<br>　1 × 18 = 18<br>　2 × 9 = 18<br>　3 × 6 = 18<br>② 所以18的因数有：1, 2, 3, 6, 9, 18<br>③ 一共<strong>6个</strong>，选 C。'
          },
          {
            question: '一个数的倍数的个数是______',
            options: ['有限的', '无限的', '没有', '不确定'],
            answer: 1,
            hint: '一个数乘以1、2、3、4……可以一直乘下去吗？',
            explanation: '<strong>解题步骤：</strong><br>① 一个数的倍数：这个数 × 1, × 2, × 3, × 4……<br>② 自然数有无限多个，所以一个数的倍数也有<strong>无限个</strong>。<br>③ 选 B。<br><div class="tip-box">因数的个数是有限的，倍数的个数是无限的</div>'
          },
          {
            question: '下面哪个数既是3的倍数又是5的倍数？',
            options: ['10', '15', '20', '25'],
            answer: 1,
            hint: '是3的倍数看各位和，是5的倍数看个位。',
            explanation: '<strong>解题步骤：</strong><br>① 逐项判断：<br>　A. 10 → 1+0=1不是3倍数 ❌<br>　B. <strong>15 → 1+5=6是3倍数，个位5是5倍数</strong> ✅<br>　C. 20 → 2+0=2不是3倍数 ❌<br>　D. 25 → 2+5=7不是3倍数 ❌<br>② 所以选 B。'
          },
          {
            question: '24和36的公因数里最大的一个是多少？',
            options: ['6', '8', '12', '24'],
            answer: 2,
            hint: '分别列出24和36的因数，再找共同的因数中最大的那个。',
            explanation: '<strong>解题步骤：</strong><br>① 24的因数：1, 2, 3, 4, 6, 8, 12, 24<br>② 36的因数：1, 2, 3, 4, 6, 9, 12, 18, 36<br>③ 公因数：1, 2, 3, 4, 6, <strong>12</strong><br>④ 最大公因数是<strong>12</strong>，选 C。<br><div class="tip-box">最大公因数：几个数共有的因数中最大的一个</div>'
          },
          {
            question: '下面哪个数是2和3的公倍数？',
            options: ['8', '9', '12', '15'],
            answer: 2,
            hint: '公倍数要同时满足两个条件：是2的倍数且是3的倍数。',
            explanation: '<strong>解题步骤：</strong><br>① 是2的倍数看个位：8（个位8✅），12（个位2✅）<br>② 是3的倍数看各位和：<br>　A. 8 → 8 ❌<br>　B. 9 → 9是3倍数但不是2倍数❌<br>　C. <strong>12 → 1+2=3是3倍数，个位2是2倍数</strong> ✅<br>　D. 15 → 1+5=6是3倍数，但个位5不是2倍数❌<br>③ 所以选 C。'
          },
          {
            question: '50以内8的倍数有几个？',
            options: ['5个', '6个', '7个', '8个'],
            answer: 1,
            hint: '从8×1开始算，一直算到超过50为止。',
            explanation: '<strong>解题步骤：</strong><br>① 列出倍数：8×1=8, 8×2=16, 8×3=24, 8×4=32, 8×5=40, 8×6=48<br>② 8×7=56 ＞ 50，停止。<br>③ 50以内8的倍数有<strong>6个</strong>，选 B。'
          },
          {
            question: '一个数既是2的倍数又是5的倍数，这个数的个位一定是几？',
            options: ['0', '2', '5', '8'],
            answer: 0,
            hint: '2的倍数个位是偶数，5的倍数个位是0或5，同时成立呢？',
            explanation: '<strong>解题步骤：</strong><br>① 2的倍数特征：个位是<strong>0, 2, 4, 6, 8</strong><br>② 5的倍数特征：个位是<strong>0, 5</strong><br>③ 同时满足：个位既是偶数又是0或5 → 个位是<strong>0</strong><br>④ 选 A。<br><div class="tip-box">个位是0的数既是2的倍数也是5的倍数</div>'
          },
          {
            question: '36的因数中，最大的因数是几？',
            options: ['6', '12', '18', '36'],
            answer: 3,
            hint: '一个数最大的因数就是它本身。',
            explanation: '<strong>解题步骤：</strong><br>① 36的因数有：1, 2, 3, 4, 6, 9, 12, 18, 36<br>② 其中最大的因数是它本身：<strong>36</strong><br>③ 选 D。<br><div class="tip-box">一个数最小的因数是1，最大的因数是它本身</div>'
          },
          {
            question: '下面哪个数是3的倍数？',
            options: ['47', '51', '53', '55'],
            answer: 1,
            hint: '用3的倍数特征：各位数字之和能被3整除。',
            explanation: '<strong>解题步骤：</strong><br>① 逐项计算各位和：<br>　A. 47 → 4+7=11 ❌<br>　B. <strong>51 → 5+1=6</strong> ✅<br>　C. 53 → 5+3=8 ❌<br>　D. 55 → 5+5=10 ❌<br>② 所以<strong>51</strong>是3的倍数，选 B。'
          }
        ]
      },

      // ====== 第六单元：认识更大的数 ======
      {
        id: 'm6',
        title: '认识更大的数',
        emoji: '🔢',
        description: '认识万以上的数，学会读、写和求近似数',
        lessons: [
          {
            title: '认识更大的数',
            content: `
              <p>我们已经学过个、十、百、千、万，今天来认识更大的数！</p>
              <div class="tip-box">
                💡 <strong>数位顺序：</strong><br>
                个、十、百、千、万、十万、百万、千万、亿……
              </div>
              <div class="example-box">
                <strong>📝 例如：</strong><br>
                3 0000 读作：<strong>三万</strong><br>
                12 5000 读作：<strong>十二万五千</strong><br>
                注意：每级末尾的0都不读哦！
              </div>
              <p><strong>近似数：</strong>用"四舍五入"法求一个数的近似数。<br>
              比如 12450 ≈ <strong>12000</strong>（省略万位后面的尾数）</p>
            `
          }
        ],
        questions: [
          {
            question: '10个一万是多少？',
            options: ['十万', '一百万', '一千万', '一亿'],
            answer: 0,
            hint: '10个一千是一万，那么10个一万是多少？',
            explanation: '<strong>解题步骤：</strong><br>① 一万 = 10000<br>② 10个一万 = 10 × 10000 = <strong>100000</strong><br>③ 100000读作<strong>十万</strong>，选 A。<br><div class="tip-box">每相邻两个计数单位之间的进率是10</div>'
          },
          {
            question: '30000读作什么？',
            options: ['三十万', '三万', '三百万', '三千'],
            answer: 1,
            hint: '先看清3在哪个数位上，末尾的0不读。',
            explanation: '<strong>解题步骤：</strong><br>① 30000中，3在<strong>万位</strong>上，表示3个万。<br>② 个级上的四个0在末尾，都不读。<br>③ 所以读作<strong>三万</strong>，选 B。'
          },
          {
            question: '一个数的最高位是千万位，这个数是几位数？',
            options: ['六位数', '七位数', '八位数', '九位数'],
            answer: 2,
            hint: '从个位开始数：个、十、百、千、万、十万、百万、千万。',
            explanation: '<strong>解题步骤：</strong><br>① 从右往左数数位：个位（第1位）、十位（第2位）……<br>② 万位（第5位）、十万位（第6位）、百万位（第7位）、<strong>千万位（第8位）</strong><br>③ 所以这个数是<strong>八位数</strong>，选 C。'
          },
          {
            question: '56300省略万位后面的尾数约是多少？',
            options: ['56000', '60000', '56300', '50000'],
            answer: 1,
            hint: '省略万位后面的尾数，要看千位，用四舍五入法。',
            explanation: '<strong>解题步骤：</strong><br>① 56300要省略万位后面的尾数，重点看<strong>千位</strong>。<br>② 千位是6，6 ≥ 5，向前一位（万位）进1。<br>③ 5万 + 1万 = <strong>6万</strong>，约等于 <strong>60000</strong>，选 B。<br><div class="tip-box">四舍五入：千位≥5进1，千位＜5舍去</div>'
          },
          {
            question: '下面哪个数最大？',
            options: ['9876', '10000', '9999', '10999'],
            answer: 3,
            hint: '先比位数，位数多的数大；位数相同再从高位比。',
            explanation: '<strong>解题步骤：</strong><br>① 比位数：9876和9999是<strong>四位数</strong>，10000和10999是<strong>五位数</strong>。<br>② 五位数 > 四位数，所以排除A和C。<br>③ 比较10000和10999：万位相同，千位0＜0……等等，10999比10000大。<br>④ 所以<strong>10999最大</strong>，选 D。'
          },
          {
            question: '10个十万是多少？',
            options: ['十万', '一百万', '一千万', '一亿'],
            answer: 1,
            hint: '10个十万等于100万，也就是多少？',
            explanation: '<strong>解题步骤：</strong><br>① 十万 = 100000<br>② 10个十万 = 10 × 100000 = <strong>1000000</strong><br>③ 1000000读作<strong>一百万</strong>，选 B。'
          },
          {
            question: '450000读作什么？',
            options: ['四十五万', '四百五十万', '四千五百万', '四万五千'],
            answer: 0,
            hint: '先分级：45丨0000，万级是45，读作"四十五万"。',
            explanation: '<strong>解题步骤：</strong><br>① 从右向左每四位一级：45丨0000<br>② 万级是<strong>45</strong>，读作"四十五"加"万"字。<br>③ 个级四个0，都在末尾，不读。<br>④ 所以读作<strong>四十五万</strong>，选 A。'
          },
          {
            question: '一个八位数，它的最高位是什么位？',
            options: ['万位', '十万位', '百万位', '千万位'],
            answer: 3,
            hint: '从个位开始数：个、十、百、千、万、十万、百万、千万。第八位是？',
            explanation: '<strong>解题步骤：</strong><br>① 数位从右往左：个位→十位→百位→千位→万位→十万位→百万位→<strong>千万位</strong><br>② 八位数的最高位是第8位，即<strong>千万位</strong>。<br>③ 所以选 D。'
          },
          {
            question: '58000省略万位后面的尾数约是多少？',
            options: ['50000', '58000', '60000', '70000'],
            answer: 2,
            hint: '省略万位后面的尾数，看千位，用四舍五入法。',
            explanation: '<strong>解题步骤：</strong><br>① 58000省略万位后面的尾数，看<strong>千位</strong>。<br>② 千位是8，8 ≥ 5，向前一位（万位）进1。<br>③ 5万 + 1万 = <strong>6万</strong>，约等于 <strong>60000</strong>，选 C。'
          },
          {
            question: '下面哪个数读作"三百二十万"？',
            options: ['3200', '32000', '320000', '3200000'],
            answer: 3,
            hint: '"三百二十万"写作320后面加4个0，即3200000。',
            explanation: '<strong>解题步骤：</strong><br>① 分别读出每个数：<br>　A. 3200 → 三千二百 ❌<br>　B. 32000 → 三万二千 ❌<br>　C. 320000 → 三十二万 ❌<br>　D. <strong>3200000 → 三百二十万</strong> ✅<br>② 所以选 D。'
          },
          {
            question: '100个一万是多少？',
            options: ['十万', '一百万', '一千万', '一亿'],
            answer: 1,
            hint: '10个一万是十万，100个一万就是10个十万。',
            explanation: '<strong>解题步骤：</strong><br>① 10个一万 = <strong>十万</strong><br>② 100个一万 = 10 × 十万 = <strong>一百万</strong><br>③ 所以选 B。<br><div class="tip-box">100个一万 = 一百万，记住这个换算关系！</div>'
          },
          {
            question: '125000读作什么？',
            options: ['十二万五千', '一百二十五万', '一千二百五十', '一万二千五百'],
            answer: 0,
            hint: '将125000分级：12丨5000。',
            explanation: '<strong>解题步骤：</strong><br>① 125000分级：<strong>12</strong>丨5000<br>② 万级12读"十二"，加"万"字。<br>③ 个级5000读"五千"。<br>④ 合起来读作<strong>十二万五千</strong>，选 A。'
          },
          {
            question: '最大的五位数加1是多少？',
            options: ['99999', '100000', '10000', '1000000'],
            answer: 1,
            hint: '最大的五位数是99999，加1会变成几位数？',
            explanation: '<strong>解题步骤：</strong><br>① 最大的五位数是<strong>99999</strong>。<br>② 99999 + 1 = <strong>100000</strong>。<br>③ 100000是<strong>六位数</strong>，读作"十万"。<br>④ 所以选 B。<br><div class="tip-box">99999 + 1 = 100000，最大的五位数加1就是最小的六位数</div>'
          },
          {
            question: '70300省略万位后面的尾数约是多少？',
            options: ['70000', '70300', '71000', '80000'],
            answer: 0,
            hint: '省略万位后面的尾数，看千位，千位是0＜5，舍去。',
            explanation: '<strong>解题步骤：</strong><br>① 70300省略万位后面的尾数，看<strong>千位</strong>。<br>② 千位是0，0 ＜ 5，所以<strong>舍去</strong>。<br>③ 约等于 <strong>70000</strong>（即7万），选 A。'
          },
          {
            question: '一个数由5个万和3个千组成，这个数是多少？',
            options: ['5003000', '53000', '50300', '50003000'],
            answer: 1,
            hint: '5个万是50000，3个千是3000，合起来是多少？',
            explanation: '<strong>解题步骤：</strong><br>① 5个万 = <strong>50000</strong><br>② 3个千 = <strong>3000</strong><br>③ 50000 + 3000 = <strong>53000</strong><br>④ 所以选 B。<br><div class="tip-box">写数时注意0的个数：5个万写5后面加4个0</div>'
          }
        ]
      },

      // ====== 第七单元：垂线和平行线 ======
      {
        id: 'm7',
        title: '垂线和平行线',
        emoji: '📐',
        description: '认识垂线和平行线，学会画垂线和平行线',
        lessons: [
          {
            title: '垂线和平行线',
            content: `
              <p><strong>垂线：</strong>两条直线相交成直角时，这两条直线互相垂直。</p>
              <p>其中一条直线叫做另一条直线的垂线。</p>
              <p><strong>平行线：</strong>在同一平面内，不相交的两条直线叫做平行线。</p>
              <div class="tip-box">
                💡 生活中的例子：<br>
                🔹 垂直：墙角、门窗的边角<br>
                🔹 平行：铁轨、书本上下边、斑马线
              </div>
            `
          }
        ],
        questions: [
          {
            question: '两条直线相交成直角时，这两条直线______。',
            options: ['互相平行', '互相垂直', '不相交', '长度相等'],
            answer: 1,
            hint: '直角是多少度？两条线相交成90度时叫什么？',
            explanation: '<strong>解题步骤：</strong><br>① 两条直线相交会形成角。<br>② 如果相交形成的角是<strong>直角（90°）</strong>，这两条直线就<strong>互相垂直</strong>。<br>③ 所以选 B。<br><div class="tip-box">垂直的标志：相交成直角（90°）</div>'
          },
          {
            question: '下面哪组是平行线的例子？',
            options: ['铁路的两条轨道', '剪刀的两条刀刃', '时钟的时针和分针', '相邻的两面墙的墙角线'],
            answer: 0,
            hint: '平行线是不相交的直线，想想生活中哪些是永远不相交的？',
            explanation: '<strong>解题步骤：</strong><br>① 逐项判断：<br>　A. <strong>铁路的两条轨道</strong>——永远不会相交 ✅<br>　B. 剪刀的两条刀刃——会相交 ❌<br>　C. 时钟的时针和分针——会相交 ❌<br>　D. 相邻两面墙的墙角线——相交于墙角 ❌<br>② 所以选 A。'
          },
          {
            question: '两条平行线之间的距离怎么样？',
            options: ['处处相等', '越来越远', '越来越近', '有时相等有时不等'],
            answer: 0,
            hint: '平行线是永远不相交的直线，它们之间的宽度会变吗？',
            explanation: '<strong>解题步骤：</strong><br>① 平行线的定义：在同一平面内不相交的两条直线。<br>② 不相交意味着它们始终保持相同的距离。<br>③ 所以平行线之间的距离<strong>处处相等</strong>，选 A。<br><div class="tip-box">铁轨就是最好的例子：两条铁轨之间距离始终相同</div>'
          },
          {
            question: '过直线上一点画这条直线的垂线，可以画几条？',
            options: ['0条', '1条', '2条', '无数条'],
            answer: 1,
            hint: '过直线上一点，能画几条线跟它垂直？动手画一画。',
            explanation: '<strong>解题步骤：</strong><br>① 过直线上一点，只能作<strong>一条</strong>直线与已知直线垂直。<br>② 用三角板的直角边靠住已知直线，另一条直角边过该点，只能画一条。<br>③ 所以选 B。<br><div class="tip-box">过直线上一点，有且只有一条垂线</div>'
          },
          {
            question: '下面哪个图形中有互相垂直的线段？',
            options: ['三角形', '长方形', '圆形', '平行四边形'],
            answer: 1,
            hint: '哪个图形的角是直角？直角的两条边就是互相垂直的。',
            explanation: '<strong>解题步骤：</strong><br>① 互相垂直需要相交成<strong>直角（90°）</strong>。<br>② 长方形的四个角都是<strong>直角</strong>，相邻两边互相垂直。<br>③ 三角形和平行四边形的角不一定是直角，圆形没有角。<br>④ 所以选 B。'
          },
          {
            question: '在同一平面内，不相交的两条直线叫做______',
            options: ['垂线', '平行线', '相交线', '线段'],
            answer: 1,
            hint: '这是平行线的标准定义。',
            explanation: '<strong>解题步骤：</strong><br>① 平行线的定义：在同一平面内，<strong>不相交</strong>的两条直线叫做平行线。<br>② 关键词：同一平面、不相交、直线。<br>③ 所以选 B。<br><div class="tip-box">平行线定义三要素：同一平面、不相交、直线</div>'
          },
          {
            question: '用三角板画垂线时，应该用三角板的哪个角？',
            options: ['锐角', '直角', '钝角', '任意角'],
            answer: 1,
            hint: '垂线需要两条线互相垂直，垂直就是成什么角？',
            explanation: '<strong>解题步骤：</strong><br>① 垂线要求两条直线相交成<strong>直角</strong>。<br>② 三角板上有一个<strong>直角</strong>，用来画垂线最合适。<br>③ 用直角的一边对齐已知直线，另一边就是垂线。<br>④ 所以选 B。'
          },
          {
            question: '长方形的相邻两条边互相______',
            options: ['平行', '垂直', '相等', '重合'],
            answer: 1,
            hint: '长方形的每个角是多少度？相邻两边组成什么角？',
            explanation: '<strong>解题步骤：</strong><br>① 长方形有4个角，每个角都是<strong>直角（90°）</strong>。<br>② 相邻的两条边相交成直角，所以它们互相<strong>垂直</strong>。<br>③ 所以选 B。<br><div class="tip-box">长方形特点：对边平行，邻边垂直</div>'
          },
          {
            question: '过直线外一点，可以画几条直线与已知直线平行？',
            options: ['0条', '1条', '2条', '无数条'],
            answer: 1,
            hint: '这是一个重要的几何定理，和过一点画垂线类似。',
            explanation: '<strong>解题步骤：</strong><br>① 这是平行公理：过直线外一点，<strong>有且只有一条</strong>直线与已知直线平行。<br>② 所以选 B。<br><div class="tip-box">平行公理：过直线外一点，有且只有一条直线与已知直线平行</div>'
          },
          {
            question: '下面哪种说法是正确的？',
            options: ['平行线不相交', '平行线相交', '平行线有时相交', '平行线一定垂直'],
            answer: 0,
            hint: '回想平行线的定义。',
            explanation: '<strong>解题步骤：</strong><br>① <strong>平行线不相交</strong>——这是平行线的定义，✅正确<br>② 平行线相交——与定义矛盾，❌<br>③ 平行线有时相交——永远不相交，❌<br>④ 平行线一定垂直——垂直是相交成直角，而平行不相交，❌<br>⑤ 所以选 A。'
          },
          {
            question: '三角板上有几个直角？',
            options: ['0个', '1个', '2个', '3个'],
            answer: 1,
            hint: '拿一个三角板来看看，数一数它有几个直角。',
            explanation: '<strong>解题步骤：</strong><br>① 常用的三角板有两种：45°-45°-90° 和 30°-60°-90°。<br>② 它们都有一个直角和两个锐角。<br>③ 所以三角板上有 <strong>1个直角</strong>，选 B。'
          },
          {
            question: '在同一平面内，两条直线可能的位置关系是什么？',
            options: ['平行或垂直', '平行或相交', '垂直或相交', '只有平行'],
            answer: 1,
            hint: '两条直线要么相交，要么不相交。不相交就叫什么？',
            explanation: '<strong>解题步骤：</strong><br>① 两条直线在同一平面内，只有两种位置关系：<strong>平行</strong>或<strong>相交</strong>。<br>② 垂直是相交的一种特殊情况（相交成直角）。<br>③ 所以正确的说法是<strong>平行或相交</strong>，选 B。<br><div class="tip-box">同一平面内两条直线的关系：平行或相交（垂直是相交的特例）</div>'
          },
          {
            question: '长方形的对边互相______',
            options: ['平行', '垂直', '相交', '重合'],
            answer: 0,
            hint: '长方形的两组对边不会相交，它们是什么关系？',
            explanation: '<strong>解题步骤：</strong><br>① 长方形的两组对边延长后永远不会相交。<br>② 所以长方形的对边互相<strong>平行</strong>，选 A。<br><div class="tip-box">长方形特点：对边平行且相等，邻边互相垂直</div>'
          },
          {
            question: '过直线外一点画已知直线的垂线，可以画几条？',
            options: ['0条', '1条', '2条', '无数条'],
            answer: 1,
            hint: '过直线外一点，能不能画垂线？能画几条？',
            explanation: '<strong>解题步骤：</strong><br>① 过直线外一点，有且只有<strong>一条</strong>直线与已知直线垂直。<br>② 这和过直线上一点画垂线是一样的结论。<br>③ 所以选 B。<br><div class="tip-box">无论是直线上还是直线外一点，都只能画一条垂线</div>'
          },
          {
            question: '下面哪一组线是互相垂直的？',
            options: ['铁轨', '黑板的相邻两边', '斑马线', '桌子的对边'],
            answer: 1,
            hint: '垂直就是相交成直角，哪组的夹角是90度？',
            explanation: '<strong>解题步骤：</strong><br>① A. 铁轨——互相平行，不是垂直 ❌<br>② B. <strong>黑板的相邻两边</strong>——相交成直角，互相垂直 ✅<br>③ C. 斑马线——互相平行 ❌<br>④ D. 桌子的对边——互相平行 ❌<br>⑤ 所以选 B。'
          }
        ]
      },

      // ====== 第八单元：平均数和条形统计图 ======
      {
        id: 'm8',
        title: '平均数和条形统计图',
        emoji: '📊',
        description: '学会计算平均数，认识条形统计图',
        lessons: [
          {
            title: '平均数和条形统计图',
            content: `
              <p><strong>平均数：</strong>一组数据的和除以数据的个数，得到的数叫做平均数。</p>
              <p>平均数能反映一组数据的整体水平。</p>
              <div class="example-box">
                <strong>📝 例如：</strong><br>
                小红数学三次测验成绩是：92分、96分、94分<br>
                平均分 = (92 + 96 + 94) ÷ 3 = 282 ÷ 3 = <strong>94分</strong>
              </div>
              <div class="tip-box">
                💡 <strong>条形统计图：</strong>用直条的长短来表示数量多少的统计图，能直观地看出数量的多少。
              </div>
            `
          }
        ],
        questions: [
          {
            question: '小明4天读书的页数：20页、24页、18页、22页，平均每天读多少页？',
            options: ['20页', '21页', '22页', '24页'],
            answer: 1,
            hint: '平均数 = 总数 ÷ 份数。先把4天的页数加起来。',
            explanation: '<strong>解题步骤：</strong><br>① 先算总页数：20 + 24 + 18 + 22 = <strong>84页</strong><br>② 再算平均每天读多少：84页 ÷ 4天 = <strong>21页</strong><br>③ 所以选 B。<br><div class="tip-box">平均数 = 总数 ÷ 份数</div>'
          },
          {
            question: '平均数反映了一组数据的什么？',
            options: ['最大值', '最小值', '整体水平', '总数'],
            answer: 2,
            hint: '平均数代表的是数据的"平均水平"，不是某个极端值。',
            explanation: '<strong>解题步骤：</strong><br>① 平均数是一组数据的"代表值"，反映了数据的<strong>整体水平</strong>。<br>② 它比最大值小，比最小值大，居中代表整体。<br>③ 所以选 C。'
          },
          {
            question: '3个数的平均数是15，这3个数的和是多少？',
            options: ['15', '30', '45', '60'],
            answer: 2,
            hint: '总数 = 平均数 × 份数。',
            explanation: '<strong>解题步骤：</strong><br>① 已知平均数 = 15，份数 = 3<br>② 总数 = 平均数 × 份数 = 15 × 3 = <strong>45</strong><br>③ 所以选 C。<br><div class="tip-box">总数 = 平均数 × 份数</div>'
          },
          {
            question: '条形统计图中的直条越长，表示什么？',
            options: ['数量越多', '数量越少', '颜色越深', '越不重要'],
            answer: 0,
            hint: '直条的高度代表数量大小。',
            explanation: '<strong>解题步骤：</strong><br>① 条形统计图中，每个直条的高度表示对应项目的数量。<br>② 直条越<strong>长（高）</strong>，表示这个项目的数量越<strong>多</strong>。<br>③ 所以选 A。'
          },
          {
            question: '一组数据为8, 10, 12，它们的平均数是多少？',
            options: ['8', '10', '11', '12'],
            answer: 1,
            hint: '先求和，再除以个数。',
            explanation: '<strong>解题步骤：</strong><br>① 先求和：8 + 10 + 12 = <strong>30</strong><br>② 共有3个数，平均数 = 30 ÷ 3 = <strong>10</strong><br>③ 所以选 B。'
          },
          {
            question: '某小组5人身高：140cm、145cm、138cm、142cm、150cm，平均身高是多少？',
            options: ['141cm', '143cm', '145cm', '147cm'],
            answer: 1,
            hint: '先把5个人的身高全部加起来，再除以5。',
            explanation: '<strong>解题步骤：</strong><br>① 先求和：140 + 145 + 138 + 142 + 150 = <strong>715cm</strong><br>② 再除以人数：715 ÷ 5 = <strong>143cm</strong><br>③ 平均身高是 <strong>143cm</strong>，选 B。'
          },
          {
            question: '平均数应该介于______',
            options: ['最大值和最小值之间', '只有最大值', '只有最小值', '不确定'],
            answer: 0,
            hint: '平均数是"移多补少"后的结果，思考一下它在什么范围内。',
            explanation: '<strong>解题步骤：</strong><br>① 平均数是通过"移多补少"得到的。<br>② 它一定会比最大的数<strong>小</strong>，比最小的数<strong>大</strong>。<br>③ 所以平均数介于<strong>最大值和最小值之间</strong>，选 A。'
          },
          {
            question: '条形统计图可以清楚地看出______',
            options: ['数量的多少', '数量的变化趋势', '数量的增减', '各部分占总数的百分比'],
            answer: 0,
            hint: '回想一下条形统计图的样子，直条的高度能直观反映什么？',
            explanation: '<strong>解题步骤：</strong><br>① 条形统计图用直条的长短来代表数量。<br>② 它最突出的优点是能直观地看出<strong>数量的多少</strong>。<br>③ 所以选 A。<br><div class="tip-box">条形统计图看数量多少最直观；折线统计图才看变化趋势哦！</div>'
          },
          {
            question: '小红四次考试成绩为85、92、88、91，平均分是多少？',
            options: ['88分', '89分', '90分', '91分'],
            answer: 1,
            hint: '先算四次的总分，再除以4。',
            explanation: '<strong>解题步骤：</strong><br>① 先算总分：85 + 92 + 88 + 91 = <strong>356分</strong><br>② 再算平均分：356 ÷ 4 = <strong>89分</strong><br>③ 所以选 B。'
          },
          {
            question: '5个数的平均数是20，其中4个数的和是76，第5个数是多少？',
            options: ['24', '20', '25', '30'],
            answer: 0,
            hint: '先用平均数算出5个数的总和，再减去已知的4个数的和。',
            explanation: '<strong>解题步骤：</strong><br>① 先算5个数的总和：20 × 5 = <strong>100</strong><br>② 已知4个数的和是76，第5个数 = 100 - 76 = <strong>24</strong><br>③ 所以选 A。<br><div class="tip-box">总数 = 平均数 × 份数，缺哪个就减哪个</div>'
          },
          {
            question: '小华跳绳3次，分别跳了85下、90下、95下，平均跳了多少下？',
            options: ['85下', '88下', '90下', '92下'],
            answer: 2,
            hint: '把三次跳的次数加起来，再除以3。',
            explanation: '<strong>解题步骤：</strong><br>① 先算总次数：85 + 90 + 95 = <strong>270下</strong><br>② 再算平均数：270 ÷ 3 = <strong>90下</strong><br>③ 所以选 C。'
          },
          {
            question: '条形统计图是用什么来表示数量的？',
            options: ['点的位置', '直条的长短', '面积的大小', '颜色的深浅'],
            answer: 1,
            hint: '条形统计图的"条"就是直条，它的什么特征表示数量？',
            explanation: '<strong>解题步骤：</strong><br>① 条形统计图中，每个项目都用一个直条来表示。<br>② 直条的<strong>长短（高低）</strong>反映了数量的多少。<br>③ 所以选 B。'
          },
          {
            question: '一组数据是6, 8, 10, 12, 14，它们的平均数是多少？',
            options: ['8', '9', '10', '11'],
            answer: 2,
            hint: '先求和，再除以数据的个数（5个）。',
            explanation: '<strong>解题步骤：</strong><br>① 求和：6 + 8 + 10 + 12 + 14 = <strong>50</strong><br>② 除以个数：50 ÷ 5 = <strong>10</strong><br>③ 所以选 C。<br><div class="tip-box">也可以观察：这些数是对称的，中间的数10就是平均数！</div>'
          },
          {
            question: '小明语文和数学的平均分是93分，语文考了91分，数学考了多少分？',
            options: ['92分', '93分', '94分', '95分'],
            answer: 3,
            hint: '先算出两科的总分，再减去语文的分数。',
            explanation: '<strong>解题步骤：</strong><br>① 先算两科总分：93 × 2 = <strong>186分</strong><br>② 数学分 = 总分 - 语文分 = 186 - 91 = <strong>95分</strong><br>③ 所以选 D。<br><div class="tip-box">已知平均数和其中一个数，求另一个数：总数 - 已知数</div>'
          },
          {
            question: '条形统计图能直观地看出什么？',
            options: ['数量的多少', '数量的变化趋势', '各部分比例', '以上都可以'],
            answer: 0,
            hint: '条形统计图最大的特点是什么？看一眼就能知道什么？',
            explanation: '<strong>解题步骤：</strong><br>① 条形统计图用直条的长短表示数量。<br>② 通过直条的高低对比，能<strong>直观地看出数量的多少</strong>。<br>③ 所以选 A。<br><div class="tip-box">条形统计图 ➔ 看数量多少<br>折线统计图 ➔ 看变化趋势<br>扇形统计图 ➔ 看各部分比例</div>'
          }
        ]
      },

      // ====== 第九单元：探索乐园 ======
      {
        id: 'm9',
        title: '探索乐园',
        emoji: '🎯',
        description: '植树问题和数图形问题，培养数学思维',
        lessons: [
          {
            title: '植树问题和数图形',
            content: `
              <p><strong>植树问题：</strong></p>
              <p>🔹 两端都栽：棵数 = 段数 + 1</p>
              <p>🔹 两端都不栽：棵数 = 段数 - 1</p>
              <div class="example-box">
                <strong>📝 例如：</strong><br>
                在一条20米的小路一边每隔5米栽一棵树（两端都栽），<br>
                段数 = 20 ÷ 5 = 4（段）<br>
                棵数 = 4 + 1 = <strong>5（棵）</strong>
              </div>
              <p><strong>数图形：</strong>按一定顺序数，不重复不遗漏。</p>
            `
          }
        ],
        questions: [
          {
            question: '在一条30米的小路一边每隔5米栽一棵树（两端都栽），需要多少棵树？',
            options: ['5棵', '6棵', '7棵', '8棵'],
            answer: 2,
            hint: '两端都栽时，棵数 = 段数 + 1。先算有几段。',
            explanation: '<strong>解题步骤：</strong><br>① 先算段数：30米 ÷ 5米 = <strong>6段</strong><br>② 两端都栽，棵数 = 段数 + 1：6 + 1 = <strong>7棵</strong><br>③ 所以选 C。<br><div class="tip-box">两端都栽树：棵数 = 段数 + 1</div>'
          },
          {
            question: '两端都栽树时，棵数比段数多几？',
            options: ['多0', '多1', '多2', '多3'],
            answer: 1,
            hint: '在一条线段上两端都栽树，举例子或画个图试试。',
            explanation: '<strong>解题步骤：</strong><br>① 举例：在10米的小路上每隔5米栽一棵（两端都栽）。<br>② 段数：10 ÷ 5 = <strong>2段</strong><br>③ 画图：树—|—树—|—树，共有<strong>3棵树</strong><br>④ 所以棵数比段数多<strong>1</strong>，选 B。<br><div class="tip-box">两端都栽：棵数 = 段数 + 1，棵数比段数多1</div>'
          },
          {
            question: '在一条12米的小路一边每隔3米栽一棵树（两端都不栽），需要多少棵树？',
            options: ['2棵', '3棵', '4棵', '5棵'],
            answer: 1,
            hint: '两端都不栽时，棵数 = 段数 - 1。',
            explanation: '<strong>解题步骤：</strong><br>① 先算段数：12米 ÷ 3米 = <strong>4段</strong><br>② 两端都不栽，棵数 = 段数 - 1：4 - 1 = <strong>3棵</strong><br>③ 所以选 B。<br><div class="tip-box">两端都不栽：棵数 = 段数 - 1</div>'
          },
          {
            question: '一段木头锯成4段，需要锯几次？',
            options: ['2次', '3次', '4次', '5次'],
            answer: 1,
            hint: '锯木头问题：锯的次数比段数少1。',
            explanation: '<strong>解题步骤：</strong><br>① 锯木头和植树问题类似。<br>② 锯成4段，需要锯 <strong>4 - 1 = 3次</strong><br>③ 所以选 B。<br><div class="tip-box">锯的次数 = 段数 - 1（锯一次变两段，再锯一次变三段）</div>'
          },
          {
            question: '广场一周长40米，每隔8米放一盆花（封闭图形），需要几盆花？',
            options: ['4盆', '5盆', '6盆', '8盆'],
            answer: 1,
            hint: '封闭图形（圆形、方形等）放花，棵数 = 段数，不加也不减。',
            explanation: '<strong>解题步骤：</strong><br>① 封闭图形中，不需要加1也不需要减1：棵数 = 段数<br>② 段数：40米 ÷ 8米 = <strong>5段</strong><br>③ 所以需要 <strong>5盆花</strong>，选 B。<br><div class="tip-box">封闭图形：棵数 = 周长 ÷ 间隔</div>'
          },
          {
            question: '在一条60米的小路一边每隔6米栽一棵树（两端都栽），需要多少棵树？',
            options: ['9棵', '10棵', '11棵', '12棵'],
            answer: 2,
            hint: '先算段数，再用两端都栽的公式。',
            explanation: '<strong>解题步骤：</strong><br>① 先算段数：60米 ÷ 6米 = <strong>10段</strong><br>② 两端都栽：10 + 1 = <strong>11棵</strong><br>③ 所以选 C。'
          },
          {
            question: '把一根绳子剪成5段，需要剪几次？',
            options: ['3次', '4次', '5次', '6次'],
            answer: 1,
            hint: '剪的次数比段数少1。',
            explanation: '<strong>解题步骤：</strong><br>① 剪成5段，剪的次数 = 段数 - 1<br>② 5 - 1 = <strong>4次</strong><br>③ 所以选 B。<br><div class="tip-box">剪的次数 = 段数 - 1（和锯木头道理一样）</div>'
          },
          {
            question: '两端都不栽树时，棵数比段数少几？',
            options: ['少0', '少1', '少2', '少3'],
            answer: 1,
            hint: '画一条线，两端不栽树，数一数段数和棵数的关系。',
            explanation: '<strong>解题步骤：</strong><br>① 举例：在15米的小路上每隔5米栽一棵（两端都不栽）。<br>② 段数：15 ÷ 5 = <strong>3段</strong><br>③ 画图：|—树—|—树—|（两头不栽），只有<strong>2棵树</strong><br>④ 所以棵数比段数少<strong>1</strong>，选 B。<br><div class="tip-box">两端都不栽：棵数 = 段数 - 1</div>'
          },
          {
            question: '在一条36米的小路一边每隔4米放一盆花（两端都放），需要多少盆花？',
            options: ['8盆', '9盆', '10盆', '11盆'],
            answer: 2,
            hint: '两端都放，盆数 = 段数 + 1。',
            explanation: '<strong>解题步骤：</strong><br>① 先算段数：36米 ÷ 4米 = <strong>9段</strong><br>② 两端都放：9 + 1 = <strong>10盆</strong><br>③ 所以选 C。'
          },
          {
            question: '安装路灯，路长100米，每隔10米装一盏（两端都装），需要装多少盏？',
            options: ['9盏', '10盏', '11盏', '12盏'],
            answer: 2,
            hint: '两端都装，盏数 = 段数 + 1。',
            explanation: '<strong>解题步骤：</strong><br>① 先算段数：100米 ÷ 10米 = <strong>10段</strong><br>② 两端都装：10 + 1 = <strong>11盏</strong><br>③ 所以选 C。'
          },
          {
            question: '一条走廊长24米，每隔3米放一盆花（两端都放），一共需要几盆花？',
            options: ['7盆', '8盆', '9盆', '10盆'],
            answer: 2,
            hint: '两端都放，先算段数，再加1。',
            explanation: '<strong>解题步骤：</strong><br>① 段数：24米 ÷ 3米 = <strong>8段</strong><br>② 两端都放：8 + 1 = <strong>9盆</strong><br>③ 所以选 C。'
          },
          {
            question: '一根木头锯成6段，需要锯几次？',
            options: ['4次', '5次', '6次', '7次'],
            answer: 1,
            hint: '锯的次数总比段数少1。',
            explanation: '<strong>解题步骤：</strong><br>① 锯成6段，锯的次数 = 段数 - 1<br>② 6 - 1 = <strong>5次</strong><br>③ 所以选 B。<br><div class="tip-box">想一下：锯一次变2段，锯两次变3段，锯几次变6段？答案就是5次！</div>'
          },
          {
            question: '在一条48米的小路一旁每隔6米栽一棵树（两端都栽），需要多少棵树？',
            options: ['7棵', '8棵', '9棵', '10棵'],
            answer: 2,
            hint: '先算段数，再用两端都栽的公式：棵数 = 段数 + 1。',
            explanation: '<strong>解题步骤：</strong><br>① 段数：48米 ÷ 6米 = <strong>8段</strong><br>② 两端都栽：8 + 1 = <strong>9棵</strong><br>③ 所以选 C。'
          },
          {
            question: '在周长是32米的圆形花坛周围每隔4米放一盆花，需要几盆花？',
            options: ['6盆', '7盆', '8盆', '9盆'],
            answer: 2,
            hint: '封闭图形中，盆数 = 周长 ÷ 间隔，不加也不减。',
            explanation: '<strong>解题步骤：</strong><br>① 封闭图形中，棵数 = 段数 = 周长 ÷ 间隔<br>② 32米 ÷ 4米 = <strong>8盆</strong><br>③ 所以选 C。<br><div class="tip-box">封闭图形（圆形、方形、三角形等）：棵数 = 周长 ÷ 间隔</div>'
          },
          {
            question: '从1楼走到5楼需要上几层楼梯？',
            options: ['3层', '4层', '5层', '6层'],
            answer: 1,
            hint: '从1楼到n楼，需要爬(n-1)层楼梯，因为1楼不用爬。',
            explanation: '<strong>解题步骤：</strong><br>① 从1楼到5楼，爬的层数 = 到达楼层 - 起始楼层<br>② 5 - 1 = <strong>4层</strong><br>③ 1楼到2楼爬1层，到3楼爬2层……到5楼爬4层<br>④ 所以选 B。<br><div class="tip-box">爬楼梯问题：爬的层数 = 到达楼层 - 起始楼层</div>'
          }
        ]
      }
    ]
  },

  // =======================================================================
  // 语文（根据冀教版四年级上册实际课文目录）
  // =======================================================================
  chinese: {
    name: '语文',
    icon: '📖',
    color: '#FF9F43',
    units: [
      {
        id: 'c1',
        title: '第一单元·自然之美',
        emoji: '🌊',
        description: '大海、秋色、桂林山水——感受大自然的魅力',
        lessons: [
          {
            title: '自然之美',
            content: `
              <p><strong>本单元课文：</strong></p>
              <p>🌊 《大海的歌》—— 感受大海的壮阔</p>
              <p>❄️ 《下雪的声音》—— 聆听雪落的声音</p>
              <p>🍂 《秋色》—— 欣赏秋天的色彩</p>
              <p>🏔️ 古诗二首《望洞庭》《望天门山》</p>
              <p>🏞️ 《桂林山水》—— 甲天下的桂林风光</p>
              <div class="tip-box">
                💡 <strong>重点词语：</strong><br>
                波澜壮阔、水平如镜、连绵起伏、形态万千
              </div>
            `
          }
        ],
        questions: [
          {
            question: "\"波澜壮阔\"这个词语常用来形容什么？",
            options: ["大山","大海","森林","草原"],
            answer: 1,
            hint: "想想\"波\"和\"澜\"都和什么有关？这个词常用来形容水势浩大的景象。",
            explanation: "<strong>解析：</strong><br>① \"波\"指波浪，\"澜\"也是大波浪的意思。<br>② \"壮阔\"意思是雄壮而宽阔。<br>③ 合起来形容水势浩大、波浪汹涌的壮观景象。<br>④ 大海波涛汹涌，最适合用\"波澜壮阔\"来形容。<strong>所以选 B（大海）。</strong>"
          },
          {
            question: "《望天门山》的作者是谁？",
            options: ["杜甫","李白","刘禹锡","白居易"],
            answer: 1,
            hint: "回忆一下学过的古诗，这位诗人以豪放浪漫的风格著称，号称\"诗仙\"。",
            explanation: "<strong>解析：</strong><br>① 《望天门山》是唐代大诗人<strong>李白</strong>的作品。<br>② 诗中\"天门中断楚江开，碧水东流至此回\"描绘了天门山的壮丽景色。<br>③ 李白号\"诗仙\"，以豪放浪漫的风格著称。<br>④ <strong>所以选 B（李白）。</strong>"
          },
          {
            question: "\"桂林山水甲天下\"中的\"甲\"是什么意思？",
            options: ["第一名","盔甲","甲乙的甲","指甲"],
            answer: 0,
            hint: "\"甲\"在古代表示天干的第一位，引申义是\"第一\"。想想\"桂林山水甲天下\"是说桂林山水怎样？",
            explanation: "<strong>解析：</strong><br>① \"桂林山水甲天下\"是一句广为流传的名句。<br>② \"甲\"在古代是天干的第一位，引申为\"第一\"\"首位\"的意思。<br>③ \"甲天下\"就是\"天下第一\"，意思是桂林山水是世界上最美的。<br>④ <strong>所以选 A（第一名）。</strong>"
          },
          {
            question: "\"形态万千\"形容的是什么？",
            options: ["数量很多","样子千变万化","重量很重","颜色很多"],
            answer: 1,
            hint: "\"形态\"指形状和姿态，\"万千\"形容数量极多。合起来形容事物的样子怎么样？",
            explanation: "<strong>解析：</strong><br>① \"形态\"指事物的形状和姿态。<br>② \"万千\"是虚指，形容数量非常多。<br>③ \"形态万千\"合起来形容形状和姿态多种多样、各不相同。<br>④ 比如桂林的山形态万千，有的像大象，有的像骆驼。<strong>所以选 B。</strong>"
          },
          {
            question: "《望洞庭》描写的是哪个湖？",
            options: ["西湖","洞庭湖","鄱阳湖","太湖"],
            answer: 1,
            hint: "从诗题《望洞庭》中的\"洞庭\"二字就能找到答案。",
            explanation: "<strong>解析：</strong><br>① 诗题中直接点明了地点——\"洞庭\"就是<strong>洞庭湖</strong>。<br>② 诗中\"湖光秋月两相和，潭面无风镜未磨\"描写了洞庭湖的秋景。<br>③ 作者刘禹锡用优美的语言描绘了洞庭湖的宁静与美丽。<br>④ <strong>所以选 B（洞庭湖）。</strong>"
          },
          {
            question: "\"连绵起伏\"形容什么景象？",
            options: ["山峦接连不断","波浪起伏不停","心情起伏","云彩飘动"],
            answer: 0,
            hint: "\"连绵\"是接连不断的意思，\"起伏\"是一起一落。想想什么景象是连在一起、高高低低的？",
            explanation: "<strong>解析：</strong><br>① \"连绵\"指连续不断、没有间断。<br>② \"起伏\"指一起一落、高低变化。<br>③ \"连绵起伏\"通常用来形容山脉或山峦连接不断、高低起伏的样子。<br>④ 课文中描写的群山连绵起伏，一眼望不到边。<strong>所以选 A。</strong>"
          },
          {
            question: "《大海的歌》中作者把大海比作什么？",
            options: ["一幅画","一首歌","一首诗","一片蓝天"],
            answer: 1,
            hint: "课文标题《大海的歌》中的\"歌\"字就是提示，作者觉得大海像什么？",
            explanation: "<strong>解析：</strong><br>① 课文标题《大海的歌》中的\"歌\"字就是关键词。<br>② 作者把大海的波涛声比作<strong>一首歌</strong>。<br>③ 海浪拍打岩石的声音就像在唱歌一样，充满韵律和美感。<br>④ <strong>所以选 B（一首歌）。</strong>"
          },
          {
            question: "\"水平如镜\"这个词语中\"镜\"指的是什么？",
            options: ["镜子","眼镜","镜头","眼镜框"],
            answer: 0,
            hint: "\"水平如镜\"是说水面像什么一样平静光滑？想想\"镜\"字的本意。",
            explanation: "<strong>解析：</strong><br>① \"水平如镜\"是一个比喻词，把水面比作镜子。<br>② \"镜\"在这里指的就是<strong>镜子</strong>。<br>③ 形容水面非常平静，像镜子一样能映照出倒影。<br>④ <strong>所以选 A（镜子）。</strong>"
          },
          {
            question: "《桂林山水》中描写了漓江水的什么特点？",
            options: ["清、静、绿","大、深、蓝","急、浑、黄","甜、凉、美"],
            answer: 0,
            hint: "回忆课文内容，作者描写漓江的水用了三个特点：清、静、绿。",
            explanation: "<strong>解析：</strong><br>① 《桂林山水》中作者描写漓江水的特点用了三个字：<strong>清、静、绿</strong>。<br>② \"清\"——清澈见底；\"静\"——水面平静如镜；\"绿\"——江水碧绿如玉。<br>③ 这三个特点生动地写出了漓江水的独特之美。<br>④ <strong>所以选 A。</strong>"
          },
          {
            question: "\"遥望洞庭山水翠\"中的\"遥望\"是什么意思？",
            options: ["远远地看","走过去看","抬起头看","低下头看"],
            answer: 0,
            hint: "\"遥\"是遥远的意思，\"望\"是看。合起来就是远远地看。",
            explanation: "<strong>解析：</strong><br>① \"遥\"指距离远、遥远。<br>② \"望\"指向远处看、眺望。<br>③ \"遥望\"合起来就是<strong>远远地看</strong>、向远处眺望的意思。<br>④ 在这句诗中，诗人远远地看着洞庭湖的山水。<strong>所以选 A。</strong>"
          },
          {
            question: "\"风平浪静\"和\"波澜壮阔\"是什么关系？",
            options: ["近义词","反义词","同音词","没有关系"],
            answer: 1,
            hint: "想想这两个词语的意思——一个说没有风浪很平静，一个说波涛汹涌。",
            explanation: "<strong>解析：</strong><br>① \"风平浪静\"指没有风浪，水面很平静。<br>② \"波澜壮阔\"指水势浩大、波涛汹涌。<br>③ 两个词语的意思正好<strong>相反</strong>，是一对反义词。<br>④ <strong>所以选 B（反义词）。</strong>"
          },
          {
            question: "《秋色》一课中，作者主要描写的是什么季节的景色？",
            options: ["春天","夏天","秋天","冬天"],
            answer: 2,
            hint: "看看课文标题《秋色》，\"秋\"字直接告诉了我们答案。",
            explanation: "<strong>解析：</strong><br>① 课文标题《秋色》中的\"秋\"字直接点明了描写的季节。<br>② \"秋\"就是<strong>秋天</strong>，\"色\"指景色、色彩。<br>③ 作者描写了秋天特有的美丽景色，如红叶、金黄的田野等。<br>④ <strong>所以选 C（秋天）。</strong>"
          },
          {
            question: "\"天门中断楚江开\"中的\"断\"是什么意思？",
            options: ["断开、分开","断裂","判断","断然"],
            answer: 0,
            hint: "想象天门山被长江水从中间冲开的画面，\"断\"字描绘了什么情景？",
            explanation: "<strong>解析：</strong><br>① 这句诗出自李白的《望天门山》。<br>② \"天门中断楚江开\"意思是天门山从中间<strong>断开</strong>，江水奔涌而出。<br>③ \"断\"在这里是\"断开、分开\"的意思，表现了天门山的险峻和江水的浩大。<br>④ <strong>所以选 A。</strong>"
          },
          {
            question: "下面哪个词语描写的是非常安静的景象？",
            options: ["波澜壮阔","水平如镜","山崩地裂","形态万千"],
            answer: 1,
            hint: "想想哪个词语形容水面像镜子一样平静？",
            explanation: "<strong>解析：</strong><br>① \"波澜壮阔\"描写波涛汹涌，不安静。<br>② <strong>\"水平如镜\"</strong>形容水面像镜子一样平静，是非常安静的景象。<br>③ \"山崩地裂\"形容声音或声势巨大。<br>④ \"形态万千\"形容形状多种多样。<br>⑤ <strong>所以选 B。</strong>"
          },
          {
            question: "《下雪的声音》中，作者认为下雪的声音是怎样的？",
            options: ["很大声的","很小很轻的","吵闹的","刺耳的"],
            answer: 1,
            hint: "回忆课文内容，作者是怎么描写雪花落下的声音的？是需要静下心来听的吗？",
            explanation: "<strong>解析：</strong><br>① 课文《下雪的声音》描写了雪花落下的声音。<br>② 作者把下雪的声音写得非常<strong>轻柔、细微</strong>。<br>③ 雪落的声音是轻轻的、柔柔的，需要静下心来才能听到。<br>④ <strong>所以选 B（很小很轻的）。</strong>"
          }
        ]
      },
      {
        id: 'c2',
        title: '第二单元·人间真情',
        emoji: '💝',
        description: '感受亲人、师生、邻里之间的温暖情感',
        lessons: [
          {
            title: '人间真情',
            content: `
              <p><strong>本单元课文：</strong></p>
              <p>🏠 《炊烟》—— 感受家的温暖</p>
              <p>🌸 《赏花》—— 分享美好的事物</p>
              <p>🏗️ 《地震中的父与子》—— 伟大父爱</p>
              <p>🎁 《新年礼物》—— 一份特别的礼物</p>
              <p>⛲ 《古井》—— 邻里互助的情谊</p>
              <div class="tip-box">
                💡 <strong>重点词语：</strong><br>
                深情厚谊、无微不至、心甘情愿、守望相助
              </div>
            `
          }
        ],
        questions: [
          {
            question: "\"无微不至\"形容什么？",
            options: ["做事非常小心","关怀照顾非常周到","没有微小的东西","不需要仔细"],
            answer: 1,
            hint: "\"无\"是没有的意思，\"微\"是细微，\"不至\"是不到。连起来就是没有一处细微的地方照顾不到。",
            explanation: "<strong>解析：</strong><br>① \"无微不至\"字面意思是\"没有一处细微的地方照顾不到\"。<br>② 形容对人的<strong>关怀照顾非常周到</strong>，每一个细节都考虑到了。<br>③ 比如父母对孩子的爱就是无微不至的。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"心甘情愿\"的意思是？",
            options: ["心里很甜","完全出于自愿，毫不勉强","心里不同意","心情很好"],
            answer: 1,
            hint: "\"甘\"是甘甜、乐意，\"愿\"是愿意。合起来是心里很乐意去做某事。",
            explanation: "<strong>解析：</strong><br>① \"心甘情愿\"中\"甘\"是甘甜、乐意的意思。<br>② 整个词语的意思是<strong>完全出于自愿，毫不勉强</strong>。<br>③ 比如\"我甘情愿地帮助同学\"，就是我很乐意地帮助同学。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"守望相助\"最合适的近义词是什么？",
            options: ["互相帮助","独自一人","漠不关心","袖手旁观"],
            answer: 0,
            hint: "\"守望相助\"是指邻居之间互相守护、互相帮助。哪个选项和这个意思最接近？",
            explanation: "<strong>解析：</strong><br>① \"守望相助\"指为了防御外来的侵害，邻居之间互相守护、互相帮助。<br>② 它的近义词应该是\"互相帮助\"，都有互相协助的意思。<br>③ \"漠不关心\"和\"袖手旁观\"是反义，表示不关心。<br>④ <strong>所以选 A（互相帮助）。</strong>"
          },
          {
            question: "\"深情厚谊\"形容的是什么样的感情？",
            options: ["很浅的感情","深厚的友谊和感情","一般的感情","短暂的相处"],
            answer: 1,
            hint: "\"深情\"是深厚的感情，\"厚谊\"是浓厚的情谊。合起来形容感情怎么样？",
            explanation: "<strong>解析：</strong><br>① \"深情\"指深厚的感情，\"厚谊\"指浓厚的情谊。<br>② \"深情厚谊\"合起来形容<strong>深厚的友谊和感情</strong>。<br>③ 比如同学之间多年的相处，结下了深情厚谊。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "《地震中的父与子》最突出的是什么？",
            options: ["坚持不懈的父爱","地震很可怕","孩子很聪明","邻居的帮助"],
            answer: 0,
            hint: "回忆课文，父亲在废墟中挖了38小时，是什么力量支撑着他？",
            explanation: "<strong>解析：</strong><br>① 课文讲述了在地震废墟中，父亲坚持不懈地挖掘，最终救出儿子的故事。<br>② 父亲挖了38个小时，双手鲜血淋漓也不放弃，体现了<strong>坚持不懈的父爱</strong>。<br>③ 课文最突出的就是这种伟大的、永不放弃的父爱。<br>④ <strong>所以选 A。</strong>"
          },
          {
            question: "\"炊烟\"在课文中象征着什么？",
            options: ["火灾","家的温暖","做饭的烟","环境污染"],
            answer: 1,
            hint: "回想一下，课文中提到炊烟时，作者想到了什么？是家、是温暖。",
            explanation: "<strong>解析：</strong><br>① 炊烟是烧火做饭时升起的烟。<br>② 在课文中，作者看到炊烟就想到了家，想到了家人。<br>③ 炊烟在这里象征着<strong>家的温暖</strong>和亲情。<br>④ 所以不是指火灾或环境污染。<strong>所以选 B。</strong>"
          },
          {
            question: "\"赏花\"这篇文章告诉我们要______",
            options: ["只赏花不做事","学会分享美好","花很美丽","春天去赏花"],
            answer: 1,
            hint: "课文中主人公把花分享给邻居们，这告诉我们要学会什么？",
            explanation: "<strong>解析：</strong><br>① 课文《赏花》中，主人公没有独自欣赏美丽的花朵，而是邀请邻居们一起来看。<br>② 通过赏花，大家分享了美好和快乐。<br>③ 这篇文章告诉我们，美好的事物要<strong>学会分享</strong>。<br>④ <strong>所以选 B（学会分享美好）。</strong>"
          },
          {
            question: "\"古井\"在课文中象征着什么？",
            options: ["一口古老的水井","无私奉献、滋养乡邻的精神","很深的水井","古代的水井"],
            answer: 1,
            hint: "课文中古井常年为乡邻提供甘甜的井水，这象征着什么精神？",
            explanation: "<strong>解析：</strong><br>① 课文中的古井多年来自始至终为乡亲们提供清凉甘甜的井水。<br>② 它不求回报，默默奉献。<br>③ 古井象征着<strong>无私奉献、滋养乡邻的精神</strong>。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "下面哪个词语最能概括《新年礼物》的中心？",
            options: ["礼尚往来","礼轻情意重","贵重礼物","互相攀比"],
            answer: 1,
            hint: "课文中孩子送给父亲的礼物虽然不贵重，但充满爱意。这说明了什么？",
            explanation: "<strong>解析：</strong><br>① 《新年礼物》中，孩子用自己的方式准备了一份特别的礼物送给父亲。<br>② 这份礼物虽然不贵重，但充满了孩子对父亲的爱。<br>③ 告诉我们<strong>礼物的价值不在于贵重，而在于其中的情意</strong>。<br>④ \"礼轻情意重\"最能概括这个中心。<strong>所以选 B。</strong>"
          },
          {
            question: "\"依依不舍\"形容什么？",
            options: ["非常舍不得离开","衣服不舍得穿","舍不得吃东西","很依恋不舍"],
            answer: 0,
            hint: "\"依依\"是留恋的样子，\"不舍\"是不忍心离开。合起来形容什么情感？",
            explanation: "<strong>解析：</strong><br>① \"依依\"形容留恋的样子，\"不舍\"是不忍心离开。<br>② \"依依不舍\"形容<strong>非常舍不得离开</strong>的样子。<br>③ 比如和朋友分别时依依不舍。<br>④ 选项D虽然也接近，但最准确的是A（非常舍不得离开）。<strong>所以选 A。</strong>"
          },
          {
            question: "\"心甘情愿\"的反义词是什么？",
            options: ["心甘情愿","迫不得已","自觉自愿","乐此不疲"],
            answer: 1,
            hint: "\"心甘情愿\"是自愿、乐意去做。反义词应该是\"不情愿、被逼着做\"。",
            explanation: "<strong>解析：</strong><br>① \"心甘情愿\"是完全出于自愿，毫不勉强。<br>② 反义词应该是\"不情愿、被逼无奈\"的意思。<br>③ \"迫不得已\"就是被逼得没有办法、不得不这样做。<br>④ <strong>所以选 B（迫不得已）。</strong>"
          },
          {
            question: "《炊烟》一课中，作者通过对炊烟的描写表达了什么情感？",
            options: ["对做饭的喜爱","对家的思念和眷恋","对环境的担忧","对农村生活的向往"],
            answer: 1,
            hint: "炊烟和家联系在一起，作者看到炊烟想到了什么？是一种什么样的情感？",
            explanation: "<strong>解析：</strong><br>① 炊烟在课文中是家的象征。<br>② 作者通过对炊烟的描写，表达了对家的<strong>思念和眷恋</strong>之情。<br>③ 看到炊烟就想起了家人、想起了温暖的家的感觉。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"深情厚谊\"的反义词是什么？",
            options: ["情深似海","情同手足","虚情假意","一往情深"],
            answer: 2,
            hint: "\"深情厚谊\"是真挚深厚的感情。反义词应该是感情不真实、虚假的。",
            explanation: "<strong>解析：</strong><br>① \"深情厚谊\"形容深厚的友谊和感情。<br>② A选项\"情深似海\"是近义词。<br>③ \"虚情假意\"指用虚假的情感来敷衍别人，与\"深情厚谊\"意思相反。<br>④ <strong>所以选 C（虚情假意）。</strong>"
          },
          {
            question: "《地震中的父与子》中，父亲坚持挖了多长时间？",
            options: ["8小时","18小时","28小时","38小时"],
            answer: 3,
            hint: "回忆课文，父亲在废墟上挖了多久？是一天一夜多。",
            explanation: "<strong>解析：</strong><br>① 课文中的父亲坚信儿子还活着，在废墟上不停地挖掘。<br>② 他挖了<strong>38个小时</strong>，双手鲜血淋漓也不放弃。<br>③ 这种坚持不懈的精神最终救出了儿子。<br>④ <strong>所以选 D（38小时）。</strong>"
          },
          {
            question: "\"守望相助\"告诉我们邻居之间应该怎样？",
            options: ["互不来往","互相帮助、互相照应","各管各的","只照顾自己"],
            answer: 1,
            hint: "\"守望\"是看守、瞭望，\"相助\"是互相帮助。合起来就是邻里之间要怎么样？",
            explanation: "<strong>解析：</strong><br>① \"守望相助\"字面意思是看守瞭望、互相帮助。<br>② 它告诉我们邻居之间应该<strong>互相帮助、互相照应</strong>。<br>③ 远亲不如近邻，邻里和睦、互帮互助是非常重要的。<br>④ <strong>所以选 B。</strong>"
          }
        ]
      },
      {
        id: 'c3',
        title: '第三单元·求知精神',
        emoji: '📚',
        description: '从孔子学琴到和时间赛跑——学习贵在勤奋',
        lessons: [
          {
            title: '求知精神',
            content: `
              <p><strong>本单元课文：</strong></p>
              <p>📖 《我有一个小小的书橱》—— 爱读书的好习惯</p>
              <p>🎵 《孔子学琴》—— 精益求精的学习态度</p>
              <p>🔍 《推敲》—— 反复琢磨、严谨治学</p>
              <p>🖊️ 《字的敬畏》—— 对汉字的尊重</p>
              <p>⏰ 《和时间赛跑》—— 珍惜时间</p>
              <div class="tip-box">
                💡 <strong>成语积累：</strong><br>
                勤能补拙、精益求精、废寝忘食、持之以恒
              </div>
            `
          }
        ],
        questions: [
          {
            question: "\"推敲\"的故事告诉我们什么道理？",
            options: ["要多敲门","做事要认真琢磨、反复研究","要把东西推倒","要敲碎东西"],
            answer: 1,
            hint: "\"推敲\"来源于贾岛写诗时反复琢磨用\"推\"还是\"敲\"的故事。告诉我们什么学习态度？",
            explanation: "<strong>解析：</strong><br>① \"推敲\"来源于唐代诗人贾岛的故事，他在写诗时反复考虑用\"推\"还是\"敲\"字。<br>② 后来\"推敲\"比喻<strong>做事要认真琢磨、反复研究</strong>。<br>③ 这种严谨治学的精神值得我们学习。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"精益求精\"的意思是？",
            options: ["已经非常好了，还要更好","精神很精细","精彩的物品","经过精炼"],
            answer: 0,
            hint: "\"精\"是完美，\"益\"是更加。已经完美了还要更加完美，是什么态度？",
            explanation: "<strong>解析：</strong><br>① \"精\"指完美、好；\"益\"指更加；\"求精\"是追求更好。<br>② \"精益求精\"的意思是<strong>已经非常好了，还要更好</strong>。<br>③ 这是一种不断追求进步、永不满足的精神。<br>④ <strong>所以选 A。</strong>"
          },
          {
            question: "\"持之以恒\"的反义词是什么？",
            options: ["坚持不懈","半途而废","始终如一","有始有终"],
            answer: 1,
            hint: "\"持之以恒\"是坚持做到底。反义词应该是做到一半就不做了。",
            explanation: "<strong>解析：</strong><br>① \"持之以恒\"指长久地坚持下去，不放弃。<br>② A\"坚持不懈\"、C\"始终如一\"、D\"有始有终\"都是近义词。<br>③ \"半途而废\"指事情做到一半就放弃了，与\"持之以恒\"相反。<br>④ <strong>所以选 B（半途而废）。</strong>"
          },
          {
            question: "\"废寝忘食\"形容什么？",
            options: ["不睡觉不吃饭","形容非常专心","废了房子忘了吃饭","在吃饭时睡觉"],
            answer: 1,
            hint: "\"废\"是停止，\"寝\"是睡觉。连起来是顾不上睡觉和吃饭，形容什么状态？",
            explanation: "<strong>解析：</strong><br>① \"废\"指停止，\"寝\"指睡觉，\"食\"指吃饭。<br>② 字面意思是顾不上睡觉和吃饭。<br>③ 实际上是形容<strong>非常专心、专注</strong>于某件事。<br>④ 比如他废寝忘食地学习，终于取得了好成绩。<strong>所以选 B。</strong>"
          },
          {
            question: "\"勤能补拙\"告诉我们什么？",
            options: ["聪明最重要","勤奋可以弥补笨拙","笨的人不能学习","勤奋没有用"],
            answer: 1,
            hint: "\"勤\"是勤奋，\"拙\"是笨拙。勤奋能弥补笨拙，说明什么很重要？",
            explanation: "<strong>解析：</strong><br>① \"勤\"指勤奋努力，\"补\"是弥补，\"拙\"指笨拙、不足。<br>② \"勤能补拙\"意思是<strong>勤奋能够弥补笨拙和不足</strong>。<br>③ 即使天资不够聪明，只要勤奋努力，也能取得成功。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "《孔子学琴》中孔子为什么反复学习同一首曲子？",
            options: ["因为他记不住","因为他精益求精","因为没有别的曲子","因为他喜欢弹这首"],
            answer: 1,
            hint: "孔子弹琴每次都说\"还不够\"，他追求的是什么样的学习态度？",
            explanation: "<strong>解析：</strong><br>① 孔子学习弹琴时，每学一首曲子都要反复练习。<br>② 从会弹、到弹出感情、到理解作者，他每次都精益求精。<br>③ 这体现了孔子<strong>精益求精</strong>的学习态度。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"和时间赛跑\"告诉我们什么道理？",
            options: ["跑得比时间快","珍惜时间，不虚度光阴","时间可以停下来","人比时间跑得快"],
            answer: 1,
            hint: "课文的标题\"和时间赛跑\"是一个比喻，不是真的赛跑，而是告诉我们要怎样对待时间？",
            explanation: "<strong>解析：</strong><br>① \"和时间赛跑\"是一个比喻，不是真的跑步比赛。<br>② 它告诉我们<strong>要珍惜时间，不虚度光阴</strong>。<br>③ 在有限的时间里做更多有意义的事情，就是赢得了时间。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"孜孜不倦\"形容什么？",
            options: ["很疲倦","勤奋努力不知疲倦","孜然的味道","不停地吃东西"],
            answer: 1,
            hint: "\"孜孜\"是勤奋的样子，\"不倦\"是不知疲倦。合起来形容什么？",
            explanation: "<strong>解析：</strong><br>① \"孜孜\"形容勤奋努力的样子。\"不倦\"是不知疲倦。<br>② \"孜孜不倦\"指<strong>勤奋努力，不知疲倦</strong>。<br>③ 比如老师孜孜不倦地教导学生。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"字的敬畏\"中作者对汉字的态度是什么？",
            options: ["害怕","敬畏和尊重","轻视","无所谓"],
            answer: 1,
            hint: "课文标题\"字的敬畏\"中的\"敬畏\"是什么意思？是又敬重又带着什么态度？",
            explanation: "<strong>解析：</strong><br>① \"敬畏\"是又尊敬又有些畏惧，这是一种非常郑重的态度。<br>② 作者对汉字持有<strong>敬畏和尊重</strong>的态度。<br>③ 汉字历史悠久、博大精深，值得我们去敬畏和尊重。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "下面哪个成语和《孔子学琴》表达的精神最接近？",
            options: ["一知半解","精益求精","走马观花","囫囵吞枣"],
            answer: 1,
            hint: "孔子学琴时不断追求更高的境界，哪个成语也是形容这种不断追求进步的精神？",
            explanation: "<strong>解析：</strong><br>① 《孔子学琴》体现了精益求精、不断追求进步的精神。<br>② \"一知半解\"是知道得不全面，理解不深，与孔子精神相反。<br>③ \"精益求精\"正是追求更好、永不止步的意思。<br>④ <strong>所以选 B（精益求精）。</strong>"
          },
          {
            question: "\"推敲\"这个词语是由哪两位诗人的故事得来的？",
            options: ["李白和杜甫","贾岛和韩愈","白居易和元稹","苏轼和黄庭坚"],
            answer: 1,
            hint: "回忆\"推敲\"的故事，是贾岛在写诗时遇到了谁，一起斟酌用字？",
            explanation: "<strong>解析：</strong><br>① \"推敲\"的故事来自唐代诗人<strong>贾岛</strong>。<br>② 贾岛在写\"鸟宿池边树，僧敲月下门\"时，不确定用\"推\"还是\"敲\"，边走边想。<br>③ 遇到了大诗人<strong>韩愈</strong>，韩愈建议用\"敲\"字。<br>④ <strong>所以选 B（贾岛和韩愈）。</strong>"
          },
          {
            question: "\"勤能补拙\"中\"拙\"的意思是？",
            options: ["笨拙、不足","笨重的","出局","拙劣的表演"],
            answer: 0,
            hint: "\"拙\"在\"勤能补拙\"中和\"勤\"相对，\"勤\"是勤奋，\"拙\"是什么？",
            explanation: "<strong>解析：</strong><br>① \"勤能补拙\"中，\"勤\"指勤奋努力。<br>② \"拙\"指<strong>笨拙、不足</strong>，是能力或天资上的欠缺。<br>③ 整个成语的意思是勤奋可以弥补天赋上的不足。<br>④ <strong>所以选 A。</strong>"
          },
          {
            question: "《我有一个小小的书橱》中，书橱给作者带来了什么？",
            options: ["烦恼","知识和快乐","负担","任务"],
            answer: 1,
            hint: "想想看，有一个装满书的书橱，每天读书会给人带来什么？",
            explanation: "<strong>解析：</strong><br>① 课文《我有一个小小的书橱》描写了作者对书橱和书籍的喜爱。<br>② 书橱里装满了书，读书给作者带来了<strong>知识和快乐</strong>。<br>③ 书籍是人类进步的阶梯，读书是一件令人愉悦的事。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "下面哪个成语与\"持之以恒\"意思最接近？",
            options: ["三天打鱼，两天晒网","坚持不懈","半途而废","虎头蛇尾"],
            answer: 1,
            hint: "\"持之以恒\"是坚持到底的意思。看看哪个选项也是说要坚持到底的？",
            explanation: "<strong>解析：</strong><br>① \"持之以恒\"指长久地坚持下去。<br>② \"三天打鱼，两天晒网\"比喻做事断断续续，是反义词。<br>③ \"半途而废\"和\"虎头蛇尾\"也都是反义词。<br>④ \"坚持不懈\"指坚持到底不放弃，与\"持之以恒\"意思最接近。<strong>所以选 B。</strong>"
          },
          {
            question: "\"孜孜不倦\"和\"废寝忘食\"这两个成语的共同点是形容什么？",
            options: ["吃饭睡觉","非常勤奋专注","废寝忘食更努力","孜孜不倦更轻松"],
            answer: 1,
            hint: "这两个成语都用来形容一个人做事情时的什么状态？是勤奋、专心还是不专心？",
            explanation: "<strong>解析：</strong><br>① \"孜孜不倦\"形容勤奋努力不知疲倦。<br>② \"废寝忘食\"形容非常专心，连吃饭睡觉都顾不上了。<br>③ 两个成语的共同点是都形容<strong>非常勤奋专注</strong>的状态。<br>④ <strong>所以选 B。</strong>"
          }
        ]
      },
      {
        id: 'c4',
        title: '第四单元·绿色家园',
        emoji: '🌿',
        description: '认识植物，了解自然，爱护环境',
        lessons: [
          {
            title: '绿色家园',
            content: `
              <p><strong>本单元课文：</strong></p>
              <p>🌱 《形形色色的植物》—— 奇妙的植物世界</p>
              <p>🧗 《爬山虎的脚》—— 细致观察的力量</p>
              <p>🌳 《门前的小树死了》—— 爱护树木</p>
              <p>🍃 《绿叶的梦》—— 绿叶的精神</p>
              <p>🐦 《鸟的天堂》—— 人与自然的和谐</p>
              <div class="tip-box">
                💡 <strong>重点词语：</strong><br>
                生机勃勃、郁郁葱葱、枝繁叶茂、欣欣向荣
              </div>
            `
          }
        ],
        questions: [
          {
            question: "\"郁郁葱葱\"形容什么？",
            options: ["心情很郁闷","草木茂盛苍翠","颜色很绿","很繁忙"],
            answer: 1,
            hint: "\"郁郁\"是草木茂密的样子，\"葱葱\"也是草木苍翠。合起来形容什么景象？",
            explanation: "<strong>解析：</strong><br>① \"郁郁\"形容草木茂密的样子。<br>② \"葱葱\"形容草木苍翠碧绿。<br>③ \"郁郁葱葱\"合起来形容<strong>草木茂盛苍翠</strong>的景象。<br>④ 比如春天来了，树木郁郁葱葱。注意不是形容心情。<strong>所以选 B。</strong>"
          },
          {
            question: "\"生机勃勃\"的反义词是什么？",
            options: ["朝气蓬勃","死气沉沉","欣欣向荣","蒸蒸日上"],
            answer: 1,
            hint: "\"生机勃勃\"是充满活力的样子。反义词应该是没有活力、很沉闷的样子。",
            explanation: "<strong>解析：</strong><br>① \"生机勃勃\"形容生命力旺盛，充满活力。<br>② A\"朝气蓬勃\"、C\"欣欣向荣\"、D\"蒸蒸日上\"都是近义词。<br>③ \"死气沉沉\"形容气氛沉闷、没有活力，与\"生机勃勃\"相反。<br>④ <strong>所以选 B（死气沉沉）。</strong>"
          },
          {
            question: "\"枝繁叶茂\"中的\"繁\"是什么意思？",
            options: ["复杂","繁荣、繁多","麻烦","繁华"],
            answer: 1,
            hint: "\"枝繁叶茂\"是说树枝和叶子都怎么样？\"繁\"在这里是多的意思。",
            explanation: "<strong>解析：</strong><br>① \"枝繁叶茂\"形容树木的枝叶非常茂盛。<br>② \"繁\"在这里是<strong>繁荣、繁多</strong>的意思，不是\"复杂\"或\"麻烦\"。<br>③ 整个词语是说树枝多、叶子茂盛。<br>④ <strong>所以选 B（繁荣、繁多）。</strong>"
          },
          {
            question: "\"鸟的天堂\"中\"天堂\"在这里指什么？",
            options: ["天空","非常美好的地方","寺庙","很高的地方"],
            answer: 1,
            hint: "\"天堂\"原指宗教中美好的地方。在课文中，大榕树对鸟儿来说是怎样的地方？",
            explanation: "<strong>解析：</strong><br>① \"天堂\"在宗教中是指幸福美好的地方。<br>② 在课文中，大榕树为鸟儿提供了栖息的家园，对鸟儿来说是个<strong>非常美好的地方</strong>。<br>③ 所以\"天堂\"在这里是比喻义，指幸福美好的处所。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "《爬山虎的脚》最突出的写作特点是什么？",
            options: ["丰富的想象","细致的观察","华丽的辞藻","有趣的故事情节"],
            answer: 1,
            hint: "课文详细描写了爬山虎的脚是什么样子的、怎么爬墙的。这体现了作者怎样的能力？",
            explanation: "<strong>解析：</strong><br>① 课文《爬山虎的脚》非常详细地描写了爬山虎的叶子和脚的样子。<br>② 作者把爬山虎的脚比作蜗牛的触角，把爬墙的过程写得清清楚楚。<br>③ 这体现了作者<strong>细致的观察</strong>能力。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"形形色色\"的意思是？",
            options: ["各种颜色","各种各样","很有颜色","颜色很漂亮"],
            answer: 1,
            hint: "\"形\"是形状，\"色\"是种类。合起来不是指颜色，而是指什么？",
            explanation: "<strong>解析：</strong><br>① \"形形色色\"不是指颜色，这里的\"色\"是\"种类\"的意思。<br>② 这个词语的意思是<strong>各种各样</strong>、形形色色的事物。<br>③ 比如市场里有形形色色的商品。<br>④ 注意不要和颜色混淆。<strong>所以选 B。</strong>"
          },
          {
            question: "\"欣欣向荣\"形容什么？",
            options: ["事业蓬勃发展","心情很开心","很多人一起去","很繁华"],
            answer: 0,
            hint: "\"欣欣\"是草木茂盛的样子，\"向荣\"是越来越繁荣。常形容什么蓬勃发展？",
            explanation: "<strong>解析：</strong><br>① \"欣欣\"形容草木茂盛的样子，\"向荣\"指越来越繁荣。<br>② \"欣欣向荣\"原指草木茂盛，现在常比喻<strong>事业蓬勃发展</strong>。<br>③ 比如我们的祖国欣欣向荣。<br>④ <strong>所以选 A。</strong>"
          },
          {
            question: "《门前的小树死了》这篇文章想要告诉我们什么？",
            options: ["小树很容易死","要爱护花草树木","门前不能种树","树死了就死了"],
            answer: 1,
            hint: "课文中小树的死是因为什么？作者想通过这件事告诉我们什么道理？",
            explanation: "<strong>解析：</strong><br>① 课文中小树因为被人摇晃、刻字等原因最后死了。<br>② 作者通过小树的死，呼吁大家<strong>要爱护花草树木</strong>。<br>③ 植物也是有生命的，我们应该善待它们。<br>④ <strong>所以选 B（要爱护花草树木）。</strong>"
          },
          {
            question: "\"绿叶的梦\"中绿叶象征着什么？",
            options: ["梦想和希望","绿色的叶子","梦中的叶子","凋零的叶子"],
            answer: 0,
            hint: "绿叶是生命的象征，作者用\"绿叶的梦\"为题，绿叶代表着什么？",
            explanation: "<strong>解析：</strong><br>① 课文以\"绿叶的梦\"为题，绿叶在这里不只是一片普通的叶子。<br>② 绿叶象征着<strong>梦想和希望</strong>，代表着蓬勃的生命力。<br>③ 作者借绿叶表达了对美好未来的向往。<br>④ <strong>所以选 A。</strong>"
          },
          {
            question: "\"鸟的天堂\"中作者去了几次？",
            options: ["一次","两次","三次","四次"],
            answer: 1,
            hint: "回忆课文，作者去\"鸟的天堂\"是不是去了两次？第一次和第二次看到的东西不一样。",
            explanation: "<strong>解析：</strong><br>① 课文《鸟的天堂》中，作者一共去了<strong>两次</strong>。<br>② 第一次是在傍晚，只看到大榕树，没有看到鸟。<br>③ 第二次是在早晨，看到了许多鸟在榕树中活动。<br>④ <strong>所以选 B（两次）。</strong>"
          },
          {
            question: "\"生机勃勃\"中\"勃\"的意思是？",
            options: ["停息","旺盛的样子","脖子","突然"],
            answer: 1,
            hint: "\"生机勃勃\"形容生命力旺盛的样子，\"勃勃\"是形容什么状态？",
            explanation: "<strong>解析：</strong><br>① \"生机勃勃\"中，\"生机\"指生命力、活力。<br>② \"勃勃\"形容<strong>旺盛的样子</strong>。<br>③ 整个成语形容生命力旺盛、充满活力。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "《形形色色的植物》一课中，作者介绍了植物的什么特点？",
            options: ["植物的颜色","植物的多样性和奇妙之处","植物的大小","植物的味道"],
            answer: 1,
            hint: "课文标题\"形形色色\"就是多种多样的意思。课文介绍了植物的什么？",
            explanation: "<strong>解析：</strong><br>① \"形形色色\"意思是各种各样、种类繁多。<br>② 课文《形形色色的植物》介绍了植物的<strong>多样性和奇妙之处</strong>。<br>③ 世界上有各种各样的植物，每种植物都有自己独特的特点。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"枝繁叶茂\"的反义词是什么？",
            options: ["枝叶繁茂","枯枝败叶","根深叶茂","生机勃勃"],
            answer: 1,
            hint: "\"枝繁叶茂\"形容树木茂盛。反义词应该是树木枯萎的样子。",
            explanation: "<strong>解析：</strong><br>① \"枝繁叶茂\"形容树木枝叶茂盛。<br>② \"枝叶繁茂\"和\"根深叶茂\"都是近义词。<br>③ \"枯枝败叶\"形容树木干枯、叶子凋落的样子，正好相反。<br>④ <strong>所以选 B（枯枝败叶）。</strong>"
          },
          {
            question: "《爬山虎的脚》中，爬山虎的脚长在什么地方？",
            options: ["叶子上","茎上","根上","花上"],
            answer: 1,
            hint: "回忆课文，作者仔细描写了爬山虎的脚是长在茎上的什么位置？",
            explanation: "<strong>解析：</strong><br>① 课文非常细致地描写了爬山虎的脚的样子。<br>② 爬山虎的脚长在<strong>茎上</strong>，是茎上长叶柄的地方伸出的枝状细丝。<br>③ 这些细丝触到墙就会变成小圆片，紧紧地巴住墙。<br>④ <strong>所以选 B（茎上）。</strong>"
          },
          {
            question: "\"欣欣向荣\"和\"郁郁葱葱\"都是形容什么状态的词语？",
            options: ["心情状态","植物茂盛、事物繁荣","天气情况","人物外貌"],
            answer: 1,
            hint: "两个词语都和植物有关——\"欣欣向荣\"是草木茂盛，\"郁郁葱葱\"也是草木茂盛苍翠。",
            explanation: "<strong>解析：</strong><br>① \"欣欣向荣\"原指草木茂盛，现常比喻事业蓬勃发展。<br>② \"郁郁葱葱\"形容草木茂盛苍翠。<br>③ 两个词语的共同点是都形容<strong>植物茂盛、事物繁荣</strong>的状态。<br>④ <strong>所以选 B。</strong>"
          }
        ]
      },
      {
        id: 'c5',
        title: '第五单元·神奇自然',
        emoji: '🌪️',
        description: '探索自然现象，激发科学兴趣',
        lessons: [
          {
            title: '神奇自然',
            content: `
              <p><strong>本单元课文：</strong></p>
              <p>🌊 《观潮》—— 钱塘江大潮的壮观</p>
              <p>🌀 《龙卷风》—— 认识龙卷风</p>
              <p>🧊 《一封从南极寄来的信》—— 南极的秘密</p>
              <p>💎 《琥珀》—— 穿越亿万年的化石</p>
              <p>🦀 《准时的登陆表演》—— 奇妙的生物钟</p>
              <div class="tip-box">
                💡 <strong>重点词语：</strong><br>
                人山人海、山崩地裂、不可思议、千奇百怪
              </div>
            `
          }
        ],
        questions: [
          {
            question: "\"山崩地裂\"形容什么？",
            options: ["山倒了地裂了","声音或声势巨大","风景很美丽","很安静"],
            answer: 1,
            hint: "\"山崩地裂\"字面意思很夸张，但实际是比喻什么非常巨大？",
            explanation: "<strong>解析：</strong><br>① \"山崩\"是山倒塌，\"地裂\"是地裂开。<br>② 这个成语用来比喻<strong>声音或声势巨大</strong>。<br>③ 比如钱塘江大潮来时，声音山崩地裂。<br>④ 不是真的山倒了地裂了。<strong>所以选 B。</strong>"
          },
          {
            question: "\"不可思议\"的意思是？",
            options: ["不能讨论","无法想象、难以理解","不能开会","可以商议"],
            answer: 1,
            hint: "\"不可思\"是没法想象，\"议\"是议论。合起来就是没办法想象和议论，形容什么？",
            explanation: "<strong>解析：</strong><br>① \"不可思\"指无法想象，\"议\"指议论、讨论。<br>② \"不可思议\"指<strong>无法想象、难以理解</strong>。<br>③ 形容事物非常奇特、超出常理。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"千奇百怪\"形容什么？",
            options: ["有一千个奇怪的怪物","形容各种各样奇怪的事物","有一百个妖怪","数量很多但很正常"],
            answer: 1,
            hint: "\"千\"和\"百\"是虚指很多，\"奇\"是奇特，\"怪\"是奇怪。合起来是什么意思？",
            explanation: "<strong>解析：</strong><br>① \"千\"\"百\"是虚指，表示数量非常多。<br>② \"奇\"是奇特，\"怪\"是奇怪。<br>③ \"千奇百怪\"形容<strong>各种各样奇怪的事物</strong>。<br>④ 比如海底世界有千奇百怪的生物。<strong>所以选 B。</strong>"
          },
          {
            question: "琥珀是什么？",
            options: ["一种宝石","古代的树脂化石","一种金属","一种动物"],
            answer: 1,
            hint: "琥珀中有时能看到小虫子，它是什么变成的？是树脂经过千万年形成的。",
            explanation: "<strong>解析：</strong><br>① 琥珀是古代树木分泌的<strong>树脂</strong>，经过千万年的地质作用形成的化石。<br>② 有些琥珀中还包裹着远古的昆虫或植物。<br>③ 所以琥珀是树脂化石，不是宝石也不是金属。<br>④ <strong>所以选 B（古代的树脂化石）。</strong>"
          },
          {
            question: "\"观潮\"中人们观看的是什么？",
            options: ["潮水退去","钱塘江大潮","湖水的潮汐","海浪"],
            answer: 1,
            hint: "课文《观潮》描写的是哪里的潮水？是中国非常有名的自然奇观。",
            explanation: "<strong>解析：</strong><br>① 课文《观潮》描写的是<strong>钱塘江大潮</strong>。<br>② 钱塘江大潮是世界闻名的自然奇观，每年农历八月十八最壮观。<br>③ 潮水来时如万马奔腾，非常壮观。<br>④ <strong>所以选 B（钱塘江大潮）。</strong>"
          },
          {
            question: "《龙卷风》中龙卷风的特点是______",
            options: ["风力小、范围广","风力大、破坏性强","风力温和、时间长","风力小、有规律"],
            answer: 1,
            hint: "龙卷风是一种非常猛烈的天气现象，它的最大特点是什么？",
            explanation: "<strong>解析：</strong><br>① 龙卷风是一种强烈的旋风，风速非常快。<br>② 它的主要特点是<strong>风力大、破坏性强</strong>。<br>③ 龙卷风经过的地方，房屋可能被摧毁、大树可能被连根拔起。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"一封从南极寄来的信\"中南极最冷的时候气温大约是多少？",
            options: ["零下10°C","零下30°C","零下60°C以下","零下90°C"],
            answer: 2,
            hint: "南极是地球上最冷的地方，想想它能冷到什么程度？比冰箱冷很多很多倍。",
            explanation: "<strong>解析：</strong><br>① 南极是地球上最寒冷的大陆。<br>② 课文告诉我们南极最冷的时候气温在<strong>零下60°C以下</strong>。<br>③ 这是世界上最冷的地方之一。<br>④ 所以不是零下10°C或零下30°C，那些还不够冷。<strong>所以选 C。</strong>"
          },
          {
            question: "\"准时的登陆表演\"中表演者是谁？",
            options: ["企鹅","海龟","海豚","螃蟹"],
            answer: 3,
            hint: "谁会在海滩上\"准时登陆表演\"？这种动物有壳，会横着走。",
            explanation: "<strong>解析：</strong><br>① 课文《准时的登陆表演》描写了一种奇妙的自然现象。<br>② 表演者是<strong>螃蟹</strong>，它们会准时出现在海滩上。<br>③ 这体现了动物奇妙的生物钟现象。<br>④ <strong>所以选 D（螃蟹）。</strong>"
          },
          {
            question: "\"人山人海\"形容什么？",
            options: ["海水和山","人非常多，非常拥挤","人和山一样高","海里有很多人"],
            answer: 1,
            hint: "\"人山\"是说人多得像山一样，\"人海\"是说人多得像海一样。合起来形容什么？",
            explanation: "<strong>解析：</strong><br>① \"人山人海\"是一个比喻，把人群比作山和海。<br>② 形容<strong>人非常多，非常拥挤</strong>。<br>③ 比如国庆节的景点人山人海。<br>④ 不是真的有山有海。<strong>所以选 B。</strong>"
          },
          {
            question: "《观潮》是按照什么顺序描写的？",
            options: ["空间顺序","时间顺序","逻辑顺序","倒叙"],
            answer: 1,
            hint: "课文写潮来前、潮来时、潮去后，这是按照什么顺序？",
            explanation: "<strong>解析：</strong><br>① 课文《观潮》先写潮来前的情况，再写潮来时的壮观景象，最后写潮去后。<br>② 这是按照<strong>时间顺序</strong>来描写的。<br>③ 时间顺序是最常见的记叙顺序之一。<br>④ <strong>所以选 B（时间顺序）。</strong>"
          },
          {
            question: "\"人山人海\"可以用来形容下面哪个场景？",
            options: ["一个人在看书","广场上挤满了人","海边的山","一个人在游泳"],
            answer: 1,
            hint: "\"人山人海\"形容人非常多。哪个场景是人非常多的？",
            explanation: "<strong>解析：</strong><br>① \"人山人海\"形容人非常多、非常拥挤。<br>② A\"一个人在看书\"只有一个人，不符合。<br>③ B\"广场上挤满了人\"正是人山人海的场景。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "琥珀中有时能发现什么？",
            options: ["现代昆虫","远古的昆虫或植物","金属","水"],
            answer: 1,
            hint: "琥珀是古代树脂形成的，有时候会包裹着什么？",
            explanation: "<strong>解析：</strong><br>① 琥珀是古代树脂的化石，形成过程中有时会包裹住一些小生物。<br>② 有时能在琥珀中发现<strong>远古的昆虫或植物</strong>。<br>③ 这些远古生物被完好地保存下来，非常有科学研究价值。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"山崩地裂\"的反义词是什么？",
            options: ["地动山摇","万籁俱寂","惊天动地","震耳欲聋"],
            answer: 1,
            hint: "\"山崩地裂\"形容声音巨大。反义词应该是非常安静。",
            explanation: "<strong>解析：</strong><br>① \"山崩地裂\"形容声音或声势非常大。<br>② \"地动山摇\"\"惊天动地\"\"震耳欲聋\"都是近义词。<br>③ \"万籁俱寂\"形容非常安静，没有任何声音，正好相反。<br>④ <strong>所以选 B（万籁俱寂）。</strong>"
          },
          {
            question: "《龙卷风》一课中，龙卷风把什么东西卷上了天？",
            options: ["只有树叶","各种东西，包括房屋树木","只有灰尘","只有水"],
            answer: 1,
            hint: "龙卷风风力很大、破坏性很强，它能卷起什么？",
            explanation: "<strong>解析：</strong><br>① 龙卷风的风力极大、破坏性极强。<br>② 它可以卷起<strong>各种东西，包括房屋树木</strong>。<br>③ 龙卷风经过之处，很多东西都会被卷上天空。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"千奇百怪\"的近义词是什么？",
            options: ["千篇一律","形形色色","一模一样","平淡无奇"],
            answer: 1,
            hint: "\"千奇百怪\"是各种各样、非常奇特。哪个选项也有\"各种各样\"的意思？",
            explanation: "<strong>解析：</strong><br>① \"千奇百怪\"形容各种各样奇怪的事物。<br>② \"千篇一律\"是说全部一样，是反义词。<br>③ \"形形色色\"就是<strong>各种各样</strong>的意思，与\"千奇百怪\"意思最接近。<br>④ <strong>所以选 B（形形色色）。</strong>"
          }
        ]
      },
      {
        id: 'c6',
        title: '第六单元·英雄赞歌',
        emoji: '🏅',
        description: '学习英雄事迹，培养爱国情怀',
        lessons: [
          {
            title: '英雄赞歌',
            content: `
              <p><strong>本单元课文：</strong></p>
              <p>⚔️ 古诗二首《塞下曲》《十一月四日风雨大作》</p>
              <p>👨‍⚕️ 《军神》—— 刘伯承钢铁般的意志</p>
              <p>⚽ 《球王贝利》—— 从贫民窟走出的球王</p>
              <p>🎖️ 《黄继光》—— 舍身堵枪眼的英雄</p>
              <p>⛰️ 《登山》—— 不畏艰险、勇攀高峰</p>
              <div class="tip-box">
                💡 <strong>重点词语：</strong><br>
                英勇无畏、坚忍不拔、舍生取义、百折不挠
              </div>
            `
          }
        ],
        questions: [
          {
            question: "\"英勇无畏\"的意思是？",
            options: ["很勇敢没有智慧","非常勇敢，毫不畏惧","有英雄也有无谓的人","勇敢但没有用"],
            answer: 1,
            hint: "\"英勇\"是勇敢出众，\"无畏\"是无所畏惧。合起来是什么意思？",
            explanation: "<strong>解析：</strong><br>① \"英勇\"指勇敢出众、有英雄气概。<br>② \"无畏\"是无所畏惧、不害怕。<br>③ \"英勇无畏\"合起来就是<strong>非常勇敢，毫不畏惧</strong>。<br>④ 比如消防员英勇无畏地冲进火场救人。<strong>所以选 B。</strong>"
          },
          {
            question: "\"百折不挠\"形容什么精神？",
            options: ["被打败100次","无论受多少挫折都不退缩","折不断的东西","一百次打折不成功"],
            answer: 1,
            hint: "\"百\"是很多次，\"折\"是挫折，\"挠\"是弯曲、退缩。合起来形容什么精神？",
            explanation: "<strong>解析：</strong><br>① \"百\"是虚指，形容很多次；\"折\"是挫折；\"挠\"是弯曲、屈服。<br>② \"百折不挠\"意思是<strong>无论受多少挫折都不退缩</strong>。<br>③ 这是一种非常坚韧不拔的精神品质。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"军神\"一课中指的是哪位英雄？",
            options: ["黄继光","刘伯承","贝利","王二小"],
            answer: 1,
            hint: "回忆课文，《军神》讲述的是哪位将军在手术时不用麻醉药的故事？",
            explanation: "<strong>解析：</strong><br>① 《军神》一课讲述的是<strong>刘伯承</strong>将军的故事。<br>② 他在做眼睛手术时，为了不损伤大脑神经，拒绝使用麻醉药。<br>③ 他钢铁般的意志感动了医生，被称为\"军神\"。<br>④ <strong>所以选 B（刘伯承）。</strong>"
          },
          {
            question: "\"塞下曲\"是哪一类题材的诗？",
            options: ["山水诗","边塞诗","送别诗","咏物诗"],
            answer: 1,
            hint: "\"塞\"是边塞的意思。描写边疆战地生活的诗是什么题材？",
            explanation: "<strong>解析：</strong><br>① \"塞\"指边塞、边疆，\"塞下\"指边疆地区。<br>② \"塞下曲\"是<strong>边塞诗</strong>，描写边疆战地和军旅生活。<br>③ 边塞诗通常表现将士们的英勇和壮志。<br>④ <strong>所以选 B（边塞诗）。</strong>"
          },
          {
            question: "\"舍生取义\"的意思是？",
            options: ["放弃生活去取东西","为正义而牺牲生命","珍惜生命","有舍才有得"],
            answer: 1,
            hint: "\"舍\"是舍弃，\"生\"是生命，\"取\"是求得，\"义\"是正义。合起来是什么意思？",
            explanation: "<strong>解析：</strong><br>① \"舍\"指舍弃，\"生\"指生命，\"取\"指求得，\"义\"指正义。<br>② \"舍生取义\"意思是<strong>为正义而牺牲生命</strong>。<br>③ 这是中华民族的传统美德，为了正义的事业不惜牺牲自己。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"坚忍不拔\"中\"拔\"的意思是？",
            options: ["拔出来","动摇","拔高","选拔"],
            answer: 1,
            hint: "\"坚忍\"是坚持不动摇，\"不拔\"就是拔不动、不能动摇。所以\"拔\"在这里是什么？",
            explanation: "<strong>解析：</strong><br>① \"坚忍\"指在困难面前坚持不动摇。<br>② \"不拔\"意思是拔不动、不能动摇。<br>③ \"拔\"在这里是<strong>动摇</strong>的意思，形容意志坚定、不可动摇。<br>④ <strong>所以选 B（动摇）。</strong>"
          },
          {
            question: "《球王贝利》告诉我们什么道理？",
            options: ["踢球很容易","只要努力就能实现梦想","只有富人才可以踢球","天赋最重要"],
            answer: 1,
            hint: "贝利小时候很穷，但他没有放弃梦想，最终成为球王。这说明了什么？",
            explanation: "<strong>解析：</strong><br>① 贝利从小生活在贫民窟，生活条件很差。<br>② 但他没有放弃对足球的热爱，通过在破旧的场地上刻苦训练。<br>③ 最终成为世界著名的\"球王\"。<br>④ 故事告诉我们<strong>只要努力就能实现梦想</strong>。<strong>所以选 B。</strong>"
          },
          {
            question: "\"黄继光\"在抗美援朝战争中做了什么英雄事迹？",
            options: ["炸碉堡","用胸膛堵住敌人的枪眼","传递情报","坚守阵地"],
            answer: 1,
            hint: "在战斗中，敌人的火力点阻挡了前进，黄继光是怎么做的？他用自己的身体做了什么？",
            explanation: "<strong>解析：</strong><br>① 在抗美援朝的上甘岭战役中，敌人的机枪火力点阻挡了部队前进。<br>② 黄继光在身负重伤的情况下，毅然<strong>用胸膛堵住了敌人的枪眼</strong>。<br>③ 他为战友们赢得了冲锋的时间，最终壮烈牺牲。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"十一月四日风雨大作\"的作者是谁？",
            options: ["苏轼","陆游","辛弃疾","文天祥"],
            answer: 1,
            hint: "这位诗人是南宋著名的爱国诗人，他一生主张收复中原。他是谁？",
            explanation: "<strong>解析：</strong><br>① 《十一月四日风雨大作》的作者是南宋爱国诗人<strong>陆游</strong>。<br>② \"僵卧孤村不自哀，尚思为国戍轮台\"表达了他至死不渝的爱国情怀。<br>③ 陆游一生主张抗金收复中原，是伟大的爱国诗人。<br>④ <strong>所以选 B（陆游）。</strong>"
          },
          {
            question: "《登山》一课中作者通过登山想表达什么？",
            options: ["山很高很难爬","要勇于面对困难、不断攀登","登山很有趣","山顶的风景很美"],
            answer: 1,
            hint: "作者登山的经历不仅仅是爬山，更是一种象征。登山和面对困难有什么关系？",
            explanation: "<strong>解析：</strong><br>① 课文以\"登山\"为题，写的是登山的经历和感受。<br>② 登山的过程就像面对生活中的困难一样，需要勇气和毅力。<br>③ 作者想表达的是<strong>要勇于面对困难、不断攀登</strong>。<br>④ 人生的道路上要像登山一样不畏艰险。<strong>所以选 B。</strong>"
          },
          {
            question: "\"百折不挠\"的近义词是什么？",
            options: ["一蹶不振","坚韧不拔","知难而退","望而却步"],
            answer: 1,
            hint: "\"百折不挠\"是遇到挫折不退缩。哪个选项也是形容意志坚定不动摇的？",
            explanation: "<strong>解析：</strong><br>① \"百折不挠\"指无论受多少挫折都不退缩屈服。<br>② \"一蹶不振\"指失败后就再也振作不起来，是反义词。<br>③ \"坚韧不拔\"形容意志坚定不可动摇，与\"百折不挠\"意思相近。<br>④ <strong>所以选 B（坚韧不拔）。</strong>"
          },
          {
            question: "\"塞下曲\"中的\"塞\"指的是什么？",
            options: ["比赛","边塞、边疆","堵塞","塞子"],
            answer: 1,
            hint: "\"塞下曲\"是描写边疆军旅生活的诗，\"塞\"在这里是地名的一部分。",
            explanation: "<strong>解析：</strong><br>① \"塞下曲\"中的\"塞\"是<strong>边塞、边疆</strong>的意思。<br>② 塞下指边疆地区，是古代军队驻守的地方。<br>③ 所以\"塞下曲\"就是描写边疆战地生活的诗歌。<br>④ <strong>所以选 B。</strong>"
          },
          {
            question: "\"舍生取义\"和下面哪个词语表达的精神最接近？",
            options: ["贪生怕死","见义勇为","见利忘义","明哲保身"],
            answer: 1,
            hint: "\"舍生取义\"是为正义牺牲自己。哪个选项也是说为了正义而行动的？",
            explanation: "<strong>解析：</strong><br>① \"舍生取义\"是为正义而牺牲自己的生命。<br>② \"贪生怕死\"是贪图生存、害怕死亡，意思相反。<br>③ \"见义勇为\"是看到正义的事就勇敢去做，精神上最接近。<br>④ <strong>所以选 B（见义勇为）。</strong>"
          },
          {
            question: "《军神》一课中，刘伯承在做手术时为什么不用麻醉药？",
            options: ["因为麻醉药太贵","为了保护大脑神经","因为他不怕疼","因为麻醉药没用"],
            answer: 1,
            hint: "回忆课文，刘伯承拒绝使用麻醉药，是担心什么会受到损伤？",
            explanation: "<strong>解析：</strong><br>① 课文中的手术是眼睛手术，靠近大脑。<br>② 刘伯承担心麻醉药会<strong>损伤大脑神经</strong>，影响他以后指挥作战。<br>③ 于是他强忍剧痛，在没有使用麻醉药的情况下完成了手术。<br>④ 这种钢铁般的意志令人敬佩。<strong>所以选 B。</strong>"
          },
          {
            question: "\"英勇无畏\"和\"百折不挠\"这两个成语共同描写的是什么样的品质？",
            options: ["聪明智慧","勇敢坚强的品质","温柔善良","能说会道"],
            answer: 1,
            hint: "\"英勇无畏\"是说勇敢不害怕，\"百折不挠\"是说遇到挫折不退缩。共同的品质是什么？",
            explanation: "<strong>解析：</strong><br>① \"英勇无畏\"形容非常勇敢、毫不畏惧。<br>② \"百折不挠\"形容无论受多少挫折都不退缩。<br>③ 两个成语共同描写的是<strong>勇敢坚强的品质</strong>。<br>④ 这些都是英雄人物身上最可贵的品质。<strong>所以选 B。</strong>"
          }
        ]
      }
    ]
  },

  // =======================================================================
  // 英语（2025秋新版冀教版三起四年级上册）
  // =======================================================================
  english: {
    name: '英语',
    icon: '🇦🇺',
    color: '#A66CFF',
    units: [
      {
        id: 'e1',
        title: 'Unit 1 · School Life',
        emoji: '🏫',
        description: '开学啦！学习学校生活相关词汇',
        lessons: [
          {
            title: 'School Life',
            content: `
              <p><strong>New Words 新词汇：</strong></p>
              <p>📚 book 书 · 📝 pen 钢笔 · ✏️ pencil 铅笔</p>
              <p>📏 ruler 尺子 · 🎒 schoolbag 书包 · 🖍️ crayon 蜡笔</p>
              <div class="tip-box">
                💡 <strong>Sentences 句型：</strong><br>
                What's this? 这是什么？<br>
                It's a book. 这是一本书。<br>
                Is this your ruler? 这是你的尺子吗？
              </div>
            `
          }
        ],
        questions: [
          {
            question: '"Ruler" 的中文意思是？',
            options: ['橡皮', '尺子', '铅笔', '书包'],
            answer: 1,
            hint: '想想看，ruler这个词和"尺子、规则"有关。',
            explanation: '<strong>解析：</strong><br>① "Ruler"是英语中的文具词汇。<br>② 四个选项分别是：A橡皮=eraser，B尺子=ruler，C铅笔=pencil，D书包=schoolbag。<br>③ "Ruler"的中文意思是<strong>尺子</strong>，所以选B。'
          },
          {
            question: '"Schoolbag" 的中文意思是？',
            options: ['书本', '铅笔盒', '书包', '课桌'],
            answer: 2,
            hint: '"School"是学校，"bag"是包，合起来是什么？',
            explanation: '<strong>解析：</strong><br>① "Schoolbag"由"school(学校)"和"bag(包)"两个词组成。<br>② A书本=book，B铅笔盒=pencil case，C书包=schoolbag，D课桌=desk。<br>③ "Schoolbag"的中文意思是<strong>书包</strong>，所以选C。'
          },
          {
            question: '"What\'s this?" 的中文意思是？',
            options: ['那是什么？', '这是什么？', '这是谁？', '你在哪？'],
            answer: 1,
            hint: '"What"是"什么"，"this"是"这"，合起来就是问"这是什么"。',
            explanation: '<strong>解析：</strong><br>① "What"意思是"什么"，"is"是"是"，"this"是"这"。<br>② "What\'s this?"是"What is this?"的缩写形式。<br>③ 中文意思是<strong>"这是什么？"</strong>，所以选B。'
          },
          {
            question: '"Pen" 的中文意思是？',
            options: ['铅笔', '钢笔', '蜡笔', '粉笔'],
            answer: 1,
            hint: 'Pen和Pencil不一样，pen是钢笔，pencil是铅笔。',
            explanation: '<strong>解析：</strong><br>① 四个选项都是笔类文具，但拼写不同。<br>② A铅笔=pencil，B钢笔=pen，C蜡笔=crayon，D粉笔=chalk。<br>③ "Pen"特指<strong>钢笔</strong>，所以选B。'
          },
          {
            question: '"Is this your book?" 如果书是你的，怎么回答？',
            options: ['Yes, it is.', 'No, it isn\'t.', 'Yes, I am.', 'No, I\'m not.'],
            answer: 0,
            hint: '如果书是你的，应该肯定回答。注意问句主语是"this"，回答时用"it"代替。',
            explanation: '<strong>解析：</strong><br>① 问句："Is this your book?"（这是你的书吗？）<br>② 如果书是你的，肯定回答用"<strong>Yes, it is.</strong>"<br>③ 问句中用"this"提问，回答时用"it"指代，所以不能用"I am"。<br>④ 所以选A。'
          },
          {
            question: '"Crayon" 的中文意思是？',
            options: ['蜡笔', '钢笔', '铅笔', '彩笔'],
            answer: 0,
            hint: 'Crayon是一种小朋友常用的绘画工具，不是钢笔也不是铅笔。',
            explanation: '<strong>解析：</strong><br>① "Crayon"是英语中的文具词汇。<br>② A蜡笔=crayon，B钢笔=pen，C铅笔=pencil，D彩笔=colored pen。<br>③ "Crayon"的中文意思是<strong>蜡笔</strong>，所以选A。'
          },
          {
            question: '"Pencil" 的中文意思是？',
            options: ['钢笔', '铅笔', '蜡笔', '毛笔'],
            answer: 1,
            hint: '想想看，和"pen(钢笔)"有什么不同？',
            explanation: '<strong>解析：</strong><br>① "Pencil"和"pen"都是写字的工具，但"pencil"是铅笔。<br>② A钢笔=pen，B铅笔=pencil，C蜡笔=crayon，D毛笔=brush。<br>③ "Pencil"的中文意思是<strong>铅笔</strong>，所以选B。'
          },
          {
            question: '"What\'s this?" 的回答应该是哪个句型？',
            options: ['It\'s a ____.', 'I\'m ____.', 'This is ____.', 'That is ____.'],
            answer: 0,
            hint: '问"这是什么"，回答时用"it"来指代这个东西。',
            explanation: '<strong>解析：</strong><br>① "What\'s this?"是问"这是什么？"<br>② 回答时用"It is / It\'s"开头，表示"它是……"。<br>③ 正确的句型是"<strong>It\'s a ____.</strong>"，所以选A。'
          },
          {
            question: '"Book" 的复数形式是什么？',
            options: ['Bookes', 'Books', 'Booken', 'Book'],
            answer: 1,
            hint: '一般情况下，英语名词变复数直接在词尾加"s"。',
            explanation: '<strong>解析：</strong><br>① 英语中大多数名词变复数，直接在词尾加"<strong>s</strong>"。<br>② "Book"的复数是"<strong>Books</strong>"。<br>③ "Bookes"和"Booken"都是错误的变形。<br>④ 所以选B。'
          },
          {
            question: '下面哪个是学习用品？',
            options: ['Apple', 'Ruler', 'Cat', 'House'],
            answer: 1,
            hint: '想想哪些东西是上课时用到的文具？',
            explanation: '<strong>解析：</strong><br>① Apple（苹果）是水果，Cat（猫）是动物，House（房子）是建筑。<br>② <strong>Ruler（尺子）</strong>是学习用品，属于文具类。<br>③ 所以正确答案是B。'
          },
          {
            question: '"Open your book." 的中文意思是？',
            options: ['打开你的书', '合上你的书', '看你的书', '拿你的书'],
            answer: 0,
            hint: '"Open"是"打开"的意思，这是一句课堂常用语。',
            explanation: '<strong>解析：</strong><br>① "Open"意思是"打开"，"your"是"你的"，"book"是"书"。<br>② "Open your book."的中文意思是<strong>"打开你的书"</strong>。<br>③ 这是课堂上老师经常使用的指令语。选A。'
          },
          {
            question: '"Eraser" 的中文意思是？',
            options: ['尺子', '橡皮', '铅笔', '书包'],
            answer: 1,
            hint: '写错了字用什么擦掉？就是这个文具。',
            explanation: '<strong>解析：</strong><br>① "Eraser"是文具，用来擦掉铅笔写错的内容。<br>② A尺子=ruler，B橡皮=eraser，C铅笔=pencil，D书包=schoolbag。<br>③ "Eraser"的中文意思是<strong>橡皮</strong>，选B。'
          },
          {
            question: '"Good morning, class!" 应该怎么回答？',
            options: ['Good morning, teacher!', 'Goodbye, teacher!', 'Thank you!', 'I\'m fine.'],
            answer: 0,
            hint: '别人说"Good morning"，你也应该用"Good morning"回应。',
            explanation: '<strong>解析：</strong><br>① "Good morning"是"早上好"的意思，是常见的问候语。<br>② 别人说"Good morning"，你应该用"<strong>Good morning</strong>"回应。<br>③ "class"指全班同学，老师向同学们问好，同学们回答"Good morning, teacher!"<br>④ 所以选A。'
          },
          {
            question: '"I have a pencil." 的中文意思是？',
            options: ['我有一支铅笔', '我喜欢铅笔', '我看到一支铅笔', '我需要一支铅笔'],
            answer: 0,
            hint: '"Have"是"有"的意思，表示拥有某物。',
            explanation: '<strong>解析：</strong><br>① "I"是"我"，"have"是"有"，"a pencil"是"一支铅笔"。<br>② "I have a pencil."的中文意思是<strong>"我有一支铅笔"</strong>。<br>③ "have"在这里表示"拥有"而不是"喜欢"或"需要"。选A。'
          },
          {
            question: '"Glue" 的中文意思是？',
            options: ['剪刀', '胶水', '胶带', '订书机'],
            answer: 1,
            hint: '做手工时用来把纸粘在一起的文具。',
            explanation: '<strong>解析：</strong><br>① "Glue"是手工课上常用的文具。<br>② A剪刀=scissors，B胶水=glue，C胶带=tape，D订书机=stapler。<br>③ "Glue"的中文意思是<strong>胶水</strong>，选B。'
          }
        ]
      },
      {
        id: 'e2',
        title: 'Unit 2 · School Rules',
        emoji: '📋',
        description: '学习学校的规则和礼仪用语',
        lessons: [
          {
            title: 'School Rules',
            content: `
              <p><strong>New Words 新词汇：</strong></p>
              <p>⏰ late 迟到 · 🤫 quiet 安静 · 🏃 run 跑</p>
              <p>👂 listen 听 · 📖 read 读 · ✍️ write 写</p>
              <div class="tip-box">
                💡 <strong>Sentences 句型：</strong><br>
                Don't be late. 不要迟到。<br>
                Be quiet, please. 请安静。<br>
                Listen to the teacher. 听老师讲。
              </div>
            `
          }
        ],
        questions: [
          {
            question: '"Don\'t be late" 的中文意思是？',
            options: ['不要迟到', '不要说话', '不要跑', '不要写'],
            answer: 0,
            hint: '"Don\'t"是否定祈使句的开头，表示"不要做某事"。',
            explanation: '<strong>解析：</strong><br>① "Don\'t" = "Do not"，表示"不要"。<br>② "be late"是"迟到"的意思。<br>③ "Don\'t be late"的中文意思是<strong>"不要迟到"</strong>，选A。'
          },
          {
            question: '"Quiet" 的中文意思是？',
            options: ['快速的', '安静的', '有趣的', '漂亮的'],
            answer: 1,
            hint: '老师让同学们安静的时候，说的就是这个词。',
            explanation: '<strong>解析：</strong><br>① "Quiet"是形容词，表示"安静的"。<br>② A快速的=fast/quick，B安静的=quiet，C有趣的=interesting/fun，D漂亮的=beautiful/pretty。<br>③ "Quiet"的中文意思是<strong>安静的</strong>，选B。'
          },
          {
            question: '"Listen to the teacher" 的中文意思是？',
            options: ['看老师', '听老师讲', '跟老师读', '问老师'],
            answer: 1,
            hint: '"Listen"是"听"，"teacher"是"老师"。',
            explanation: '<strong>解析：</strong><br>① "Listen"意思是"听"，"to"是介词，"the teacher"是"老师"。<br>② "Listen to"表示"听某人/某物"。<br>③ "Listen to the teacher"的中文意思是<strong>"听老师讲"</strong>，选B。'
          },
          {
            question: '上课时应该怎么做？',
            options: ['Be quiet', 'Run in class', 'Be late', 'Shout'],
            answer: 0,
            hint: '想想上课时正确的行为应该是什么？安静听讲还是跑闹？',
            explanation: '<strong>解析：</strong><br>① 上课时应该保持安静，认真听讲。<br>② 在教室奔跑(Run in class)、迟到(Be late)、大喊大叫(Shout)都是不对的。<br>③ 上课应该<strong>Be quiet（保持安静）</strong>，选A。'
          },
          {
            question: '"Please" 在句子中的作用是什么？',
            options: ['表示否定', '表示礼貌', '表示疑问', '表示强调'],
            answer: 1,
            hint: '"Please"是"请"的意思，想想说"请"的时候是什么语气？',
            explanation: '<strong>解析：</strong><br>① "Please"的中文意思是"请"。<br>② 在句子中使用"please"可以让语气更加客气、有礼貌。<br>③ "Please"的作用是<strong>表示礼貌</strong>，选B。'
          },
          {
            question: '"Don\'t run" 的中文意思是？',
            options: ['不要跑', '不要走', '快跑', '跑起来'],
            answer: 0,
            hint: '在学校走廊里，老师经常说"不要跑"，就是"Don\'t run"。',
            explanation: '<strong>解析：</strong><br>① "Don\'t" = "Do not"（不要）。<br>② "run"意思是"跑"。<br>③ "Don\'t run"是祈使句的否定形式，中文意思是<strong>"不要跑"</strong>，选A。'
          },
          {
            question: '"Read" 的中文意思是？',
            options: ['写', '读', '听', '说'],
            answer: 1,
            hint: '阅读课文的时候，就是在"read"。',
            explanation: '<strong>解析：</strong><br>① "Read"是动词，表示"阅读、朗读"。<br>② A写=write，B读=read，C听=listen，D说=speak/talk。<br>③ "Read"的中文意思是<strong>读</strong>，选B。'
          },
          {
            question: '"Write" 的中文意思是？',
            options: ['读', '听', '写', '画'],
            answer: 2,
            hint: '做作业的时候用笔在纸上做什么？那就是"write"。',
            explanation: '<strong>解析：</strong><br>① "Write"是动词，表示"书写、写"。<br>② A读=read，B听=listen，C写=write，D画=draw。<br>③ "Write"的中文意思是<strong>写</strong>，选C。'
          },
          {
            question: '"Raise your hand" 是什么意思？',
            options: ['放下手', '举起手', '举手', '摇手'],
            answer: 1,
            hint: '想回答问题时，应该怎么做？"Raise"是"举起"的意思。',
            explanation: '<strong>解析：</strong><br>① "Raise"意思是"举起、抬起"，"your hand"是"你的手"。<br>② "Raise your hand"直译是"举起你的手"。<br>③ 在课堂上，想发言时要<strong>举手</strong>。但选项中"举手"和"举起手"略有不同，"举起手"更贴近原意。选B。'
          },
          {
            question: '"Please" 放在句末时前面通常要加什么？',
            options: ['感叹号', '句号', '逗号', '问号'],
            answer: 2,
            hint: '"Please"放在句末时要和前面的内容分开，用什么标点？',
            explanation: '<strong>解析：</strong><br>① "Please"放在句首时直接开始，如"Please sit down."<br>② "Please"放在句末时，前面需要加<strong>逗号</strong>，如"Sit down, please."<br>③ 所以选C。'
          },
          {
            question: '"Stand up." 的中文意思是？',
            options: ['坐下来', '站起来', '举起手', '看黑板'],
            answer: 1,
            hint: '上课开始时，老师会说"Stand up"让大家起立。',
            explanation: '<strong>解析：</strong><br>① "Stand"是"站立"，"up"是"向上"。<br>② "Stand up"是课堂常用指令，意思是<strong>"站起来"</strong>。<br>③ 选B。'
          },
          {
            question: '"Sit down, please." 的中文意思是？',
            options: ['请站起来', '请坐下', '请安静', '请看黑板'],
            answer: 1,
            hint: '"Sit"是"坐"，"down"是"向下"，合起来是"坐下"。',
            explanation: '<strong>解析：</strong><br>① "Sit"是"坐"，"down"是"向下"，"Sit down"是"坐下"。<br>② "please"表示"请"，使语气更礼貌。<br>③ "Sit down, please."的中文意思是<strong>"请坐下"</strong>，选B。'
          },
          {
            question: '"Don\'t talk in class." 的中文意思是？',
            options: ['不要在课堂上说话', '不要在课堂上跑', '不要在课堂上吃', '不要在课堂上睡'],
            answer: 0,
            hint: '"Talk"是"说话"的意思。',
            explanation: '<strong>解析：</strong><br>① "Don\'t"是"不要"，"talk"是"说话"，"in class"是"在课堂上"。<br>② "Don\'t talk in class."的中文意思是<strong>"不要在课堂上说话"</strong>。<br>③ 这是保持课堂纪律的规则。选A。'
          },
          {
            question: '"Look at the blackboard." 的中文意思是？',
            options: ['看好黑板', '看黑板', '擦黑板', '画黑板'],
            answer: 1,
            hint: '"Look at"是"看"的意思，"blackboard"是"黑板"。',
            explanation: '<strong>解析：</strong><br>① "Look at"意思是"看……"，"the blackboard"是"黑板"。<br>② "Look at the blackboard."的中文意思是<strong>"看黑板"</strong>。<br>③ 这是老师上课常说的指令。选B。'
          },
          {
            question: '"May I come in?" 的中文意思是？',
            options: ['我可以进来吗？', '我可以出去吗？', '我可以说话吗？', '我可以坐下吗？'],
            answer: 0,
            hint: '"May I"是委婉地请求允许，表示"我可以……吗？"',
            explanation: '<strong>解析：</strong><br>① "May I"是委婉地请求允许，意思是"我可以……吗？"<br>② "come in"是"进来"的意思。<br>③ "May I come in?"的中文意思是<strong>"我可以进来吗？"</strong>，选A。'
          }
        ]
      },
      {
        id: 'e3',
        title: 'Unit 3 · Sports',
        emoji: '⚽',
        description: '学习体育运动相关的词汇和表达',
        lessons: [
          {
            title: 'Sports',
            content: `
              <p><strong>New Words 新词汇：</strong></p>
              <p>⚽ football 足球 · 🏀 basketball 篮球 · 🏓 ping-pong 乒乓球</p>
              <p>🏃 run 跑 · 🏊 swim 游泳 · 🚴 ride a bike 骑自行车</p>
              <div class="tip-box">
                💡 <strong>Sentences 句型：</strong><br>
                I like football. 我喜欢足球。<br>
                Can you swim? 你会游泳吗？<br>
                Let's play basketball! 打篮球吧！
              </div>
            `
          }
        ],
        questions: [
          {
            question: '"Basketball" 的中文意思是？',
            options: ['足球', '篮球', '排球', '乒乓球'],
            answer: 1,
            hint: '"Basket"是"篮子"，"ball"是"球"，想想往篮子里投的是什么球？',
            explanation: '<strong>解析：</strong><br>① "Basketball"由"basket(篮子)"和"ball(球)"组成。<br>② A足球=football，B篮球=basketball，C排球=volleyball，D乒乓球=ping-pong。<br>③ "Basketball"的中文意思是<strong>篮球</strong>，选B。'
          },
          {
            question: '"Can you swim?" 的中文意思是？',
            options: ['你喜欢游泳吗？', '你会游泳吗？', '你在游泳吗？', '你想游泳吗？'],
            answer: 1,
            hint: '"Can"表示"会、能"，问的是能力而不是喜好。',
            explanation: '<strong>解析：</strong><br>① "Can"是情态动词，表示"会、能够"。<br>② "you"是"你"，"swim"是"游泳"。<br>③ "Can you swim?"的中文意思是<strong>"你会游泳吗？"</strong>，选B。'
          },
          {
            question: '"Ping-pong" 是什么运动？',
            options: ['篮球', '足球', '乒乓球', '羽毛球'],
            answer: 2,
            hint: 'Ping-pong是中国的国球，用球拍打的。',
            explanation: '<strong>解析：</strong><br>① "Ping-pong"是拟声词，模拟乒乓球撞击的声音。<br>② 中国运动员在乒乓球项目上非常强。<br>③ "Ping-pong"是<strong>乒乓球</strong>，选C。'
          },
          {
            question: '"Let\'s" 是哪个词的缩写？',
            options: ['Let us', 'Let is', 'Let has', 'Let was'],
            answer: 0,
            hint: '"Let\'s"中的"\'s"是哪个词的缩写？想想"Let\'s go"的意思。',
            explanation: '<strong>解析：</strong><br>① "Let\'s"是"Let us"的缩写形式，表示"让我们"。<br>② "Let\'s go!" = "Let us go!"（我们走吧！）<br>③ "Let\'s"来源于<strong>Let us</strong>，选A。'
          },
          {
            question: '"I like football." 的否定句是？',
            options: ['I not like football.', 'I don\'t like football.', 'I no like football.', 'I isn\'t like football.'],
            answer: 1,
            hint: '第三人称以外的一般现在时否定句，要用don\'t。',
            explanation: '<strong>解析：</strong><br>① "I like football."是肯定句，主语是"I"。<br>② 否定句需要在谓语动词前加"don\'t"（do not）。<br>③ 正确的否定句是"<strong>I don\'t like football.</strong>"，选B。'
          },
          {
            question: '"Swim" 的中文意思是？',
            options: ['跑步', '游泳', '跳跃', '骑车'],
            answer: 1,
            hint: '夏天去游泳池里做什么？那就是"swim"。',
            explanation: '<strong>解析：</strong><br>① "Swim"是动词，表示在水里游动。<br>② A跑步=run，B游泳=swim，C跳跃=jump，D骑车=ride a bike。<br>③ "Swim"的中文意思是<strong>游泳</strong>，选B。'
          },
          {
            question: '"Ride a bike" 的中文意思是？',
            options: ['开汽车', '骑自行车', '坐火车', '骑摩托车'],
            answer: 1,
            hint: '"Ride"是"骑"，"bike"是"自行车"。',
            explanation: '<strong>解析：</strong><br>① "Ride"意思是"骑、乘坐"，"a bike"是"一辆自行车"。<br>② A开汽车=drive a car，B骑自行车=ride a bike，C坐火车=take a train，D骑摩托车=ride a motorcycle。<br>③ "Ride a bike"的中文意思是<strong>骑自行车</strong>，选B。'
          },
          {
            question: '"Football" 的中文意思是？',
            options: ['篮球', '足球', '排球', '棒球'],
            answer: 1,
            hint: '"Foot"是"脚"，"ball"是"球"，用脚踢的球。',
            explanation: '<strong>解析：</strong><br>① "Football"由"foot(脚)"和"ball(球)"组成，是用脚踢的球。<br>② A篮球=basketball，B足球=football，C排球=volleyball，D棒球=baseball。<br>③ "Football"的中文意思是<strong>足球</strong>，选B。'
          },
          {
            question: '"Let\'s play!" 是什么句式？',
            options: ['陈述句', '祈使句', '疑问句', '感叹句'],
            answer: 1,
            hint: '"Let\'s"开头表示建议或邀请，这是一种什么句式？',
            explanation: '<strong>解析：</strong><br>① "Let\'s"开头的句子表示建议、邀请或命令。<br>② 英语中，表示命令、请求、建议的句子叫做<strong>祈使句</strong>。<br>③ "Let\'s play!"是表示建议的祈使句，选B。'
          },
          {
            question: '"I like sports." 中的"sports"是什么意思？',
            options: ['运动', '游戏', '比赛', '活动'],
            answer: 0,
            hint: 'Football、basketball、swim都属于"sports"。',
            explanation: '<strong>解析：</strong><br>① "Sports"是"运动"的总称，包括各种体育运动。<br>② 足球、篮球、游泳等都是"sports"。<br>③ "I like sports."的意思是<strong>"我喜欢运动"</strong>。选A。'
          },
          {
            question: '"Run" 的中文意思是？',
            options: ['走', '跑', '跳', '爬'],
            answer: 1,
            hint: '体育课上，老师让大家绕操场做什么？那就是"run"。',
            explanation: '<strong>解析：</strong><br>① "Run"是动词，表示"跑步"。<br>② A走=walk，B跑=run，C跳=jump，D爬=climb。<br>③ "Run"的中文意思是<strong>跑</strong>，选B。'
          },
          {
            question: '"I like basketball." 的中文意思是？',
            options: ['我打篮球', '我喜欢篮球', '我会篮球', '我看篮球'],
            answer: 1,
            hint: '"Like"是"喜欢"，"basketball"是"篮球"。',
            explanation: '<strong>解析：</strong><br>① "I"是"我"，"like"是"喜欢"，"basketball"是"篮球"。<br>② "I like basketball."的中文意思是<strong>"我喜欢篮球"</strong>。<br>③ "like"表示"喜欢"，不是"会"或者"打"。选B。'
          },
          {
            question: '"Can you play football?" 肯定回答是什么？',
            options: ['Yes, I can.', 'Yes, I do.', 'Yes, I am.', 'Yes, I like.'],
            answer: 0,
            hint: '问句中有"Can"，回答时也要用"can"。',
            explanation: '<strong>解析：</strong><br>① 问句以"Can"开头，回答时也要用"can"来回应。<br>② 肯定回答用"<strong>Yes, I can.</strong>"（是的，我会）。<br>③ 否定回答用"No, I can\'t."。选A。'
          },
          {
            question: '"Let\'s go swimming!" 的中文意思是？',
            options: ['我喜欢游泳', '我们去游泳吧！', '我会游泳', '他在游泳'],
            answer: 1,
            hint: '"Let\'s"是"让我们"，表示邀请和建议。',
            explanation: '<strong>解析：</strong><br>① "Let\'s" = "Let us"（让我们）。<br>② "go swimming"是"去游泳"的意思。<br>③ "Let\'s go swimming!"的中文意思是<strong>"我们去游泳吧！"</strong>，选B。'
          },
          {
            question: '"Volleyball" 的中文意思是？',
            options: ['足球', '篮球', '排球', '羽毛球'],
            answer: 2,
            hint: '"Volley"有"截击"的意思，这是用双手垫击的球类运动。',
            explanation: '<strong>解析：</strong><br>① "Volleyball"是一种球类运动，中间有网，用手击球。<br>② A足球=football，B篮球=basketball，C排球=volleyball，D羽毛球=badminton。<br>③ "Volleyball"的中文意思是<strong>排球</strong>，选C。'
          }
        ]
      },
      {
        id: 'e4',
        title: 'Unit 4 · Jobs',
        emoji: '👨‍🔧',
        description: '学习各种职业名称和相关表达',
        lessons: [
          {
            title: 'Jobs',
            content: `
              <p><strong>New Words 新词汇：</strong></p>
              <p>👨‍⚕️ doctor 医生 · 👩‍🏫 teacher 老师 · 👨‍🚒 firefighter 消防员</p>
              <p>👩‍🍳 cook 厨师 · 👨‍✈️ pilot 飞行员 · 👩‍🎨 artist 画家</p>
              <div class="tip-box">
                💡 <strong>Sentences 句型：</strong><br>
                What does your father do? 你爸爸做什么工作？<br>
                He is a doctor. 他是一名医生。<br>
                I want to be a teacher. 我想成为一名老师。
              </div>
            `
          }
        ],
        questions: [
          {
            question: '"Doctor" 的中文意思是？',
            options: ['护士', '医生', '老师', '工人'],
            answer: 1,
            hint: '生病了要去医院找谁看病？那就是"doctor"。',
            explanation: '<strong>解析：</strong><br>① "Doctor"是职业名词，指给人看病的人。<br>② A护士=nurse，B医生=doctor，C老师=teacher，D工人=worker。<br>③ "Doctor"的中文意思是<strong>医生</strong>，选B。'
          },
          {
            question: '"What does your mother do?" 的中文意思是？',
            options: ['你妈妈在做什么？', '你妈妈是做什么工作的？', '你妈妈在哪？', '你妈妈怎么样？'],
            answer: 1,
            hint: '"What does ... do?"是询问职业的常用句型。',
            explanation: '<strong>解析：</strong><br>① "What does ... do?"是询问职业的固定句型，意思是"……做什么工作？"。<br>② "your mother"是"你妈妈"。<br>③ "What does your mother do?"的中文意思是<strong>"你妈妈是做什么工作的？"</strong>，选B。'
          },
          {
            question: '"Firefighter" 的中文意思是？',
            options: ['消防员', '警察', '士兵', '保安'],
            answer: 0,
            hint: '"Fire"是"火"，"fighter"是"战斗的人"，合起来就是"与火战斗的人"。',
            explanation: '<strong>解析：</strong><br>① "Firefighter"由"fire(火)"和"fighter(战斗者)"组成。<br>② 他们的工作是灭火和救援。<br>③ "Firefighter"的中文意思是<strong>消防员</strong>，选A。'
          },
          {
            question: '"Pilot" 是什么职业？',
            options: ['医生', '老师', '飞行员', '厨师'],
            answer: 2,
            hint: '开飞机的人是什么职业？',
            explanation: '<strong>解析：</strong><br>① "Pilot"指驾驶飞机的人。<br>② A医生=doctor，B老师=teacher，C飞行员=pilot，D厨师=cook。<br>③ "Pilot"的职业是<strong>飞行员</strong>，选C。'
          },
          {
            question: '"He is a cook." 中的"cook"是什么职业？',
            options: ['看书的人', '厨师', '跑步的人', '司机'],
            answer: 1,
            hint: '"Cook"作为名词时，指在厨房里做饭的人。',
            explanation: '<strong>解析：</strong><br>① "Cook"既可以作动词（烹饪），也可以作名词（厨师）。<br>② 在这里，"a cook"指"一名厨师"。<br>③ "cook"的职业是<strong>厨师</strong>，选B。'
          },
          {
            question: '"Teacher" 的中文意思是？',
            options: ['医生', '学生', '老师', '工人'],
            answer: 2,
            hint: '在学校里给同学们上课的人是什么职业？',
            explanation: '<strong>解析：</strong><br>① "Teacher"指在学校教书的人。<br>② A医生=doctor，B学生=student，C老师=teacher，D工人=worker。<br>③ "Teacher"的中文意思是<strong>老师</strong>，选C。'
          },
          {
            question: '"What does he do?" 的正确答案是？',
            options: ['He is tall.', 'He is a doctor.', 'He is happy.', 'He is running.'],
            answer: 1,
            hint: '"What does he do?"问的是职业，回答应该是关于职业的。',
            explanation: '<strong>解析：</strong><br>① "What does he do?"是询问职业的句型。<br>② A"他很高"（描述外貌），C"他很快乐"（描述心情），D"他在跑步"（描述正在做的事）。<br>③ B"<strong>He is a doctor.</strong>"（他是一名医生）正确回答了职业，选B。'
          },
          {
            question: '"I want to be a teacher." 中"want to"是什么意思？',
            options: ['想要', '需要', '应该', '可以'],
            answer: 0,
            hint: '"I want to be..."是"我想要成为……"的意思。',
            explanation: '<strong>解析：</strong><br>① "Want to"是固定搭配，表示"想要做某事"。<br>② "I want to be a teacher." = "我想要成为一名老师。"<br>③ "want to"的意思是<strong>想要</strong>，选A。'
          },
          {
            question: '"Artist" 的中文意思是？',
            options: ['歌手', '画家/艺术家', '舞蹈家', '作家'],
            answer: 1,
            hint: '创作绘画、雕塑等艺术作品的人是什么职业？',
            explanation: '<strong>解析：</strong><br>① "Artist"指从事艺术创作的人，如画家、雕塑家等。<br>② A歌手=singer，B画家/艺术家=artist，C舞蹈家=dancer，D作家=writer。<br>③ "Artist"的中文意思是<strong>画家/艺术家</strong>，选B。'
          },
          {
            question: '"Worker" 的中文意思是？',
            options: ['老师', '医生', '工人', '农民'],
            answer: 2,
            hint: '"Work"是"工作"，"worker"就是"工作的人"。',
            explanation: '<strong>解析：</strong><br>① "Worker"由"work(工作)"加"er(表示人)"构成。<br>② A老师=teacher，B医生=doctor，C工人=worker，D农民=farmer。<br>③ "Worker"的中文意思是<strong>工人</strong>，选C。'
          },
          {
            question: '"Nurse" 的中文意思是？',
            options: ['医生', '护士', '病人', '药师'],
            answer: 1,
            hint: '在医院里，帮助医生照顾病人的是什么职业？',
            explanation: '<strong>解析：</strong><br>① "Nurse"是在医院工作，协助医生照顾病人的职业。<br>② A医生=doctor，B护士=nurse，C病人=patient，D药师=pharmacist。<br>③ "Nurse"的中文意思是<strong>护士</strong>，选B。'
          },
          {
            question: '"What do you want to be?" 的中文意思是？',
            options: ['你在做什么？', '你想成为什么？', '你喜欢什么？', '你看到了什么？'],
            answer: 1,
            hint: '"What do you want to be?"是询问未来职业的理想。',
            explanation: '<strong>解析：</strong><br>① "What"问"什么"，"do you want to be"是"你想要成为"。<br>② "What do you want to be?"的中文意思是<strong>"你想成为什么？"</strong><br>③ 这是询问未来职业理想的常用句型。选B。'
          },
          {
            question: '"Farmer" 的中文意思是？',
            options: ['工人', '医生', '农民', '教师'],
            answer: 2,
            hint: '"Farm"是"农场"，"farmer"就是在农场工作的人。',
            explanation: '<strong>解析：</strong><br>① "Farmer"由"farm(农场)"加"er(表示人)"构成。<br>② A工人=worker，B医生=doctor，C农民=farmer，D教师=teacher。<br>③ "Farmer"的中文意思是<strong>农民</strong>，选C。'
          },
          {
            question: '"He works in a hospital." 他最可能是什么职业？',
            options: ['A teacher', 'A doctor', 'A farmer', 'A driver'],
            answer: 1,
            hint: '"Hospital"是医院，在医院工作最可能是什么职业？',
            explanation: '<strong>解析：</strong><br>① "works in a hospital"意思是"在医院工作"。<br>② A老师在学校工作，C农民在农场工作，D司机开车到处跑。<br>③ B<strong>医生(doctor)</strong>在医院工作，最符合题意，选B。'
          },
          {
            question: '"Driver" 的中文意思是？',
            options: ['飞行员', '司机', '厨师', '工人'],
            answer: 1,
            hint: '"Drive"是"驾驶"，"driver"就是"驾驶的人"。',
            explanation: '<strong>解析：</strong><br>① "Driver"由"drive(驾驶)"加"er(表示人)"构成。<br>② A飞行员=pilot，B司机=driver，C厨师=cook，D工人=worker。<br>③ "Driver"的中文意思是<strong>司机</strong>，选B。'
          }
        ]
      },
      {
        id: 'e5',
        title: 'Unit 5 · My Family',
        emoji: '👨‍👩‍👧‍👦',
        description: '学习家庭成员的词汇，介绍自己的家人',
        lessons: [
          {
            title: 'My Family',
            content: `
              <p><strong>New Words 新词汇：</strong></p>
              <p>👨 father/dad 爸爸 · 👩 mother/mum 妈妈 · 👴 grandfather 爷爷/外公</p>
              <p>👵 grandmother 奶奶/外婆 · 👦 brother 兄弟 · 👧 sister 姐妹</p>
              <div class="tip-box">
                💡 <strong>Sentences 句型：</strong><br>
                This is my family. 这是我的家人。<br>
                She is my mother. 她是我的妈妈。<br>
                I have a sister. 我有一个妹妹/姐姐。
              </div>
            `
          }
        ],
        questions: [
          {
            question: '"Mother" 的中文意思是？',
            options: ['父亲', '母亲', '兄弟', '姐妹'],
            answer: 1,
            hint: 'Mother是每个家庭里都有的，她生了我们、照顾我们。',
            explanation: '<strong>解析：</strong><br>① "Mother"是家庭成员称呼。<br>② A父亲=father，B母亲=mother，C兄弟=brother，D姐妹=sister。<br>③ "Mother"的中文意思是<strong>母亲</strong>，选B。'
          },
          {
            question: '"This is my grandfather." 的中文意思是？',
            options: ['这是我的爸爸', '这是我的爷爷/外公', '这是我的哥哥', '这是我的老师'],
            answer: 1,
            hint: '"Grandfather"是"爷爷"或"外公"，是爸爸的爸爸或妈妈的爸爸。',
            explanation: '<strong>解析：</strong><br>① "This is"是"这是"，"my"是"我的"，"grandfather"是"爷爷/外公"。<br>② A这是我的爸爸=This is my father，C这是我的哥哥=This is my brother，D这是我的老师=This is my teacher。<br>③ "This is my grandfather."的中文意思是<strong>"这是我的爷爷/外公"</strong>，选B。'
          },
          {
            question: '"Sister" 的中文意思是？',
            options: ['兄弟', '姐妹', '母亲', '父亲'],
            answer: 1,
            hint: '家里的女孩——如果是你的同辈，那就是"sister"。',
            explanation: '<strong>解析：</strong><br>① "Sister"指与自己同辈的女性家庭成员。<br>② A兄弟=brother，B姐妹=sister，C母亲=mother，D父亲=father。<br>③ "Sister"的中文意思是<strong>姐妹</strong>，选B。'
          },
          {
            question: '"I have a brother." 中的"have"是什么意思？',
            options: ['有', '吃', '去', '做'],
            answer: 0,
            hint: '"I have a..."表示"我有一个……"，是表示拥有的意思。',
            explanation: '<strong>解析：</strong><br>① "I have"表示"我有"，"have"在这里是"有"的意思。<br>② "I have a brother." = "我有一个兄弟。"<br>③ "have"的意思是<strong>有</strong>，选A。'
          },
          {
            question: '"I love my family." 中的"love"是什么意思？',
            options: ['喜欢', '爱', '看', '听'],
            answer: 1,
            hint: '"Love"比"like(喜欢)"的程度更深，是"爱"的意思。',
            explanation: '<strong>解析：</strong><br>① "Love"是情感很深的词，表示"爱"。<br>② "like"是"喜欢"，"love"的程度比"like"更深。<br>③ "I love my family."中的"love"意思是<strong>爱</strong>，选B。'
          },
          {
            question: '"Grandmother" 的中文意思是？',
            options: ['爷爷/外公', '奶奶/外婆', '爸爸', '妈妈'],
            answer: 1,
            hint: '和"grandfather(爷爷/外公)"对应的女性长辈是谁？',
            explanation: '<strong>解析：</strong><br>① "Grandmother"是女性长辈的称呼。<br>② A爷爷/外公=grandfather，B奶奶/外婆=grandmother，C爸爸=father，D妈妈=mother。<br>③ "Grandmother"的中文意思是<strong>奶奶/外婆</strong>，选B。'
          },
          {
            question: '"My father" 是什么意思？',
            options: ['我的母亲', '我的父亲', '我的兄弟', '我的姐妹'],
            answer: 1,
            hint: '"Father"是"爸爸"，"my father"就是"我的爸爸"。',
            explanation: '<strong>解析：</strong><br>① "My"是"我的"，"father"是"父亲/爸爸"。<br>② A我的母亲=my mother，B我的父亲=my father，C我的兄弟=my brother，D我的姐妹=my sister。<br>③ "My father"的意思是<strong>我的父亲</strong>，选B。'
          },
          {
            question: '"She is my sister." 中的"she"指代的是？',
            options: ['男性', '女性', '物品', '动物'],
            answer: 1,
            hint: '"She"是"她"，用来指代女性。',
            explanation: '<strong>解析：</strong><br>① "She"是英语中的女性第三人称代词，意思是"她"。<br>② "Sister（姐妹）"是女性，所以用"she"指代。<br>③ "She"指代的是<strong>女性</strong>，选B。'
          },
          {
            question: '"I have a big family." 中的"big"是什么意思？',
            options: ['小的', '大的', '好的', '新的'],
            answer: 1,
            hint: '"Big"和"small(小的)"是反义词，想想它是什么意思？',
            explanation: '<strong>解析：</strong><br>① "Big"是形容词，意思是"大的"。<br>② A小的=small，B大的=big，C好的=good，D新的=new。<br>③ "a big family"意思是<strong>"一个大家庭"</strong>，选B。'
          },
          {
            question: '"I love you, Mum!" 中的"Mum"是？',
            options: ['爸爸', '妈妈', '姐姐', '奶奶'],
            answer: 1,
            hint: '在中国，孩子叫自己的母亲一般叫"妈妈"，在英语中就是"Mum"。',
            explanation: '<strong>解析：</strong><br>① "Mum"是英式英语中对"妈妈"的称呼（美式常用"Mom"）。<br>② A爸爸=dad/daddy，B妈妈=mum/mom，C姐姐=sister，D奶奶=grandma。<br>③ "Mum"是<strong>妈妈</strong>，选B。'
          },
          {
            question: '"My parents" 的中文意思是？',
            options: ['我的父母', '我的祖父母', '我的孩子', '我的亲戚'],
            answer: 0,
            hint: '"Parents"是"父亲和母亲"的合称。',
            explanation: '<strong>解析：</strong><br>① "Parents"是"parent(父亲或母亲)"的复数形式，指"父母双方"。<br>② "My parents"意思是<strong>"我的父母"</strong>（爸爸和妈妈）。<br>③ 选A。'
          },
          {
            question: '"This is my family." 的中文意思是？',
            options: ['这是我的家人', '这是我的房间', '这是我的朋友', '这是我的学校'],
            answer: 0,
            hint: '"Family"是"家人、家庭"的意思。',
            explanation: '<strong>解析：</strong><br>① "This is"是"这是"，"my"是"我的"，"family"是"家人/家庭"。<br>② A这是我的家人=This is my family，B这是我的房间=This is my room，C这是我的朋友=This is my friend，D这是我的学校=This is my school。<br>③ 正确答案是<strong>"这是我的家人"</strong>，选A。'
          },
          {
            question: '"Uncle" 的中文意思是？',
            options: ['叔叔/舅舅', '阿姨/姑姑', '爷爷/外公', '奶奶/外婆'],
            answer: 0,
            hint: '爸爸的弟弟或妈妈的兄弟，我们怎么称呼？',
            explanation: '<strong>解析：</strong><br>① "Uncle"指父母的兄弟（叔叔、舅舅等）。<br>② A叔叔/舅舅=uncle，B阿姨/姑姑=aunt，C爷爷/外公=grandfather，D奶奶/外婆=grandmother。<br>③ "Uncle"的中文意思是<strong>叔叔/舅舅</strong>，选A。'
          },
          {
            question: '"Aunt" 的中文意思是？',
            options: ['叔叔/舅舅', '阿姨/姑姑', '爷爷/外公', '奶奶/外婆'],
            answer: 1,
            hint: '和"uncle(叔叔/舅舅)"对应的女性称呼是什么？',
            explanation: '<strong>解析：</strong><br>① "Aunt"指父母的姐妹（阿姨、姑姑等）。<br>② A叔叔/舅舅=uncle，B阿姨/姑姑=aunt，C爷爷/外公=grandfather，D奶奶/外婆=grandmother。<br>③ "Aunt"的中文意思是<strong>阿姨/姑姑</strong>，选B。'
          },
          {
            question: '"I have two sisters." 的中文意思是？',
            options: ['我有两个姐妹', '我有两个兄弟', '我有两个朋友', '我有两个老师'],
            answer: 0,
            hint: '"Two"是"二"，"sisters"是"sister"的复数形式。',
            explanation: '<strong>解析：</strong><br>① "I"是"我"，"have"是"有"，"two"是"两个"，"sisters"是"姐妹（复数）"。<br>② "I have two sisters."的中文意思是<strong>"我有两个姐妹"</strong>。<br>③ "sisters"用了复数，表示不止一个。选A。'
          }
        ]
      },
      {
        id: 'e6',
        title: 'Unit 6 · More About Me',
        emoji: '🌟',
        description: '学会介绍自己的特长和爱好',
        lessons: [
          {
            title: 'More About Me',
            content: `
              <p><strong>New Words 新词汇：</strong></p>
              <p>🎨 draw 画画 · 🎤 sing 唱歌 · 💃 dance 跳舞</p>
              <p>🎮 play 玩/打 · 😊 happy 开心 · 😢 sad 难过</p>
              <div class="tip-box">
                💡 <strong>Sentences 句型：</strong><br>
                I can draw. 我会画画。<br>
                I like to sing. 我喜欢唱歌。<br>
                I am happy. 我很开心。<br>
                What about you? 你呢？
              </div>
            `
          }
        ],
        questions: [
          {
            question: '"I can draw." 的中文意思是？',
            options: ['我喜欢画画', '我会画画', '我在画画', '我想画画'],
            answer: 1,
            hint: '"Can"表示能力"会"，"draw"是"画画"。',
            explanation: '<strong>解析：</strong><br>① "I"是"我"，"can"是"会/能"，"draw"是"画画"。<br>② "I can draw."的中文意思是<strong>"我会画画"</strong>。<br>③ "can"表示能力，不是"喜欢"或"正在做"。选B。'
          },
          {
            question: '"Draw" 的中文意思是？',
            options: ['写字', '画画', '跑步', '跳舞'],
            answer: 1,
            hint: '用笔在纸上画出图案，这个动作用英语怎么说？',
            explanation: '<strong>解析：</strong><br>① "Draw"是动词，表示用笔作画。<br>② A写字=write，B画画=draw，C跑步=run，D跳舞=dance。<br>③ "Draw"的中文意思是<strong>画画</strong>，选B。'
          },
          {
            question: '"I am happy." 的反义句可以是？',
            options: ['I am not happy.', 'I am sad.', 'I am tall.', 'I am big.'],
            answer: 1,
            hint: '想想"happy(开心)"的反义词是什么？',
            explanation: '<strong>解析：</strong><br>① "Happy"意思是"开心的"，它的反义词是"sad(难过的)"。<br>② A"I am not happy."是否定句不是反义句。<br>③ 反义句应该是意思相反的句子："<strong>I am sad.</strong>"，选B。'
          },
          {
            question: '"Sing" 的中文意思是？',
            options: ['跳舞', '唱歌', '画画', '弹琴'],
            answer: 1,
            hint: '用嘴发出好听的旋律，这个动作叫"sing"。',
            explanation: '<strong>解析：</strong><br>① "Sing"是动词，表示唱歌。<br>② A跳舞=dance，B唱歌=sing，C画画=draw，D弹琴=play the piano。<br>③ "Sing"的中文意思是<strong>唱歌</strong>，选B。'
          },
          {
            question: '"What about you?" 的中文意思是？',
            options: ['你怎么样/你呢？', '你在哪？', '你是什么？', '你做什么？'],
            answer: 0,
            hint: '"What about..."是"关于……怎么样"的意思，用来反问对方。',
            explanation: '<strong>解析：</strong><br>① "What about..."是固定句型，用于反问对方相同的情况。<br>② "What about you?"直译是"关于你怎么样？"，实际意思是<strong>"你呢？"</strong><br>③ 例如："I like football. What about you?"（我喜欢足球，你呢？）选A。'
          },
          {
            question: '"Can" 在句子"I can dance"中表示什么？',
            options: ['喜欢', '会/能', '想', '要'],
            answer: 1,
            hint: '"I can dance"是说"我会跳舞"，"can"表示具备某种能力。',
            explanation: '<strong>解析：</strong><br>① "Can"是情态动词，表示"会、能够"。<br>② "I can dance." = "我会跳舞。"，表示具备跳舞的能力。<br>③ "Can"在这里的意思是<strong>会/能</strong>，选B。'
          },
          {
            question: '"Dance" 的中文意思是？',
            options: ['唱歌', '跑步', '跳舞', '画画'],
            answer: 2,
            hint: '随着音乐扭动身体，这个动作叫"dance"。',
            explanation: '<strong>解析：</strong><br>① "Dance"是动词，表示跳舞。<br>② A唱歌=sing，B跑步=run，C跳舞=dance，D画画=draw。<br>③ "Dance"的中文意思是<strong>跳舞</strong>，选C。'
          },
          {
            question: '"I like to read." 中的"read"是什么意思？',
            options: ['写', '读', '画', '玩'],
            answer: 1,
            hint: '"Read a book"是什么意思？就是"读书"。',
            explanation: '<strong>解析：</strong><br>① "Read"是动词，表示"阅读、朗读"。<br>② A写=write，B读=read，C画=draw，D玩=play。<br>③ "I like to read."中的"read"意思是<strong>读</strong>，选B。'
          },
          {
            question: '"I am sad." 中的"sad"是什么意思？',
            options: ['开心', '难过', '兴奋', '疲倦'],
            answer: 1,
            hint: '考试没考好或者和朋友吵架了，心情会怎样？',
            explanation: '<strong>解析：</strong><br>① "Sad"是形容词，表示"难过的、伤心的"。<br>② A开心=happy，B难过=sad，C兴奋=excited，D疲倦=tired。<br>③ "I am sad."中的"sad"意思是<strong>难过</strong>，选B。'
          },
          {
            question: '"I can play football." 的中文意思是？',
            options: ['我喜欢足球', '我会踢足球', '我在踢足球', '我有足球'],
            answer: 1,
            hint: '"Can"表示"会"的能力，而不是"喜欢"或"正在做"。',
            explanation: '<strong>解析：</strong><br>① "I"是"我"，"can"是"会"，"play football"是"踢足球"。<br>② "I can play football."的中文意思是<strong>"我会踢足球"</strong>。<br>③ "can"表示能力，不是"喜欢"或"正在做"。选B。'
          },
          {
            question: '"I like to sing." 的中文意思是？',
            options: ['我喜欢唱歌', '我会唱歌', '我在唱歌', '我想唱歌'],
            answer: 0,
            hint: '"Like to"是"喜欢做某事"的意思。',
            explanation: '<strong>解析：</strong><br>① "I"是"我"，"like to"是"喜欢做某事"，"sing"是"唱歌"。<br>② "I like to sing."的中文意思是<strong>"我喜欢唱歌"</strong>。<br>③ "like to"表示喜好，"can"才表示能力。选A。'
          },
          {
            question: '"I am happy." 的中文意思是？',
            options: ['我不开心', '我很开心', '我很难过', '我很累'],
            answer: 1,
            hint: '"Happy"是"开心、快乐"的意思。',
            explanation: '<strong>解析：</strong><br>① "I am"是"我是/我很"，"happy"是"开心的/快乐的"。<br>② A我不开心=I am not happy，B我很开心=I am happy，C我很难过=I am sad，D我很累=I am tired。<br>③ "I am happy."的中文意思是<strong>"我很开心"</strong>，选B。'
          },
          {
            question: '"Can you dance?" 的肯定回答是什么？',
            options: ['Yes, I can.', 'Yes, I do.', 'Yes, I am.', 'Yes, I like.'],
            answer: 0,
            hint: '问句以"Can"开头，回答时也要用"can"。',
            explanation: '<strong>解析：</strong><br>① 问句"Can you dance?"以"Can"开头，是一般疑问句。<br>② 肯定回答用"<strong>Yes, I can.</strong>"（是的，我会）。<br>③ 否定回答用"No, I can\'t."。选A。'
          },
          {
            question: '"I can swim." 的中文意思是？',
            options: ['我喜欢游泳', '我会游泳', '我在游泳', '我想游泳'],
            answer: 1,
            hint: '"Can"是"会"，"swim"是"游泳"。',
            explanation: '<strong>解析：</strong><br>① "I"是"我"，"can"是"会"，"swim"是"游泳"。<br>② "I can swim."的中文意思是<strong>"我会游泳"</strong>。<br>③ "can"表示能力，"I can swim"是"我会游泳"。选B。'
          },
          {
            question: '"What can you do?" 的中文意思是？',
            options: ['你喜欢什么？', '你会做什么？', '你在做什么？', '你想要什么？'],
            answer: 1,
            hint: '"What"是"什么"，"can you do"是"你会做"。',
            explanation: '<strong>解析：</strong><br>① "What"是"什么"，"can"是"会/能"，"you"是"你"，"do"是"做"。<br>② "What can you do?"的中文意思是<strong>"你会做什么？"</strong><br>③ 这是询问能力的常用句型。选B。'
          }
        ]
      }
    ]
  }
};

// ======== 趣味彩蛋内容 ========
const EASTER_EGGS = [
  { emoji: '🦉', title: '猫头鹰小博士说：', text: '你知道吗？章鱼有三颗心脏，血液是蓝色的！' },
  { emoji: '🐘', title: '大象告诉你：', text: '大象是唯一不会跳跃的哺乳动物哦～因为它们太重啦！' },
  { emoji: '🦒', title: '长颈鹿冷知识：', text: '长颈鹿的舌头有50厘米长，可以用来掏耳朵！' },
  { emoji: '🌍', title: '地理小知识：', text: '地球的周长大约是40,000公里，坐飞机绕一圈要两天！' },
  { emoji: '🧠', title: '大脑小秘密：', text: '人脑约有860亿个神经元，每天产生约7万个想法！' },
  { emoji: '🌊', title: '海洋奇闻：', text: '马里亚纳海沟深11000米，把珠穆朗玛峰放进去还有余！' },
  { emoji: '🦋', title: '蝴蝶小知识：', text: '蝴蝶是用脚来品尝味道的，它们脚上有味觉感受器！' },
  { emoji: '🍿', title: '爆米花冷知识：', text: '爆米花在6000年前就被发现了，是世界上最早的零食之一！' },
  { emoji: '🧊', title: '南极小知识：', text: '南极洲是世界上最大的沙漠，因为那里几乎不下雨！' },
  { emoji: '🌱', title: '植物小秘密：', text: '向日葵不是跟着太阳转的，开花前才有向光性哦！' },
  { emoji: '🐙', title: '乌贼的绝活：', text: '乌贼有十个触手，遇到危险时会喷出墨汁掩护自己逃跑！' },
  { emoji: '🚀', title: '太空小知识：', text: '在国际空间站上，一天能看到16次日出和日落！' }
];

// ======== 趣味笑话 ========
const JOKES = [
  '小明问妈妈："妈妈，为什么我每天都得写作业？"<br>妈妈："因为你上学啊！"<br>小明："那我明天不去上学了！"',
  '老师问："谁能用\'如果\'造句？"<br>小明说："如果我吃了三碗饭，我就饱了。"<br>老师："不错，还有吗？"<br>小明："如果我吃了四碗饭，我就撑了。"',
  '数学课，老师问："树上有10只鸟，猎人开枪打死1只，还剩几只？"<br>小明说："0只，其他的飞走了。"<br>老师："很好。"<br>小明反问："那如果被打死的鸟拴在树上呢？"',
  '语文老师问："同学们，\'雪融化了是什么？\'"<br>大家说"水"。<br>小明说："是春天！"<br>老师愣住了。',
  '小明作文：《我的妈妈》<br>"我的妈妈是个不到40岁的女人，她每天都很忙……"<br>老师批注：「不到40岁」你妈妈知道吗？',
  '爸爸问小明："为什么每次考倒数第一还那么开心？"<br>小明说："因为没有退步空间了！"<br>爸爸："……"',
  '小明：妈妈，我想吃冰淇淋！<br>妈妈：不行，你咳嗽还没好。<br>小明：那我吃完就不咳了，因为被冻得说不出话了……',
  '老师："小明，为什么迟到？"<br>小明："闹钟没响。"<br>老师："为什么没响？"<br>小明："被我按掉了……"',
  '妈妈让小明买一斤肉，"如果看到有鱼就买一条。"<br>小明回来拿了一斤肉。<br>妈妈问："不是让你买鱼吗？"<br>小明说："我看到鱼了，所以只买了肉。"'
];

// ======== 成就徽章 ========
const ACHIEVEMENTS = [
  { id: 'first_star', name: '初出茅庐', icon: '⭐', desc: '获得第一颗星星', check: (s) => s.totalStars >= 1 },
  { id: 'ten_stars', name: '小有成就', icon: '🌟', desc: '获得10颗星星', check: (s) => s.totalStars >= 10 },
  { id: 'all_stars', name: '学富五车', icon: '💫', desc: '获得30颗星星', check: (s) => s.totalStars >= 30 },
  { id: 'math_beginner', name: '数学新星', icon: '📐', desc: '完成数学第一单元', check: (s) => s.completedUnits.includes('m1') },
  { id: 'math_master', name: '数学达人', icon: '🧮', desc: '完成所有数学单元', check: (s) => ['m1','m2','m3','m4','m5','m6','m7','m8','m9'].every(u => s.completedUnits.includes(u)) },
  { id: 'chinese_lover', name: '语文小才子', icon: '📖', desc: '完成语文第一单元', check: (s) => s.completedUnits.includes('c1') },
  { id: 'english_star', name: '英语之星', icon: '🇦🇺', desc: '完成英语第一单元', check: (s) => s.completedUnits.includes('e1') },
  { id: 'perfect_score', name: '完美无缺', icon: '🏆', desc: '任何一次测验得满分', check: (s) => s.perfectScores > 0 },
  { id: 'persistent', name: '坚持不懈', icon: '💪', desc: '连续学习3天', check: (s) => s.consecutiveDays >= 3 }
];

const SIGNIN_REWARDS = ['⭐ × 1', '⭐ × 2', '⭐ × 3', '🎁 彩蛋 × 1', '⭐ × 5', '🃏 免答卡 × 1', '🏆 神秘大礼包'];
