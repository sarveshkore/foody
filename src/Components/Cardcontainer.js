// import { restaurantList } from "../const/config";
// import Restaurantcard from "./Restaurantcard";
// import Shimmer from "./Shimmer";
// import { useEffect, useState } from "react";
// const Cardcontainer=()=>{
//     // const [restaurantData,setRestaurantData]=useState(restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//     // console.log("restaurantList",restaurantList[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
//     const [restaurantData,setRestaurantData]=useState([]);
//     const [restaurantCollecttion,setrestaurantCollecttion]=useState([]);
//     const [searchText,setSearchText]=useState("");
//     const [loading,setLoading]=useState(true);
//     const [isFailed,setIsFailed]=useState(false);

//     console.log("API is called")
//     console.log(restaurantList);
    
    

//     const handleSearchText = (e) => {
//         console.log("search text",searchText)
//         setSearchText(e.target.value)
//     };
//     const filterData=()=>{
//         const filteredData= restaurantCollecttion.filter((restaurant)=>{
//             return restaurant?.info?.name.toLowerCase().includes(searchText);
//         })
//         setRestaurantData(filteredData)
//     }

//     useEffect(()=>{
//         const getRestaurants=async()=>{
//             // const data= await fetch("https://www.swiggy.com/mapi/homepage/getCards?lat=19.07480&lng=72.88560");
//             // const json= await data.json();
//             // setRestaurantData(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants)
//             // console.log(json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle?.restaurants);
//             // console.log("json data",json);  
            
//             // const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//             // const json= await data.json();
//             // setLoading(false);
//             // setRestaurantData(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//             // console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
//             // setrestaurantCollecttion(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            
//             try {
//                 const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
//                 const json = await data.json();
//                 const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
//                 setLoading(false);

//                 if (restaurants) {
//                   setRestaurantData(restaurants);
//                 } else {
//                   console.log("No restaurants found.");
//                 }
//               } catch (error) {
//                 setLoading(false)
//                 setIsFailed(true)
//                 console.error("Failed to fetch restaurants:", error);
//               }
        
//         };


//         getRestaurants();
//     },[]);

//     console.log("Component is rendered");

//     if(loading){
//         return(        <div className="container d-flex flex-wrap justify-content-around"><Shimmer/></div>);
//     }

//     if(isFailed){
//         return(<>
//             <h1>Something Went Wrong</h1>
//         </>)
//     }

//     return(
//         <>

//         <div className="container ">
//         <span><input type="text" className="p-2" placeholder="Enter name of restaurant" value={searchText} onChange={handleSearchText}/></span>
//         <span><button className=" mx-2 p-2" onClick={filterData} >Search</button></span>
//         </div>

//         <div className="container d-flex flex-wrap justify-content-around">
//             {
//                     restaurantData.map((restaurant)=>{
//                     return(
//                         <Restaurantcard
//                         key={restaurant?.info?.id}
//                         {...restaurant?.info}/>
//                     );
//                 })
//             }
//         </div> 
//         </>    

      
//     );
// }
// export default Cardcontainer;



import { useEffect, useState } from "react";
import Restaurantcard from "./Restaurantcard";
import Shimmer from "./Shimmer";

const Cardcontainer = () => {
    const [restaurantData, setRestaurantData] = useState([]);
    const [restaurantCollecttion, setRestaurantCollecttion] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [loading, setLoading] = useState(true);
    const [isFailed, setIsFailed] = useState(false);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    const handleSearchText = (e) => {
        setSearchText(e.target.value);
    };

    const filterData = () => {
        const filteredData = restaurantCollecttion.filter((restaurant) => {
            return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setRestaurantData(filteredData);
    };

    const handleDelivery=()=>{
        const filteredData = restaurantCollecttion.filter((restaurant) => {
            return restaurant?.info?.sla?.deliveryTime<30;
        });
        setRestaurantData(filteredData);
    }
    const handleVeg=()=>{
        const filteredData = restaurantCollecttion.filter((restaurant) => {
            return restaurant?.info?.veg===true;
       });
        setRestaurantData(filteredData);
    }
    const handleRating=()=>{
        const filteredData = restaurantCollecttion.filter((restaurant) => {
            return restaurant?.info?.avgRating>=4.0;
       });
       setRestaurantData(filteredData);
    }
    const showAll=()=>{
         setRestaurantData(restaurantCollecttion);
    }

    // const toggleDropdown = () => {
    //    return setIsDropdownVisible(!isDropdownVisible);
    //   };

    useEffect(() => {
        const getRestaurants = async () => {
            try {
                const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING", { cache: "no-store" });
                const json = await data.json();
                const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                setLoading(false);

                if (restaurants) {
                    setRestaurantData(restaurants);
                    setRestaurantCollecttion(restaurants);  // Ensure the full list is stored for filtering
                } else {
                    console.log("No restaurants found.");
                    setIsFailed(true);
                }
            } catch (error) {
                setLoading(false);
                setIsFailed(true);
                console.error("Failed to fetch restaurants:", error);
            }
        };

        getRestaurants();

        // Handle offline status
        window.addEventListener('offline', () => setIsFailed(true));

        return () => {
            window.removeEventListener('offline', () => setIsFailed(true));
        };
    }, []);

    console.log("Component is rendered");

    if (isFailed) {
        return (
            <h1>Something Went Wrong</h1>
        );
    }

    if (loading) {
        return (
            <div className="container d-flex flex-wrap justify-content-around">
                <Shimmer />
            </div>
        );
    }

    return (
        <div>
            <div className="d-flex justify-between container">
                <div className="container">
                    <span><input type="text" className="p-2" placeholder="Enter name of restaurant" value={searchText} onChange={handleSearchText} /></span>
                    <span><button className="mx-2 p-2" onClick={filterData}>Search</button></span>
                </div>
                <div className="d-flex ">
                    {/* <div class="dropdown ">
                        <button type="button" class="btn btn-primary dropdown-toggle " onClick={toggleDropdown}>Fast Delivery</button>
                        {isDropdownVisible && (
                            <ul className="dropdown-menu show">
                            <li><button className="dropdown-item" onClick={handleDelivery}>20 - 30 min</button></li>
                            <li><button className="dropdown-item" onClick={handleDelivery}>30 - 40 min</button></li>
                            <li><button className="dropdown-item" onClick={handleDelivery}>40 - 50 min</button></li>
                            </ul>
                        )}
                    </div> */}
                    <button className="m-1 pt-2 pb-2 filters" onClick={handleDelivery}>Fast delivery</button>
                    <button className="m-1 pt-2 pb-2 filters" onClick={handleVeg}>Pure Veg</button>
                    <button className="m-1 pt-2 pb-2 filters" onClick={handleRating}>Top Rated </button>
                    <button className="m-1 pt-2 pb-2 filters" onClick={showAll}>Show ALL</button>
                    {/* <button className="m-1" onClick={handleCost}>Rs. 200 - Rs. 300</button> */}

                </div>
            </div>
            <div className="container d-flex flex-wrap justify-content-around">
            {/* <div className="container d-flex flex-wrap justify-content-space-between"> */}

                {
                   restaurantData.length>0 ? restaurantData.map((restaurant) => {
                        return (
                            <Restaurantcard
                                key={restaurant?.info?.id}
                                {...restaurant?.info} />
                        );
                    })
               :
                    <h1>No restaurants match your search</h1>
                
               }
            </div>
        </div>
    );
}

export default Cardcontainer;
