import "./App.css";
// IMPORT COMPONENTS
import TaskList from "./Components/TaskList";
import Navbar from "./Components/Navbar";
import Calender from "./Components/Calender";
import Alerts from "./Components/Alerts";
import NewAlert from "./Components/NewAlert";
// IMPORT REACT ROUTER DOM
import { Route, Routes } from "react-router-dom";

// IMPORT PROVIDERS
import { ToastProvider } from "./Contexts/ToastContext";
import { CalenderProvider } from "./Contexts/CalenderContext";
import { NewAlertProvider } from "./Contexts/NewAlertContext";

// CHAKRA IMPORTS
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <CalenderProvider>
      <NewAlertProvider>
        <ToastProvider>
          <div className="App" style={{ fontFamily: "Readex" }}>
            <Navbar />
            <Flex
              justifyContent={"center"}
              alignItems={"center"}
              mt={{ base: "0", md: "36", lg: "36" }}
              w={"full"}
            >
              <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/alerts">
                  <Route index element={<Alerts />} />
                  <Route path="newAlert" element={<NewAlert />} />
                </Route>
                <Route path="/calender" element={<Calender />} />
              </Routes>
            </Flex>
          </div>
        </ToastProvider>
      </NewAlertProvider>
    </CalenderProvider>
  );
}

export default App;
