/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect,useState ,useContext} from "react";
import { Link } from "react-router-dom";
import { Darkmodecontext } from "./App";
export default function ButtonGenerator({cca3})
{
  const {mode} = useContext(Darkmodecontext);
  const [countrySpecfic,setCountrySpecfic] = useState([]);
  useEffect(()=>{
    fetchDataButton()
},[])

async function fetchDataButton(){
  try { 
       let data = await fetch('https://restcountries.com/v3.1/alpha/'+cca3);
      let JsonData = await data.json();
      setCountrySpecfic(JsonData)
     
                       
  }catch(e)
  {
    console.log(e);
  }
  }

  if(countrySpecfic.length != 0 )
  {
    
    return (<Link key={cca3} to={`/country/${cca3}`}>
    <button className={"back " + mode.elementMode}>{countrySpecfic[0].name.common}</button>
  </Link>)
  }

}
