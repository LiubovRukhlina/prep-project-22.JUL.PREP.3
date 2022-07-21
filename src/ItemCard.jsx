import React from "react";
import "./itemCard.css";

function ItemCard(props) {
  const [checked, setChecked] = React.useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="card">
      <img src={props.image} alt="" class="icon" />
      <h3 className="desc">
        Don't forget to bring your <br /> {props.name}!{" "}
      </h3>
      <input type="checkbox" checked={checked} onChange={handleChange} />
    </div>
  );
}

export default ItemCard;
