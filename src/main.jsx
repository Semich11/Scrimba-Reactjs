import { createRoot } from "react-dom/client"
// import Pad from "./soundPads/pad"
// import { Header } from "./custom_component_quiz/header"
// import { MainComponent } from "./custom_component_quiz/mainComponent"
// import { Footer } from "./custom_component_quiz/footer"
// import './index.css'
// import { App } from "./appComponent/appPage"
// import { App } from "./joke/app"
// import Main from "./chefClaude/main"
import Main from "./memeGenerator/main"
// import Contact from "./contact/contact"

const root = createRoot(document.getElementById("root"))



function CustomPage(){
  return(
    <>
      <Main />
      {/* <Contact /> */}
      {/* <Pad darkMode={true}/> */}
      
    </>
  )
}

root.render(
    <CustomPage/>
)



