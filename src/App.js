import "./App.css";
import ChakraUi from "./components/ChakraUi";
import EnrollForm from "./components/EnrollForm";
import FormikContainer from "./components/FormikContainer";
import LoginForm from "./components/LoginForm";
import Registration from "./components/Registration";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        {/* <FormikContainer /> */}
        {/* <LoginForm /> */}
        {/* <Registration /> */}
        {/* <EnrollForm /> */}
        <ChakraUi />
      </div>
    </ChakraProvider>
  );
}

export default App;
