 import { motion } from 'framer-motion'
 
 const statsData = [
   { number: '2021', label: '集团成立于' },
   { number: '30+', label: '专利及软著' },
   { number: '10+', label: '年平均研发经验' },
 ]
 
 const modelCards = [
   {
     title: '技术赋能',
     desc: '依托再生医学与精准医疗技术，构建"研发-生产-销售"全链条体系，以技术创新驱动产品落地',
   },
   {
     title: '产品落地',
     desc: '重点打造抗焦虑、抗抑郁功能性食品、保健品及特医食品，覆盖日常情绪管理与心理健康场景',
   },
   {
     title: '场景覆盖',
     desc: '通过核心技术授权、终端产品销售及医疗健康服务合作，实现商业价值与社会价值的统一',
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
   hidden: { opacity: 0, y: 30 },
   visible: {
     opacity: 1,
     y: 0,
     transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
   },
 }
 
 export default function GroupProfile() {
   return (
     <div className="about-page container">
       {/* Section Header */}
       <motion.div
         className="about-page__header"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
       >
         <span className="about-page__header-en">GROUP PROFILE</span>
         <h2 className="about-page__header-cn">集团简介</h2>
         <div className="about-page__header-divider" />
       </motion.div>
 
       {/* Stats Highlight */}
       <motion.div
         className="about-page__stats"
         variants={containerVariants}
         initial="hidden"
         animate="visible"
       >
         {statsData.map((stat, idx) => (
           <motion.div key={idx} className="about-page__stat-card" variants={itemVariants}>
             <div className="about-page__stat-number">{stat.number}</div>
             <div className="about-page__stat-label">{stat.label}</div>
           </motion.div>
         ))}
       </motion.div>
 
       {/* Body Text */}
       <motion.div
         className="about-page__body"
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.2 }}
       >
         <p>
           心宥集团成立于2021年，以精神健康为核心赛道，聚焦情绪调节与心理健康需求，同时布局神经退行性疾病预防及干预领域，依托再生医学与精准医疗技术，构建"研发-生产-销售"全链条体系，致力于抗焦虑抗抑郁等情绪调节类健康产品创新，及神经退行性疾病早期预防、症状缓解技术的产学研转化与场景落地。
         </p>
         <p>
           科研团队核心成员来自清华、浙大、山大等高校，平均拥有10年以上神经科学、生物医学工程研究经验，累计获得发明专利、实用新型专利、软件著作权超30项，在情绪调节机制研究、心理健康产品研发等领域形成显著技术优势。核心成果方面，重点打造抗焦虑、抗抑郁功能性食品、保健品及特医食品，覆盖日常情绪管理、轻度心理困扰缓解等场景，满足大众对心理健康的多元化需求；同步推进阿尔茨海默症等神经退行性疾病相关技术研发，聚焦早期风险筛查与症状缓解，助力疾病预防干预。
         </p>
         <p>
           集团采用"技术赋能+产品落地+场景覆盖"的创新产业生态模式，通过核心技术授权、终端产品销售及医疗健康服务合作，实现商业价值与社会价值的统一。
         </p>
       </motion.div>
 
       {/* Model Cards */}
       <motion.div
         className="about-page__section"
         style={{ marginTop: '44px' }}
         variants={containerVariants}
         initial="hidden"
         whileInView="visible"
         viewport={{ once: true, amount: 0.2 }}
       >
         <motion.div className="about-page__icon-grid" variants={containerVariants}>
           {modelCards.map((card, idx) => (
             <motion.div
               key={idx}
               className="about-page__icon-card"
               variants={itemVariants}
               whileHover={{ y: -6, transition: { duration: 0.3 } }}
             >
               <div className="about-page__icon-card-icon">
                 {idx === 0 ? (
                   <svg viewBox="0 0 48 48" fill="none">
                     <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" />
                     <path d="M16 18l8-4 8 4v6c0 6-8 10-8 10s-8-4-8-10v-6z" stroke="currentColor" strokeWidth="1.5" fill="none" />
                     <path d="M21 28l2-4 2 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                     <circle cx="24" cy="22" r="2" stroke="currentColor" strokeWidth="1.2" />
                   </svg>
                 ) : idx === 1 ? (
                   <svg viewBox="0 0 48 48" fill="none">
                     <rect x="8" y="12" width="32" height="24" rx="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                     <path d="M16 20h16M16 26h12M16 32h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                   </svg>
                 ) : (
                   <svg viewBox="0 0 48 48" fill="none">
                     <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="1.5" />
                     <path d="M18 30c2-4 6-4 8 0M22 20l2-2 2 2M24 18v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                     <circle cx="18" cy="26" r="2" fill="currentColor" opacity="0.4" />
                     <circle cx="30" cy="26" r="2" fill="currentColor" opacity="0.4" />
                   </svg>
                 )}
               </div>
               <h3>{card.title}</h3>
               <p>{card.desc}</p>
             </motion.div>
           ))}
         </motion.div>
       </motion.div>
     </div>
   )
 }
