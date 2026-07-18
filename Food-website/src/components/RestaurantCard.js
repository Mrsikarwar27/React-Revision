const RestaurantCard = ({ resobj }) => {
  console.log(resobj);
  return (
    <div className="res-card">
      <div className="res-logo">
        <img className="res-img" src={resobj.image}></img>
      </div>
      <div className="res-text">
        <h3>{resobj.name}</h3>
        <h3>{resobj.cuisine}</h3>
        <h3>{resobj.time}</h3>
        <h3> {resobj.price}</h3>
        <h3> {resobj.distance}</h3>
        <h3>{resobj.rating}</h3>
      </div>
    </div>
  );
};

export default RestaurantCard;
