import './global.css'

import { Projects } from '../src/components/projects/Projects'
import { Main } from '../src/components/main/Main'
import { Header } from '../src/components/header/Header'
import { Infos } from '../src/components/Infos/Infos'
function App() {

  return (
      <div>
      < Header />

        <Main />

        <Projects />
      
          <Infos />
      </div>
  )
}
export default App