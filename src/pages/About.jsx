import './SubPage.css'

export default function About() {
  return (
    <div className="subpage">
      <div className="subpage__banner">
        <div className="container">
          <h1>关于心宥</h1>
          <p>以科学为基石，以温暖为初心</p>
        </div>
      </div>
      <div className="subpage__content container">
        <div className="subpage__placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
          <h2>关于心宥</h2>
          <p>公司品牌故事、使命愿景与团队介绍即将呈现，敬请期待。</p>
        </div>
      </div>
    </div>
  )
}
