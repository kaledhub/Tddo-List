// IMPORT COMPONENTS
import NewAlert from "./NewAlert";

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

import { useNavigate, Link } from "react-router-dom";
// HOOKS
import { useState, useContext } from "react";
import { NewAlertContext } from "../Contexts/NewAlertContext";
// CUSTOM HOOK
import { useCalender } from "../Contexts/CalenderContext";

function Alerts() {
  // FROM CALENDER PROVIDER
  const { theDate } = useCalender();
  const { allAlerts, setAllAlerts } = useContext(NewAlertContext);
  // useState
  // const [allAlerts, setAllAlerts] = useState(alerts);
  const [alertPath, setAlertPath] = useState("alerts");
  const allAlertsCard = allAlerts.map((alert) => {
    return (
      <Box key={alert.id}>
        <Card
          bg={"purple.100"}
          p={3}
          display={"flex"}
          justifyContent={"center"}
          justifyItems={"center"}
          mt={3}
        >
          <Grid templateColumns="repeat(12, 1fr)">
            <GridItem colSpan={8}>
              <Text> {alert.alertTitle}</Text>
            </GridItem>

            <GridItem colSpan={4}>
              <Text>{alert.alertDate}</Text>
            </GridItem>
          </Grid>
        </Card>
      </Box>
    );
  });
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
            <Link to={"/alerts"}>
              <Button
                onClick={() => {
                  setAlertPath("alerts");
                }}
                color={"primary"}
              >
                التذكيرات
              </Button>
            </Link>

            <Link to={"newAlert"}>
              <Button
                onClick={() => {
                  setAlertPath("newAlert");
                }}
                color={"primary"}
              >
                إضافة تذكير جديد
              </Button>
            </Link>
          </Flex>
        </CardHeader>

        <CardBody> {allAlertsCard} </CardBody>
      </Card>
    </>
  );
}

export default Alerts;
