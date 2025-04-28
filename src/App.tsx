import { Route, Routes } from "react-router-dom"
import Post from "./containers/post/Post"


function App() {
  return (
    <Routes>
      <Route index element={<Post />}/>
    </Routes>
  )
}

export default App
