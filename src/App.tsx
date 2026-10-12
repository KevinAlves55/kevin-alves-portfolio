import { BackToTop } from './components/BackToTop.tsx'
import { Footer } from './components/Footer.tsx'
import { Header } from './components/Header.tsx'
import { JsonLd } from './components/JsonLd.tsx'
import { LocaleProvider } from './components/LocaleProvider.tsx'
import { ThemeProvider } from './components/ThemeProvider.tsx'
import { useLocale } from './hooks/useLocale.ts'
import { About } from './sections/About.tsx'
import { Contact } from './sections/Contact.tsx'
import { Experience } from './sections/Experience.tsx'
import { Hero } from './sections/Hero.tsx'
import { Projects } from './sections/Projects.tsx'
import { Skills } from './sections/Skills.tsx'

function AppContent() {
  const { copy } = useLocale()

  return (
    <>
      <JsonLd />
      <a href="#conteudo" className="skip-link">
        {copy.ui.skip}
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
      <BackToTop />
    </>
  )
}

export function App() {
  return (
    <ThemeProvider>
      <LocaleProvider>
        <AppContent />
      </LocaleProvider>
    </ThemeProvider>
  )
}
