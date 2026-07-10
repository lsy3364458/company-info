import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home__hero">
        <div className="home__hero-bg" />
        <div className="home__hero-content container">
          <h1 className="home__hero-title">
            用心呵护<span>每一刻</span>
          </h1>
          <p className="home__hero-subtitle">
            心宥致力于情绪营养与身心健康研究，<br />
            以科学配方与自然之力，守护您与家人的幸福生活。
          </p>
          <div className="home__hero-actions">
            <Link to="/products" className="btn btn--primary">了解更多产品</Link>
            <Link to="/about" className="btn btn--outline">关于心宥</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="home__features container">
        <div className="home__section-header">
          <h2>我们的核心</h2>
          <p>以科学为基础，用温暖的方式关爱身心</p>
        </div>
        <div className="home__features-grid">
          <div className="home__feature-card">
            <div className="home__feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20.94c1.5-1.39 3-2.74 4.5-3.82A8.95 8.95 0 0 0 21 10.5 6.5 6.5 0 0 0 14.5 4 6.5 6.5 0 0 0 12 5.68 6.5 6.5 0 0 0 9.5 4 6.5 6.5 0 0 0 3 10.5a8.95 8.95 0 0 0 4.5 6.62c1.5 1.08 3 2.43 4.5 3.82z"/></svg>
            </div>
            <h3>ENF情绪营养</h3>
            <p>前沿情绪营养学配方，从根源平衡身心状态</p>
          </div>
          <div className="home__feature-card">
            <div className="home__feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
            </div>
            <h3>全线产品</h3>
            <p>多元化健康产品矩阵，满足不同人群需求</p>
          </div>
          <div className="home__feature-card">
            <div className="home__feature-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
            </div>
            <h3>工艺巡讲</h3>
            <p>透明化生产工艺，见证每一个品质细节</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="home__cta">
        <div className="container">
          <h2>开启身心健康之旅</h2>
          <p>了解更多关于情绪营养的奥秘，让我们一起探索更好的自己</p>
          <Link to="/enf-nutrition" className="btn btn--primary btn--lg">了解ENF情绪营养</Link>
        </div>
      </section>
    </div>
  )
}
