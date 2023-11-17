import Card from "./Card";
import gmf from "../shared/asset/img/gmf.png"
import rsds from "../shared/asset/img/rsds.png"
import patigeni from "../shared/asset/img/logo_patigeni.png"
import bromindo from "../shared/asset/img/logo_bromindo.png"
import sisi from "../shared/asset/img/logo_sisi.png"
import pastijadi from "../shared/asset/img/logo_pastijadi.png"


function Project() {
  return (
    <div className="container project">
      <h2 className="main-title text-center">WORK EXPERIENCE</h2>
      <div className="container Project">
        <div className="card-cover">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 mb-2">
                    <Card tinggi="200" sumber={gmf} />
                  </div>
                  <div className="col-md-4 mb-2">
                    <Card tinggi="200" sumber={rsds} />
                  </div>
                  <div className="col-md-4 mb-2">
                    <Card tinggi="200" sumber={sisi} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-3 mb-2">
                  <Card tinggi="200" sumber={bromindo} />
                </div>
                <div className="col-md-3 mb-2">
                  <Card tinggi="200" sumber={patigeni} />
                </div>
                <div className="col-md-3 mb-2">
                  <Card tinggi="200" sumber={pastijadi} />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
export default Project;
