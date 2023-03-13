
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Base.css'
import GoToTop from '../GoToTop/GoToTop';

const Base = ({children}) => {
    return(
        <>
        <Navbar />
       <div className='content-section'>{children}
       <GoToTop/>
       </div> 
        <Footer />
        </>
    )
}

export default Base;