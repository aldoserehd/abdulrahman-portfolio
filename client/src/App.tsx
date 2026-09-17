import ErrorBoundary from "./components/ErrorBoundary";
import { LanguageProvider } from "./contexts/LanguageContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <ErrorBoundary>
      <LanguageProvider>
        <Home />
      </LanguageProvider>
    </ErrorBoundary>
  );
}
