/* eslint-disable react/prop-types */
import { useContext} from "react"
import Options from "./Options";
import { Darkmodecontext } from "./App";




export default function Filter()

{
    let {countryData,mode,select,search,setSearch ,setArea ,setSelect ,setPopulation,setSubregiondata}= useContext(Darkmodecontext);
   
 

  
    return (
        <section  id="filter-section">
            <div className={"search-bar "+mode.elementMode}>
            <svg id="search-logo"
  xmlns="http://www.w3.org/2000/svg"
  className="ionicon"
  viewBox="0 0 512 512"
>
  <path
    d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"
    fill="none"
    stroke="currentColor"
    strokeMiterlimit={10}
    strokeWidth={32}
  />
  <path
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeMiterlimit={10}
    strokeWidth={32}
    d="M338.29 338.29L448 448"
  />
</svg>
                <input id="search" autoComplete="off" className={mode.elementMode} value={search}  placeholder="search by the country" type="search" onChange={
                    (e)=>{  
                        setSearch(e.target.value)
                       
                       
                    }
                  
                }/>
            </div>
            <div>
               <p> <select className={mode.elementMode}   onChange={((e)=>{
                      setPopulation(e.target.value)
                      e.target.selectedOptions

                      
                   
               })}>
                    <option value="">sort by population</option>
                    <option value="Asc" >Ascending</option>
                    <option value="Des">Descending</option>
                </select></p>
            </div>

            <div>
               <p><select className={mode.elementMode}   onChange={((e)=>{
                     setArea(e.target.value)     
               })}>
                    <option value="">sort by Area</option>
                    <option value="Asc" >Ascending</option>
                    <option value="Des">Descending</option>
                </select></p>
            </div>

            <div>
               <p>
                <select  className={mode.elementMode}   onChange={(e)=>{
                      setSubregiondata(e.target.value)
                }} >
                <option value="">Filter by subregion</option>
                    {
                        
                        
                            subregion(countryData,select)
                        
                       
                    }
                </select></p>
            </div>
            <div className="select-bar" >
                  <select className={mode.elementMode}   onChange={(e)=>{
                  setSelect(e.target.value)
                 e.target.viewBox = "s"
                  setSubregiondata("");
            
                  
}} >
                    <option value="" >Filter by region...</option>
                    {
                        optionsrender(countryData)
                    }
                  </select>

            </div>


        </section>
    )
}

function optionsrender(all)
{
    
    let container = [];
    let status = [];
    if(all.length != 0)
    {
     all.forEach(element => {

        if(container.indexOf(element.region)== -1)
        {
            status.push(<Options key={element.region} value={element.region} />);
            container.push(element.region) 
        } 
     });
    }
     return status;
}
function optionsregion(all)
{
    let container = [];
    let status = [];
    if(all.length != 0)
    {
     all.forEach(element => {

        if(element.subregion)
        {   if(container.indexOf(element.subregion)== -1)
            {
                status.push(<Options key={element.subregion} value={element.subregion} />);
                container.push(element.subregion) 
            } }

     });
    }
     return status;
}

function subregion(country,region)
{
    let data = []
    if(country.length != 0)
    {
    data = country.filter((each)=>{
        return each.region == region
    })
}

    return  optionsregion(data);
}
