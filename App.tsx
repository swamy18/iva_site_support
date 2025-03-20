import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { ErrorBoundary } from "@/components/error-boundary";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";

function Router() {
  console.log("Router rendering");
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  console.log("App rendering");
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <div className="app min-h-screen bg-background">
          <Router />
          <Toaster />
        </div>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}

export default App;