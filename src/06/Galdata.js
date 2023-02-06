const Galdata=({txt})=>{
   //  let keys=["galTitle","galPhotographyLocation","galPhotographer","galPhotographyMonth","galSearchKeyword"]
    //   let dtag = keys.map((item)=>
    //      <span className="txt" >{txt[item]}</span>
    //    );
    // console.log("gdata",txt);
    // console.log("dtag",dtag);
    let img=[];
    img.push(
        <img src={txt.galWebImageUrl}></img>

    )
    let dtag =[];
    dtag.push(
        <span className="k1" key={1}>{txt["galTitle"]}</span>
    );
    dtag.push(
        <span className="k2"key={2}>{txt["galPhotographyLocation"]}</span>
    );
    dtag.push(
        <span className="k2"key={3}>{txt["galPhotographer"]}</span>
    );
    dtag.push(
        <span className="k2"key={5}>{txt["galPhotographyMonth"]}</span>
    );
    dtag.push(
        <span className="k3"key={6}>{txt["galSearchKeyword"]}</span>
    );
    
    console.log("txt",txt.galWebImageUrl)
    //console.log("datatitle",txt.galTitle);
    return(
        <div className="galdata">
            <div className="image">
                 {img} 
            </div>
            <div className="data">
                {dtag}
            </div>
        </div>
    );
}
export default Galdata;