import { useRef, useCallback, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import './ENFNutrition.css'

const SECTION_COUNT = 4

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.1 },
  },
}

const questionVariants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const answerVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function ENFNutrition() {
  const scrollRef = useRef(null)
  const sectionRefs = useRef([])
  const isSnapping = useRef(false)
  const [activeIndex, setActiveIndex] = useState(0)

  const getCurrentSection = useCallback(() => {
    const el = scrollRef.current
    if (!el) return -1
    return Math.round(el.scrollTop / el.clientHeight)
  }, [])

  const scrollToSection = useCallback((index) => {
    const target = sectionRefs.current[index]
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const updateActiveIndex = useCallback(() => {
    const i = getCurrentSection()
    if (i >= 0 && i < SECTION_COUNT) setActiveIndex(i)
  }, [getCurrentSection])

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    let touchStartY = 0

    const snap = (dir) => {
      if (isSnapping.current) return
      const cur = getCurrentSection()
      if (cur < 0) return

      if (dir > 0 && cur < SECTION_COUNT - 1) {
        isSnapping.current = true
        scrollToSection(cur + 1)
        setTimeout(() => { isSnapping.current = false }, 800)
      } else if (dir < 0 && cur > 0) {
        isSnapping.current = true
        scrollToSection(cur - 1)
        setTimeout(() => { isSnapping.current = false }, 800)
      }
    }

    const onWheel = (e) => {
      if (e.deltaY === 0) return
      snap(e.deltaY > 0 ? 1 : -1)
      e.preventDefault()
    }

    const onTouchStart = (e) => {
      touchStartY = e.touches[0].clientY
    }

    const onTouchEnd = (e) => {
      const deltaY = touchStartY - e.changedTouches[0].clientY
      if (Math.abs(deltaY) < 30) return
      snap(deltaY > 0 ? 1 : -1)
    }

    const onScroll = () => updateActiveIndex()

    el.addEventListener('wheel', onWheel, { passive: false })
    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend', onTouchEnd, { passive: true })
    el.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      el.removeEventListener('wheel', onWheel)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend', onTouchEnd)
      el.removeEventListener('scroll', onScroll)
    }
  }, [getCurrentSection, scrollToSection, updateActiveIndex])

  return (
    <div className="enf-page" ref={scrollRef}>

      {/* Section 1 */}
      <section
        ref={(el) => (sectionRefs.current[0] = el)}
        className="enf-section enf-section--1"
      >
        <div className="enf-section__inner">
          <motion.div
            className="enf-qa"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="enf-question" variants={questionVariants}>
              <span className="enf-bracket">{'\u3010'}</span>
              <span className="enf-question__text">ENF到底是什么？</span>
              <span className="enf-bracket">{'\u3011'}</span>
            </motion.div>

            <motion.div className="enf-answer" variants={answerVariants}>
              <p className="enf-answer__highlight">
                ENF（Emotion Nutrition Food）情绪营养食品，是由心宥集团首次提出的科学解压理念。
              </p>
              <p>
                它融合神经科学、营养学、微生物学和心理学，系统研究如何通过日常食品载体，为情绪相关的生理系统提供精准的营养支持。
              </p>
              <div className="enf-chain">
                <span>食品成分</span>
                <span className="enf-arrow">{'\u2192'}</span>
                <span>生理靶点</span>
                <span className="enf-arrow">{'\u2192'}</span>
                <span>情绪表现</span>
              </div>
              <p className="enf-answer__note">
                它不替代药物，也不属于保健品，而是在普通食品的范畴里，为现代人广泛存在的情绪亚健康问题，提供一种安全、日常、可长期使用的营养解决方案。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 2 */}
      <section
        ref={(el) => (sectionRefs.current[1] = el)}
        className="enf-section enf-section--2"
      >
        <div className="enf-section__inner">
          <motion.div
            className="enf-qa"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div className="enf-question" variants={questionVariants}>
              <span className="enf-bracket">{'\u3010'}</span>
              <span className="enf-question__text">情绪不好，跟吃的有什么关系？</span>
              <span className="enf-bracket">{'\u3011'}</span>
            </motion.div>

            <motion.div className="enf-answer" variants={answerVariants}>
              <p>
                很多人觉得情绪是"心理问题"，跟吃什么是两回事。但现代科学发现，事实并非如此。
              </p>
              <p>
                肠道被称为人体的"第二大脑"，它通过<strong>肠脑轴</strong>与大脑进行24小时不间断的双向通讯。这条通路由迷走神经、免疫系统和内分泌系统共同构成，是大脑和身体之间最繁忙的"信息高速公路"。
              </p>
              <ul className="enf-facts">
                <li>人体约<span>90%</span>的血清素前体在肠道产生</li>
                <li>约<span>50%</span>的多巴胺由肠道微生物参与合成</li>
                <li>肠道菌群还能产生GABA、短链脂肪酸等神经活性物质，直接影响大脑的情绪中枢</li>
              </ul>
              <p className="enf-answer__conclusion">
                <strong>你吃进去的营养，会通过肠脑轴，真实地改变大脑的化学环境。</strong>
              </p>
              <p className="enf-answer__note">
                这不是推测，而是有大量临床研究支撑的结论。<em>《自然·微生物学》</em>2023年的研究发现，调节肠道菌群后，大脑海马体的神经营养因子水平显著上升，抑郁样行为减少35%。<em>《肠道》</em>期刊2022年的临床实验证实，肠道屏障修复后，受试者焦虑评分下降22%。
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 3 */}
      <section
        ref={(el) => (sectionRefs.current[2] = el)}
        className="enf-section enf-section--3"
      >
        <div className="enf-section__inner">
          <motion.div
            className="enf-qa"
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div className="enf-question" variants={questionVariants}>
              <span className="enf-bracket">{'\u3010'}</span>
              <span className="enf-question__text">情绪营养如何真正发挥作用？</span>
              <span className="enf-bracket">{'\u3011'}</span>
            </motion.div>

            <motion.div className="enf-answer" variants={answerVariants}>
              <p className="enf-answer__highlight">
                ENF的核心是一套<strong>"科学解压三元模型（TSR）"</strong>，回答了三个关键问题——
              </p>

              <div className="enf-tsr">
                <motion.div
                  className="enf-tsr-card"
                  variants={fadeUpVariants}
                >
                  <div className="enf-tsr-number">1</div>
                  <h3>情绪系统哪里失衡了？</h3>
                  <p>
                    情绪困扰≠心理问题，它的本质是三大生理系统在"报警"：
                  </p>
                  <ul>
                    <li><strong>神经递质合成系统：</strong>血清素、GABA、多巴胺的合成需要特定营养素作为原料。原料不足，大脑就无法高效传递好心情。</li>
                    <li><strong>肠脑轴通讯系统：</strong>肠道菌群与大脑24小时双向通讯，菌群失调会直接影响情绪中枢的稳定。</li>
                    <li><strong>抗炎与应激缓冲系统：</strong>持续的压力和慢性炎症，会损伤神经元、破坏情绪稳定性。</li>
                  </ul>
                </motion.div>

                <motion.div
                  className="enf-tsr-card"
                  variants={fadeUpVariants}
                >
                  <div className="enf-tsr-number">2</div>
                  <h3>营养怎么精准介入？</h3>
                  <p>ENF强调每种成分的作用机制必须明确，干预必须精准：</p>
                  <ul>
                    <li><strong>GABA：</strong>直接结合GABA受体，抑制神经元过度兴奋，快速产生镇静舒缓效果</li>
                    <li><strong>磷脂酰丝氨酸（PS）：</strong>增强神经细胞膜流动性，提升信号传递效率，同时降低皮质醇水平</li>
                    <li><strong>茶氨酸 + GABA协同：</strong>茶氨酸30分钟快速起效，GABA持续作用2-4小时，放松但保持清醒</li>
                  </ul>
                  <p className="enf-tsr-card__note">配方设计遵循"1+1{'>'}2"的协同逻辑，不是单一成分的简单堆叠。</p>
                </motion.div>

                <motion.div
                  className="enf-tsr-card"
                  variants={fadeUpVariants}
                >
                  <div className="enf-tsr-number">3</div>
                  <h3>营养怎么活着到达该去的地方？</h3>
                  <p>好成分如果到不了该去的地方，等于白吃。</p>
                  <ul>
                    <li><strong>肠溶包衣技术：</strong>让营养素在胃酸环境中不释放，到达肠道后才精准溶解——吸收率提升45%。</li>
                    <li><strong>微囊包埋工艺：</strong>保护易氧化成分，留存率提升60%以上。</li>
                  </ul>
                  <p className="enf-tsr-card__note">好营养，要用对的方式送达。</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Section 4 */}
      <section
        ref={(el) => (sectionRefs.current[3] = el)}
        className="enf-section enf-section--4"
      >
        <div className="enf-section__inner">
          <motion.div
            className="enf-summary"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h2 className="enf-summary__title">ENF的完整逻辑</h2>
            <div className="enf-summary__flow">
              <span>找到情绪失衡的生理根源</span>
              <span className="enf-summary__arrow">{'\u2192'}</span>
              <span>用精准的营养去修复</span>
              <span className="enf-summary__arrow">{'\u2192'}</span>
              <span>再用科学的工艺把营养送到位</span>
            </div>
            <p className="enf-summary__body">
              不是压制情绪，不是逃避压力，而是从身体的底层给大脑一个重新平衡的机会。
            </p>
            <p className="enf-summary__creed">
              我们相信，情绪健康不应该是一种奢侈品——<br />
              它应该是每个人日常餐桌上触手可及的事。
            </p>
          </motion.div>
        </div>
      </section>

      {/* Navigation dots */}
      <nav className="enf-nav-dots">
        {[0, 1, 2, 3].map((i) => (
          <button
            key={i}
            className={`enf-nav-dot${activeIndex === i ? ' enf-nav-dot--active' : ''}`}
            onClick={() => scrollToSection(i)}
            aria-label={`跳转到第 ${i + 1} 屏`}
          />
        ))}
      </nav>
    </div>
  )
}

