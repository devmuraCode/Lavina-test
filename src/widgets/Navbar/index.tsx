import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "src/app/store/store";
import { authActions } from "src/pages/Register/model/slice/authSlice";

type NavbarTypes = {
  handleModalOpen?: () => void;
};

function Navbar(props: NavbarTypes) {
  const { handleModalOpen } = props;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handlerLogout = () => {
    dispatch(authActions.logout());
    navigate("/signUp");
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar>
          <Box sx={{ flexGrow: 1, display: { md: "flex" } }}>
            <Button variant="contained" onClick={handleModalOpen}>
              ADD BOOK
            </Button>
          </Box>
          <Button
            onClick={handlerLogout}
            type="submit"
            variant="contained"
            color="error"
          >
            lOGOUT
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
