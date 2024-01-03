/* eslint-disable react/prop-types */
import { useEffect,useContext,createContext, useState} from "react"
import { Darkmodecontext } from "../App";
import {Cards} from "./Cards";
import Filter from "./Filter";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



export const ApplyFilter =  createContext(undefined);

export default function Container()
{
    let url = useParams();
   const {mode,countryData,errorData,search,select,population,area,subregiondata,setCountryData,setError,setSearch,setSelect,setPopulation,setArea,setSubregiondata} = useContext(Darkmodecontext)
   const [loadedData,setLoadedData] = useState(['not']);
    useEffect(()=>{
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[url])

  async function fetchData(){
    try {
         let data = await fetch(' https://restcountries.com/v3.1/all');
        let JsonData = await data.json();
              setCountryData(JsonData);  
              setLoadedData(JsonData);
          
             
             
    }catch(e)
    {
       setError(e);
    }
}
if(errorData)
    {
        return  (
            <ApplyFilter.Provider value={{countryData ,select, setSearch ,setArea ,setSelect ,setPopulation,setSubregiondata}}>
            <div   className={"container " + mode.bodyMode}>
            <Filter/>
             <h1 className={"no-country-found  " + mode.bodyMode} style={{display:"flex",flexDirection:"column" ,alignItems:'center' , rowGap:'50px'}}>{errorData.message} .Please try again <br /> <Link to="/" ><button  onClick={()=>{
                setError('');
             }} className={"back" + mode.elementMode} style={{margin:'0px auto'}}>Try Again</button></Link></h1>
           </div>
           </ApplyFilter.Provider>
        )
    }

let filterData = countryData;
if(countryData.length!=0)
{
  filterData= datagive(countryData,select,subregiondata,search,population,area)
}

   if(loadedData.length == 0)
   {
    return (
        <ApplyFilter.Provider value={{countryData ,select, setSearch ,setArea ,setSelect ,setPopulation,setSubregiondata}}>
        <div className={"container " + mode.bodyMode}>
        <Filter />
        <h1 className="no-country-found ">No Country Data is Available</h1>
       </div>
       </ApplyFilter.Provider>
    
    )
   }
    if(countryData.length == 0)
    {
        return (
            <ApplyFilter.Provider value={{countryData ,select, setSearch ,setArea ,setSelect ,setPopulation,setSubregiondata}}>
            <div  className={"container " + mode.bodyMode}>
            <Filter/>
            <Loader />
           </div>
           </ApplyFilter.Provider>
        
        )
    }


   else if(filterData.length == 0)
    {
        return (
            <ApplyFilter.Provider value={{countryData ,select, setSearch ,setArea ,setSelect ,setPopulation,setSubregiondata}}>
            <div className={"container " + mode.bodyMode}>
            <Filter />
            <h1 className="no-country-found ">No such country Exists In This Region</h1>
           </div>
           </ApplyFilter.Provider>
        
        )
    }


    return (
        
        <ApplyFilter.Provider value={{countryData ,select, setSearch ,setArea ,setSelect ,setPopulation,setSubregiondata}}>
        <div className={"container " + mode.bodyMode}>
             <Filter/>
            {
                filterData.map((country)=>{
            
                    return (<Link key={country.name.common} to={"/country/"+ country.cca3}><Cards  country={country} /></Link>)
                })
            }
                 </div>
        </ApplyFilter.Provider>
    )  
}

function datagive(country,select,subregiondata,search,population,area)
{
    let prop = country.filter((each)=>{
        if(select)
        {
            return each.region.toLowerCase() == select.toLowerCase(); 
        }
        else
        {
            return true;
        }
       
    }).filter((each)=>{

        if(subregiondata)
        {
            return each.subregion.toLowerCase() == subregiondata.toLowerCase(); 
        }
        else
        {
            return true;
        }

    }).filter((each)=>{
        if(search)
        {
            return each.name.common.toLowerCase().includes(search.toLowerCase())
        }
        else
        {
            return true;
        }
    })

   

    if(area)
    {
        if(area == "Des")
        {
          prop = prop.sort((a,b)=>b.area - a.area)
          console.log("ewg");
        }
         else{
        prop = prop.sort((a,b)=>a.area - b.area)
         }

    }
    if(population)
    {
        if(population == "Des")
        {
          prop = prop.sort((a,b)=>b.population - a.population)
        }
        else{
            prop = prop.sort((a,b)=>a.population - b.population)

        }

       
    }
    return prop;

}