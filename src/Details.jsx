/* eslint-disable react-hooks/exhaustive-deps */
import { useState,useEffect,useContext} from "react"
import { Link} from "react-router-dom"
import { useParams} from "react-router-dom";
import DetailsLoader from './DetailsLoader'
import { Darkmodecontext } from "./App";
import ButtonGenerator from "./ButtonGeneratir";
export default function Details()

{

   let url= useParams().country;
   const {mode} = useContext(Darkmodecontext);


    let [country,setCountry] = useState([]);
useEffect(()=>{
    fetchData()
},[url])

async function fetchData(){
  try { 
       let data = await fetch('https://restcountries.com/v3.1/alpha/'+url);
      let JsonData = await data.json();
            setCountry(JsonData);             
  }catch(e)
  {
    console.log(e);
  }
  }

if(country.length == 0){
  return   <DetailsLoader />
    
}
if(country.length != 0 )
{
return (
<div  >
    <Link to="/">
      <div id="backbutton" className={mode.elementMode}>
    <svg
  xmlns="http://www.w3.org/2000/svg"
  className="ionicon"
  viewBox="0 0 512 512"
  
>
  <path
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth={48}
    d="M244 400L100 256l144-144M120 256h292"
  />
</svg>
<button id="back" className={mode.elementMode}>Back</button></div></Link>
<div id="country-data" >
  <img
    id="display-img"
    src={
    country[0].flags.png
  }
  
  />
  <section id="details-container">
    <div className={"contain " + mode.bodyMode }>
      <section id="country-name" className="country-card-rows">
        <h3>
        {country[0].name.common}
        </h3>
      </section>
      <div id="country-info" className= {mode.bodyMode}>
        <section className="country-card-rows">
          <h4>Native name: </h4>
          <span>
            {
               native(
                country[0])
               
            }
          </span>
        </section>
        <section className="country-card-rows">
          <h4>Population: </h4>
          <span>
          {
        country[0].population
      }
          </span>
        </section>
        <section className="country-card-rows">
          <h4>Region: </h4>
          <span>
          {
        country[0].region
      }
          </span>
        </section>
        <section className="country-card-rows">
          <h4>Capital: </h4>
          <span>
          {
        country[0].capital
      }
          </span>
        </section>
        <section className="country-card-rows">
          <h4>Sub Region: </h4>
          <span>
          {
        country[0].subregion
      }
          </span>
        </section>
        <section id="country-info-div" className="country-card-rows">
          <h4>Top Level Domain: </h4>
          <span>
          {'.'+country[0].cca2.toLowerCase()}
          </span>
        </section>
        <section className="country-card-rows">
          <h4>Curriencies: </h4>
          <span>
          {
           currency(country[0].currencies)
           
      }
          </span>
        </section>
        <section className="country-card-rows">
          <h4>Languages: </h4>
          <span>
          {
       language(country[0].languages)
      }
          </span>
        </section>
      </div>
      <div id="border-countrys">
        <h4>Border Countries :</h4>
        <section id="button-container">
        {
        country[0].borders? (country[0].borders.map((cca3)=>{
         return <ButtonGenerator key={cca3} cca3={cca3}/> 
          
        })):<p>{"NO BORDERS"}</p>}
        </section>
      </div>
    </div>
  </section>
</div>
</div>
  )
}

}

function currency(data) {

    let s = '';
    for (let key in data) {
      s += data[key].name;
    }
    return '  ' + s;
  }
  function language(data) {
    let str = [];
    for (let key in data) {
      str.push(data[key])
    }
    return str.join(',')
  }

  function native(country) {
    if (country.altSpellings.length < 2) {
      return country.name.common;
    }
    return country.altSpellings[1];
  }
  
