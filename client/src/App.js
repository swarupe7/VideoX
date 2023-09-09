import {Routes,Route} from "react-router-dom";
import Lobby from "./screens/lobby";
import RoomPage from "./screens/Room";
import Nav from "./screens/Nav";

function App() {
  return (
   <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Lobby />}/>
      <Route path="/room/:roomId" element={<RoomPage />} />
    </Routes>
   </>
  );
}

export default App;
