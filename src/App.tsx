import Header from "./components/Header";
import Home from "./pages/Home";

function App() {
  return (
    <div className="min-h-screen text-gray-800 overflow-x-hidden">
      
      <Header />

      <main className="pt-20">
        <Home />
      </main>
    </div>
  );
}

export default App;