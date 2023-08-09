import "./App.css";
// IMPORT COMPONENTS
import TaskList from "./Components/TaskList";
import Navbar from "./Components/Navbar";
import Alerts from "./Components/Alerts";
import NewAlert from "./Components/NewAlert";
// IMPORT REACT ROUTER DOM
import { Route, Routes } from "react-router-dom";

// IMPORT PROVIDERS
import { ToastProvider } from "./Contexts/ToastContext";
import { NewAlertProvider } from "./Contexts/NewAlertContext";

// CHAKRA IMPORTS
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <NewAlertProvider>
      <ToastProvider>
        <div className="App" style={{ fontFamily: "Readex" }}>
          <Navbar />
          {/* <Flex
              justifyContent={"center"}
              alignItems={"center"}
              mt={{ base: "0", md: "36", lg: "36" }}
              w={"full"}
            > */}
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/alerts">
              <Route index element={<Alerts />} />
              <Route path="newAlert" element={<NewAlert />} />
            </Route>
          </Routes>
          {/* </Flex> */}
        </div>
      </ToastProvider>
    </NewAlertProvider>
  );
}

export default App;
