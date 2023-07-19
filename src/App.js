import "./App.css";
// IMPORT COMPONENTS
import TaskList from "./Components/TaskList";

// CHAKRA IMPORTS
import { Flex } from "@chakra-ui/react";

function App() {
  return (
    <div className="App">
      <Flex justifyContent={"center"} alignItems={"center"} mt={"36"}>
        <TaskList />
      </Flex>
    </div>
  );
}

export default App;
