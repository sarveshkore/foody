import Restaurantcard from "./Restaurantcard";
const Cardcontainer=()=>{
    const restaurantData=[
        {
            imgUrl:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597",
            title:"Chinese Wok",
            starRating:"4.5",
            deliveryTime:"30-35",
            cuisines:"Chinese, Tibetian",
            location:"Borival",
            },
        {
            imgUrl:"https://tse2.mm.bing.net/th?id=OIP.0l9UIWl8L9HE_N1f8OZQxQHaE8&pid=Api&P=0&h=180",
            title:"Japanese Wok",
            starRating:"4.8",
            deliveryTime:"20-35",
            cuisines:"Chinese, Tibetian",
            location:"Ghatkopar",
        },
        {
            imgUrl:"https://tse4.mm.bing.net/th?id=OIP.pUHyxDw89hfkIv3jD6GxgwHaDv&pid=Api&P=0&h=180",
            title:"Indian Touch",
            starRating:"4.5",
            deliveryTime:"30-35",
            cuisines:"Chinese, Tibetian",
            location:"Vikhroli",
        },
        {
            imgUrl:"https://tse4.mm.bing.net/th?id=OIP.ZM9tzdHo34fFzvN0wg9GxwHaE8&pid=Api&P=0&h=180",
            title:"Shivraj",
            starRating:"4.5",
            deliveryTime:"30-35",
            cuisines:"Chinese, Tibetian",
            location:"Kurla",
        },
        {
            imgUrl:"https://tse2.mm.bing.net/th?id=OIP.e9lO4u8p0ADHffuzX4XDQQHaFj&pid=Api&P=0&h=180",
            title:"kabab center",
            starRating:"4.5",
            deliveryTime:"30-35",
            cuisines:"Chinese, Tibetian",
            location:"Mankhurd",
        },
        {
            imgUrl:"https://tse3.mm.bing.net/th?id=OIP.9MogSOYsilcs3FeLbSmUsQHaE8&pid=Api&P=0&h=180",
            title:"Chinese Wok",
            starRating:"4.5",
            deliveryTime:"30-35",
            cuisines:"Chinese, Tibetian",
            location:"Borivali",
        },
        {
            imgUrl:"https://tse2.mm.bing.net/th?id=OIP.RyuV9bcGLrFnpO88ZSAR1wHaFj&pid=Api&P=0&h=180",
            title:"Chinese Wok",
            starRating:"4.5",
            deliveryTime:"30-35",
            cuisines:"Chinese, Tibetian",
            location:"Borivali",
        },
        {
            imgUrl:"https://tse1.mm.bing.net/th?id=OIP.PFt80Ox4yplK3L_NuLwCKwAAAA&pid=Api&P=0&h=180",
            title:"Chinese Wok",
            starRating:"4.5",
            deliveryTime:"30-35",
            cuisines:"Chinese, Tibetian",
            location:"Borivali",
        },
        {
            imgUrl:"https://tse3.mm.bing.net/th?id=OIP.3B5d-t2GEThT20q7kSLcrgHaEK&pid=Api&P=0&h=180",
            title:"Chinese Wok",
            starRating:"4.5",
            deliveryTime:"30-35",
            cuisines:"Chinese, Tibetian",
            location:"Borivali",
        },
        {
            imgUrl:"https://tse3.mm.bing.net/th?id=OIP.ON-i9I0UTf3Xqamipfz3CgHaE8&pid=Api&P=0&h=180",
            title:"Chinese Wok",
            starRating:"4.5",
            deliveryTime:"30-35",
            cuisines:"Chinese, Tibetian",
            location:"Borivali",
        },
        {
            imgUrl:"https://tse2.mm.bing.net/th?id=OIP.ybNU8-mQeqBsKoaBuKkWEAHaE8&pid=Api&P=0&h=180",
            title:"Chinese Wok",
            starRating:"4.5",
            deliveryTime:"30-35",
            cuisines:"Chinese, Tibetian",
            location:"Kurla",
        }

    ]
    return(
        <>
        <div className="container d-flex flex-wrap">
            {
                restaurantData.map((restaurant)=>{
                    return(
                        <Restaurantcard
                        // imgUrl={restaurant?.imgUrl}
                        // title={restaurant?.title}
                        // starRating={restaurant?.starRating}
                        // deliveryTime={restaurant?.deliveryTime}
                        // cuisines={restaurant?.cuisines}
                        // location={restaurant?.location}
                        {...restaurant}
                    />
                    );
                })
            }
            
           
        </div>    
        </>
    );
}
export default Cardcontainer;