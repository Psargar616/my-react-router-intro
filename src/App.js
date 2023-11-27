import logo from "./logo.svg";
import "./App.css";
import { NavLink, Link, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Support from "./Components/Support";
import Labs from "./Components/Labs";
import NotFound from "./Components/NotFound";
import MainHeader from "./Components/MainHeader";

function App() {
  return (
    <div className="App">
      <nav>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/Support">Support</NavLink>
        </li>
        <li>
          <NavLink to="/labs">Labs</NavLink>
        </li>
      </nav>

      <Routes>
        {/* nested routing */}
        <Route path="/" element={<MainHeader />}>
          {/* default route */}
          <Route index element={<Home />}></Route>
          <Route path="/Support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/labs" element={<Labs />} />
          {/* error handling */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
