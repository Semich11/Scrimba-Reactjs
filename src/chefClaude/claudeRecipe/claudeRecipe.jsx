import React from "react";
import Markdown from "react-markdown";

export default function ClaudeRecipe({ AIRecipe }) {
  const markdown = AIRecipe;

  return (
    <section className="suggested-recipe-container" aria-live="polite">
      <h2>Chef Claude Recommends:</h2>
      <Markdown>{markdown}</Markdown>
    </section>
  );
}
