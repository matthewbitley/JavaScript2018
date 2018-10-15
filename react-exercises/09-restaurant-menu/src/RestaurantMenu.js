/**
 * Build a restaurant using at least two React components.
 * Import the CSS file "./RestaurantMenu.css".
 * Import and loop through the data from "./RestaurantMenuItems.json"
 * Export the function "RestaurantMenu" as the default
 * You cannot have any errors or warmings in the console when you render the app
 * 
 * Here is the static HTML that you will convert to React components:
<main class="RestaurantMenu">
  <h1>Grandezza Del Cibo</h1>
  <!-- This part is repeated for each menu category (e.g. antipasto, salads and pasta) -->
  <div> <!-- this extra <div> tag may or may not be needed, depending on how you arrange your React components -->
    <h2>Antipasto</h2>
    <!-- This part is repeated for every item on the menu (e.g. antipasto, salads and pasta) -->
    <div class="MenuItem">
      <div class="MenuItem-row">
        <h3>Bruschetta</h3>
        <div>$8.00</div>
      </div>
      <p>Toasted baguette with marinated sweet peppers, fresh roma tomatoes, basil, olive oil, and a balamic glaze</p>
    </div>
  </div>
</main>
 */

// import the things you need here
import React from "react";
import "./RestaurantMenu.css";
import items from "./RestaurantMenuItems.json";

// create any additional React components here

function RestaurantMenuItem(props) {
  return (
    <div key={props.i}>
      <h2>{props.cat}</h2>
      <div className="MenuItem">
        <div className="MenuItem-Row">
          <h3>{props.name}</h3>
          <div>${props.price}</div>
        </div>
        <p>{props.desc}</p>
      </div>
    </div>
  )
}



function RestaurantMenu() {
  return(
    <main className="Restaurant">
    <h1>Grandezza Del Cibo</h1>
    {
      Object.values(items).map((item, i) => {
      return (
      <RestaurantMenuItem
      cat={item.cat}
      name={item.name}
      desc={item.description}
      price={item.price}
      />
      )
    }
    )}
    </main>
  )
}

// export the function "RestaurantMenu" here as the default
export default RestaurantMenu;
