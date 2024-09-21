import "./assets/css/style.css";
import Header from "./components/Header";
import VideoPage from "./Pages/VideoPage";
import PostDetailPage from "./Pages/PostDetailPage";
import LoginPage from "./Pages/Loginpage";
import ForumPage from "./Pages/ForumPage";
import ProfilPage from "./Pages/ProfilPage";
import WatchPage from "./Pages/WatchPage";
import {Routes, Route} from "react-router-dom";


function App() {
  return (
    <>
      <Header />
      <main>
          <Routes> 
            <Route path="/" element={<LoginPage />} />
            <Route path="/post" element={<PostDetailPage/>} />
            <Route path="/forum" element={<ForumPage/>} />
            <Route path="/profil" element={<ProfilPage/>} />
            <Route path="/watch/:id" element={<WatchPage/>} />
          </Routes>
      </main>  
    </>
  );
}

export default App;
