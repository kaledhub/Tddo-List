// IMPORT CHAKRA UI
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";

function EditAlertModal({
  // const [showEditModal, setShowEditModal] = useState(false); <SingleTaskInfo />
  OpenEditModal,
  onCloseEditModal,
  // ======================= EDIT MODAL STATE ==============================

  // const [tasks, setTasks] = useState(tasksList); from <TaskList />
  tasksObj,
  handleEdit,
  // ======================= TASKS STATE ==============================

  // const [ediInputs, setEdiInputs] = useState({ taskTitle: "", taskDetails: ""}); <TaskList />
  editInputsObj,
  setEditInputsObj,
  // ======================== EDIT INPUTS STATE=========================
}) {
  return (
    <>
      <Modal
        textAlign={"right"}
        size={"lg"}
        isOpen={OpenEditModal}
        onClose={onCloseEditModal}
      >
        <ModalOverlay />
        <ModalContent mt={"80"} textAlign={"right"}>
          <ModalHeader mt={"5"}>تعديل بيانات المهمّة</ModalHeader>
          <ModalCloseButton size={"sm"} _hover={{ bg: "red.300" }} />
          <ModalBody>
            <Input
              value={editInputsObj.taskTitle}
              onChange={(event) => {
                setEditInputsObj({
                  ...editInputsObj,
                  taskTitle: event.target.value,
                });
              }}
              variant="flushed"
              placeholder="عنوان المهمة"
              textAlign={"right"}
              borderColor={"blue.400"}
            />
            <Input
              value={editInputsObj.taskDetails}
              onChange={(event) => {
                setEditInputsObj({
                  ...editInputsObj,
                  taskDetails: event.target.value,
                });
              }}
              variant="flushed"
              placeholder="تفاصيل المهمة"
              textAlign={"right"}
              borderColor={"blue.400"}
            />
          </ModalBody>

          <ModalFooter display={"flex"} gap={3}>
            <Button
              bg="blue.400"
              color={"gray.100"}
              _hover={{ bg: "blue.500" }}
              onClick={() => {
                handleEdit(tasksObj.id);
                onCloseEditModal();
              }}
            >
              تعديل
            </Button>

            <Button
              bg="red.300"
              color={"gray.100"}
              _hover={{ bg: "red.400" }}
              onClick={onCloseEditModal}
            >
              إغلاق
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default EditAlertModal;
