import { Fragment, useContext } from "react";
import Stack from "./dir/stack/Stack";
import { DarkModeContext } from "./dir/contexts/darkModeContext";

function App() {

  const { darkMode } = useContext(DarkModeContext);

  return (
    <Fragment>
      <div className={darkMode ? "darkMode" : null}>
        <Stack />
      </div>
    </Fragment>
  );
}

export default App;
