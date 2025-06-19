import React from "react";
import Ingredients from "./ingredients";

export default function Recipe (props) {
  return (
    <section>
      <h2>Ingredients on hand:</h2>
      <ul className="ingredients-list" aria-live="polite">
        {props.ingredientsListItems}
      </ul>
      {props.ingredients.length > 3 && <Ingredients toggleRecipeShown={props.toggleRecipeShown} />}
    </section>
  );
};

