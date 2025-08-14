import Hero from './sections/Hero';
import About from './sections/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
export default function Page() {
    return (
        <>
            <Hero />
            <About />
            <Experience />
            <Projects />
        </>
    );
}