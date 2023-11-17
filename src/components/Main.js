import About from '../components/About';
import Services from '../components/Services';
import DevTechnology from '../components/Dev_Technology'
import DesTechnology from '../components/Des_Technology'
import Project from '../components/Project';
import Experience from '../components/Experience'


function Main() {
  return (
    <>
      <main>
        <Services />
        <DevTechnology />
        <DesTechnology/>
        <Project />
        <Experience />
        <About />
      </main>
    </>
  );
}
export default Main;
