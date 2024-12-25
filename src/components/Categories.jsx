import React from "react";

const Categories = ({value, onClickCategory}) => {

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
                onClick={() => onClickCategory(index)}
                key={index}
                className={value === index ? "active" : ""}
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
