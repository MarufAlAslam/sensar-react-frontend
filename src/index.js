import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/globals.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
