// IMPORT COMPONENTS
import EditAlertModal from "./EditAlertModal";
import DeleteAlertModal from "./DeleteAlertModal";

// HOOKS
import { useState } from "react";

// IMPORTS OF CHAKRA COMPONENTS
import {
  Text,
  ButtonGroup,
  IconButton,
  Grid,
  GridItem,
  Card,
  useDisclosure,
} from "@chakra-ui/react";

// IMPORT CHAKRA ICONS
import { CheckCircleIcon } from "@chakra-ui/icons";
// IMPORT REACT ICONS
import { RiEditBoxFill } from "react-icons/ri";
import { MdCancel } from "react-icons/md";

function SingleTaskInfo({ tasksObj, handleIsCompleted }) {
  // for Delete Modal, this came from <EditAlertModal/> component
  const { isOpen, onOpen, onClose } = useDisclosure();
  // useState of Edit Modal
  const [showEditModal, setShowEditModal] = useState(false);

  // HANDLING SHOW EDIT MODAL
  const handleShowingEditModal = () => {
    !showEditModal ? setShowEditModal(true) : setShowEditModal(false);
  };
  // ==== HANDLING SHOW EDIT MODAL====

  return (
    <>
      {/* MODALS */}
      {/* Edit Modal */}
      <EditAlertModal
        OpenEditModal={showEditModal}
        onCloseEditModal={handleShowingEditModal}
      />
      {/* Delete Modal */}
      <DeleteAlertModal isOpen={isOpen} onClose={onClose} />
      {/* === MODALS ===  */}

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
            <Text fontWeight={"bold"}>{tasksObj.taskTitle}</Text>
            <Text>{tasksObj.taskDetails}</Text>
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
                onClick={() => {
                  handleIsCompleted(tasksObj.id);
                }}
                color={tasksObj.isCompleted ? "green.400" : "gray.400"}
                border={"2px"}
                borderColor={tasksObj.isCompleted ? "green.400" : "gray.400"}
                borderRadius={"full"}
                icon={<CheckCircleIcon />}
              />
              {/* === CHECKED ICON === */}

              {/* EDIT ICON */}
              <IconButton
                onClick={handleShowingEditModal}
                color="#4299E1"
                border={"2px"}
                borderColor={"#4299E1"}
                borderRadius={"full"}
                icon={<RiEditBoxFill />}
              />
              {/* === EDIT ICON === */}

              {/* DELETE ICON */}
              <IconButton
                onClick={onOpen}
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
