import React from "react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";

export default function ResetPasswordPage() {
  return (
    <div className="min-h-screen flex items-start justify-center py-12 px-4 bg-background text-foreground">
      <div className="w-full max-w-lg space-y-8">

        <h1 className="text-2xl font-semibold">Reset Your Password</h1>

        <p className="text-sm text-muted-foreground -mt-4">
          Enter your email address and we&apos;ll send you a password reset link.
        </p>

        <div className="space-y-4 mt-6">
          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="form-input mt-2"
            />
          </div>

          <Button variant="default" className="w-fit px-6">
            Reset Password
          </Button>

          <p className="text-sm text-muted-foreground pt-4">
            Remembered your password?{" "}
            <Link to="/signin" className="text-primary-accent hover:underline">
              Sign in
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}
