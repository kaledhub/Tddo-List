// IMPORT CHAKRA UI
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Button,
  Grid,
  GridItem,
  Box,
  Divider,
  AbsoluteCenter,
  Flex,
} from "@chakra-ui/react";

// IMPORT REACT ICONS
import { BsCardChecklist } from "react-icons/bs";

// HOOKS
import { useState } from "react";
// CUSTOM HOOK
import { useCalender } from "../Contexts/CalenderContext";

function Alerts() {
  const { calender, theDate, handleCalenderClick } = useCalender();

  const handleVisibleCalender = () => {
    handleCalenderClick("is_visible");
  };
  return (
    <>
      <Card
        w={{ base: "100vh", md: "md", lg: "md" }}
        h={{ base: "100vh", md: "xl", lg: "xl" }}
        rounded={{ base: "none", md: "md", lg: "md" }}
      >
        <CardHeader>
          <Text fontSize="3xl" textAlign={"center"}>
            التذكيرات
          </Text>
          <Box position="relative" padding="10">
            <Divider borderColor={"primary"} />
            <AbsoluteCenter bg="white" px="4">
              <BsCardChecklist size={30} color="#63B3ED" />
            </AbsoluteCenter>
          </Box>
          <Flex justifyContent={"center"} alignItems={"center"} gap={3}>
            <Button color={"primary"}>التذكيرات</Button>
            <Button color={"primary"}>إضافة تذكير جديد</Button>
          </Flex>
        </CardHeader>
        <CardBody>
          <Card
            bg={"yellow.200"}
            p={3}
            display={"flex"}
            justifyContent={"center"}
            justifyItems={"center"}
          >
            <Grid templateColumns="repeat(12, 1fr)">
              <GridItem colSpan={8}>
                <Text>عنوان التذكير</Text>
              </GridItem>

              <GridItem colSpan={4}>
                <Text>{theDate}</Text>
              </GridItem>
            </Grid>
          </Card>
        </CardBody>
        <CardFooter>
          <Button bg={"primary"} _hover={{ bg: "teal.300" }}>
            إضافة تذكير
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default Alerts;
