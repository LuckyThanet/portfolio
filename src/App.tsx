import Navbar from './components/navbar';
import Hero from './components/hero';
// import Philosophy from './components/philosophy';
import Timeline from './components/timeline';
import FeaturedProjects from './components/featuredProjects';
import SkillsSection from './components/skillsSection';
import EducationSection from './components/educationSection';
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
    return (
        <div className="bg-white text-brand-ink font-sans antialiased selection:bg-brand-accent-soft selection:text-brand-accent-hover min-h-screen">
            <Navbar />
            <main className="w-full">
                <Hero />
                {/* <Philosophy /> */}
                <Timeline />
                <FeaturedProjects />
                <SkillsSection />
                <EducationSection />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App
