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

function DeleteAlertModal({ isOpen, onClose }) {
  return (
    <>
      <Modal textAlign={"right"} size={"lg"} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent mt={"80"} textAlign={"right"}>
          <ModalHeader mt={"5"}>حذف المهمّة</ModalHeader>
          <ModalCloseButton size={"sm"} _hover={{ bg: "red.300" }} />
          <ModalBody>
            <Input
              variant="flushed"
              placeholder="عنوان المهمة"
              textAlign={"right"}
              borderColor={"blue.400"}
            />
            <Input
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
            >
              تعديل
            </Button>

            <Button
              bg="red.300"
              color={"gray.100"}
              _hover={{ bg: "red.400" }}
              onClick={onClose}
            >
              إغلاق
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteAlertModal;
