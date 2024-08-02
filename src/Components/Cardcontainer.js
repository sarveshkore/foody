import Restaurantcard from "./Restaurantcard";
import { restaurantList } from "../const/config";
import { IMG_URL } from "../const/config";
const Cardcontainer=()=>{
    console.log("restaurantList",restaurantList);
    console.log("restaurantList",restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const restaurants=restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    console.log(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    return(
        <>
        <div className="container d-flex flex-wrap">
            {
                restaurants.map((restaurant)=>{
                    return(
                        <Restaurantcard
             imgUrl={IMG_URL+restaurant?.info?.cloudinaryImageId}
             title={restaurant?.info?.name}
             starRating={restaurant?.info?.avgRating}
             deliveryTime={restaurant?.info?.sla?.deliveryTime}
             cuisines={restaurant?.info?.cuisines.join(", ")}
             location={restaurant?.info?.areaName}
            />
                    );
                })
            }



            {/* <Restaurantcard
             imgUrl={IMG_URL+restaurants[0]?.info?.cloudinaryImageId}
             title={restaurants[0]?.info?.name}
             starRating={restaurants[0]?.info?.avgRating}
             deliveryTime={restaurants[0]?.info?.sla?.deliveryTime}
             cuisines={restaurants[0]?.info?.cuisines.join(", ")}
             location={restaurants[0]?.info?.areaName}
                        /> */}
        </div>    
        </>
    );
}
export default Cardcontainer;