import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Experience, Hero, Navbar, Tech, Projects, Footer, Copy} from './components';
import ParticlesBg from './components/Particlesbg';

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <ParticlesBg/>
        <div className="relative bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Projects />
        <div>
          <Contact />  
        </div>
        <Footer />
        <Copy />
      </div>
    </BrowserRouter>
  )
}
export default App