
function Card({img, title, text, sumber, tinggi}) {
  return (
    <div className="card" style={{height:`${tinggi}px`}}>
      <br />
      
      <div className="text-center flex items-center">
        <img alt={img} src={sumber} style={{height: '120px', width:'auto', paddingTop:'20px'}} className="text-center img-fluid" />
      </div>
      <div className="text-center">
        <h3 className="card-title">{title}</h3>
      </div>
      <div className="p-3">
        <p className="card-text">
           {text}
        </p>
      </div>
    </div>
  );
}
export default Card;
