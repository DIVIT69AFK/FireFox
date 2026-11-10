import './App.css'
import FireFoxHeader from './components/FireFoxHeader'
import FireFoxHero from './components/FirefoxHero'
import FeatureGrid from './components/FeatureGrid'
import FireFoxFooter from './components/FireFoxFooter'

const features = [
  { icon: '🛡️', title: 'Privacy', desc: 'Blocks 2000+ trackers by default.' },
  { icon: '🎯', title: 'Focus', desc: 'Clutter-free, distraction-free.' },
  { icon: '🎛️', title: 'Choice', desc: 'Customize exactly what you see.' }
]

function App() {
  return (
    <main>
      <FireFoxHeader />
      <FireFoxHero
        headline="Built to protect you, not track you"
        buttonLabel="Try Firefox"
      />
      <section id="features">
        <h2>Features</h2>
        <FeatureGrid items={features} />
      </section>
      <FireFoxFooter />
    </main>
  )
}

export default App
