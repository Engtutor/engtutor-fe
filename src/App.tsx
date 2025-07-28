import "./amplifyConfig";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

const App = () => {
  return (
    <Authenticator variation="modal">
      {({ user }) => (
        <Provider store={store}>
          <BrowserRouter>
            <AppRoutes user={user} />
          </BrowserRouter>
        </Provider>
      )}
    </Authenticator>
  );
};

export default App;
