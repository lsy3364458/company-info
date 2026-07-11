import { Link } from 'react-router-dom'
import wechatQrcode from '../assets/img/wechat-qrcode.jpg'
import xhsQrcode from '../assets/img/xhs-qrcode.png'
import './Footer.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__inner container">
        <div className="footer__grid">
          {/* Column 1: Quick Links */}
          <div className="footer__col">
            <h4 className="footer__title">快捷导航</h4>
            <ul className="footer__links">
              <li><Link to="/products">WholeMe产品</Link></li>
              <li><Link to="/enf-nutrition">ENF情绪营养</Link></li>
              <li><Link to="/about">关于心宥</Link></li>
              <li><Link to="/craft-tour">公益巡讲</Link></li>
            </ul>
          </div>

          {/* Column 2: Contact Info */}
          <div className="footer__col">
            <h4 className="footer__title">联系我们</h4>
            <ul className="footer__contact">
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>山东省烟台市 高新区IVD医疗器械产业园11号楼3楼</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                <span>上海市黄浦区九江路501号(德必外滩国际创意中心)320室</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                <span>0535-3940199/400-6333-669</span>
              </li>
              <li>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                <span>19963665999@163.com</span>
              </li>
            </ul>
          </div>

          {/* Column 3: QR Code */}
          <div className="footer__col">
            <h4 className="footer__title">关注我们</h4>
            <div className="footer__qrcodes">
              <div className="footer__qrcode-item">
                <div className="footer__qrcode-placeholder">
                  <img src={wechatQrcode} alt="微信" />
                </div>
                <span>扫码关注公众号</span>
              </div>
              <div className="footer__qrcode-item">
                <div className="footer__qrcode-placeholder">
                  <img src={xhsQrcode} alt="小红书" />
                </div>
                <span>扫码关注小红书</span>
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
