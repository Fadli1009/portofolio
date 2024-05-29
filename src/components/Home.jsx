import Hello from "./Hello";
import Image from "./Image";
import Navbar from "./Navbar";
import Responsive from "./Responsive";
import Foto1 from '../assets/img/Fotogue.jpeg'
import Foto2 from '../assets/img/about.jpeg'
import About from "./AboutMe";
import Skils from "./Skils";
import Projects from "./Projects";
import Contact from "./Contack";
import Footer from "./Footer";
import downloadCV from '../assets/files/CV Fadli Terbaru.pdf'
const Home = () => {
    const ctaEmail = 'mailto:m.fadlikurniawan1009@gmail.com'
    const judulAbout = "About Me"
    const judulSkils = "Skils"
    const judulProjects = "My Projects"
    const judulContact = "Contact Me"
    return (
        <>
            <Navbar />
            <Responsive />
            <div className="container mx-auto w-[90%] pt-16">
                <div className="flex justify-between items-center ">
                    <div className="flex flex-col-reverse lg:flex-row">
                        <Hello ctaEmail={ctaEmail} />
                        <Image src1={Foto1} />
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row mb-32 pt-44" id="about" data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-out">
                    <Image src2={Foto2} />
                    <div className="w-full">
                        <About downloadCV={downloadCV} judulAbout={judulAbout} />
                    </div>
                </div>
                <div className="w-full mb-32" id="skils" data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-out">
                    <Skils judulSkils={judulSkils} />
                </div>
                <div className="w-full mb-32 pt-32" id="project" data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-offset="500"
                    data-aos-easing="ease-in-out">
                    <Projects judul={judulProjects} />
                </div>
                <div id="contact" data-aos="fade-up"
                    data-aos-delay="100"
                    data-aos-easing="ease-in-out">
                    <Contact judulContact={judulContact} />
                </div>
                <div>
                    <Footer />
                </div>
            </div >
        </>
    );
}

export default Home;