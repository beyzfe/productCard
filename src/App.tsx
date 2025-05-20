import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Header from "./components/Header";
import Router from "./Router";
import { BrowserRouter } from "react-router";

const queryClient = new QueryClient();
function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Header />
        <Router />
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
