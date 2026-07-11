 import { motion } from 'framer-motion'
 
 const timelineData = [
   {
     year: '2021',
     tag: '创始元年',
     events: [
       '成立宏红生物科技(山东)有限公司',
       '获得行业一级资质',
     ],
   },
   {
     year: '2022',
     tag: '研发布局',
     events: [
       '成立心宥生物工程(山东)有限公司',
       '获得烟台市科技局支持',
       '经烟台市行政审批服务局批准成立民非机构——烟台圣泓细胞产业技术研究院',
     ],
   },
   {
     year: '2023',
     tag: '科研合作',
     events: [
       '参加山东省能力提升项目立项，项目名称：肿瘤靶点CDK2的可视化试剂盒的研究与开发',
       '合作方：滨州医学院、浙工大学基础医学院',
       '项目名称：心血管疾病相关RGS通过干细胞及外泌体靶向治疗血管重塑机制研究',
       '合作方：滨州医学院、烟台圣弘细胞产业技术研究院',
     ],
   },
   {
     year: '2024',
     tag: '产业落地',
     events: [
       '获批科技型中小企业',
       '通过政府招商引资项目答辩，投资1000万元完成一期厂房建设',
       '创立品牌WholeMe',
     ],
   },
   {
     year: '2025',
     tag: '集团化发展',
     events: [
       '成立上海心宥食品科技有限公司，完成集团化布局',
       '获得烟台高新技术产业开发区卫生健康局支持',
       '经烟台市行政审批服务局批准成立民非机构——心宥青少年心理健康服务中心',
       '成立聖宥生物科技公司(香港)，创立跨境品牌Selfocus',
       '投资1500万建设IVD产业园生产工厂',
     ],
   },
 ]
 
 const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: { staggerChildren: 0.15 },
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
 
 export default function DevelopmentHistory() {
   return (
     <div className="about-page container">
       {/* Section Header */}
       <motion.div
         className="about-page__header"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
       >
         <span className="about-page__header-en">DEVELOPMENT HISTORY</span>
         <h2 className="about-page__header-cn">发展历程</h2>
         <div className="about-page__header-divider" />
       </motion.div>
 
       {/* Timeline */}
       <div className="about-page__timeline">
         <div className="about-page__timeline-line" />
         <motion.div
           variants={containerVariants}
           initial="hidden"
           animate="visible"
         >
           {timelineData.map((item, idx) => {
             const isLeft = idx % 2 === 0
             return (
               <motion.div
                 key={item.year}
                 className={`about-page__timeline-item ${isLeft ? 'about-page__timeline-item--left' : 'about-page__timeline-item--right'}`}
                 variants={itemVariants}
               >
                 <div className="about-page__timeline-dot" />
                 <div className="about-page__timeline-card">
                   <div className="about-page__timeline-year">{item.year}</div>
                   <span className="about-page__timeline-tag">{item.tag}</span>
                   <div className="about-page__timeline-events">
                     {item.events.map((event, eIdx) => (
                       <p key={eIdx}>{event}</p>
                     ))}
                   </div>
                 </div>
               </motion.div>
             )
           })}
         </motion.div>
       </div>
     </div>
   )
 }
