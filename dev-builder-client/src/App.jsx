// Styling imports for different libraries
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router";

function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
