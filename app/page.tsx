import About from './components/About';
import Projects from './components/Projects';
import ConnectSection from './components/ConnectSection';
import Footer from './components/Footer';
import CursorTrail from './components/animation';

export default function Home() {
  return (
    <><div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 bg-black">
    <CursorTrail />
    <About />
    <Projects />
    <ConnectSection />
    </div> 
    <Footer />
    </>
  )
}
