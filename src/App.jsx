import { Toaster } from "react-hot-toast";
import "./App.css";
import FeatureBanner from "./components/FeatureBanner";
import Navbar from "./components/NavBar";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      <div className="App">
        <Toaster
          position="top-center"
          reverseOrder={false}
          toastOptions={{ duration: 2500, removeDelay: 2000 }}
        />
        <Navbar />
        <ShopPage />
        <FeatureBanner />
      </div>
    </>
  );
}

export default App;
