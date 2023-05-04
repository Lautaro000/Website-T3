import React, {useState} from "react";
import "./App.css";
import ScoreListView from "./paginas/ScoreListView";
import {BrowserRouter, Route, Routes, Switch} from "react-router-dom";
import LoginV from "./paginas/LoginV";
import Button from "./components/Button";
import GameView from "./paginas/GameView";
import ProfileView from "./paginas/ProfileView";
import UserScoreListView from "./paginas/UserScoreList";
import AdminView from "./paginas/AdminView";
import HomeView from "./paginas/HomeView";
import withAdminAuth from "./components/withAdminAuth";
import withAuth from "./components/withAuth";
//import SignUpV from "./paginas/SignUpV";
import SignUpV from "./paginas/SignUpV";
function App() {
  const logout = () => {
    localStorage.clear();
    window.location.reload();

  }

  // const [isAuthenticated, userHasAuthenticated] = useState(false);
  // useEffect(() => {
  //   onLoad();
  // }, []);
  // async function onLoad() {
  //   try {
  //     await Auth.currentSession();
  //     userHasAuthenticated(true);
  //   } catch (e) {
  //     alert(e);
  //   }
  // }


  return (
    <div>
      {/* <Switch>
        <UnauthenticatedRoute
          path="/login"
          component={LoginV}
          appProps={{ isAuthenticated }}
        />
        <AuthenticatedRoute
          path="/"
          
          appProps={{ isAuthenticated }}
        />
        <Route component={NotFound} />
      </Switch> */}


      {/* {localStorage.getItem("currentUser") ? <div>{localStorage.getItem("currentUser")} <Button onClick={logout} type="danger">Logout</Button></div>:<></>} */}
      {/* <BrowserRouter>
      <Routes>
      <Route path="/scores" element={<ScoreListView/>}></Route>
      <Route path="/login" element={<LoginV/>}></Route>
      <Route path="/game" element={<GameView/>}></Route>

      
      <Route path="/admin" element={<AdminView/>}></Route>
      
      <Route path="/" element={<HomeView/>}></Route>
      <Route path="/profile" element={<ProfileView/>}></Route>
      <Route path="/scores/:first_name" element={<UserScoreListView/>}></Route>
      </Routes>
      </BrowserRouter> */}
    {localStorage.getItem("token") ? 
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginV/>}></Route>
          <Route path="/signup" element={<SignUpV />} />
          <Route path="/" element={<HomeView/>}></Route>
          <Route path="/game" element={<GameView/>}></Route>
          <Route path="/admin" element={<AdminView />} ></Route>
          <Route path="/profile" element={<ProfileView />}></Route>
          <Route path="/scores" element={<ScoreListView/>}></Route>
          <Route path="/scores/:first_name" element={<UserScoreListView />} ></Route>
          
        </Routes>
      </BrowserRouter>
    </div>
    :<div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginV/>}></Route>
          <Route path="/" element={<HomeView/>}></Route>
          <Route path="/signup" element={<SignUpV />} />

          <Route path="/game" element={<LoginV/>}></Route>
          <Route path="/admin" element={<LoginV />} ></Route>
          <Route path="/profile" element={<LoginV />}></Route>
          <Route path="/scores" element={<LoginV/>}></Route>
          <Route path="/scores/:first_name" element={<LoginV />} ></Route>



        </Routes>
      </BrowserRouter>
    
    </div>
    }

{/* <BrowserRouter>
        <Routes>
        <Route path="/login" element={<LoginV/>}></Route>
          <Route path="/" element={<HomeView/>}></Route>
          <Route
            path="/game"
            element={withAuth(<GameView />)}
          ></Route>
          <Route
            path="/admin"
            element={withAuth(<AdminView />)}
          ></Route>
          <Route
            path="/profile"
            element={withAuth(<ProfileView />)}
          ></Route>
          <Route path="/scores" element={<ScoreListView/>}></Route>
          <Route
            path="/scores/:first_name"
            element={withAuth(<UserScoreListView />)}
          ></Route>
          
        </Routes>
      </BrowserRouter> */}
    </div>

  );
}

export default App;
