import { restaurantList } from "../const/config";
import Restaurantcard from "./Restaurantcard";

import { useEffect, useState } from "react";
const Cardcontainer=()=>{
    // const [restaurantData,setRestaurantData]=useState(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    // console.log("restaurantList",restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    const [restaurantData,setRestaurantData]=useState([]);
    const [restaurantCollecttion,setrestaurantCollecttion]=useState([]);
    const [searchText,setSearchText]=useState("");

    console.log("API is called")
    console.log(restaurantList);
    


    const handleSearchText = (e) => {
        console.log("search text",searchText)
        setSearchText(e.target.value)
    };
    const filterData=()=>{
        const filteredData= restaurantCollecttion.filter((restaurant)=>{
            return restaurant?.info?.name.toLowerCase().includes(searchText)
            
        })
        setRestaurantData(filteredData)
    }

    useEffect(()=>{
        const getRestaurants=async()=>{
            // const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.07480&lng=72.88560");
            // const json= await data.json();
            // setRestaurantData(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
            // console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
            // console.log("json data",json);  
            
            const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json= await data.json();
            setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setrestaurantCollecttion(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        }
        getRestaurants();
    },[]);

    console.log("Component is rendered");

    return(
        <>

        <div className="container ">
        <span><input type="text" className="p-2" placeholder="Enter name of restaurant" value={searchText} onChange={handleSearchText}/></span>
        <span><button className=" mx-2 p-2" onClick={filterData} >Search</button></span>
        </div>

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