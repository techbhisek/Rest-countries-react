import './App.css'
import Header from './Header'
import { useState } from 'react'
import Container from './Container'
import { createContext } from "react"
import  { Routes,Route,HashRouter as Router} from 'react-router-dom'
import Details from './Details'
import { Link } from 'react-router-dom'
export const Darkmodecontext  = createContext([]);
let modeData = localStorage.getItem('modeData') || 1;

function App() {


 
  const [mode,setMode] = useState(modeData ?{bodyMode:'lightbody',elementMode:'lightElement'}: {bodyMode:'darkbody',elementMode:'darkElement'})
  
  
  const [countryData,setCountryData] = useState([]);
  const [errorData,setError] = useState("");
  const [search,setSearch] = useState("");
  const [select,setSelect] = useState("");
  const [population,setPopulation] = useState("");
  const [area,setArea] = useState("");
  const [subregiondata,setSubregiondata] = useState("");
  
  return (
    <Router>
    <Darkmodecontext.Provider value={{mode,setMode,countryData,errorData,search,select,population,area,subregiondata,setCountryData,setError,setSearch,setSelect,setPopulation,setArea,setSubregiondata}}>
    <Header/>
    <Routes>
      <Route path='/' element={
    <Container/>
      } />
  <Route path='/country/:country' element={
    <Details/>
 } />
 <Route path='*' element={
    <h1 className={"no-country-found  " + mode.bodyMode} style={{display:"flex",flexDirection:"column" ,alignItems:'center' , rowGap:'50px'}}> 404 PAGE NOT FOUND <br /> <Link to="/" ><button  onClick={()=>{
      setError('');
   }} className={"back" + mode.elementMode} style={{margin:'0px auto'}}>HOME</button></Link></h1>
 } />
    </Routes>  
    </Darkmodecontext.Provider>
  </Router>
  )
}

export default App
