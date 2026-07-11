import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import imgProduct1 from '../assets/img/product1-without-background.png'
import imgProduct2 from '../assets/img/product2-without-backgorund.png'
import imgP3 from '../assets/img/product3-without-backgorund.png'
import imgP4 from '../assets/img/product4-without-backgorund.png'
import imgP6 from '../assets/img/product6.png'
import imgG1 from '../assets/img/product5-3.png'
import imgG2 from '../assets/img/product5-2.png'
import imgG3 from '../assets/img/product5-1.png'
import detailPS from '../assets/img/product-detail-1.png'
import detailGaba from '../assets/img/product-detail-2.png'
import detailOmega from '../assets/img/product-detail-3.png'
import detailLutein from '../assets/img/product-detail-4.png'
import detailGummy from '../assets/img/product-detail-5.png'
import detailProbiotic from '../assets/img/product-detail-6.png'
import expertImg1 from '../assets/img/zhangqiang.jpg'
import expertImg2 from '../assets/img/wujunbing.jpg'
import expertImg3 from '../assets/img/dengzixin.jpg'
import expertImg4 from '../assets/img/fangshuguang.jpg'
import './SubPage.css'
import './Products.css'

const products = [
  {
    id: 'decompress',
    name: 'WholeMe解压片系列',
    subtitle: '专注情绪舒缓 · 科学解压',
    desc: '采用科学配比的活性成分，帮助缓解日常压力，平复心境，找回内在的宁静。',
    accent: '#6ba4c7',
    gradient: 'linear-gradient(135deg, #eef6fb 0%, #f8fbfd 100%)',
    items: [
      {
        name: '磷脂酰丝氨酸[PS]压片糖果',
        tag: '专注记忆与认知健康',
        highlights: ['磷脂酰丝氨酸', '提升专注力', '缓解脑疲劳'],
        img: imgProduct1,
        detailImg: detailPS,
        icon: (
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="28" stroke="#6ba4c7" strokeWidth="2" fill="#eef6fb"/>
            <path d="M40 22c-4 0-7 3-7 7v4c0 4 3 7 7 7s7-3 7-7v-4c0-4-3-7-7-7z" stroke="#6ba4c7" strokeWidth="2" fill="#b8d8f0"/>
            <path d="M30 44c2-5 6-8 10-8s8 3 10 8" stroke="#6ba4c7" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="34" cy="48" r="3" fill="#6ba4c7" opacity="0.6"/>
            <circle cx="46" cy="48" r="3" fill="#6ba4c7" opacity="0.6"/>
            <path d="M37 52l3-4 3 4" stroke="#6ba4c7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        name: 'Y-氨基丁酸[GABA]压片糖果',
        tag: '自然安神助眠',
        highlights: ['γ-氨基丁酸', '改善睡眠', '舒缓焦虑'],
        img: imgProduct2,
        detailImg: detailGaba,
        icon: (
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="28" stroke="#a8d5ba" strokeWidth="2" fill="#f0f9f2"/>
            <path d="M25 40c0-8 7-15 15-15s15 7 15 15" stroke="#a8d5ba" strokeWidth="2" strokeLinecap="round"/>
            <path d="M28 40c0-5 4-9 9-9s9 4 9 9" stroke="#a8d5ba" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="40" cy="45" r="8" fill="#c8e6d0"/>
            <path d="M36 45h8M40 41v8" stroke="#7ec8a8" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: 'multicare',
    name: 'WholeMe多护系列',
    subtitle: '全面营养呵护 · 多维守护',
    desc: '多维度营养补充方案，从大脑到身体，守护您和家人的每一天健康。',
    accent: '#c9a96e',
    gradient: 'linear-gradient(135deg, #faf5ee 0%, #fefcf8 100%)',
    items: [
      {
        name: '磷脂酰丝氨酸Omega-3特膳囊',
        tag: '大脑与心血管双护',
        highlights: ['Omega-3', '磷脂酰丝氨酸', 'DHA'],
        img: imgP3,
        detailImg: detailOmega,
        icon: (
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="28" stroke="#c9a96e" strokeWidth="2" fill="#faf5ee"/>
            <path d="M30 35c0-6 4-10 10-10s10 4 10 10" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round"/>
            <path d="M33 42c3-4 7-4 10 0" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="36" cy="46" r="5" fill="#e8d5b0" stroke="#c9a96e" strokeWidth="1.5"/>
            <path d="M36 44v4M34 46h4" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: '叶黄素酯凝胶糖果',
        tag: '眼睛的天然守护者',
        highlights: ['叶黄素酯', '蓝光防护', '视力健康'],
        img: imgP4,
        detailImg: detailLutein,
        icon: (
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="28" stroke="#e8b84b" strokeWidth="2" fill="#fef7e8"/>
            <ellipse cx="40" cy="42" rx="12" ry="8" stroke="#e8b84b" strokeWidth="2" fill="#fcecc4"/>
            <circle cx="40" cy="42" r="5" fill="#e8b84b" opacity="0.3"/>
            <circle cx="40" cy="42" r="2" fill="#e8b84b"/>
            <path d="M20 42c4-6 10-9 16-9" stroke="#e8b84b" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M60 42c-4-6-10-9-16-9" stroke="#e8b84b" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
      {
        name: '即食型益生菌冻干粉',
        tag: '肠道健康好伙伴',
        highlights: ['活性益生菌', '调理肠道', '增强免疫'],
        img: imgP6,
        detailImg: detailProbiotic,
        icon: (
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="28" stroke="#6db5a8" strokeWidth="2" fill="#edf7f4"/>
            <ellipse cx="40" cy="42" rx="10" ry="6" stroke="#6db5a8" strokeWidth="2" fill="#c5e3db"/>
            <circle cx="34" cy="38" r="3" fill="#6db5a8" opacity="0.5"/>
            <circle cx="46" cy="38" r="3" fill="#6db5a8" opacity="0.5"/>
            <circle cx="37" cy="44" r="2" fill="#6db5a8" opacity="0.4"/>
            <circle cx="43" cy="44" r="2" fill="#6db5a8" opacity="0.4"/>
            <path d="M30 48c3 3 7 3 10 0" stroke="#6db5a8" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
  {
    id: 'gummy',
    name: 'WholeMe情绪软糖系列',
    subtitle: '美味与健康兼得 · 一口好心情',
    desc: '将功能性营养融入Q弹软糖，让每一口都成为愉悦的享受，轻松吃出好情绪。',
    accent: '#7ec8a8',
    gradient: 'linear-gradient(135deg, #f0faf5 0%, #fafff8 100%)',
    items: [
      {
        name: '红枣凝胶糖果',
        tag: '补气养血 · 温润滋养',
        highlights: ['红枣精华', '温润补气', '自然甜味'],
        img: imgG1,
        detailImg: detailGummy,
        icon: (
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="28" stroke="#d4736e" strokeWidth="2" fill="#fdf0ef"/>
            <ellipse cx="40" cy="42" rx="10" ry="12" fill="#e8a098" stroke="#d4736e" strokeWidth="1.5"/>
            <path d="M38 30c-2-2-5-1-6 1" stroke="#d4736e" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M40 32v4" stroke="#d4736e" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M35 38c1 4 4 6 5 10" stroke="#d4736e" strokeWidth="1.5" strokeLinecap="round" opacity="0.5"/>
            <path d="M38 50l2-3 2 3" stroke="#7ec8a8" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ),
      },
      {
        name: '柠檬薄荷凝胶糖果',
        tag: '清新提神 · 舒缓身心',
        highlights: ['柠檬薄荷', '清新提神', '舒缓压力'],
        img: imgG2,
        detailImg: detailGummy,
        icon: (
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="28" stroke="#b3d477" strokeWidth="2" fill="#f4fbe8"/>
            <ellipse cx="40" cy="32" rx="6" ry="10" fill="#d5eb9c" stroke="#b3d477" strokeWidth="1.5"/>
            <path d="M36 22c-1-3 2-6 5-6" stroke="#b3d477" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M28 46c4 4 12 4 16 0" stroke="#b3d477" strokeWidth="1.5" strokeLinecap="round"/>
            <circle cx="40" cy="50" r="6" fill="#e8f4c8" stroke="#b3d477" strokeWidth="1.5"/>
            <circle cx="40" cy="50" r="2" fill="#b3d477"/>
          </svg>
        ),
      },
      {
        name: '青提薄荷凝胶糖果',
        tag: '清爽甘甜 · 活力满满',
        highlights: ['青提精华', '薄荷清凉', '活力满满'],
        img: imgG3,
        detailImg: detailGummy,
        icon: (
          <svg viewBox="0 0 80 80" fill="none">
            <circle cx="40" cy="40" r="28" stroke="#7ec8a8" strokeWidth="2" fill="#edfaf4"/>
            <circle cx="40" cy="38" r="10" fill="#b5e0cc" stroke="#7ec8a8" strokeWidth="1.5"/>
            <circle cx="40" cy="38" r="4" fill="#7ec8a8" opacity="0.4"/>
            <path d="M32 28c-2-4 1-8 5-8" stroke="#7ec8a8" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M35 25c-1-2 1-4 3-3" stroke="#7ec8a8" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M28 46c3 3 8 5 12 4" stroke="#7ec8a8" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
        ),
      },
    ],
  },
]

const brandValues = [
  {
    title: '品牌愿景',
    desc: '远离情绪困扰 共享美好生活',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M16 18l8-4 8 4v6c0 6-8 10-8 10s-8-4-8-10v-6z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M21 28l2-4 2 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="24" cy="22" r="2" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: '品牌价值观',
    desc: '真诚 善美 乐活 悦己',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M24 14c0 8 6 12 6 16s-3 6-6 6-6-2-6-6c0-4 6-8 6-16z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
        <path d="M24 14c2 4 4 6 4 10" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M24 14c-2 4-4 6-4 10" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    title: '品牌使命',
    desc: '以情绪健康为己任 科学赋能滋养身心',
    icon: (
      <svg viewBox="0 0 48 48" fill="none">
        <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M18 22c0-3 2-5 4-5s4 2 4 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M22 22c0-2 1-3 2-3s2 1 2 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <path d="M16 30c3-4 8-4 11 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M18 33l3-3 3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
]

const experts = [
  {
    name: '张强',
    title: '专家顾问',
    subtitle: '浙江大学医学院研究员 博士生导师 浙江大学医学院附属第二医院:双聘教授JhU 博士后 UCSF博士后',
    initials: '张',
    bio: '本科毕业于武汉大学生命科学学院。2013年在中国科学院生物物理研究所获得神经生物学博士学位。2013年底去美国霍普金斯医学院(Hopkins)深造。2015进入加州大学旧金山分校(UCSF)药理系学习生物传感器(Biosensor)的开发及应用，期间开发出几十种生物探针并获得美国全球专利。研究成果被Faculty1000等国际媒体报道和推荐，其学术水平得到了国际科学界的高度评价。',
    bio2: '2019年底被浙江大学引进回国，作为课题组长带领团队首创了“荧光探针+高内涵药物筛选系统”，为新药研发提供了革命性的新方法。该方法填补国内技术空白，拥有极致的效率和性价比。著有多项研究成果，多次在国内外权威学术刊物发表论文，并获得国内及国际多项专利。',
    color: '#6ba4c7',
    img: expertImg1,
  },
  {
    name: '吴军兵',
    title: '专家顾问',
    subtitle: '罗格斯大学研究员 美国NIH博士后 中科院博士',
    initials: '吴',
    bio: '2006年开始进入中国科学院生物物理研究所脑与认知国家重点实验室工作并攻读了神经生物学博士学位，导师为袁增强教授、研究员，中国科学院“百人”计划、国家“杰出青年”基金获得者。2007年至2009年主要研究神经元死亡过程中的信号转导通路。2009年，被外派至南京大学模式动物研究中心实验室，制备阿尔茨海默症相关基因的基因操纵小鼠模型。',
    bio2: '2013年中，进入美国国立健康研究院的神经遗传学实验室(Labof Neurogenetics，LNG)开展博士后研究，主要研究方向为帕金森氏症。2018年至2023年，加入罗格斯大学(Rutgers)新泽西儿童健康研究所Max Tischfield实验室从事神经发育性精神疾病妥瑞综合症的研究。2023年回国，开发了帕金森氏症最重要基因之一LRRK2激酶的生物传感器并开展了高通量筛选抑制剂的研发工作。',
    color: '#a8d5ba',
    img: expertImg2,
  },
  {
    name: '邓子新',
    title: '专家顾问',
    subtitle: '微康益生菌独立董事 特聘专家',
    initials: '邓',
    bio: '中国科学院院士:第三世界科学院院士(Fellow，TWAS)，美国微生物科学院院士(Fellow，AAM)微生物代谢国家重点实验室主任著名微生物学家，教授、博士生导师、长江学者特聘教授',
    bio2: '上海交通大学生命科学技术学院名誉院长，武汉大学药学院名誉院长，中国微生物学会理事长，国际工业微生物遗传学国际委员会主席(成立以来第一位华人)',
    color: '#c9a96e',
    img: expertImg3,
  },
  {
    name: '方曙光',
    title: '专家顾问',
    subtitle: '微康益生菌董事长 首席科学家',
    initials: '方',
    bio: '国家万人计划领军人才 科技部创新创业领军人才 300多项益生菌领域专利发明人，江苏省、湖北省产业教授，国内20多所大学客座教授',
    bio2: '20多年专注益生菌与人类健康关系研究、开发、应用推广主持多项国家和地方重大科技项目',
    color: '#d4736e',
    img: expertImg4,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

function ExpertModal({ expert, onClose }) {
  if (!expert) return null

  return (
    <motion.div
      className="products__modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        className="products__modal products__modal--expert"
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 30 }}
        transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="products__modal-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18"/><path d="M6 6l12 12"/>
          </svg>
        </button>
        <img src={expert.img} alt={expert.name} className="products__modal-expert-img" />
      </motion.div>
    </motion.div>
  )
}

function ProductDetailModal({ item, onClose }) {
  if (!item) return null

  return (
    <motion.div
      className="products__detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="products__detail-modal"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="products__detail-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6L6 18"/><path d="M6 6l12 12"/>
          </svg>
        </button>
        <img src={item.detailImg} alt={item.name} />
      </motion.div>
    </motion.div>
  )
}

export default function Products() {
  const [selectedExpert, setSelectedExpert] = useState(null)
  const [detailItem, setDetailItem] = useState(null)

  return (
    <div className="subpage products-page">
      <div className="subpage__banner products__banner">
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          >
            WholeMe产品
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          >
            多元健康产品矩阵，满足不同场景的身心需求
          </motion.p>
        </div>
      </div>

      {/* ===== 产品展示区 ===== */}
      <section className="products__showcase">
        <div className="container">
          <motion.div
            className="products__section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <span className="products__section-badge">产品矩阵</span>
            <h2 className="products__section-title">产品展示区</h2>
            <p className="products__section-desc">三大系列产品，精准满足不同场景的身心需求</p>
          </motion.div>
          {products.map((series, seriesIdx) => (
            <motion.div
              key={series.id}
              className="products__series"
              style={{ background: series.gradient }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.div
                className="products__series-header"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <motion.div className="products__series-text" variants={itemVariants}>
                  <h3 className="products__series-name">
                    {series.name}
                    <span className="products__series-accent-line" style={{ background: series.accent }} />
                  </h3>
                  <p className="products__series-subtitle">{series.subtitle}</p>
                  <p className="products__series-desc">{series.desc}</p>
                </motion.div>
              </motion.div>

              <motion.div
                className="products__series-grid"
                style={{
                  gridTemplateColumns: series.items.length === 2 ? '1fr 1fr' : 'repeat(3, 1fr)',
                }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
              >
                {series.items.map((product, pIdx) => (
                  <motion.div
                    key={pIdx}
                    className="products__product-card"
                    variants={itemVariants}
                    whileHover={{ y: -8, transition: { duration: 0.3 } }}
                    onClick={() => setDetailItem(product)}
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="products__product-icon-wrap" style={{ color: series.accent }}>
                      {product.img ? (
                        <img src={product.img} alt={product.name} />
                      ) : (
                        product.icon
                      )}
                    </div>
                    <div className="products__product-info">
                      <h4 className="products__product-name">{product.name}</h4>
                      <p className="products__product-tag">{product.tag}</p>
                      <div className="products__product-highlights">
                        {product.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="products__highlight-tag"
                            style={{ background: `${series.accent}15`, color: series.accent }}
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="products__story">
        <div className="products__story-intro">
          <div className="container">
            <motion.div
              className="products__intro-content"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <motion.h2
                className="products__story-title"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                品牌故事
              </motion.h2>
              <motion.div
                className="products__intro-divider"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <motion.p
                className="products__intro-text"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                WholeMe是一个专注于科学解压、身心平衡的情绪调节功能性食品品牌。WholeMe倡导通过科学的方式去疏解情绪，健康的方式去快乐生活。WholeMe主张不做情绪的随从，要做自己心灵的主人。WholeMe通过科学配比精准营养，为大脑提供有效补给，舒缓压力、平复心力、焕发活力。
              </motion.p>
            </motion.div>
          </div>
        </div>

        {/* 品牌价值观 */}
        <div className="products__values-section">
          <div className="container">
            <motion.h2
              className="products__values-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              品牌介绍
            </motion.h2>
            <motion.div
              className="products__values-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
            >
              {brandValues.map((v, vIdx) => (
                <motion.div
                  key={vIdx}
                  className="products__value-card"
                  variants={itemVariants}
                  whileHover={{ y: -6, transition: { duration: 0.3 } }}
                >
                  <div className="products__value-icon">{v.icon}</div>
                  <h3 className="products__value-title">{v.title}</h3>
                  <p className="products__value-desc">{v.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* 专家顾问团队 */}
        <div className="products__experts-section">
          <div className="container">
            <motion.h2
              className="products__experts-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
            >
              专家顾问团队
            </motion.h2>
            <motion.p
              className="products__experts-subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              汇聚行业顶尖专家，为产品研发提供专业保障
            </motion.p>
            <motion.div
              className="products__experts-grid"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {experts.map((expert, eIdx) => (
                <motion.div
                  key={eIdx}
                  className="products__expert-card"
                  variants={itemVariants}
                >
                  <div className="products__expert-avatar-wrap">
                    <div
                      className="products__expert-avatar"
                      style={{ background: `linear-gradient(135deg, ${expert.color}, ${expert.color}88)` }}
                    >
                      <span>{expert.initials}</span>
                    </div>
                  </div>
                  <h3 className="products__expert-name">{expert.name}</h3>
                  <p className="products__expert-title">{expert.title}</p>
                  <p className="products__expert-subtitle">{expert.subtitle}</p>
                  <button
                    className="products__expert-btn"
                    style={{ borderColor: expert.color, color: expert.color }}
                    onClick={() => setSelectedExpert(expert)}
                  >
                    查看详情
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"/><path d="M12 5l7 7-7 7"/>
                    </svg>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expert Modal */}
     <AnimatePresence>
       {selectedExpert && (
         <ExpertModal expert={selectedExpert} onClose={() => setSelectedExpert(null)} />
       )}
        {detailItem && (
          <ProductDetailModal item={detailItem} onClose={() => setDetailItem(null)} />
        )}
     </AnimatePresence>
    </div>
  )
}
