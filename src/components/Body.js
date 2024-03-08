import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Login";
import Browse from "./Browse";


const Body = () => {
  const appRouter = createBrowserRouter([
    {
      element : <Login/>,
      path : '/'
    },
    {
      element : <Browse/>,
      path : '/browse'
    }
  ])
  return (<RouterProvider router = {appRouter}/>)
}

export default Body