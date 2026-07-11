 import { motion } from 'framer-motion'
 
 export default function CorporateNews() {
   return (
     <div className="about-page container">
       {/* Section Header */}
       <motion.div
         className="about-page__header"
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5 }}
       >
         <span className="about-page__header-en">CORPORATE NEWS</span>
         <h2 className="about-page__header-cn">企业动态</h2>
         <div className="about-page__header-divider" />
       </motion.div>
 
       {/* Placeholder */}
       <motion.div
         className="about-page__placeholder"
         initial={{ opacity: 0, y: 30 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.6, delay: 0.15 }}
       >
         <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
           <circle cx="12" cy="12" r="10" />
           <path d="M16 8l-4 4-4-4" />
           <path d="M8 16l4-4 4 4" />
         </svg>
         <h2>新闻动态即将上线</h2>
         <p>集团的最新资讯、行业动态、科研成果与品牌活动将持续更新，敬请关注。</p>
       </motion.div>
     </div>
   )
 }
