import Intro from './_components/Intro';
import SectionDivider from './_components/SectionDivider';
import About from './_components/About';
import Projects from './_components/Projects';
import Skills from './_components/Skills';
import Contact from './_components/Contact';

export default function Home() {
  return (
    <main className="flex flex-col items-center overflow-hidden">
      <div>
        <Intro/>
        <SectionDivider/>
        <About/>
        <SectionDivider/>
        <Projects/>
        <SectionDivider/>
        <Skills/>
        <SectionDivider/>
        <Contact/>
      </div>
    </main>
  )
}
