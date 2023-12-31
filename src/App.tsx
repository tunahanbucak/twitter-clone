import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Explore from "./pages/Explore";
import Notifications from "./pages/Notifications";
import MainLayout from "./layouts/MainLayout";
import Messages from "./pages/Messages";
import Lists from "./pages/Lists";
import Communities from "./pages/Communities";
import Premium from "./pages/Premium";
import Profile from "./pages/Profile";
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout children={undefined} />} />
        <Route index element={<Home />} />
        <Route path="explore" element={<Explore />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="messages" element={<Messages />} />
        <Route path="lists" element={<Lists />} />
        <Route path="communities" element={<Communities />} />
        <Route path="premium" element={<Premium />} />
        <Route path="profile" element={<Profile />} />
        <Route path="/:slug" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
