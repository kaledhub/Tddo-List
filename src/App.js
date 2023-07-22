import "./App.css";
// IMPORT COMPONENTS
import TaskList from "./Components/TaskList";
import Navbar from "./Components/Navbar";

// IMPORT TOAST PROVIDER
import { ToastProvider } from "./Contexts/ToastContext";

// CHAKRA IMPORTS
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <Navbar />
        <Flex
          justifyContent={"center"}
          alignItems={"center"}
          mt={{ base: "0", md: "36", lg: "36" }}
        >
          <TaskList />
        </Flex>
      </div>
    </ToastProvider>
  );
}

export default App;
