
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Base.css'

const Base = ({children}) => {
    return(
        <>
        <Navbar />
       <div className='content-section'>{children}</div> 
        <Footer />
        </>
    )
}

export default Base;