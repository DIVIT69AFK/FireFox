import './FireFoxHeader.css'

function FireFoxHeader() {
  return (
    <header className="header">
      <a href="https://www.firefox.com/en-US/" className="brand">Firefox</a>
      <nav className="nav-links">
        <a href="https://www.firefox.com/en-US/features/">Features</a>
        <a href="https://support.mozilla.org/en-US/products/firefox">Support</a>
        <a href="https://blog.mozilla.org/">Blog</a>
      </nav>
      <a href="https://www.firefox.com/en-US/download/" className="header-button">Download Firefox</a>
    </header>
  )
}

export default FireFoxHeader
