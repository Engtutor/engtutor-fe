import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useUpdateUserMutation } from "@/redux/user/api";

export const Home = () => {
  const [updateUser] = useUpdateUserMutation();

  const testcall = async () => {
    await updateUser({
      id: "123",
      name: "Updated User",
      email: "updated@example.com",
    });
  };

  return (
    <Authenticator variation="modal">
      {({ signOut, user }) => (
        <Card className="w-full max-w-md mx-auto mt-20 shadow-lg">
          <CardHeader>
            <CardTitle>Hello, {user?.username}</CardTitle>
          </CardHeader>
          <CardContent>
            <Button variant="outline" onClick={signOut} className="w-full">
              Sign out
            </Button>

            <Button variant="outline" onClick={testcall} className="w-full">
              test call
            </Button>
          </CardContent>
        </Card>
      )}
    </Authenticator>
  );
};
