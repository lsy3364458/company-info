import './SubPage.css'

export default function Products() {
  return (
    <div className="subpage">
      <div className="subpage__banner">
        <div className="container">
          <h1>全线产品</h1>
          <p>多元健康产品矩阵，满足不同场景的身心需求</p>
        </div>
      </div>
      <div className="subpage__content container">
        <div className="subpage__placeholder">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></svg>
          <h2>产品展示即将上线</h2>
          <p>我们正在精心准备全线产品的详细信息，敬请期待。</p>
        </div>
      </div>
    </div>
  )
}
