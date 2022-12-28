import { Fragment } from "react";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./dir/contexts/useAuth";
import Stack from "./dir/stack/Stack";

function App() {
  return (
    <Fragment>
      <BrowserRouter> 
      <AuthProvider>
      <Stack />
      </AuthProvider>
       </BrowserRouter> 
    </Fragment>
  );
}

export default App;
