import { useState } from "react";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Route from "./Router/Route";
import Main from "./components/Main/Main";
import HomePage from "./Views/Pages/HomePage";
import Page1 from "./Views/Pages/Page1";
import Page2 from "./Views/Pages/Page2";
import Page3 from "./Views/Pages/Page3";
import { AllowedPaths } from "./utils/types";

function App() {
  const [menuHidden, setMenuHidden] = useState<boolean>(false);
  return (
    <div className={styles.app}>
      <Sidebar menuHidden={menuHidden} setMenuHidden={setMenuHidden} />

      <Main menuHidden={menuHidden}>
        <Route path={AllowedPaths.HOMEPAGE}>
          <HomePage />
        </Route>
        <Route path={AllowedPaths.PAGE1}>
          <Page1 />
        </Route>
        <Route path={AllowedPaths.PAGE2}>
          <Page2 />
        </Route>
        <Route path={AllowedPaths.PAGE3}>
          <Page3 />
        </Route>
      </Main>
    </div>
  );
}

export default App;
