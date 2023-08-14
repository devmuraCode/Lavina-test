import { TextField, Button } from "@mui/material";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/store/store";
import { ModalControlType } from "src/hooks/useModalControl";
import {
  createBook,
  updateBook,
} from "src/pages/MainPage/model/services/bookService";
import { BookModalPropsType } from "..";

type AddEditBookPropTypes = {
  modalControl: ModalControlType<BookModalPropsType>;
};

const AddEditbookModal = (props: AddEditBookPropTypes) => {
  const { modalControl } = props;
  const dispatch = useAppDispatch();

  const state = useAppSelector((state) => state.book);

  useEffect(() => {}, []);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);

    if (modalControl.id) {
      const data: any = {
        status: formData.get("status"),
        id: modalControl.id,
      };

      const response = await dispatch(updateBook(data));

      if (response.payload !== "error") {
        modalControl.closeModal();
      }
    } else {
      const data: any = {
        isbn: formData.get("isbn"),
      };

      const response = await dispatch(createBook(data));

      if (response.payload !== "error") {
        modalControl.closeModal();
      }
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField
          margin="normal"
          required
          fullWidth
          name={modalControl.id ? "status" : "isbn"}
          label={modalControl.id ? "Status" : "isbn"}
          type={modalControl.id ? "number" : "text"}
        />
        <Button
          disabled={state.isLoading}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          {modalControl.id ? "Edit article" : "Add book"}
        </Button>
      </form>
    </div>
  );
};

export default AddEditbookModal;
