import './global.css'

import { Projects } from '../src/components/projects/Projects'
import { Main } from '../src/components/main/Main'
import { Header } from '../src/components/header/Header'
function App() {

  return (
      <div>
      < Header />
      <Main />
      <Projects />
      </div>
  )
}
export default App