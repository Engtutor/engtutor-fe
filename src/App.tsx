import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Amplify } from "aws-amplify";
import {
  COGNITO_USER_POOL_CLIENT_ID,
  COGNITO_USER_POOL_ID,
} from "./lib/constant";

Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: COGNITO_USER_POOL_ID,
      userPoolClientId: COGNITO_USER_POOL_CLIENT_ID,
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
};

export default App;
