 import { motion } from 'framer-motion'
 
 const companies = [
   {
     name: '心宥生物工程(山东)有限公司',
     nameEn: 'XINYOU BIOENGINEERING (SHANDONG) CO., LTD',
     desc: '心宥生物工程(山东)有限公司，研发工厂坐落于山东烟台高新区IVD医疗器械产业园，是集团旗下专注于精神健康与神经退行性疾病预防领域核心研发的实践载体，以"技术创新驱动产品落地"为定位，重点开展抗焦虑、抗抑郁等情绪调节类健康产品及阿尔茨海默症等神经退行性疾病预防干预相关产品与技术的研发工作，为集团核心业务提供从实验室成果到产业化转化的关键支撑。',
     desc2: '研发工厂面积1450m²，涵盖情绪调节产品研发实验室、神经退行性疾病预防技术研发中心、十万级GMP中试转化车间三大核心板块。工厂配备专业研发设备与检测仪器，组建了由神经科学、生物医学工程、食品科学等领域专家组成的研发团队，可高效推进从技术构思、实验验证到中试转化的全流程研发工作。',
     data: ['研发面积1450m²', '十万级GMP中试车间', '三大核心研发板块'],
   },
   {
     name: '宏红生物科技(山东)有限公司',
     nameEn: 'HONGHONG BIOTECHNOLOGY (SHANDONG) CO., LTD',
     desc: '坐落于烟台经济开发区，总厂房面积1860m²，其中十万级GMP净化车间达1200m²，工厂配备压片产品、凝胶糖果两条专业化生产线，建立覆盖"原料-生产-成品"的全链条质检体系，确保每一款产品均符合国家相关标准与品牌品质要求。',
     desc2: '"WholeMe"品牌产品有"多护"和"多效"两大核心系列，其中"多护"系列专为儿童设计，兼具情绪调节与成长发育补给双重功能，温和守护成长阶段的心理健康与生理发育；"多效"系列面向成年人，融合情绪调节与多重复合营养补给，助力缓解职场、生活压力，实现科学解压与健康维护的双重需求。',
     data: ['厂房面积1860m²', 'GMP净化车间1200m²', '压片/凝胶糖果双线生产'],
   },
   {
     name: '上海心宥食品科技有限公司',
     nameEn: 'SHANGHAI XINYOU FOOD TECHNOLOGY CO., LTD',
     desc: '上海心宥食品科技有限公司是心宥集团旗下以品牌孵化与全域产品运营为主要业务的公司。其依托于上海品牌高地优势，通过前瞻性的战略布局与数字化运营，持续打造具有市场影响力与行业引领力的标杆品牌。',
     data: ['品牌孵化', '全域产品运营', '上海品牌高地'],
   },
   {
     name: '聖宥生物科技有限公司(香港)',
     nameEn: 'SHENGYOU BIOTECHNOLOGY CO., LTD. (HONG KONG)',
     desc: '聖宥生物科技有限公司(香港)是一家以国际市场为发展蓝图的业务型公司，其以全球化视野和前沿科技创新为战略驱动，深化全球产业链共融，推动科研成果跨地域合作，构建起贯通海内外产供销一体化的生态格局。',
     data: ['国际市场', '前沿科技创新', '产供销一体化'],
   },
   {
     name: '烟台圣泓细胞产业技术研究院',
     nameEn: 'YANTAI SHENGHONG CELL INDUSTRY TECHNOLOGY RESEARCH',
     desc: '烟台圣泓细胞产业技术研究院是一所创新型科研机构，主要研究方向为细胞成像技术开发和应用。研究院专注于细胞的检测分析软件研发，细胞的病例图像分析管理，提供高效权威的技术咨询服务，技术比对，健康服务信息化系统和数据库等服务。',
     desc2: '研究院与清华研究生院建立实践基地，引进专业技术人才，依托国内多家知名高校科研资源，实现产学研成果转化。专项基金投资优秀科研项目，将研发的新型产品推向市场，促进产业落地，实现产学研和投融资无缝对接。研究院实验室坐落于山东生物医药产业园区，面积500m²，配备有电感偶合等离子体发射光谱仪、液相色谱-原子荧光联用仪、多功能离子色谱等专业设备。',
     data: ['面积500m²', '清华研究生院实践基地', '细胞成像技术研究'],
   },
   {
     name: '烟台高新区心宥青少年心理健康服务中心',
     nameEn: 'YANTAI HIGH TECH ZONE XINYOU YOUTH MENTAL HEALTH SERVICE CENTER',
     desc: '心宥青少年心理健康服务中心是一家专注于青少年心理健康服务的非营利性社会组织。我们致力于通过专业、系统的服务，满足青少年心理健康需求，完善社会心理服务体系。中心聚焦6-18岁青少年群体，基于"分级干预、精准对接"原则构建"预防-干预-转介-康复"的全链条体系，提供全方位、专业化心理健康服务。',
     desc2: '核心业务涵盖：心理筛查评估、心理科普辅导、心理干预、转介与跟踪服务、心理研究支持等。同时，中心积极与学校、医院共建合作网络，实现"轻度问题中心解决，中度问题联合干预，重度问题精准转诊"的服务原则。以公益初心践行社会责任，为青少年的心理健康保驾护航。',
     data: ['专注6-18岁青少年', '分级干预体系', '公益非营利组织'],
   },
 ]
 
 const structureNames = companies.map((c) => c.name)
 
 const containerVariants = {
   hidden: { opacity: 0 },
   visible: {
     opacity: 1,
     transition: { staggerChildren: 0.1 },
   },
 }
 
 const itemVariants = {
   hidden: { opacity: 0, y: 30 },
   visible: {
     opacity: 1,
     y: 0,
     transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
   },
 }
 
 export default function GroupStructure() {
   return (
     <div className="about-page container">
       {/* Section Header */}
       <motion.div
         className="about-page__header"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
       >
         <span className="about-page__header-en">GROUP STRUCTURE</span>
         <h2 className="about-page__header-cn">集团架构</h2>
         <div className="about-page__header-divider" />
       </motion.div>
 
       {/* Overview Tags */}
       <motion.div
         className="about-page__structure-overview"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.1 }}
       >
         {structureNames.map((name) => (
           <span key={name} className="about-page__structure-tag">
             {name}
           </span>
         ))}
       </motion.div>
 
       {/* Company Cards */}
       <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="visible"
       >
         {companies.map((company) => (
           <motion.div
             key={company.name}
             className="about-page__company-card"
             variants={itemVariants}
           >
             <h3 className="about-page__company-name">{company.name}</h3>
             <p className="about-page__company-name-en">{company.nameEn}</p>
             <p className="about-page__company-desc">{company.desc}</p>
             {company.desc2 && (
               <p className="about-page__company-desc">{company.desc2}</p>
             )}
             <div className="about-page__company-data">
               {company.data.map((d, dIdx) => (
                 <div key={dIdx} className="about-page__company-data-item">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <polyline points="20 6 9 17 4 12" />
                   </svg>
                   <span>{d}</span>
                 </div>
               ))}
             </div>
           </motion.div>
         ))}
       </motion.div>
     </div>
   )
 }
