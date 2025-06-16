import Joke from "./joke"
import jokesData from "./jokesData"
import Messages from "./messages"

export function App() {
    const jokeElements = jokesData.map(joke => {
        return (
            <>
                <Joke 
                    key={joke.id}
                    setup={joke.setup} 
                    punchline={joke.punchline} 
                />

                
            </>
        )
    })
    return (
        <div>
            {jokeElements}
            {<Messages />}
        </div>
    )
}
