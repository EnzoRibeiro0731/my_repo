import './global.css'

import { Projects } from '../src/components/projects/Projects'
import { Main } from '../src/components/main/Main'
import { Header } from '../src/components/header/Header'
import { Infos } from '../src/components/Infos/Infos'
import { Contact } from './components/contact/Contact'

function App() {

  return (
      <div>
      < Header />

        <Main />

        <Projects />
      
          <Infos />
          <br /><br /><br /><br /><br /><br /><br /><br />
            <Contact />
      </div>
  )
}
export default App