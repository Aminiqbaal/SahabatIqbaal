import Card from "./Card";
import logo_potoshop from "../shared/asset/img/logo_potoshop.png"
import logo_pixellab from "../shared/asset/img/logo_pixellab.png"
import logo_canva from "../shared/asset/img/logo_canva.webp"

function Services() {
    return (
        <div className="container services">
            <h2 className="main-title text-center">DESIGN TECHNOLOGY</h2>

            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card tinggi="200" sumber={logo_potoshop} />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card tinggi="200" sumber={logo_pixellab} />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card tinggi="200" sumber={logo_canva} />
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Services;
