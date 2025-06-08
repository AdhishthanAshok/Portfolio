import {
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { Analytics } from "@vercel/analytics/react"
import Path from "./routes/Path.jsx";

function App() {

  return (
    <Router>
      <div className="App dark:bg-gray-900 transition-colors duration-300 bg-gray-100">
        <Navbar />
        <Analytics />
        <Routes>
          {Path()}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
