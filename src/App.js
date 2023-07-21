import "./App.css";
// IMPORT COMPONENTS
import TaskList from "./Components/TaskList";

// IMPORT TOAST PROVIDER
import { ToastProvider } from "./Contexts/ToastContext";

// CHAKRA IMPORTS
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <ToastProvider>
      <div className="App">
        <Flex justifyContent={"center"} alignItems={"center"} mt={"36"}>
          <TaskList />
        </Flex>
      </div>
    </ToastProvider>
  );
}

export default App;
