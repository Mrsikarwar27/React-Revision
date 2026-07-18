import RestaurantCard from "./RestaurantCard";
import { resList } from "./utils/apidata";
import {  useState } from "react";

const BodyComponent = () => {
  const [resdata, setresdata] = useState(resList);
const [filterresdata, setfilterresdata] = useState(resList)
  const [searchText, setsearchText] = useState("");
  
//# useEffect=>
/*
- if no dependancy array - useEffect called every render 
- if dependancy array  is empty - [] useEffect called at once  time or initial time 
-  if dependancy array is [resdata] - so it will changes for everytime after the resdata updated.






*/
  // useEffect(() => {
  //   fetchdata();
  // }, []);

  // const fetchdata = async () => {
  //   const data = await fetch("https://dummyjson.com/recipes?sortBy=name&order=asc");

  //   const json = await data.json();

  //   console.log(json);
  //   //optional chaining
  //   setresdata(data);
  // };

  // conditional rendering, means  your dont come yet perhaps it shows firstly then the api responses receive isn't it

  if (resdata === 0) {
    return <h1>loading.....</h1>;
  }

  return (
    <div className="body">
      <div className="search-btn">
        <div className="searchText">
          <input
            type="text"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
          
     
            }}
          ></input>
          <button onClick={()=>{
            const searchfiltered = resdata.filter((e)=>{
              return e.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase());
            })
            setfilterresdata(searchfiltered)

          }}>search </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filterdata = resdata.filter((res) => res.rating > 4);
            setresdata(filterdata);
          }}
        >
          filter data
        </button>
      </div>

      <div className="res-containder">
        {filterresdata.map((res) => (
          <RestaurantCard key={res.id} resobj={res} />
        ))}
      </div>
    </div>
  );
};

export default BodyComponent;
