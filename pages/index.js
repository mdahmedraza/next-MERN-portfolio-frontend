import Head from 'next/head'
import Navbar from '../components/Navbar'
import Main from '@/components/Main';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '@/components/Contact';

function HomePage(){
  return(
    <div>
      <Head>
        <title>ahmed | full-stack developer</title>
      </Head>
      <Navbar />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}
export default HomePage;