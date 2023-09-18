import "./App.css";
import Button from "./components/Button/Button";
import { ButtonStyles } from "./utils/types";

function App() {
  return (
    <div className="App">
      <div>
        Buttons:
        <div>
          <Button>Default</Button>
          <Button disabled>Default Disabled</Button>
          <Button buttonStyle={ButtonStyles.CONNECT}>Connect</Button>
          <Button buttonStyle={ButtonStyles.CONNECT} disabled>
            Connect Disabled
          </Button>
          <Button buttonStyle={ButtonStyles.DISCONNECT}>Disconnect</Button>
          <Button buttonStyle={ButtonStyles.BIG_PURPLE}>Big Purple</Button>
          <Button buttonStyle={ButtonStyles.CORNER_GREEN}>Corner Green</Button>
          <Button disabledStyle={ButtonStyles.DISABLED2} disabled>
            Disabled2
          </Button>
        </div>
      </div>
    </div>
  );
}

export default App;
