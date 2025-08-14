import Hero from './sections/Hero';
import About from './sections/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
export default function Page() {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </>
    );
}