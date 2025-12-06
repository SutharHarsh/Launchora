import React, { useState } from "react";
import Button from "./ui/Button";
import { Link } from "react-router-dom";


/* helper SVG icons (kept small for clarity) */
const GithubIcon = (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const GitlabIcon = (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_472_8)"><path d="M15.7337 6.09936L15.7112 6.04188L13.5335 0.358462C13.4891 0.24707 13.4107 0.152576 13.3094 0.0885373C13.2079 0.0255869 13.0897 -0.00473207 12.9705 0.00167412C12.8513 0.0080803 12.7369 0.0509031 12.6429 0.124361C12.5498 0.199927 12.4824 0.302322 12.4496 0.417612L10.9792 4.91636H5.02499L3.55457 0.417612C3.52268 0.301694 3.45505 0.198786 3.36129 0.123527C3.26722 0.0500699 3.15287 0.00724702 3.03368 0.000840838C2.9145 -0.00556535 2.79622 0.0247536 2.69481 0.087704C2.5937 0.152001 2.51531 0.246412 2.47071 0.357629L0.288816 6.03854L0.267156 6.09603C-0.046338 6.91514 -0.0850337 7.81396 0.156903 8.65699C0.398839 9.50001 0.908292 10.2415 1.60845 10.7697L1.61595 10.7756L1.63594 10.7897L4.95335 13.274L6.59456 14.5162L7.59428 15.271C7.71122 15.3598 7.85401 15.4078 8.00083 15.4078C8.14766 15.4078 8.29045 15.3598 8.40739 15.271L9.40711 14.5162L11.0483 13.274L14.3857 10.7747L14.394 10.7681C15.0926 10.2398 15.6009 9.49901 15.8425 8.65712C16.084 7.81524 16.0459 6.91769 15.7337 6.09936Z" fill="#E24329"></path><path d="M15.7337 6.09948L15.7112 6.04199C14.6501 6.2598 13.6501 6.70927 12.7828 7.35829L8 10.9748C9.62871 12.2069 11.0467 13.2775 11.0467 13.2775L14.3841 10.7782L14.3924 10.7715C15.092 10.2432 15.601 9.502 15.8429 8.65939C16.0848 7.81679 16.0465 6.91841 15.7337 6.09948Z" fill="#FC6D26"></path><path d="M4.95312 13.2773L6.59433 14.5195L7.59406 15.2742C7.71099 15.363 7.85378 15.4111 8.00061 15.4111C8.14743 15.4111 8.29022 15.363 8.40716 15.2742L9.40688 14.5195L11.0481 13.2773C11.0481 13.2773 9.62849 12.2034 7.99978 10.9746C6.37106 12.2034 4.95312 13.2773 4.95312 13.2773Z" fill="#FCA326"></path><path d="M3.21633 7.35772C2.34974 6.70736 1.35002 6.25672 0.288816 6.03809L0.267156 6.09557C-0.046338 6.91468 -0.0850337 7.81351 0.156903 8.65653C0.398839 9.49955 0.908292 10.2411 1.60845 10.7693L1.61595 10.7751L1.63594 10.7893L4.95335 13.2736C4.95335 13.2736 6.36962 12.203 8 10.9709L3.21633 7.35772Z" fill="#FC6D26"></path></g><defs><clipPath id="clip0_472_8"><rect width="16" height="16" fill="white"></rect></clipPath></defs></svg>
);

const BitbucketIcon = (
 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="bitbucket-original-a" gradientUnits="userSpaceOnUse" x1="28.593" y1="14.226" x2="16.672" y2="23.532" gradientTransform="scale(4)"><stop offset=".176" stop-color="#0052cc"/><stop offset="1" stop-color="#2684ff"/></linearGradient></defs><path d="M19.082 20c-1.918 0-3.355 1.758-3.039 3.516l12.95 79.289c.32 2.078 2.077 3.515 4.155 3.515h62.66c1.442 0 2.72-1.12 3.04-2.558l13.109-80.086c.316-1.918-1.121-3.516-3.039-3.516zM74.07 77.227H54.09l-5.278-28.293h30.215zm0 0" fill="#2684ff"/><path d="M107.64 48.934H78.868L74.07 77.227H54.09l-23.5 27.972s1.12.961 2.719.961h62.66c1.441 0 2.719-1.12 3.039-2.558zm0 0" fill="url(#bitbucket-original-a)"/></svg>

);

const GoogleIcon = (
  <svg className="w-5 h-5 sm:w-6 sm:h-6" viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen flex items-start justify-center py-10 px-4 bg-background text-foreground">
      <div className="w-full max-w-lg space-y-8">

        <h1 className="text-2xl font-semibold">Sign In to LaunchAura</h1>

        {/* OAuth Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center">

          {/* GitHub - last used */}
          <div className="w-full sm:w-[calc(25%-12px)]">
            <Button variant="icon" square icon={GithubIcon}>
              GitHub
            </Button>
            <div className="bg-[#7A2FF7] h-1 w-full mt-2"></div>
          </div>

          <div className="w-full sm:w-[calc(25%-12px)]">
            <Button variant="icon" square icon={GitlabIcon}>GitLab</Button>
          </div>

          <div className="w-full sm:w-[calc(25%-12px)]">
            <Button variant="icon" square icon={BitbucketIcon}>Bitbucket</Button>
          </div>

          <div className="w-full sm:w-[calc(25%-12px)]">
            <Button variant="icon" square icon={GoogleIcon}>Google</Button>
          </div>

        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px grow bg-border"></div>
          <span className="text-sm text-muted-foreground">or</span>
          <div className="h-px grow bg-border"></div>
        </div>

        {/* FORM */}
        <div className="space-y-6">
          
          <div>
            <label className="text-sm text-muted-foreground">Email</label>
            <input className="form-input mt-2" type="email" placeholder="your@email.com" />
          </div>

          <div>
            <label className="text-sm text-muted-foreground">Password</label>
            <div className="relative mt-2">
              <input
                className="form-input pr-12"
                type={showPassword ? "text" : "password"}
                placeholder="correct horse battery staple"
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                onClick={() => setShowPassword(!showPassword)}
              >
                <svg className="w-5 h-5" stroke="currentColor" fill="none">
                  <path strokeWidth="2" d="..." />
                </svg>
              </button>
            </div>
          </div>

          <Button variant="default" className=" mt-4">
            Sign in
          </Button>

          <div className="space-y-1 text-sm mt-3">
            <a className="text-primary-accent hover:underline">Sign in with SSO</a>

            <p className="text-muted-foreground">
              Need an account?{" "}
              <Link to="/signup" className="text-primary-accent hover:underline">
                Sign up
              </Link>
            </p>

            <p className="text-muted-foreground">
              Forgot your password?{" "}
              <Link to="/reset-password" className="text-primary-accent hover:underline">
                Reset it
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
