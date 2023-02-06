const Galtitle=({title,settil})=>{
        const hclick = (i)=>{
            settil(i);
           console.log("Galtitle", i)
        }
    const titletag = title.map((item)=> 
        <div className="ttag" key={item} onClick={()=>hclick(item)}>{item}</div>)

    
        return(
        <div className="title">
            {titletag}
        </div>
    );
}
export default Galtitle;