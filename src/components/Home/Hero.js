import "./Hero.css";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

const Hero = () => {
  return (
    <>
      <header className="hero">
        <div class="container">
          <div class="row">
            <div class="col-12 text-center hero-content">
              <Fade bottom>
                <h1>REVA RESEARCH CONCLAVE(RRC)-2023</h1>
                <p>
                  Dec 8<sup>th</sup> & 9<sup>th</sup> - R&D Cell in association
                  with the School of Computer Science and Applications,<br></br>{" "}
                  REVA UNIVERSITY, Bangalore
                </p>
              </Fade>
            </div>
          </div>
          <br />
          <div></div>
        </div>
      </header>
      <div className="container">
        <div className="row">
          <div class="row">
            <div class="col-12 text-center hero2">
              <Fade bottom>
                <h1>
                  4<sup>th</sup> International Conference on Smart Technologies
                  in Computing, Electrical and Electronics (ICSTCEE) – 2023
                </h1>
                <p>
                  Organized by R&D Cell in association with the School of
                  Computer Science and Applications, REVA UNIVERSITY, Bengaluru.
                </p>
              </Fade>
            </div>
          </div>

          <hr></hr>

          <Fade bottom>
            <div class="row">
              <div class="col-12 justify hero2">
                <h1>Welcome to ICSTCEE 2023 Conference...</h1>
                <p>
                  The Fourth International Conference on Smart Technologies in
                  Computing, Electrical and Electronics (ICSTCEE 2023) will be
                  held at REVA University, Bengaluru, India on 8th & 9th
                  December 2023. REVA University hosts this ICSTCEE conference
                  as a part of REVA Research Conclave (RRC) 2023. RRC is a great
                  platform for encouraging the new generation towards research,
                  innovation and entrepreneurship by listing to outstanding
                  speakers from Academia, Entrepreneurs and Achievers from
                  Industry. It also provides a great platform for budding
                  researchers to get feedback about their quality of research
                  from eminent researchers across the globe. The ICSTCEE
                  conference presents an open forum for researchers, specialists
                  and designers to exchange the most recent developments and
                  research headways in the areas of cutting-edge computing and
                  hardware technologies, Smart cities, Smart manufacturing,
                  Smart vehicles, and mobile applications. The technical program
                  includes plenary sessions (invited keynote lectures), regular
                  technical sessions, poster sessions, panel discussions and
                  industry exhibition.
                </p>
              </div>
            </div>
          </Fade>
          <hr></hr>

          <Fade bottom>
            <div class="row">
              <div class="col-12 justify hero2">
                <h1>
                  Previous ICSTCEE Conference Papers Published in IEEE Xplore
                  Digital Library:
                </h1>
                <div>
                  <ul>
                    <li>
                      SECOND ICSTCEE 2021 papers published in IEEE Xplore
                      Digital Library:
                      <Link to="https://ieeexplore.ieee.org/xpl/conhome/9708545/proceeding">
                        Click here
                      </Link>{" "}
                    </li>
                    <li>
                      FIRST ICSTCEE 2020 papers published in IEEE Xplore Digital
                      Library:
                      <Link to="https://ieeexplore.ieee.org/xpl/conhome/9276205/proceeding">
                        Click here
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>

          <hr></hr>

          <Fade bottom>
            <div class="row">
              <div class="col-12 justify hero2">
                <h1>Important Dates:</h1>
                <div>
                  <ul>
                    <li>Paper Submission starts on 01-June-2023</li>
                    <li>
                      Last Deadline for Early Bird Submission : 30-June-2023
                    </li>
                    <li>Last Deadline for Submission : 20-October-2023</li>
                    <li>Notification of Acceptance: 30-October-2023</li>
                    <li>
                      Submission of camera-ready paper and Registration:
                      01-Nov-2023
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>
          <hr></hr>

          <Fade bottom>
            <div class="row">
              <div class="col-12 justify hero2">
                <h1>For any queries please contact</h1>
                <div>
                  <ul>
                    <li>
                      Dr. Vishwanath R Hulipalled, REVA University, India
                      <br></br>
                      Email ID: vishwanath.rh@reva.edu.in<br></br>
                      Mobile: +91-9448239726
                    </li>

                    <li>
                      Dr. Devanathan M, REVA University, India<br></br>
                      Email ID: devanathan.m@reva.edu.in<br></br>
                      Mobile: +91- 7418332829
                    </li>

                    <li>
                      Dr. Hemanth.K.S, REVA University, India<br></br>
                      Email ID: hemanth.ks@reva.edu.in<br></br>
                      Mobile: +91- 9986257582
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Fade>

          <hr></hr>

          <Fade bottom>
            <div class="row">
              <div class="col-12 justify hero2 hero2-box">
                <h3>
                  ICSTCEE Chair<br></br>
                  School of Computer Science and Applications,<br></br>
                  REVA University, Bengaluru<br></br>
                  Email: icstcee@reva.edu.in
                </h3>
              </div>
            </div>
          </Fade>

          <hr></hr>
        </div>
      </div>
    </>
  );
};

export default Hero;
