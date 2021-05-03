import './App.scss'
import { Portfolio } from './components/portfolio/portfolio'
import {Preview} from './components/preview/preview'
import { Skills } from './components/skills/skills'
function App() {
  return (
    <div className="App">
      <div className="frame frame-left"></div>
      <div className="frame frame-top"></div>
      <div className="frame frame-right"></div>
      <div className="frame frame-bottom"></div>
      <Preview />
      <Skills />
      <Portfolio />
    </div>
  )
}

export default App
