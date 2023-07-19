// IMPORTS OF CHAKRA COMPONENTS
import {
  Text,
  ButtonGroup,
  IconButton,
  Grid,
  GridItem,
  Card,
} from "@chakra-ui/react";

// IMPORT CHAKRA ICONS
import { CheckCircleIcon } from "@chakra-ui/icons";
// IMPORT REACT ICONS
import { RiEditBoxFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";

function SingleTaskInfo() {
  return (
    <>
      <Card
        bg={"#63B3ED"}
        w={"full"}
        p={2}
        pl={{ base: 8 }}
        mt={2}
        _hover={{ pt: 3, pb: 3, transitionDuration: "700ms" }}
      >
        <Grid templateColumns="repeat(12, 1fr)">
          <GridItem colSpan={8}>
            <Text fontWeight={"bold"}>عنوان المهمة</Text>
            <Text>تفاصيل المهمة</Text>
          </GridItem>

          <GridItem
            colSpan={4}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            {/* ICONS GROUP */}
            <ButtonGroup>
              {/* CHECKED ICON */}
              <IconButton
                color="green.600"
                border={"2px"}
                borderColor={"green.600"}
                borderRadius={"full"}
                icon={<CheckCircleIcon />}
              />
              {/* === CHECKED ICON === */}

              {/* EDIT ICON */}
              <IconButton
                color="#4299E1"
                border={"2px"}
                borderColor={"#4299E1"}
                borderRadius={"full"}
                icon={<RiEditBoxFill />}
              />
              {/* === EDIT ICON === */}

              {/* DELETE ICON */}
              <IconButton
                color="error"
                border={"2px"}
                borderColor={"error"}
                borderRadius={"full"}
                icon={<MdCancel />}
              />
              {/* === DELETE ICON === */}
            </ButtonGroup>
            {/* === ICONS GROUP === */}
          </GridItem>
        </Grid>
      </Card>
    </>
  );
}

export default SingleTaskInfo;
