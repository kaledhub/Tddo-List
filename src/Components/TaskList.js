// IMPORT COMPONENTS
import SingleTaskInfo from "./SingleTaskInfo";

// OTHER
import { useState } from "react";

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
    taskTitle: "task 1",
    taskDetails: "details of first task",
    isCompleted: false,
  },
  {
    id: uuidv4(),
    taskTitle: "task 2",
    taskDetails: "details of second task",
    isCompleted: false,
  },
];

function TaskList() {
  // useState of tasks object
  const [tasks, setTasks] = useState(tasksList);

  // handleIsCompletedOnClick to check when task is completed or not
  const handleIsCompletedOnClick = (taskId) => {
    const isCompletedTask = tasks.map((task) => {
      if (task.id === taskId) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });

    setTasks(isCompletedTask);
  };

  // map to show tasks object in <SingleTaskInfo/>
  const showingTasks = tasks.map((task) => {
    return (
      <SingleTaskInfo
        key={task.id}
        tasksObj={task}
        handleIsCompleted={handleIsCompletedOnClick}
      />
    );
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
            <Button color={"primary"}>الكل</Button>
            <Button color={"primary"}>منجز</Button>
            <Button color={"primary"}>غير منجز</Button>
          </ButtonGroup>
          {/* === DIVIDER BETWEEN HEADER TITLE AND TOGGLE BUTTON ===*/}
        </CardHeader>
        {/* === CARD HEADER: MAIN TITLE + TOGGLE BUTTONS === */}

        {/* CARD BODY: TASKS + ICONS */}
        <CardBody maxH={"lg"} overflow={"scroll"}>
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
                // textAlign={"right"}
                color="teal"
                placeholder="عنوان المهمة"
                _placeholder={{ color: "inherit" }}
                border={"1px"}
                borderColor="inherit.200"
              />
            </GridItem>
            <GridItem colSpan={1}>
              <Button
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
