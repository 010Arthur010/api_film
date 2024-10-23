import "./App.css";
import Navigation from "./components/Navigations";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/Superhero";

import "./style/landingpage.css";

function App() {
  return (
    <div>
      <div className="myBG">
        <Navigation />
        <Intro />
      </div>

      <div className="trending">
        <Trending />
      </div>

      <div className="superhero">
        <SuperHero />
      </div>
    </div>
  );
}

export default App;
