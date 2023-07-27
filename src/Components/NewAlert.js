import "../Styles/calender.css";

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
  Switch,
  Accordion,
  AccordionIcon,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";

// IMPORT REACT ICONS
import { BsCardChecklist } from "react-icons/bs";

// IMPORT UUID
import { v4 as uuidv4 } from "uuid";

// REACT-ROUTER-DOM
import { Link } from "react-router-dom";

// HOOKS
import { useState, useMemo, useContext } from "react";
import { NewAlertContext } from "../Contexts/NewAlertContext";
// CALENDER CUSTOM HOOK
import { useCalender } from "../Contexts/CalenderContext";

function NewAlert({ handleAddNewAlert }) {
  const { calender, theDate } = useCalender();

  const [accordionVisibility, setAccordionVisibility] = useState("hidden");
  const [switchIsChecked, setSwitchIsChecked] = useState(false);
  const [newAlertHeight, setNewAlertHeight] = useState("md");
  // useState to add new alert

  const { allAlerts, setAllAlerts } = useContext(NewAlertContext);
  const [newAlert, setNewAlert] = useState({ title: "", date: "" });

  const handleSwitchClick = (event) => {
    if (switchIsChecked === false) {
      setSwitchIsChecked(true);
      setAccordionVisibility("visible");
    } else {
      setSwitchIsChecked(false);
      setAccordionVisibility("hidden");
    }
  };

  useMemo(() => {
    switchIsChecked === false
      ? setNewAlertHeight("md")
      : setNewAlertHeight("100vh");
  }, [switchIsChecked]);

  const handleAddNewAlertClick = () => {
    const myAlert = {
      id: uuidv4(),
      alertTitle: newAlert.title,
      alertDate: newAlert.date,
    };
    const alertInserted = [...allAlerts, myAlert];
    setAllAlerts(alertInserted);
    localStorage.setItem("alerts", JSON.stringify(alertInserted));
  };
  return (
    <>
      <Card
        w={{ base: "100vh", md: "md", lg: "md" }}
        h={{ base: "100vh", md: newAlertHeight, lg: newAlertHeight }}
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

            <Link>
              <Button color={"primary"}>إضافة تذكير جديد</Button>
            </Link>
          </Flex>
        </CardHeader>
        <CardBody>
          <Card
            bg={"blackAlpha.200"}
            p={3}
            h={accordionVisibility ? "6.5rem" : "fit-content"}
          >
            <Grid gridTemplateColumns={"repeat(12, 1fr)"}>
              <GridItem colSpan={8} style={{ direction: "rtl" }}>
                <Input
                  value={newAlert.title}
                  onChange={(event) => {
                    setNewAlert({
                      ...newAlert,
                      title: event.target.value,
                    });
                  }}
                  variant="outline"
                  placeholder="عنوان التذكير"
                  bg={"whiteAlpha.900"}
                />
              </GridItem>

              <GridItem
                colSpan={4}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={3}
              >
                <Text>التاريخ</Text>
                <Switch
                  colorScheme="teal"
                  size="md"
                  style={{ direction: "ltr" }}
                  value={switchIsChecked}
                  onChange={(event) => {
                    handleSwitchClick(event.target.checked);
                  }}
                />
              </GridItem>
              <GridItem colSpan={12}>
                <Box visibility={accordionVisibility}>
                  <Accordion allowToggle={setSwitchIsChecked}>
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box as="span" flex="1">
                            <Input
                              type="date"
                              data-date-format="DD MMMM YYYY"
                              bg={"whiteAlpha.900"}
                              variant="outline"
                              value={newAlert.date}
                              onChange={(event) => {
                                setNewAlert({
                                  ...newAlert,
                                  date: event.target.value,
                                });
                              }}
                            />
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        pb={4}
                        display={"flex"}
                        justifyContent={"center"}
                        alignItems={"center"}
                      >
                        {/* {calender} */}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </GridItem>
            </Grid>
          </Card>
        </CardBody>
        <CardFooter>
          <Button
            onClick={handleAddNewAlertClick}
            bg={"primary"}
            _hover={{ bg: "teal.300" }}
            isDisabled={newAlert.title.length === 0}
          >
            أضف للتذكيرات
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default NewAlert;
