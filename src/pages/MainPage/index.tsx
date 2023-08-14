import { Box, Modal } from "@mui/material";
import { useModalControl } from "src/hooks/useModalControl";
import BookList from "src/pages/MainPage/bookList";
import Navbar from "src/widgets/Navbar";
import AddEditbookModal from "./addEditBookModal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export type BookModalPropsType = {
  id: number;
  status: number;
};

const MainPage = () => {
  const bookModalControl = useModalControl<BookModalPropsType>();

  return (
    <Box>
      <Navbar handleModalOpen={bookModalControl.openModal} />
      <BookList modalControl={bookModalControl} />

      <Modal
        open={bookModalControl.visible}
        onClose={bookModalControl.closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <AddEditbookModal modalControl={bookModalControl} />
        </Box>
      </Modal>
    </Box>
  );
};

export default MainPage;
