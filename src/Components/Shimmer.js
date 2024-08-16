const Shimmer =()=>{
    return new Array(20).fill(0).map(()=>(
    <>
        
        <div className="custom-card">
            <div className="m-2">
                <div className="shimmerImg"></div>
            </div>
            <h4 className="shimmerLine"></h4>
            <div className="d-flex justify-content-between">
                <div className=" shimmerLine"></div>
                <div className=" shimmerLine"></div>
            </div>
            <div className="shimmerLine mb-1"></div>
            <div className=" shimmerLine"></div>
        </div>     
    </>
    )
    )
    
}
export default Shimmer;
