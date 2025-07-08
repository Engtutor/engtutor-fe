import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const NotFound = () => (
    <Card className="w-full max-w-md mx-auto mt-20 shadow-lg">
        <CardHeader>
            <CardContent className="flex items-center justify-center mb-4 p-0">
                <Search className="h-12 w-12 text-muted-foreground" />
            </CardContent>
            <CardTitle>404 - Page Not Found</CardTitle>
            <CardDescription>The page you are looking for does not exist.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
            <Button variant="outline" onClick={() => window.location.href = "/"}>
                Go Home
            </Button>
        </CardContent>
    </Card>
);

export { NotFound }; 