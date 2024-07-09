import { useState } from "react"
import Nabvbar from "./Components/Nabvbar"
import Newsboard from "./Components/Newsboard"

const App = () => {
  const [category,setcategory]=useState("general");
  return (
    <div>
      <Nabvbar setcategory={setcategory}/>
      <Newsboard category={category}/>
    </div>
  )
}

export default App
