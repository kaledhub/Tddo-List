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
import { useState } from "react";
// CUSTOM HOOK
import { useCalender } from "../Contexts/CalenderContext";

// IMPORT UUID
import { v4 as uuidv4 } from "uuid";

const alerts = [
  {
    id: uuidv4(),
    alertTitle: "null",
    alertDate: null,
  },
];
function Alerts() {
  // FROM CALENDER PROVIDER
  const { theDate } = useCalender();
  // useState
  const [allAlerts, setAllAlerts] = useState(alerts);

  const test = allAlerts.map((alert) => {
    return <NewAlert test={"test"} />;
  });

  const allAlertsCard = allAlerts.map((alert) => {
    return (
      <Box key={alert.id}>
        <Card
          bg={"purple.100"}
          p={3}
          display={"flex"}
          justifyContent={"center"}
          justifyItems={"center"}
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
              <Button color={"primary"}>التذكيرات</Button>
            </Link>

            <Link to={"newAlert"}>
              <Button color={"primary"}>إضافة تذكير جديد</Button>
            </Link>
          </Flex>
        </CardHeader>
        <CardBody>{allAlertsCard}</CardBody>
      </Card>
    </>
  );
}

export default Alerts;
