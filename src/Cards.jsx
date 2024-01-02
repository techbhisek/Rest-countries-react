/* eslint-disable react/prop-types */

import { useContext } from "react";
import { Darkmodecontext } from "./App";

export function Cards(props)
{ 
   let {mode} = useContext(Darkmodecontext)
    let {flags , name , population ,region ,capital } = props.country;
    return (
        <div className={"country-card "  + mode.elementMode}>
        <img className="country-card-img" src={flags.png} />
        <h3 className=" country-card-name">{name.common}</h3>
        <section>
        <h4>Population:</h4>
          <span>{population} </span>
        </section>
        <section>
          <h4>Region:</h4>
          <span>{region} </span>
        </section>
        <section>
          <h4>capital:</h4>
          <span>{capital} </span>
        </section>
      </div>
    )
}

