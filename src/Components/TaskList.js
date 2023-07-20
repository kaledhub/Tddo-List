// IMPORT COMPONENTS
import SingleTaskInfo from "./SingleTaskInfo";

// OTHER
import { useState, useEffect } from "react";

// IMPORTS OF CHAKRA COMPONENTS
import {
  Text,
  Input,
  Button,
  ButtonGroup,
  Grid,
  GridItem,
  Box,
  AbsoluteCenter,
  Divider,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
} from "@chakra-ui/react";

// IMPORT REACT ICONS
import { BsCardChecklist } from "react-icons/bs";

// IMPORT UUID
import { v4 as uuidv4 } from "uuid";

// TASKS OBJECT
const tasksList = [
  {
    id: uuidv4(),
    taskTitle: null,
    taskDetails: null,
    isCompleted: false,
  },
];
function TaskList() {
  // STATES SECTION

  // useState of tasks object
  const [tasks, setTasks] = useState(tasksList);
  //useState for adding new title input
  const [titleInput, setTitleInput] = useState("");
  // useState of tasks categories
  const [categoryType, setCategoryType] = useState("All");
  // === STATES SECTION ===

  // useEffect to read data from local storage
  useEffect(() => {
    const tasksStorage = JSON.parse(localStorage.getItem("task")) ?? [];
    setTasks(tasksStorage);
  }, []);
  // === GET DATA FROM LOCAL STORAGE ===

  // HANDLING IS COMPLETED TO SWITCH ICON FROM NOT COMPLETE TO COMPLETED
  const handleIsCompletedOnClick = (taskId) => {
    const isCompletedTask = tasks.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    setTasks(isCompletedTask);
    localStorage.setItem("task", JSON.stringify(isCompletedTask));
  };
  // ==== HANDLING IS COMPLETE ====

  // HANDLING ADD A NEW TASK
  const handleAddNewTaskClick = () => {
    // THE NEW TASK SHOULD HAVE THE SAME STRUCTURE OF THE MAIN OBJECT
    const newTask = {
      id: uuidv4(),
      taskTitle: titleInput,
      taskDetails: "",
      isCompleted: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setTitleInput("");
    localStorage.setItem("task", JSON.stringify(updatedTasks));
  };
  // ==== HANDLING ADD A NEW TASK ====

  // HANDLING DELETE TASK
  const handleDeleteTaskClick = (taskId) => {
    const deleteTask = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(deleteTask);
    localStorage.setItem("task", JSON.stringify(deleteTask));
  };
  // ==== HANDLING DELETE TASK ====

  // CATEGORY FILTRATION
  const completedCategory = tasks.filter((task) => {
    return task.isCompleted;
  });

  const notCompletedCategory = tasks.filter((task) => {
    return !task.isCompleted;
  });

  // === CATEGORY FILTRATION ===

  // rendering tasks based on category type
  let tasksToBeRendered = tasks;

  if (categoryType === "Completed") {
    tasksToBeRendered = completedCategory;
  } else if (categoryType === "Non-completed") {
    tasksToBeRendered = notCompletedCategory;
  } else {
    tasksToBeRendered = tasks;
  }

  // reverse [tasks] to show the latest task that added to tasks
  // tasksToBeRendered = [...tasks].reverse();
  // map to show tasks object in <SingleTaskInfo/>
  const showingTasks = tasksToBeRendered.map((task) => {
    if (task.taskTitle === null) {
      return null;
    } else {
      return (
        <SingleTaskInfo
          key={task.id}
          SingleTask={task}
          allTasks={tasks}
          handleIsCompleted={handleIsCompletedOnClick} // send this prop to <SingleTaskInfo />
          handleDelete={handleDeleteTaskClick} // send this prop to to <DeleteAlertModal />
          setTasksObj={setTasks}
        />
      );
    }
  });

  return (
    <>
      <Card
        bg={"whiteBlack.600"}
        w={{ base: "sm", md: "md", lg: "md" }}
        h={"xl"}
      >
        {/* CARD HEADER: MAIN TITLE + TOGGLE BUTTONS */}
        <CardHeader>
          <Text textAlign={"center"} fontSize={"4xl"} fontWeight={"bold"}>
            منظّم المهام
          </Text>
          {/* DIVIDER BETWEEN HEADER TITLE AND TOGGLE BUTTON */}
          <Box position="relative" padding="10">
            <Divider borderColor={"primary"} />
            <AbsoluteCenter bg="white" px="4">
              <BsCardChecklist size={30} color="#63B3ED" />
            </AbsoluteCenter>
          </Box>
          <ButtonGroup display={"flex"} justifyContent={"center"}>
            <Button
              value={"All"}
              onClick={(event) => {
                // setCategoryType("All");
                console.log(event.target.value);
              }}
              color={"primary"}
            >
              الكل
            </Button>
            <Button
              value={"Completed"}
              onClick={(event) => {
                setCategoryType(event.target.value);
              }}
              color={"primary"}
            >
              منجز
            </Button>
            <Button
              value={"Non-completed"}
              onClick={(event) => {
                setCategoryType(event.target.value);
              }}
              color={"primary"}
            >
              غير منجز
            </Button>
          </ButtonGroup>
          {/* === DIVIDER BETWEEN HEADER TITLE AND TOGGLE BUTTON ===*/}
        </CardHeader>
        {/* === CARD HEADER: MAIN TITLE + TOGGLE BUTTONS === */}

        {/* CARD BODY: TASKS + ICONS */}
        <CardBody
          maxH={"lg"}
          overflow={tasks.length > 4 ? "scroll" : "visible"}
        >
          {showingTasks}
        </CardBody>
        {/* === CARD BODY: TASKS + ICONS ===  */}

        {/* CARD FOOTER: TASK TITLE INPUT + ADD BUTTON */}
        <CardFooter>
          <Grid
            templateColumns="repeat(12, 1fr)"
            gap={2}
            display={{ base: "flex", md: "grid", lg: "grid" }}
            flexDirection={{ base: "column" }}
            w={{ base: "full" }}
          >
            <GridItem colSpan={{ md: 11, lg: 11 }}>
              <Input
                value={titleInput}
                onChange={(event) => {
                  setTitleInput(event.target.value);
                }}
                color="teal"
                placeholder="عنوان المهمة"
                _placeholder={{ color: "inherit" }}
                border={"1px"}
                borderColor="inherit.200"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Button
                isDisabled={titleInput.length === 0}
                onClick={handleAddNewTaskClick}
                bg={"primary"}
                _hover={{ bg: "primary_hover" }}
                w={{ base: "full" }}
              >
                إضافة مهمة جديدة
              </Button>
            </GridItem>
          </Grid>
        </CardFooter>
        {/* ==== CARD FOOTER: TASK TITLE INPUT + ADD BUTTON ===  */}
      </Card>
    </>
  );
}

export default TaskList;
