import React from "react";
import Markdown from "react-markdown";

export default function ClaudeRecipe({ AIRecipe }) {
  const markdown = AIRecipe;

  return (
    <section className="suggested-recipe-container">
      <Markdown>{markdown}</Markdown>
    </section>
  );
}
