import React from "react";

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const catigoriesNames = [
    "Все",
    "Мясные",
    "Вегетарианская",
    "Гриль",
    "Острые",
    "Закрытые",
  ];
 
  return (
    <div>
      <div class="categories">
        <ul>
          {catigoriesNames.map((names, index) => {
            return (
              <li
                onClick={() => setActiveIndex(index)}
                key={index}
                className={activeIndex === index ? "active" : ""}
              >
                {names}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categories;
