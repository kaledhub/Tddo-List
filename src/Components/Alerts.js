// IMPORT CHAKRA UI
import {
  Card,
  CardHeader,
  CardBody,
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
import { BiMinusCircle } from "react-icons/bi";

import { Link } from "react-router-dom";
// HOOKS
import { useContext, useEffect } from "react";
import { NewAlertContext } from "../Contexts/NewAlertContext";

function Alerts() {
  // FROM ALL ALERTS PROVIDER
  const { allAlerts, setAllAlerts } = useContext(NewAlertContext);

  useEffect(() => {
    const alertsStorage = JSON.parse(localStorage.getItem("alerts")) ?? [];
    setAllAlerts(alertsStorage);
  }, [setAllAlerts]);

  const allAlertsCard = allAlerts.map((alert) => {
    return (
      <Box key={alert.id}>
        <Card
          bg={"purple.100"}
          // p={3}
          color={"gray.100"}
          display={"flex"}
          justifyContent={"center"}
          justifyItems={"center"}
          mt={3}
        >
          <Grid templateColumns="repeat(12, 1fr)" bg={"#434343"}>
            <GridItem colSpan={6} p={3}>
              <Text> {alert.alertTitle}</Text>
            </GridItem>

            <GridItem colSpan={4} p={3}>
              <Text>{alert.alertDate}</Text>
            </GridItem>
            <GridItem colSpan={2} bg={"#FFF9EA"} p={3} roundedRight={20}>
              <Button rounded={"full"} py={"-0.5"} px={"-0.5"}>
                <BiMinusCircle color="#434343" size={25} />
              </Button>
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
              <Button color={"primary"}>التذكيرات</Button>
            </Link>

            <Link to={"newAlert"}>
              <Button>إضافة تذكير جديد</Button>
            </Link>
          </Flex>
        </CardHeader>

        <CardBody overflow={allAlerts.length >= 5 ? "scroll" : "visible"}>
          {allAlertsCard}
        </CardBody>
      </Card>
    </>
  );
}

export default Alerts;
