import { Link } from "react-router-dom"
export default function DetailsLoader()
{
    let color = {background:'hsl(255, 3%, 80%)',color:'hsl(255, 3%, 80%)', margin:'10px 20px'}
    return(
        <div >
   <Link to="/"> <button  id="back">Back</button></Link>
<div id="country-data" >
  <div style={color}
    id="display-img"

  
  
  
></div>
  <section   id="details-container">
    <div className="contain">
      <section   id="country-name" className="country-card-rows">
        <h3 style={color}>
            asdfghwsdfghjwq
        </h3>
      </section>
      <div  id="country-info">
        <section  style={color} className="country-card-rows">
          <h4>Native name: </h4>
          <span>
           sdfgbh
          </span>
        </section>
        <section style={color} className="country-card-rows">
          <h4>Population: </h4>
          <span>
          
sdfgbnh
          </span>
        </section>
        <section  style={color}className="country-card-rows">
          <h4>Region: </h4>
          <span>
       qwefdrgtyhjk
          </span>
        </section>
        <section  style={color} className="country-card-rows">
          <h4>Capital: </h4>
          <span>
        efgdhj
          </span>
        </section>
        <section   style={color} className="country-card-rows">
          <h4>Sub Region: </h4>
          <span>
        wefsrgdhj
          </span>
        </section>
        <section  style={color} id="country-info-div" className="country-card-rows">
          <h4>Top Level Domain: </h4>
          <span>
        wesfdrghj
          </span>
        </section>
        <section  style={color}className="country-card-rows">
          <h4>Curriencies: </h4>
          <span>
        fredfgjh
          </span>
        </section>
        <section  style={color} className="country-card-rows">
          <h4>Languages: </h4>
          <span>
      sdfgc
          </span>
        </section>
      </div>
      <div id="border-countrys">
        <h4 style={color}>Border Countries :</h4>
        <section  style={color} id="button-container">
       
        </section>
      </div>
    </div>
  </section>
</div>
</div>
    )
}