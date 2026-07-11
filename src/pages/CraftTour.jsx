import { motion } from 'framer-motion'
import './CraftTour.css'

const c = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.12 } } }
const i = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } } }

const topics = [
  { id:'0', icon:'🏢', label:'企业赋能', sub:'面向职场人、管理层、HR', tag:'生产力 × 情绪稳态',
    ts:['食愈情绪，科学解压——ENF情绪营养守护职场人身心健康','90%情绪问题源于肠道，上班族肠道养护解压指南','高压不垮：职场人科学解压的“生理密码”','告别班味脸：吃对营养素，把情绪稳定在工位上','先稳住自己再撑起家——职场妈妈的情绪营养补给方案','柔而有韧，悦己安身——职场女性的ENF情绪轻解压法则'] },
  { id:'1', icon:'🏫', label:'校园护航', sub:'面向中小学生、大学生、教师', tag:'学习表现 × 情绪发育',
    ts:['孩子不是不想好好说话，是身体没给他好脾气——青少年情绪的营养盲区','告别大学焦虑内耗——用ENF情绪营养稳住学业与生活心态','科学解压不依赖咖啡——高校学生专属情绪营养调理指南','大学生情绪亚健康底层逻辑','青春期不叛逆：孩子情绪波动，可能是身体缺了“营养缓冲垫”','带娃不炸毛：家长的情绪稳定，是孩子最好的起跑线'] },
  { id:'2', icon:'🤝', label:'公益共生', sub:'面向社工、志愿者、困境群体', tag:'韧性 × 长期陪伴',
    ts:['不透支的善意：公益人情绪自护指南','公益组织的“第二曲线”：情绪健康服务创新','共情不耗竭：公益从业者的情绪营养生存法则','社工的隐形伤口：用ENF方案缓解长期心理磨损'] },
  { id:'3', icon:'🏘️', label:'社区浸润', sub:'面向居民、银发群体、特殊群体', tag:'日常可及 × 预防优先',
    ts:['银发脑活力：抗衰老从护神经开始','隔代养育的“营养代沟”——祖辈带娃的科学升级','银发不焦躁：老年情绪稳态与肠道健康的新解法','慢病背后的情绪暗流——社区慢病人群的心理生理双轨养护'] },
]

