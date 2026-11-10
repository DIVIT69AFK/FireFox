import './FirefoxHero.css'
import firefoxLogo from '../assets/firefox-logo.jpeg'

function FireFoxHero(props) {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-label">The independent browser</p>
        <h1>{props.headline}</h1>
        <p className="hero-description">
          Get the browsing experience you expect with protection, control and choice built in.
        </p>
        <a href="#features" className="hero-button">{props.buttonLabel}</a>
      </div>
      <img src={firefoxLogo} alt="Firefox logo" className="hero-logo" />
    </section>
  )
}

export default FireFoxHero
