import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { AppRouter } from "./AppRouter.tsx";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { appStore } from "./centralStore/appStore.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={AppRouter} />
      {/* <App /> */}
    </Provider>
  </React.StrictMode>,
);
