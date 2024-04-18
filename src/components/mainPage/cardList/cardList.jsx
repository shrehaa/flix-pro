/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Card from "../card/card";
import "./cardList.css";

const CardList = ({ movies, title }) => {
  return (
    <div className="cardList-container">
      <p style={{ color: "white" , fontSize:"30px", paddingLeft:"20px", paddingTop:"10px"}}>{title}</p>
      <div style={{ display: "flex", overflowX:"auto"}}>
        {movies &&
          movies.map((item, idx) => {           
            return <Card item={item} key={item.id} />;
          })}
      </div>
    </div>
  );
};

export default CardList;
