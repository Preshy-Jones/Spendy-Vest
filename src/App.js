import "./App.scss";
import Home from "./components/home/Home";
import About from "./screens/About";
import FAQ from "./screens/FAQ/FAQ";
import Tracklist from "./screens/tracklist/Tracklist";
import Terms from "./screens/Terms";
import Privacy from "./screens/Privacy";
import Invite from "./screens/Invite";
import Contact from "./screens/Contact";
import Signupsuccess from "./screens/Signupsuccess";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/tracklist" element={<Tracklist />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/invite" element={<Invite />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signupsuccess" element={<Signupsuccess />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
