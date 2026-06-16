import Navbar from "@/components/Navbar";
import HeroSpline from "@/components/HeroSpline";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { SplineScene } from "@/components/ui/splite";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-text">
      <Navbar />
      <HeroSpline
        splineScene={
          <SplineScene scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode" />
        }
      />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  );
}
