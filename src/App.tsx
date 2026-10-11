import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { JsonLd } from './components/JsonLd.tsx'
import { ThemeProvider } from './components/ThemeProvider.tsx'
import { ui } from './data/site.ts'
import { About } from './sections/About.tsx'
import { Contact } from './sections/Contact.tsx'
import { Experience } from './sections/Experience.tsx'
import { Hero } from './sections/Hero.tsx'
import { Projects } from './sections/Projects.tsx'
import { Skills } from './sections/Skills.tsx'

export function App() {
  return (
    <ThemeProvider>
      <JsonLd />
      <a href="#conteudo" className="skip-link">
        {ui.skip}
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  )
}
