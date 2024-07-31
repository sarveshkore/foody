// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

const Restaurantcard=()=>{
    return(
        <>
        <div className="custom-card ">
            <div className="m-2">
                <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e0839ff574213e6f35b3899ebf1fc597"/>
            </div>
            <h4>Restaurant name</h4>
            <div className="d-flex justify-content-between">
                <div> ⭐ 4.5</div>
                <div>40-45 min</div>
            </div>
            <div>Cuisines</div>
            <div>location</div>
        </div> 



        </>
    )
}
export default Restaurantcard;