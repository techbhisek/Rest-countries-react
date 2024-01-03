export default function Loader()
{
    let arr = []
    for(let i=0;i<20;i++)
    {
      arr.push(<Loadercard />)    
    }
    return arr;
}

function Loadercard()
{
    let style = {background:'hsl(255, 3%, 80%)',color:'hsl(255, 3%, 80%)',width:'100%'}
    let style1 = {background:'hsl(255, 3%, 80%)',color:'hsl(255, 3%, 80%)',width:'70%',margin:'15px 5px'}
    return (
        <div className="country-card" style={{color:'hsl(255, 3%, 56%)'}}>
        <img className="country-card-img" style = {style} />
        <h3 className=" country-card-name" style = {style1}>sfdrgth</h3>
        <section  style = {style1}>
        <h4>population:</h4>
          <span > </span>
        </section>
        <section style = {style1}>
          <h4>region</h4>
          <span> </span>
        </section>
        <section style = {style1}>
          <h4>capital</h4>
          <span></span>
        </section>
      </div>
      )
}