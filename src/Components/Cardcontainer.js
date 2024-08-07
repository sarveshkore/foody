import Restaurantcard from "./Restaurantcard";
// import { restaurantList } from "../const/config";
import { IMG_URL } from "../const/config";
import { useEffect, useState } from "react";
const Cardcontainer=()=>{
    // const [restaurantData,setRestaurantData]=useState(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log("restaurantList",restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const [restaurantData,setRestaurantData]=useState([]);
    // const[count,setCount]=useState(0);
    // console.log("count",count)
    // console.log("component is rendered")
    console.log("API is called")

    const getRestaurants=async()=>{
        // const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.07480&lng=72.88560");
        const json=await data.json();
        console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantData(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
    }

    useEffect(()=>{
        getRestaurants();
    },[])

    console.log("Component is rendered");
    

    // const filterRestaurants=()=>{
    //     const restaurants=restaurantData.filter((restaurant)=>{
    //         return(restaurant?.info?.avgRating>=4.5)
    //     })
    //     setRestaurantData(restaurants)
    //     console.log(restaurants);
    //     console.log(setRestaurantData)
    // }

    return(
        <>
        {/* <div className="container ">
            <button className="" onClick={filterRestaurants}>Top rated restaurants</button>
        </div> */}
        {/* <div className="container ">
            <h1>Count={count}</h1>
            <button onClick={()=>{
                if(count<5){
                setCount(count+1)
                // console.log(count)
                }}}>Increase</button>
            <button onClick={()=>{
                if(count>0){
                setCount(count-1);
                // console.log(count)
                }}}>Decrease</button>

        </div> */}
        
        
        <div className="container d-flex flex-wrap justify-content-around">
            {
                    restaurantData.map((restaurant)=>{
                    return(
                        <Restaurantcard
                        key={restaurant?.info?.id}
                        {...restaurant?.info}/>
                    );
                })
            }
        </div> 
        </>    

      
    );
}
export default Cardcontainer;