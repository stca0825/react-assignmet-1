import { Dish } from "./components/dish.jsx";
import { menu } from "./components/menu.jsx";
function App() {
  const categories = {};
  menu.forEach((dish) => {
    if (!categories[dish.category]) {
      categories[dish.category] = [];
    }
    categories[dish.category].push(dish);
  });

  return (
    <div>
      <h1>Restaurant Menu</h1>
      <div>
        {Object.keys(categories).map((category) => (
          <div key={category} className="category-section">
            <h2>{category}</h2>
            <div className="dish-grid">
              {categories[category].map((dish) => (
                <Dish key={dish.id} dishId={dish.id} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default App;
