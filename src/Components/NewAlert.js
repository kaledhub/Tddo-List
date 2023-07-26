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
import { BsCardChecklist, BsCalendarDateFill } from "react-icons/bs";
// import { HiOutlineBellAlert } from "react-icons/hi2";
import { CgDetailsMore } from "react-icons/cg";

// HOOKS
import { useState, useMemo } from "react";
// CALENDER CUSTOM HOOK
import { useCalender } from "../Contexts/CalenderContext";

function NewAlert() {
  const { calender, theDate } = useCalender();

  const [accordionVisibility, setAccordionVisibility] = useState("hidden");
  const [switchIsChecked, setSwitchIsChecked] = useState(false);
  const [newAlertHeight, setNewAlertHeight] = useState("md");

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
            <Button color={"primary"}>التذكيرات</Button>
            <Button color={"primary"}>إضافة تذكير جديد</Button>
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
                          <Box as="span" flex="1" textAlign="right">
                            <Input
                              bg={"whiteAlpha.900"}
                              variant="outline"
                              value={theDate}
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
                        {calender}
                      </AccordionPanel>
                    </AccordionItem>
                  </Accordion>
                </Box>
              </GridItem>
            </Grid>
          </Card>
        </CardBody>
        <CardFooter>
          <Button bg={"primary"} _hover={{ bg: "teal.300" }}>
            أضف للتذكيرات
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}

export default NewAlert;
