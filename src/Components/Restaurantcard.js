// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Restaurantcard=({imgUrl, title, starRating, deliveryTime, cuisines, location})=>{
    // imgUrl, title, starRating, deliveryTime, cuisines, location
    return(
        <>
        <div className="custom-card ">
            <div className="m-2">
                <img src={imgUrl}/>
                {/* <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"/> */}
            </div>
            <h4>{title}</h4>
            {/* <h4>Restaurant name</h4> */}
            <div className="d-flex justify-content-between">
                <div>{starRating}</div>
                {/* <div> ⭐ 4.5</div> */}
                <div>{deliveryTime} min</div>
                {/* <div>40-45 min</div> */}
            </div>
            <div>{cuisines}</div>
            {/* <div>Cuisines</div> */}
            <div>{location}</div>
            {/* <div>location</div> */}
        </div> 

        </>
    )
}
export default Restaurantcard;