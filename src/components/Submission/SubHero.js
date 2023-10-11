import "./SubHero.css";
import Fade from "react-reveal/Fade";

const SubHero = () => {
  return (
    <>
      <header className="hero">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center hero-content">
              <h1>Submission</h1>
            </div>
          </div>
        </div>
      </header>

      <div className="container subhero">
        <div className="row">
          <Fade bottom>
            <div className="col-12 text-center">
              <h2>Guidelines to Authors</h2>
              <p>
                Below are some useful instructions to assist the authors to
                submit their papers for ICSTCEE 2023:
              </p>
            </div>
          </Fade>

          <Fade bottom>
            <div className="col-12 text-center">
              <h2>Paper Submission:</h2>
              <p>
                Papers submitted to ICSTCEE 2023 shall contain original work by
                the author(s) that have not been published or submitted for
                publication elsewhere. The IEEE anti- plagiarism policy is
                applicable to all submissions. The author(s) are solely
                responsible for any plagiarized submission. All papers are
                required to be prepared and submitted in the IEEE Standard two
                –column conference format of A4 size in English. Papers must be
                four to six pages in length, including texts, Figures,
                photographs and references. The first page must include the
                title of the paper, author(s), affiliations, address and text.
                Please do not include page numbers on submitted documents.
                Failing to conform to the standard format will result in
                rejection. Detailed format information is available in IEEE
                Website. The authors are required to use the standard IEEE
                manuscript template for conferences. The Microsoft Word template
                in can be downloaded from IEEE conference template page:
                ieee.org NOTE: Once the paper is submitted, we shall start
                reviewing it, so authors cannot update/resubmit the paper. They
                should submit the final version, update/resubmissions are not
                allowed. The paper shall consist of original and previously
                unpublished work, including specific results. The ‘Introduction’
                of the paper shall clearly indicate the unique aspects of the
                submission and how it is related to the previous work. All paper
                submissions must be electronic, using IEEE Xplore compliant PDF
                format (*.pdf). Failure to do so may result in the rejection of
                the paper. Embedded Type 1 or True Type fonts are required in
                the submitted PDF ×le as subset fonts. Type 3 fonts (bitmaps)
                will not be accepted. Authors can use the IEEE PDF express to
                generate compliant PDF Files for final submission. The PDF
                express details will be shared in the later stage
              </p>
            </div>
          </Fade>

          <Fade bottom>
            <div
              className="col-12 text-center"
              style={{
                marginBottom: "130px",
              }}
            >
              <h2>Paper Upload:</h2>
              <p>
                All papers must be submitted in PDF or as a Microsoft Word
                Document via Microsoft CMT :{" "}
                <a
                  href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICSTCEE2023"
                  target="_blank"
                >
                  Click Here
                </a>{" "}
              </p>
              <p>
                The submitting authors may be required to create a Microsoft CMT
                account before uploading the paper (if the submitting author
                does not have an Microsoft CMT account). While uploading the
                paper, the authors should provide the title of the paper, an
                abstract of no more than 250 words and keywords in the
                respective text boxes in the paper submission page. Please note
                that all accepted papers that are registered and presented in
                the conference will be sent for possible inclusion in IEEE
                Xplore. The authors must agree to the IEEE copyright conditions
                and sign the IEEE copyright form as part of the online
                submission process. All submitted papers will be peer reviewed
                by the Technical Program Committees (TPC).
              </p>
            </div>
          </Fade>
        </div>
      </div>
    </>
  );
};

export default SubHero;
