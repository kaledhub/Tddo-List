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
  Text,
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
            <Text>هل أنت متأكد من حذف المهمّة؟</Text>
          </ModalBody>

          <ModalFooter display={"flex"} gap={3}>
            <Button bg="red.300" color={"gray.100"} _hover={{ bg: "red.400" }}>
              نعم، قم بحذف المهمّة
            </Button>

            <Button
              bg="blue.400"
              color={"gray.100"}
              _hover={{ bg: "blue.500" }}
              onClick={onClose}
            >
              تراجع عن الحذف
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DeleteAlertModal;
