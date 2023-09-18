import react from "react"
import { RouterProvider } from "react-router-dom"
import styled from "styled-components"
import { MainRouter } from "./Components/Router/MainRouter"

const App = () =>{
  return(
    <div>
      <RouterProvider
         router={MainRouter}
      />
    </div>
  )
}

export default App;
