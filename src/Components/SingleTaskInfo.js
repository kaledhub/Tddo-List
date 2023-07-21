// IMPORT COMPONENTS
import EditAlertModal from "./EditAlertModal";
import DeleteAlertModal from "./DeleteAlertModal";

// HOOKS
import { useState } from "react";
// THIS IS A CUSTOM HOOK
import { useMyToast } from "../Contexts/ToastContext";

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

function SingleTaskInfo({
  allTasks,
  SingleTask,
  setTasksObj,
  handleIsCompleted,
  handleDelete,
}) {
  // STATE SECTION
  // for Delete Modal, this came from <EditAlertModal/> component
  const { isOpen, onOpen, onClose } = useDisclosure();
  // useState of Edit Modal
  const [showEditModal, setShowEditModal] = useState(false);
  // useState for edit task
  const [ediInputs, setEdiInputs] = useState({
    taskTitle: SingleTask.taskTitle,
    taskDetails: SingleTask.taskDetails,
  });
  // === STATE SECTION ===

  const { customizeToast } = useMyToast();

  // HANDLING SHOW EDIT MODAL
  const handleShowingEditModal = () => {
    !showEditModal ? setShowEditModal(true) : setShowEditModal(false);
  };
  // ==== HANDLING SHOW EDIT MODAL====

  // HANDLING EDIT TASK
  const handleEditTaskClick = (taskId) => {
    const updateTask = allTasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          taskTitle: ediInputs.taskTitle,
          taskDetails: ediInputs.taskDetails,
        };
      } else {
        return task;
      }
    });

    setTasksObj(updateTask);
    localStorage.setItem("task", JSON.stringify(updateTask));
    customizeToast("تم تعديل بيانات المهمّة بنجاح", "info");
    // setEdiInputs({ ...ediInputs, taskTitle: "", taskDetails: "" });
  };
  // ==== HANDLING EDIT TASK ====

  return (
    <>
      {/* MODALS */}
      {/* Edit Modal */}
      <EditAlertModal
        OpenEditModal={showEditModal}
        onCloseEditModal={handleShowingEditModal}
        SingleTask={SingleTask}
        handleEdit={handleEditTaskClick} // this prop came from <TaskList />
        editInputsObj={ediInputs} // this prop came from <TaskList />
        setEditInputsObj={setEdiInputs} // this prop came from <TaskList />
      />
      {/* Delete Modal */}
      <DeleteAlertModal
        isOpen={isOpen}
        onClose={onClose}
        SingleTask={SingleTask}
        handleDelete={handleDelete} // this prop came from <TaskList />
      />
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
            <Text
              fontWeight={"bold"}
              textDecoration={SingleTask.isCompleted ? "line-through" : "none"}
            >
              {SingleTask.taskTitle}
            </Text>
            <Text
              textDecoration={SingleTask.isCompleted ? "line-through" : "none"}
            >
              {SingleTask.taskDetails}
            </Text>
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
                  handleIsCompleted(SingleTask.id);
                }}
                color={SingleTask.isCompleted ? "green.400" : "gray.400"}
                border={"2px"}
                borderColor={SingleTask.isCompleted ? "green.400" : "gray.400"}
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
