import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export const Home = () => {



    return (
        <Card className="w-full max-w-md mx-auto mt-20 shadow-lg">
            <CardHeader>
                <CardTitle>Welcome</CardTitle>
                <CardDescription>Start building your app with Shadcn UI</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
            </CardContent>
        </Card>
    )
}
