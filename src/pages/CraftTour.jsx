import './SubPage.css'

export default function CraftTour() {
  return (
    <div className="subpage">
      <div className="subpage__banner">
        <div className="container">
          <h1>工艺巡讲</h1>
          <p>透明化生产工艺，见证每一个品质细节</p>
        </div>
      </div>
      <div className="subpage__content container">
        <div className="subpage__placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>
          <h2>工艺巡讲</h2>
          <p>我们将带您深入了解从原料到成品的每一个工艺环节，敬请期待。</p>
        </div>
      </div>
    </div>
  )
}