export default function CraftTour() {
  const quotes = [
    '每一个情绪崩溃的瞬间，背后都是一个被忽视的生理信号。',
    '传了三代的焦虑，可以在这一代停止编译。',
    '员工情绪成本，是企业最大的隐性负债。',
    '我们正在参与建设中国社会的“情绪免疫系统”。'
  ]

  return (
    <div>
      <div className='lecture-page__banner'>
        <div style={{ maxWidth: 1100, margin: '0 auto', padding: '0 20px' }}>
          <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
            ENF全国公益巡讲
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}>
            守护心能量，稳住好情绪，走进社区与企业
          </motion.p>
        </div>
      </div>
      <div className='lecture-page'>
      <motion.div className='lecture-page__section' variants={c} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
        <motion.div className='lecture-page__header' variants={i}>
          <span className='lecture-page__header-en'>LECTURE BACKGROUND</span>
          <h2 className='lecture-page__header-cn'>国民心理健康，已是时代必答题</h2>
          <div className='lecture-page__header-divider' />
        </motion.div>
        <motion.div className='lecture-page__stats' variants={c}>
          <motion.div className='lecture-page__stat-card' variants={i}>
            <div className='lecture-page__stat-number'>60%</div>
            <div className='lecture-page__stat-tag'>职场</div>
            <p>近60%企业员工受中度以上压力困扰，焦虑、失眠、职业倦怠已成为常态。</p>
            <div className='lecture-page__stat-extra'><span className='lecture-page__stat-hl'>76%</span> 白领存在“情绪透支”，仅 <span className='lecture-page__stat-hl'>8%</span> 寻求专业帮助</div>
          </motion.div>
          <motion.div className='lecture-page__stat-card' variants={i}>
            <div className='lecture-page__stat-number'>14.8%</div>
            <div className='lecture-page__stat-tag'>青少年</div>
            <p>抑郁倾向检出率达14.8%，学业竞争、升学压力与情绪调节能力不足交织。</p>
            <div className='lecture-page__stat-extra'>心理健康防线薄弱</div>
          </motion.div>
          <motion.div className='lecture-page__stat-card' variants={i}>
            <div className='lecture-page__stat-number'>高发</div>
            <div className='lecture-page__stat-tag'>社区</div>
            <p>家庭矛盾、养老焦虑、生活压力导致居民情绪困扰频发，是最容易被忽视的角落。</p>
            <div className='lecture-page__stat-extra'>基层社区缺乏便捷可及的专业心理服务</div>
          </motion.div>
        </motion.div>
        <motion.div className='lecture-page__body' variants={i}>
          <p>情绪亚健康不像身体疾病那样有明确的检查指标，但它对个人生活质量、家庭关系、组织效能的影响是实实在在的。传统的心理咨询门槛高、覆盖窄，那些最需要支持的人，往往不会主动举手。</p>
        </motion.div>
        <motion.div className='lecture-page__callout' variants={i}>我们需要一条更日常、更低门槛的干预路径。</motion.div>
      </motion.div>
      <motion.div className='lecture-page__section' variants={c} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
        <motion.div className='lecture-page__header' variants={i}>
          <span className='lecture-page__header-en'>NATIONAL STRATEGY</span>
          <h2 className='lecture-page__header-cn'>心理健康已纳入国家战略</h2>
          <div className='lecture-page__header-divider' />
        </motion.div>
        <motion.div className='lecture-page__quote' variants={i}>
          <div className='lecture-page__quote-mark'>"</div>
          <p>《“健康中国2030”规划纲要》明确将心理健康纳入国家战略，列为公共卫生优先领域，要求企事业单位、学校及社区构建全覆盖的社会心理服务体系。</p>
        </motion.div>
        <motion.div className='lecture-page__signal' variants={i}>
          <p><strong>政策信号很清晰：</strong>心理健康服务应当做到<em>人人可及、日常可及、低门槛可及</em>。</p>
        </motion.div>
        <motion.div className='lecture-page__arrow-block' variants={i}>
          <div className='lecture-page__arrow-icon'>&rarr;</div>
          <p>ENF全国公益巡讲响应国家战略，将科学解压从诊疗室推向日常生活，从企业推向校园与社区，助力建设社会情绪健康基础设施。</p>
        </motion.div>
      </motion.div>
      <motion.div className='lecture-page__section' variants={c} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
        <motion.div className='lecture-page__header' variants={i}>
          <span className='lecture-page__header-en'>SCIENTIFIC BREAKTHROUGH</span>
          <h2 className='lecture-page__header-cn'>ENF理论体系的前瞻性突破</h2>
          <div className='lecture-page__header-divider' />
        </motion.div>
        <motion.div className='lecture-page__body' variants={i}>
          <p>ENF（Emotion Nutrition Food）理论体系的建立，标志着情绪管理从单一的心理学范畴，向<strong>“食品科学 × 神经科学 × 微生物学 × 心理学 × 营养学”</strong>的交叉领域跨越。</p>
        </motion.div>
        <motion.div className='lecture-page__model-wrap' variants={i}>
          <div className='lecture-page__model-card'>
            <div className='lecture-page__model-label'>CORE MODEL</div>
            <div className='lecture-page__model-title'>“神经递质-肠脑轴-抗炎系统”</div>
            <div className='lecture-page__model-sub'>三元模型</div>
            <p className='lecture-page__model-desc'>通过非药物性的食品载体，为情绪提供基础生理支持<br/>情绪的底层是生理，生理的底层是营养</p>
          </div>
        </motion.div>
        <motion.div className='lecture-page__callout' variants={i}>无需预约咨询，无需挂号排队，科学调节就在日常之中。</motion.div>
      </motion.div>
      <motion.div className='lecture-page__section' variants={c} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
        <motion.div className='lecture-page__header' variants={i}>
          <span className='lecture-page__header-en'>SPEAKER</span>
          <h2 className='lecture-page__header-cn'>主讲人介绍</h2>
          <div className='lecture-page__header-divider' />
        </motion.div>
        <motion.div className='lecture-page__founder' variants={c}>
          <motion.div className='lecture-page__founder-avatar' variants={i}>
            <div className='lecture-page__founder-img'><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.2'><circle cx='12' cy='8' r='4'/><path d='M4 21v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2'/></svg></div>
            <span className='lecture-page__founder-label'>发起人</span>
          </motion.div>
          <motion.div className='lecture-page__founder-info' variants={i}>
            <h2 className='lecture-page__founder-name'>ENF理论模型创始人</h2>
            <p className='lecture-page__founder-bio'>基于神经科学、营养学与心理学的跨学科研究，首次系统性地提出了以食品科学为基础的情绪健康干预新范式。</p>
            <div className='lecture-page__founder-groups'>
              <div className='lecture-page__founder-group'>
                <h4 className='lecture-page__founder-grp-title'>Academic</h4>
                <ul><li>上海理工大学 教育经济学 硕士</li><li>巴塞罗那大学 临床心理学 硕士</li><li>国家二级心理咨询师</li><li>注册国际高级营养师</li></ul>
              </div>
              <div className='lecture-page__founder-group'>
                <h4 className='lecture-page__founder-grp-title'>Corporate</h4>
                <ul><li>心孥集团 董事总经理</li><li>宏红生物科技（山东）有限公司 总经理</li></ul>
              </div>
              <div className='lecture-page__founder-group'>
                <h4 className='lecture-page__founder-grp-title'>Social</h4>
                <ul><li>心孥青少年心理健康服务中心（民非） 理事长</li><li>圣泓细胞产业技术研究院（民非） 院长 &amp; 理事长</li><li>烟台高新区志愿服务联合会（民非） 会长</li></ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className='lecture-page__section' variants={c} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
        <motion.div className='lecture-page__header' variants={i}>
          <span className='lecture-page__header-en'>CONTENT &amp; FORMAT</span>
          <h2 className='lecture-page__header-cn'>巡讲内容与形式</h2>
          <div className='lecture-page__header-divider' />
        </motion.div>
        <motion.div className='lecture-page__body' variants={i}>
          <p style={{ textAlign: 'center', marginBottom: '20px' }}>我们的公益活动主打 <strong style={{ color: 'var(--primary)' }}>「轻量化、高互动、无压力」</strong>，不搞严肃说教，尽量贴合场景应用。</p>
          <div className='lecture-page__modules'>
            <div className='lecture-page__module'>
              <div className='lecture-page__module-icon'><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'><rect x='3' y='4' width='18' height='14' rx='2'/><path d='M8 2v4'/><path d='M16 2v4'/><path d='M12 11v4'/><path d='M9 13h6'/></svg></div>
              <h3 className='lecture-page__module-title'>主题讲座</h3>
              <span className='lecture-page__module-time'>40分钟</span>
              <p>内容从提供的主题中自由勾选，也可根据实际需求定制。</p>
            </div>
            <div className='lecture-page__module'>
              <div className='lecture-page__module-icon'><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'><path d='M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'/><polyline points='14 2 14 8 20 8'/><line x1='16' y1='13' x2='8' y2='13'/><line x1='16' y1='17' x2='8' y2='17'/></svg></div>
              <h3 className='lecture-page__module-title'>轻测评</h3>
              <span className='lecture-page__module-time'>1分钟</span>
              <p>扫码完成“情绪营养自测”，现场生成简易报告，快速定位营养缺口。</p>
            </div>
            <div className='lecture-page__module'>
              <div className='lecture-page__module-icon'><svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='1.5'><path d='M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'/></svg></div>
              <h3 className='lecture-page__module-title'>互动Q&amp;A答疑</h3>
              <span className='lecture-page__module-time'>现场</span>
              <p>针对个人困惑做一对一解答，保护隐私，降低参与心理门槛。</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
      <motion.div className='lecture-page__section' variants={c} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
        <motion.div className='lecture-page__header' variants={i}>
          <span className='lecture-page__header-en'>TOPIC MATRIX</span>
          <h2 className='lecture-page__header-cn'>四大板块 · 主题矩阵</h2>
          <div className='lecture-page__header-divider' />
        </motion.div>
        <div className='lecture-page__topics'>
          {topics.map((t, idx) => (
            <motion.div key={t.id} className='lecture-page__topic-card' variants={i} whileHover={{ y: -4, transition: { duration: 0.3 } }}>
              <div className='lecture-page__topic-icon'>{t.icon}</div>
              <div className='lecture-page__topic-cat'>{t.label}</div>
              <div className='lecture-page__topic-sub'>{t.sub}</div>
              <div className='lecture-page__topic-tag'>{t.tag}</div>
              <div className='lecture-page__topic-list'>{t.ts.map((item, j) => <div key={j} className='lecture-page__topic-item'>{item}</div>)}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      <motion.div className='lecture-page__section' variants={c} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
        <motion.div className='lecture-page__header' variants={i}>
          <span className='lecture-page__header-en'>OUR GOALS</span>
          <h2 className='lecture-page__header-cn'>我们的目标</h2>
          <div className='lecture-page__header-divider' />
        </motion.div>
        <motion.div className='lecture-page__goals' variants={c}>
          <motion.div className='lecture-page__goal' variants={i}>
            <div className='lecture-page__goal-num'>500万+</div><div className='lecture-page__goal-label'>知识普及</div><p>一年内实现全国范围广泛触达，让ENF情绪健康理念深入人心。</p>
          </motion.div>
          <motion.div className='lecture-page__goal' variants={i}>
            <div className='lecture-page__goal-num'>50万+</div><div className='lecture-page__goal-label'>行为改善</div><p>习得1-2种可落地的情绪舒缓技能，从认知到行为切实转变。</p>
          </motion.div>
          <motion.div className='lecture-page__goal' variants={i}>
            <div className='lecture-page__goal-num'>构建</div><div className='lecture-page__goal-label'>社会影响</div><p>构建可持续心理健康公益生态。</p>
          </motion.div>
          <motion.div className='lecture-page__goal' variants={i}>
            <div className='lecture-page__goal-num'>标杆</div><div className='lecture-page__goal-label'>品牌塑造</div><p>打造国内心理健康领域标杆项目。</p>
          </motion.div>
        </motion.div>
      </motion.div>
      <motion.div className='lecture-page__section' variants={c} initial='hidden' whileInView='visible' viewport={{ once: true, amount: 0.2 }}>
        <motion.div className='lecture-page__header' variants={i}>
          <span className='lecture-page__header-en'>VALUES &amp; SIGNIFICANCE</span>
          <h2 className='lecture-page__header-cn'>价值与意义</h2>
          <div className='lecture-page__header-divider' />
        </motion.div>
        <motion.div className='lecture-page__values' variants={c}>
          <motion.div className='lecture-page__value' variants={i}><div className='lecture-page__value-label'>对个人</div><p>赋能自我，提升生命质量</p></motion.div>
          <motion.div className='lecture-page__value' variants={i}><div className='lecture-page__value-label'>对家庭</div><p>和谐关系，筑牢社会细胞</p></motion.div>
          <motion.div className='lecture-page__value' variants={i}><div className='lecture-page__value-label'>对企业</div><p>优化效能，构建健康组织</p></motion.div>
          <motion.div className='lecture-page__value' variants={i}><div className='lecture-page__value-label'>对社会</div><p>预防风险，培育积极心态</p></motion.div>
        </motion.div>
        <motion.div className='lecture-page__quotes' variants={c}>
          {quotes.map((q, idx) => <motion.div key={idx} className='lecture-page__quote-item' variants={i}><span className='lecture-page__quote-dot'>&bull;</span><p>{q}</p></motion.div>)}
        </motion.div>
        <motion.div className='lecture-page__closing' variants={i}>
          <p className='lecture-page__closing-line'>公益不是孤立的投入，而是与商业形成良性协同的生态闭环。</p>
          <p className='lecture-page__closing-creed'>商业赋能公益，公益反哺商业。</p>
        </motion.div>
      </motion.div>
    </div>
  </div>
  )
}
