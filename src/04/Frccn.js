const Frccn = ({cn,setCn}) =>{
    console.log("cn",cn);
    let infoArry = [...cn];
    infoArry = cn.split(',');
    infoArry = infoArry.map((v)=>
        
        <li key = {`${v}`}>
            <span>{v.split(":")[0]}</span>(
            {
            v.includes('높음')?
            <span className="lired">{v.split(":")[1]}</span>:
            <span>{v.split(":")[1]}</span>
            }
            )
        </li>
  
        
     );
    return(
        <div className="mainbox2">
    
                    <div className="deteil">
                        
                        <ul> {infoArry} </ul>
                       
                    </div>         
            </div>
    );
}
export default Frccn;