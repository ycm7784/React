import Galtitle from "./Galtitle";
import Galdata from "./Galdata";
import { useState ,useEffect} from "react";
import "./Gal.css";




const Galm=({dat,title})=>{
    let [til , settil] =useState();
    let [txt , settxt] =useState();
    // console.log("dat",dat);
    //  console.log("dat galtiltle",dat[0]['galTitle']);
    //  console.log("til",til);
     
     useEffect(()=>{
        console.log("useeffect dat",dat)   
        settxt(dat.filter((i)=>
            i['galTitle'] === til
            )[0])
        // setimg(txt.filter((i)=> i['galWebImageUrl']))
     },[til]);
     //변수를 놓아야함
     console.log("txt",txt)
   
   
     useEffect(()=>{console.log("txt",txt);},[txt]);
    return(
        //txt && txt없을경우 오류남 
        <div className="main">
        <Galtitle title={title} settil ={settil}/>

        {txt && <Galdata  txt ={txt}/>}
        </div>
    );
}
export default Galm;