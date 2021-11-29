import React from "react";
import { useEffect, useState } from "react/cjs/react.development";
import MealDb from "../MealDb/MealDb";

const Restaurant = () => {
  const [searchText, setSearchText] = useState([]);
  const [meals, setMeals] = useState([]);
  useEffect(() => {
    // const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
      .then((res) => res.json())
      .then((data) => setMeals(data));
  }, [searchText]);
  const handleSearchField = (e) => {
    const searchTextValue = e.target.value;
    setSearchText(searchTextValue);
  };
  return (
    <div>
      <input
        onChange={handleSearchField}
        type="text"
        placeholder="Search your Meal"
      />
      {meals?.map((meal) => (
        <MealDb key={meal.id} meal={meal}></MealDb>
      ))}
    </div>
  );
};

export default Restaurant;
