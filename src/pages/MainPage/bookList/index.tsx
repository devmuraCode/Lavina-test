import {Box, Button} from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "src/app/store/store";
import { ModalControlType } from "src/hooks/useModalControl";
import { getBooks } from "src/pages/MainPage/model/services/bookService";
import { BookModalPropsType } from "../index";
import { deleteBook } from "../model/services/bookService";
import { Grid } from "@mui/material";

type BookListTypesProps = {
  modalControl: ModalControlType<BookModalPropsType>;
};
const BookList = (props: BookListTypesProps) => {
  const { modalControl } = props;

  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.book);

  useEffect(() => {
    dispatch(getBooks(""));
  }, []);

  if (!state.data?.data) {
    return (
      <Typography sx={{ textAlign: "center" }} variant="h5" component="h5">
        There is no books yet
      </Typography>
    );
  }

  return (
    <Box sx={{ marginTop: "2rem" }}>
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {state.data?.data?.map((item) => {
            const { book, status } = item;
            const isRed = status === 0;
            const statusColor = isRed ? "green" : "red";
            return (
              <Grid item xs={2} sm={4} md={4}>
                <Card
                  key={item.id}
                  sx={{
                    maxWidth: 345,
                    border: isRed ? "2px solid green" : "2px solid red",
                  }}
                >
                  <p style={{ color: statusColor }}>{status}</p>
                  <CardMedia
                    sx={{ height: 140 }}
                    image={book.cover}
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {book.author}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {book.title}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      onClick={() =>
                        modalControl.openModal({ id: book.id, status: status })
                      }
                      size="small"
                    >
                      Update
                    </Button>
                    <Button
                      onClick={() => dispatch(deleteBook(book.id))}
                      size="small"
                    >
                      Delete
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
};
export default BookList;
