
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return(
        <>
        <footer>
  <div class="container">
    <div class="row">
      <div class="col-12 text-center">
        <p>&copy; Copyright 2025
           ( ICSTCEE ). All Rights Reserved.
           {/* The Conference |<Link to={"https://github.com/Dhanushchandra"}> <span style={{
    color: 'green'
          }}>Developed by Dhanush.C in React JS</span></Link>. */}
          </p>
      </div>
    </div>
  </div>
</footer>
        </>
    )
}

export default Footer;