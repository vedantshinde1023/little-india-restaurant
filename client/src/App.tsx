import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Header, Footer } from "@/components/site";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Reviews from "./pages/Reviews";
import Location from "./pages/Location";
import Book from "./pages/Book";
import ButterChickenPage from "./pages/services.butter-chicken";
import ChickenMarathaPage from "./pages/services.chicken-maratha";
import MurgMussallamPage from "./pages/services.murg-mussallam";
import TandooriChickenPage from "./pages/services.tandoori-chicken";
import PaneerTikkaPage from "./pages/services.paneer-tikka";
import ChickenTikkaMasalaPage from "./pages/services.chicken-tikka-masala";
import ChickenBiryaniPage from "./pages/services.chicken-biryani";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/services" component={Services} />
      <Route path="/services/butter-chicken" component={ButterChickenPage} />
      <Route path="/services/chicken-maratha" component={ChickenMarathaPage} />
      <Route path="/services/murg-mussallam" component={MurgMussallamPage} />
      <Route path="/services/tandoori-chicken" component={TandooriChickenPage} />
      <Route path="/services/paneer-tikka" component={PaneerTikkaPage} />
      <Route path="/services/chicken-tikka-masala" component={ChickenTikkaMasalaPage} />
      <Route path="/services/chicken-biryani" component={ChickenBiryaniPage} />
      <Route path="/about" component={About} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/location" component={Location} />
      <Route path="/book" component={Book} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Header />
          <main className="pt-20">
            <Router />
          </main>
          <Footer />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
