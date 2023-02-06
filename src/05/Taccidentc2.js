const Taccidentc2 =({selC2A,setC2,setselC2})=>{
    //    const= fi= selC2A.filter()
    const handleSelect = (item) =>{
        setselC2(item[1])
        }

        const c2tag =selC2A.map((i)=>
        <div className={i[1] === setC2 ? "cardsel":"card"} 
        key={[...i]} 
        onClick={()=>handleSelect(i)}>
            {i[1]}</div>
        );
        console.log("c2",c2tag)
    return(
        <>
        <div className="tc2">
        <div className="tch"><h3>중분류</h3></div>
            <div className="tc1_2">
                {c2tag}
             </div>
        </div>
        </>
    );
}
export default Taccidentc2