const Restaurantcard=({imgUrl, title, starRating, deliveryTime, cuisines, location})=>{
    return(
        <>
        <div className="custom-card ">
            <div className="m-2">
                <img src={imgUrl}/>
            </div>
            <h4>{title}</h4>
            <div className="d-flex justify-content-between">
                <div>{starRating}</div>
                <div>{deliveryTime} min</div>
            </div>
            <div>{cuisines}</div>
            <div>{location}</div>
        </div> 
        </>
    )
}
export default Restaurantcard;