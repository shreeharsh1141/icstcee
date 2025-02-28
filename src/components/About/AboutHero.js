import "./AboutHero.css";
import Fade from 'react-reveal/Fade';

const AboutHero = () => {
    return(
        <>
        <header className="hero">
            <div className="container">
                <div className="row">
                    <div className="col-12 text-center hero-content">
                        <h1>About the Conference</h1>
                        </div>
                </div>
                </div>
        </header>

        <Fade bottom>
        <div className="container">
                <div className="row">
                    <div className="col-12 text-center about-content">
                        <p>
                        The 2025 5<sup>th</sup> International Conference on Smart Technologies in Computing Electrical and Electronics (ICSTCEE 2025) will be held at REVA University, Bangalore, India on 12<sup>th</sup> and 13<sup>th</sup> Dec 2025. The conference presents an open forum for scientists, researchers, and engineers to exchange the latest innovations and research advancements in the areas of next-generation electronics, computers, communication architectures, protocols and algorithms, content systems, applications, and services. The conference will include plenary sessions and invited talks from eminent researchers on the state of the art in related areas. Contributions describing original research, surveys and applications are invited. 
                        </p>
                        </div>
                </div>
                </div>
                </Fade>
        </>
    )
}

export default AboutHero;