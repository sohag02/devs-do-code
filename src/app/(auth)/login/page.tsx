import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { LogIn } from "lucide-react";

function GoogleIcon() {
  return (
    <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <title>Google</title>
      <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
    </svg>
  );
}

export default async function SignInPage(props: {
  searchParams: { callbackUrl: string | undefined };
}) {
  const SIGNIN_ERROR_URL = "/signin-error";
  const params = await props.searchParams;
  const callback_url = params.callbackUrl;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-green-500 to-black">
      <Card className="w-full max-w-md mx-4 shadow-2xl transition-all duration-300 ease-in-out hover:shadow-3xl">
        <CardHeader className="space-y-1 text-center">
          <div className="flex justify-center mb-4">
            <LogIn className="w-10 h-10 animate-pulse" />
          </div>
          <CardTitle className="text-3xl font-bold tracking-tight">
            Welcome Back
          </CardTitle>
          <CardDescription>Sign in to access your account</CardDescription>
        </CardHeader>
        <CardContent>
          <form
            action={async () => {
              "use server";
              try {
                await signIn("google", {
                  redirectTo: callback_url ?? "",
                });
              } catch (error) {
                if (error instanceof AuthError) {
                  return redirect(`${SIGNIN_ERROR_URL}?error=${error.type}`);
                }
                throw error;
              }
            }}
            className="space-y-4"
          >
            <Button
              type="submit"
              size="lg"
              className="w-full bg-white text-gray-800 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              {/* <FaGoogle className="w-5 h-5" /> */}
              <GoogleIcon />
              <span>Sign in with Google</span>
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
