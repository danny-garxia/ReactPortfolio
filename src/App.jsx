
import styles from "./App.module.css";
import Hero from "./componets/Hero/Hero";
import About from "./componets/About/About";
import Navbar from "./componets/Navbar/Navbar";
import Programs from "./componets/Programs/Programs";
import Projects from "./componets/Projects/Projects";
import Contact from "./componets/Contact/Contact";





function App() {
  return (
    <div className={styles.App}>
    <Navbar />
    <div className={styles.contentContainer}>
      <Hero />
      <About />
      <Programs />
      <Projects username="danny-garxia" />
      <Contact />
    </div>
  </div>
)
}


export default App
