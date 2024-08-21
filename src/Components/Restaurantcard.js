
// import './App.css';
// const Restaurantcard=({imgUrl, title, starRating, deliveryTime, cuisines, location})=>{
    import { IMG_URL } from "../const/config";

    const Restaurantcard=({cloudinaryImageId, name, avgRating, sla, cuisines, areaName})=>{

    return(
        <>
        <div className="custom-card ">
            <div className="m-3">
                <img src={IMG_URL+cloudinaryImageId}/>
            </div>
            <h4 className="restaurantName">{name}</h4>
            <div className="d-flex justify-content-between">
                <div>{avgRating}</div>
                <div>{sla?.deliveryTime} min</div>
            </div>
            <div className="cuisine">{cuisines.join(", ")}</div>
            <div>{areaName}</div>
        </div> 
        </>
    )
}
export default Restaurantcard;