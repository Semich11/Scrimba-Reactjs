import { createRoot } from "react-dom/client"
import Pad from "./soundPads/pad"
// import { Header } from "./custom_component_quiz/header"
// import { MainComponent } from "./custom_component_quiz/mainComponent"
// import { Footer } from "./custom_component_quiz/footer"
// import './index.css'
// import { App } from "./appComponent/appPage"
// import { App } from "./joke/app"
// import Main from "./chefClaude/main"
// import Contact from "./contact/contact"

const root = createRoot(document.getElementById("root"))



function CustomPage(){
  return(
    <>
      {/* <Main /> */}
      {/* <Contact /> */}
      <Pad />
      
    </>
  )
}

root.render(
    <CustomPage/>
)



