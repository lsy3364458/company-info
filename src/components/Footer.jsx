import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          {/* Column 1: Brand & Company Info */}
          <div className="footer__col">
            <div className="footer__brand">
              <span className="footer__brand-icon">心</span>
              <span className="footer__brand-name">心宥</span>
            </div>
            <p className="footer__desc">
              专注于情绪营养与身心健康，用心呵护每一个人的生活品质。
            </p>
            <p className="footer__meta">心宥健康科技有限公司</p>
            <p className="footer__meta">粤ICP备XXXXXXXX号</p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer__col">
            <h4 className="footer__title">快捷导航</h4>
            <ul className="footer__links">
              <li><Link to="/">首页</Link></li>
              <li><Link to="/products">全线产品</Link></li>
              <li><Link to="/enf-nutrition">ENF情绪营养</Link></li>
              <li><Link to="/about">关于心宥</Link></li>
              <li><Link to="/craft-tour">工艺巡讲</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer__col">
            <h4 className="footer__title">联系方式</h4>
            <ul className="footer__contact">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>service@xinyou.com</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>400-888-0000</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>深圳市南山区科技园</span>
              </li>
            </ul>
          </div>

          {/* Column 4: QR Code */}
          <div className="footer__col">
            <h4 className="footer__title">关注我们</h4>
            <div className="footer__qrcode">
              <div className="footer__qrcode-placeholder">
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="8" height="8"/><rect x="14" y="2" width="8" height="8"/><rect x="2" y="14" width="8" height="8"/><rect x="14" y="14" width="4" height="4"/><rect x="18" y="18" width="4" height="4"/><line x1="18" y1="14" x2="18" y2="16"/><line x1="20" y1="14" x2="20" y2="16"/><line x1="14" y1="18" x2="16" y2="18"/><line x1="14" y1="20" x2="16" y2="20"/></svg>
                <span>扫码关注公众号</span>
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>&copy; {currentYear} 心宥健康科技有限公司 All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
