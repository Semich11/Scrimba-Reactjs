import React from 'react'
import Markdown from 'react-markdown'

export default function ClaudeRecipe({AIRecipe}) {
  const markdown = AIRecipe
  /**
 * Challenge: See if you can figure out how to use the
 * react-markdown package to render `props.recipe` as React
 * elements rather than the plain markdown text.
 * 
 * Use the link in the slide to navigate directly to the
 * package's instructions on how to use it.
 */
  return (
    <Markdown>
        {markdown}
    </Markdown>
  )
}


