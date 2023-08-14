import { useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { useAppDispatch, useAppSelector } from "src/app/store/store";
import { getUser } from "src/entities/User/model/services/getUser";
import MainPage from "src/pages/MainPage";
import Register from "./pages/Register";
function App() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const user = useAppSelector((state) => state.user.user);

  useEffect(() => {
    dispatch(getUser(""));
  }, []);

  useEffect(() => {
    if (!user) {
      navigate("/signUp");
    } else {
      navigate("/");
    }
  }, [user]);

  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/signUp" element={<Register />} />
        <Route path="/" element={<MainPage />} />
      </Routes>
    </>
  );
}
export default App;
