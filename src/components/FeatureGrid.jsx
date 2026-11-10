import './FeatureGrid.css'

function FeatureGrid(props) {
  return (
    <div className="grid-container">
      {props.items.map(function (item) {
        return (
          <div key={item.title} className="feature-card">
            <div className="feature-icon">{item.icon}</div>
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.desc}</p>
          </div>
        )
      })}
    </div>
  )
}

export default FeatureGrid
