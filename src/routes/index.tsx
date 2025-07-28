import { useRoutes } from "react-router-dom";
import { Home } from "../pages/Home";
import { NotFound } from "../pages/NotFound";
import type { AuthUser } from "@aws-amplify/auth/cognito";
import { useEffect } from "react";
import { fetchAuthSession } from "aws-amplify/auth";
import { setToken } from "@/redux/authSlice";
import { useDispatch } from "react-redux";

const routes = [
  { path: "/", element: <Home /> },
  { path: "*", element: <NotFound /> },
];

type AppRoutesProps = {
  user: AuthUser | undefined;
};

const AppRoutes = ({ user }: AppRoutesProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    const storeToken = async () => {
      const session = await fetchAuthSession({ forceRefresh: true });
      console.log("session : ", session);
      const idToken = session.tokens?.idToken?.toString();
      const accessToken = session.tokens?.accessToken?.toString();

      if (idToken && accessToken) {
        dispatch(
          setToken({
            idToken,
            accessToken,
          }),
        );
      }
    };
    storeToken();
  }, [dispatch, user]);

  const element = useRoutes(routes);
  return element;
};

export { AppRoutes };
