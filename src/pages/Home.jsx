import React, { useEffect } from "react";

import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Skeleton from "../components/Skeleton";

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoadind] = React.useState(true);
  const fetchData = async () => {
    const responce = await fetch(
      "https://67652c3552b2a7619f5ea196.mockapi.io/items"
    );
    const data = await responce.json();
    setItems(data);
    setIsLoadind(false);
    window.scrollTo(0,0)
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="container">
        <div className="content__top">
          <Categories />
          <Sort />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {isLoading
            ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
            : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
        </div>
      </div>
    </>
  );
};

export default Home;
