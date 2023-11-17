import Card from "./Card";
import card1 from "../shared/asset/img/card1.png"
import card2 from "../shared/asset/img/card2.png"
import card3 from "../shared/asset/img/card3.png"

function Services() {
    return (
        <div className="container services">
            <h2 className="main-title text-center">SERVICES</h2>
            <div className="card-cover">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="Web Development" sumber={card3} text="" tinggi="300" />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Mobile Development" sumber={card3} text="" tinggi="300" />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="System Analyst" tinggi="300" sumber={card2} text="" />
                        </div>
                    </div>
                </div>
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-4 mb-2">
                            <Card title="UI/UX Design" sumber={card1} text="" tinggi="300" />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Software Quality Assurance" tinggi="300" sumber={card1} text="" />
                        </div>
                        <div className="col-md-4 mb-2">
                            <Card title="Graphic Design" tinggi="300" sumber={card3} text="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
export default Services;
