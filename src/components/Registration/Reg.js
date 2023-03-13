import "./Reg.css";
import QrImg from "../.././assets/image/payment-ieee.jpg";
import PayHereImg from "../.././assets/image/payhere.png";
import Fade from "react-reveal/Fade";

const Reg = () => {
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center hero-content">
              <h1>ICSTCEE Registration 2023</h1>
            </div>
          </div>
        </div>
      </header>

      {/* ----------------------------- */}

      <Fade bottom>
      <div className="container">
        <div className="row">
          <div className="col-12 FPS ">
            <h3>
              ICSTCEE 2023 registration can be done online.<br></br><br></br>
               Registration Fee:
            </h3>
          </div>
        </div>
      </div>
      </Fade>

      <br></br>
      <hr></hr>
      <br></br>

      {/* ----------------------------- */}

      <Fade bottom>
      <div className="container">
        <div className="row">
          <div className="col-12 FPS ">
          <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Early Bird (Indian) (Rupees)</th>
                    <th>Early Bird (Foreign) (USD)</th>
                    <th>Regular (Indian) (Rupees)</th>
                    <th>Regular (Foreign) (USD)</th>
                  </tr>
                </thead>
                <tbody>
                    <tr>
                      <td>IEEE Student Member</td>
                      <td>3000</td>
                      <td>55</td>
                      <td>3700</td>
                      <td>75</td>

                    </tr>
                    <tr>
                      <td>Non-IEEE Student Member</td>
                      <td>4400</td>
                      <td>80</td>
                      <td>5300</td>
                      <td>110</td>

                    </tr>
                    <tr>
                      <td>IEEE Member</td>
                      <td>5000</td>
                      <td>94</td>
                      <td>6100</td>
                      <td>125</td>

                    </tr>
                    <tr>
                      <td>Non-IEEE Member</td>
                      <td>7200</td>
                      <td>135</td>
                      <td>8800</td>
                      <td>180</td>
                    </tr>


                    </tbody>
                    </table>
                    </div><br></br>
                    <h6><b>Note: </b>Only those authors submit paper(s) before Early submission deadline are eligible to get the above Discounts (*Registration Fee is Excluding 18% GST)</h6>
          </div>
        </div>
      </div>
      </Fade>
      <br></br>
      <hr></hr>

      {/* ----------------------------- */}

      <Fade bottom>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h2>Payment Details:</h2>
            <hr></hr>
            <img src={QrImg}  alt="payment" />
            </div>
            <div className="col-md-4 bank bank-india">
              <code style={{
                color: "green",
                fontWeight: "600"
              }}>For Indian</code><br></br>
             <br></br>
              <code className="bank-left-color">Account Name:</code><code>IEEE REVA University</code> <br></br>
              <code className="bank-left-color">Account No:</code><code>6662000100008501</code> <br></br>
              <code className="bank-left-color">IFSC:</code>        <code>KARB0000666</code> <br></br>
              <code className="bank-left-color">Name of Bank:</code><code>Karnataka Bank Ltd.</code> <br></br>
              <code className="bank-left-color">Branch Name:</code><code>REVA University Campus, Bengaluru</code> 
            
              <br></br>

            </div>
            <div className="col-md-4 bank bank-foreign">
            <code style={{
                color: "green",
                fontWeight: "600"
              }}>For outside Country</code><br></br>
            <br></br>
            <img src={PayHereImg} width="100" alt="payhere accept" /><br></br><br></br>
            <code style={{
                color: "green",
                fontWeight: "600"
              }}>For Technical/Payment Errors please contact:</code><br></br>
            <br></br>
            <code className="bank-left-color">Email id:</code><code>icstcee@reva.edu.in</code><br></br>
            <code className="bank-left-color">Mobile Number:</code><code><pre>+91 94482 39726 (Dr.Vishwanath R Hulipalled)<br></br>
               +91 74183 32829 (Dr.Devanathan M)<br></br>
               +91 98948 83558 (Dr.G parthasarathy)<br></br>
               +91 96775 82756 (Dr N Thillaiarasu)</pre></code>
            <code className="bank-left-color">WhatsApp/Telegram:</code><code>+91 9677582756</code>
            </div>

            </div>
            </div>
            </Fade>

            <hr></hr>
            

    </>
  );
};

export default Reg;
