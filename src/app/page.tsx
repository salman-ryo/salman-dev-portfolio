import Intro from './_components/sections/Intro';
import SectionDivider from './_components/SectionDivider';
import About from './_components/sections/About';
import Projects from './_components/sections/Projects';
import Skills from './_components/sections/Skills';
import Contact from './_components/sections/Contact';

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
