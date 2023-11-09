import Image from 'next/image'
import Intro from './_components/Intro'
import SectionDivider from './_components/SectionDivider'
import About from './_components/About'
import Projects from './_components/Projects'

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <div>
        <Intro/>
        <SectionDivider/>
        <About/>
        {/* <SectionDivider/> */}
        {/* <Projects/> */}
      </div>
    </main>
  )
}
