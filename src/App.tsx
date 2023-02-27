import { Layout } from 'antd'
import './App'
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import Navbar from './Container/Navbar'
import About from './Component/About'
import Skill from './Component/Skill'
import Home from './Component/Home'
import Education from './Component/Education'
import Experience from './Component/Experience'

const App = () => {

  return (

    <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
      <Navbar />
        {/* <Home />
        <About />
        <Skill /> */}
        {/* <Education /> */}
        {/* <Experience /> */}
    </div>

  )
}

export default App
