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
