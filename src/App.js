import "./scss/app.scss";
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaBlock from "./components/PizzaBlock";
import pizzas from "./assets/pizzas.json";

function App() {
  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <div className="content__top">
              <Categories />
              <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
              {pizzas.map((obj) => {
                return (
                  <PizzaBlock
                    {...obj}
                  
                  />
                );
              })}
              {/* <PizzaBlock title='Мексиканская' price='550' />
              <PizzaBlock title='Пепперони'  price={700}/>
              */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
