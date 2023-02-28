
import './Navbar.css';
import { Link,useLocation } from 'react-router-dom';

const Navbar = () => {

  const location = useLocation();
  const path = location.pathname;
  const activeLink = path.split("/")[1];

    const home = activeLink === '' ? 'active' : '';
    const about = activeLink === 'about' ? 'active' : '';
    const committee = activeLink === 'committee' ? 'active' : '';
    const speakers = activeLink === 'speakers' ? 'active' : '';
    const callForPapers = activeLink === 'call-for-papers' ? 'active' : '';
    const submission = activeLink === 'submission' ? 'active' : '';
    const finalPaperSubmission = activeLink === 'final-paper-submission' ? 'active' : '';
    const registration = activeLink === 'registration' ? 'active' : '';

    return(
        <>
        <nav className="navbar navbar-expand-lg navbar-light ">
      <div className="container-fluid">
        <Link to="/" className='router-link navbar-brand'>
      {/* <img src="your-logo.png" alt="ICSTCEE"/> */}
      <h3>ICSTCEE</h3>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className={"nav-item " + home}>
            <Link to="/" className='router-link nav-link'>   
             <span className={'nav-cus-link'}>Home</span>  
              </Link>
            </li>
            <li className={"nav-item " + about}>
            <Link to="/about" className='router-link nav-link'>   
            <span className='nav-cus-link'> About</span>
              </Link>
            </li>
            <li className={"nav-item " + committee}>
            <Link to="/committee" className='router-link nav-link'>   
            <span className='nav-cus-link'>Committee</span>
              </Link>
            </li>
            <li className={"nav-item " + speakers}>
            <Link to="/speakers" className='router-link nav-link'>   
            <span className='nav-cus-link'> Speakers</span>
              </Link>
            </li>
            <li className={"nav-item " + callForPapers}>
            <Link to="/call-for-papers" className='router-link nav-link'>   
            <span className='nav-cus-link'>Call for papers</span>
              </Link>
            </li>
            <li className={"nav-item " + submission}>
            <Link to="/submission" className='router-link nav-link'>   
            <span className='nav-cus-link'> Submission</span>
              </Link>
            </li>
            <li className={"nav-item " + finalPaperSubmission}>
            <Link to="/final-paper-submission" className='router-link nav-link'>   
            <span className='nav-cus-link'> Final paper submission</span>
              </Link>
            </li>
            <li className={"nav-item " + registration}>
            <Link to="/registration" className='router-link nav-link'>   
            <span className='nav-cus-link'> Registration</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
        </>
    )
}

export default Navbar;