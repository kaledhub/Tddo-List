// IMPORT COMPONENTS
import SingleTaskInfo from "./SingleTaskInfo";

// Hooks
import { useState, useEffect, useMemo } from "react";
// THIS IS A CUSTOM HOOK
import { useMyToast } from "../Contexts/ToastContext";

// IMPORTS OF CHAKRA COMPONENTS:
import {
  Flex,
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
  const { customizeToast } = useMyToast();
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

  // HANDLE CATEGORIES CLICK [ALL, COMPLETED, NON-COMPLETED]
  const handleCategoriesClick = (event) => {
    setCategoryType(event.target.value);
  };
  // ==== HANDLE CATEGORIES CLICK ====

  // HANDLING IS COMPLETED TO SWITCH ICON FROM NOT COMPLETE TO COMPLETED
  const handleIsCompletedOnClick = (taskId) => {
    const isCompletedTask = tasks.map((task) => {
      if (task.id === taskId) {
        if (task.isCompleted === true) {
          customizeToast(`تم إضافة المهمّة للمهام غير المنجزة`, "success");
          task.isCompleted = false;
        } else {
          customizeToast("تم إضافة المهمّة للمهام المنجزة", "success");
          task.isCompleted = true;
        }
        // task.isCompleted = !task.isCompleted;
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
    customizeToast("تم إضافة مهمّة جديدة بنجاح", "success");
  };
  // ==== HANDLING ADD A NEW TASK ====

  // HANDLING DELETE TASK
  const handleDeleteTaskClick = (taskId) => {
    const deleteTask = tasks.filter((task) => {
      return task.id !== taskId;
    });
    setTasks(deleteTask);
    localStorage.setItem("task", JSON.stringify(deleteTask));
    customizeToast("تم حذف المهمّة بنجاح", "error");
  };
  // ==== HANDLING DELETE TASK ====

  // CATEGORY FILTRATION
  // useMemo in this situation to handling computations to rendered just when tasks state change
  const completedCategory = useMemo(() => {
    return tasks.filter((task) => {
      return task.isCompleted;
    });
  }, [tasks]);

  const notCompletedCategory = useMemo(() => {
    return tasks.filter((task) => {
      return !task.isCompleted;
    });
  }, [tasks]);

  // === CATEGORY FILTRATION ===

  // rendering tasks based on category type
  let tasksToBeRendered;

  if (categoryType === "Completed") {
    tasksToBeRendered = completedCategory;
  } else if (categoryType === "Non-completed") {
    tasksToBeRendered = notCompletedCategory;
  } else {
    tasksToBeRendered = tasks;
  }

  // reverse [tasks] to show the latest task that added to tasks
  // tasksToBeRendered = [...tasks].reverse(); /problem here because mutation/
  // map to show tasks object in <SingleTaskInfo/>
  const showingTasks = [...tasksToBeRendered].reverse().map((task) => {
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
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        mt={{ base: "0", md: "36", lg: "36" }}
        w={"full"}
      >
        <Card
          bg={"whiteBlack.600"}
          w={{ base: "100vh", md: "md", lg: "md" }}
          h={{ base: "100vh", md: "xl", lg: "xl" }}
          rounded={{ base: "none", md: "md", lg: "md" }}
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
                onClick={handleCategoriesClick}
                color={"primary"}
              >
                الكل
              </Button>
              <Button
                value={"Completed"}
                onClick={handleCategoriesClick}
                color={"primary"}
              >
                منجز
              </Button>
              <Button
                value={"Non-completed"}
                onClick={handleCategoriesClick}
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
      </Flex>
    </>
  );
}

export default TaskList;
