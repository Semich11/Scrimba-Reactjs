import { createRoot } from "react-dom/client"
import { Header } from "./custom_component_quiz/header"
import { MainComponent } from "./custom_component_quiz/mainComponent"
import { Footer } from "./custom_component_quiz/footer"
import './index.css'
import { App } from "./appComponent/App"

const root = createRoot(document.getElementById("root"))



function CustomPage(){
  return(
    <>
      <App/>
    </>
  )
}

root.render(
    <CustomPage/>
)



