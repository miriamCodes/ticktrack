import logo from "./logo.svg";
import "./App.css";
import "./Timer.css";
import "./Category.css";
import { Button } from "@mui/material";
import { ButtonGroup } from "@mui/material";
import Timer from "./Timer";
import Category from "./Category";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="logo-container">
          <div className="App-logo">
            <img src={logo} alt="logo" />
          </div>
          <p className="App-name">ticktrack</p>
        </div>
        <div className="Nav-btn">
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            color="secondary"
          >
            <Button href="home" size="large">
              timer
            </Button>
            <Button href="categories" size="large">
              categories
            </Button>
            <Button href="history" size="large">
              history
            </Button>
          </ButtonGroup>
        </div>
      </header>
      <Timer />
      <Category />
    </div>
  );
}

export default App;
