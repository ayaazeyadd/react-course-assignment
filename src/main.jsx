import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import App from "./App.jsx";
import { store } from "./redux/store.js";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styling
import "./index.css"; // CSS Stylesheet styling approach

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Redux Provider: makes the store available to useSelector/useDispatch everywhere */}
    <Provider store={store}>
      {/* Context Provider: makes theme state available to useTheme() everywhere */}
      <ThemeProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
