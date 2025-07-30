import "./amplifyConfig";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { signUp, type SignUpInput } from "aws-amplify/auth";

const App = () => {
  const services = {
    async handleSignUp(input: SignUpInput) {
      const userAttributes = {
        ...(input.options?.userAttributes ?? {}),
        "custom:roles": "staff",
      };

      return signUp({
        ...input,
        options: {
          ...input.options,
          userAttributes,
        },
      });
    },
  };

  return (
    <Authenticator variation="modal" services={services}>
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
