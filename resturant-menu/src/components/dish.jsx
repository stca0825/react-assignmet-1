import { menu } from "./menu.jsx";
import "./dish.css";
export function Dish({ dishId }) {
  const dish = menu.find((item) => item.id === dishId);
  if (!dish) {
    return <div>Dish not found</div>;
  }
  return (
    <div className="dish-card">
      <h2>{dish.title}</h2>
      <p>
        <strong>Price:</strong> {dish.price}
      </p>
      <p>
        <strong>Ingredients:</strong> {dish.ingredients}
      </p>
      <p>
        <strong>Category:</strong> {dish.category}
      </p>
    </div>
  );
}
