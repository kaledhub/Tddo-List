// IMPORT COMPONENTS
import SingleTaskInfo from "./SingleTaskInfo";

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

function TaskList() {
  return (
    <>
      <Card
        bg={"whiteBlack.600"}
        w={{ base: "sm", md: "md", lg: "md" }}
        h={"fit-content"}
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
        <CardBody>
          <SingleTaskInfo />
          <SingleTaskInfo />
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
