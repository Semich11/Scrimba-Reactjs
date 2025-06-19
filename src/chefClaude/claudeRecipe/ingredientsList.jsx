import React from "react";
import Ingredients from "./ingredients";

export default function IngredientsList (props) {
      const ingredientsListItems = props.ingredients.map(ingredient => (
        <li key={ingredient}>{ingredient}</li>
    ))
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && <Ingredients toggleRecipeShown={props.toggleRecipeShown} />}
    </section>
  );
};

