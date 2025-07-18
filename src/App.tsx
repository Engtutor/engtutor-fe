import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter basename="/engtutor/">
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
