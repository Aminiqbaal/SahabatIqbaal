import Card from "./Card";
import raprima from "../shared/asset/img/logo_raprima.png"
import gd_fresh from "../shared/asset/img/logo_GdFresh.png"
import infaqbm from "../shared/asset/img/logo_infaqbm.png"
import firecek from "../shared/asset/img/logo_firecek.png"
import rolling_glory from "../shared/asset/img/logo_rg.png"
import rsds_plp from "../shared/asset/img/rsds_plp.png"
import rsds_pi from "../shared/asset/img/rsds_pi.png"
import rsds_helpedsk_itki from "../shared/asset/img/rsds_helpdesk_itki.png"
import ruang_lawyer from "../shared/asset/img/ruang_lawyer.png"
import reporter_satiu from "../shared/asset/img/reporter_satu.jpg"
import compro_rsds from "../shared/asset/img/rsds.png"
import uisi from "../shared/asset/img/logo_uisi.png"

function Project() {
  return (
    <div className="container project">
      <h2 className="main-title text-center">PROJECT</h2>
      <div className="container Project">
        <div className="card-cover">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-4 mb-2">
                    <Card tinggi="200" sumber={raprima} />
                  </div>
                  <div className="col-md-4 mb-2">
                    <Card tinggi="200" sumber={gd_fresh} />
                  </div>
                  <div className="col-md-4 mb-2">
                    <Card tinggi="200" sumber={firecek} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4 mb-2">
                  <Card tinggi="200" sumber={infaqbm} />
                </div>
                <div className="col-md-4 mb-2">
                  <Card tinggi="200" sumber={rolling_glory} />
                </div>
                <div className="col-md-4 mb-2">
                  <Card tinggi="200" sumber={rsds_pi} />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4 mb-2">
                  <Card tinggi="200" sumber={rsds_plp} />
                </div>
                <div className="col-md-4 mb-2">
                  <Card tinggi="200" sumber={rsds_helpedsk_itki} />
                </div>
                <div className="col-md-4 mb-2">
                  <Card tinggi="200" sumber={ruang_lawyer} />
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="col-md-4 mb-2">
                  <Card tinggi="200" sumber={reporter_satiu} />
                </div>
                <div className="col-md-4 mb-2">
                  <Card tinggi="200" sumber={compro_rsds} />
                </div>
                <div className="col-md-4 mb-2">
                  <Card tinggi="200" sumber={uisi} />
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
