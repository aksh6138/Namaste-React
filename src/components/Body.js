import { resList } from "../utils/mockData"
import React, { useEffect }  from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";



const Body = () => {
const [ListOfRestaurants,setListOfRestaurants] = useState([]);
useEffect(() => {fetchData()},[]);

const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9144702&lng=77.6661397&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setListOfRestaurants(json.data.cards[2].data.data.cards)
    console.log(json);
}
//Conditional Rendering
if(ListOfRestaurants.length === 0)
{
    return <Shimmer/>
}

return (
    <div>
        <div>
            <button className="filter-btn" onClick={() => {
              const filteredList = ListOfRestaurants.filter( res => res.data.avgRating > 4);
              console.log(filteredList);
              setListOfRestaurants(filteredList);
            }
            }>
            Button clicked
            </button>
        </div>
        <div className="SearchBar">
          <h2> search Bar</h2>
    </div>  

        <div className="res-container">
        {ListOfRestaurants.map( restaurant => <RestaurantCard key = {restaurant.data.id} resData = {restaurant}/>)}
       
    </div>   
     </div>
)
}

const RestaurantCard = (props) => {
const{ resData} = props;
return (
    <div className="rescard-Container">
        <img className="res-logo" src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + resData.data.cloudinaryImageId } alt ="res-logo"/>
        <h2>{resData.data.name}</h2>
        <h4>{resData.data.avgRating}</h4>
        <h4>{resData.data.cuisines.join(",")}</h4>
    </div>
)
}

export default Body;