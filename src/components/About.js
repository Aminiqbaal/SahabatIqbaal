import gambar_about from "../shared/asset/img/img1.png"

function About() {
  return (
    <>
      <div style={{ marginTop: '15rem', width: '100%', height: '10px' }} className="about-scroll"></div>

      <div className="container about">
        <div className="row">
          <div className="col-md-6 text-center">
            <img alt="about" src={gambar_about} className="img-fluid" />
          </div>
          <div className="col-md-6">
            <h2 className="main-title about-h2">ABOUT</h2>
            <p className="main-p">
              I am Muhammad Amin Iqbaal Alam, S.Kom graduate Bachelor Degree of Informatics Engineering Brawijaya University. I have experience in developing software, especially web based. I am a disciplined person, can work in a team or individually and adapt to the environment. Now working at PT. GMF (Garuda Maintenance Facility) Aero Asia - Garuda Indonesia Group
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default About;
