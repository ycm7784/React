const Taccidentc1 =({c1,selC1,setselC1})=>{
        //대분류가 클릭되었을때
        const handleSelect = (item) =>{
                setselC1(item)
        }

        c1 = c1.map((i)=>
         <div className={i === selC1 ? "cardsel":"card"} key={i} onClick={()=>handleSelect(i)}>{i}</div>
        );
       
    return(
        <>
        <div className="tc1">
            <div className="tch"><h3>대분류</h3></div>
            
            <div className="tc1_1">
                {c1}
             </div>
        </div>
        
        </>
    );
}
export default Taccidentc1