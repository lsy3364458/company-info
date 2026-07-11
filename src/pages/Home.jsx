import { useRef, useCallback, useEffect, forwardRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import imgProduct1 from '../assets/img/product1-without-background.png'
import imgProduct3 from '../assets/img/product3-without-backgorund.png'
import imgProduct5 from '../assets/img/product5-1.png'
import './Home.css'

const SECTION_COUNT = 5

const Section = forwardRef(({ children, className = '' }, ref) => {
  return (
    <motion.section
      ref={ref}
      className={`home__section ${className}`}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.section>
  )
})

const products = [
  {
    title: '舒缓压力好伙伴',
    desc: ['磷脂酰丝氨酸[PS]压片糖果', 'γ-氨基丁酸[GABA]压片糖果'],
    img: imgProduct1,
  },
  {
    title: '陪伴成长每一步',
    desc: ['磷脂酰丝氨酸Omega-3特膳片', '叶黄素酯凝胶糖果', '益小条™益生菌'],
    img: imgProduct3,
  },
  {
    title: '赶走焦虑来一粒',
    desc: ['红枣凝胶糖果', '柠檬薄荷凝胶糖果', '青提薄荷凝胶糖果'],
    img: imgProduct5,
  },
]

export default function Home() {
  const scrollRef = useRef(null)
  const sectionRefs = useRef([])
  const isSnapping = useRef(false)

 const getCurrentSection = useCallback(() => {
   const home = scrollRef.current
   if (!home) return -1
    return Math.round((home.scrollTop + 64) / home.clientHeight)
 }, [])

 const scrollToSection = useCallback((index) => {
   const target = sectionRefs.current[index]
    if (target) {
      const home = scrollRef.current
      if (home) home.scrollTo({ top: target.offsetTop - 64, behavior: 'smooth' })
    }
  }, [])

  // JS-powered section snapping — replaces CSS scroll-snap
  useEffect(() => {
    const home = scrollRef.current
    if (!home) return

    let touchStartY = 0

    const snap = (dir) => {
      if (isSnapping.current) return false
      const cur = getCurrentSection()
      if (cur < 0) return false

      const goingDown = dir > 0
      const goingUp = dir < 0

      // Scroll down: snap within first 5 sections; last section → pass through to footer
      if (goingDown && cur < SECTION_COUNT - 1) {
        isSnapping.current = true
        scrollToSection(cur + 1)
        setTimeout(() => { isSnapping.current = false }, 800)
        return true
      }
      if (goingUp && cur > 0) {
        isSnapping.current = true
        scrollToSection(cur - 1)
        setTimeout(() => { isSnapping.current = false }, 800)
        return true
      }
      return false
    }

    const onWheel = (e) => {
      if (e.deltaY === 0) return
      if (snap(e.deltaY > 0 ? 1 : -1)) {
        e.preventDefault()
      }
    }

    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }

    const onTouchEnd = (e) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(deltaY) < 30) return
      snap(deltaY > 0 ? 1 : -1)
    }

    home.addEventListener('wheel', onWheel, { passive: false })
    home.addEventListener('touchstart', onTouchStart, { passive: true })
    home.addEventListener('touchend', onTouchEnd, { passive: true })

    return () => {
      home.removeEventListener('wheel', onWheel)
      home.removeEventListener('touchstart', onTouchStart)
      home.removeEventListener('touchend', onTouchEnd)
    }
  }, [getCurrentSection, scrollToSection])

  return (
    <div className="home" ref={scrollRef}>

      {/* === Section 1: Banner === */}
      <Section ref={(el) => (sectionRefs.current[0] = el)} className="home__banner">
        <div className="home__banner-placeholder">
          <span className="home__banner-label">BANNER 位</span>
        </div>
      </Section>

      {/* === Section 2: Brand Introduction === */}
      <Section ref={(el) => (sectionRefs.current[1] = el)} className="home__brand">
        <div className="home__content-wrapper">
          <motion.h2
            className="home__brand-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            WholeMe
          </motion.h2>
          <motion.p
            className="home__brand-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            WholeMe是专注于科学解压，身心平衡的情绪调节功能性食品品牌。
            WholeMe倡导通过科学的方式去疏解情绪，健康的方式去快乐生活。
            WholeMe主张不做情绪的随从，要做自己心灵的主人。
            WholeMe通过科学配比精准营养，为大脑提供有效补给，舒缓压力、平复心力、焕发活力。
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/about" className="home__learn-more-btn">
              了解更多
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* === Section 3: Product Overview === */}
      <Section ref={(el) => (sectionRefs.current[2] = el)} className="home__products">
        <div className="home__content-wrapper">
          <motion.h2
            className="home__section-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            产品总览
          </motion.h2>
          <motion.div
            className="home__products-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {products.map((product, i) => (
              <motion.div
                key={i}
                className="home__product-card"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
              >
                <div className="home__product-img">
                  <img src={product.img} alt={product.title} />
                </div>
                <div className="home__product-info">
                  <h3>{product.title}</h3>
                  <div className="home__product-desc">
                    {product.desc.map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Link to="/products" className="home__learn-more-btn">
              了解更多
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* === Section 4: ENF Philosophy === */}
      <Section ref={(el) => (sectionRefs.current[3] = el)} className="home__enf">
        <div className="home__content-wrapper">
          <motion.h2
            className="home__section-title home__section-title--light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ENF 理念
          </motion.h2>
          <motion.div
            className="home__enf-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>ENF（Emotional Nutrition Formula）情绪营养配方</p>
            <p>是WholeMe提出的科学解压理念——通过精准的营养配比</p>
            <p>为大脑和神经系统提供有效补给</p>
            <p>从根源帮助身体恢复情绪平衡</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/enf-nutrition" className="home__learn-more-btn home__learn-more-btn--light">
              了解更多
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* === Section 5: Charity Lecture === */}
      <Section ref={(el) => (sectionRefs.current[4] = el)} className="home__charity">
        <div className="home__content-wrapper">
          <motion.h2
            className="home__section-title home__section-title--light"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            公益巡讲
          </motion.h2>
          <motion.div
           className="home__charity-text"
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6, delay: 0.2 }}
         >
           <p>守护心能量，稳住好情绪</p>
           <p>ENF科学解压公益科普巡讲</p>
           <p>走进社区与企业，让更多人了解情绪健康、学会科学解压</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/craft-tour" className="home__learn-more-btn">
              了解更多
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* === Footer === */}
      <Footer />

      {/* === Scroll indicator dots === */}
      <nav className="home__nav-dots">
        {[0, 1, 2, 3, 4].map((i) => (
          <button
            key={i}
            className="home__nav-dot"
            onClick={() => scrollToSection(i)}
            aria-label={`跳转到第 ${i + 1} 屏`}
          />
        ))}
      </nav>
    </div>
  )
}
