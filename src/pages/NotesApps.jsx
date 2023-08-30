import React from "react";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./DetailPage";
import ArchivePage from "./ArchivePage";
import AddNotePage from "./AddNotePage";
import HomePage from "./HomePage";
import Header from "../components/Header";
import { useEffect } from "react";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import { getUserLogged, putAccessToken } from "../utils/network-data";

function NotesApps() {
    const [authedUser, setAuthedUser] = React.useState(null);
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "dark");
    const [initializing, setInitializing] = React.useState(true);

    React.useEffect(() => {
        async function fetchUserData() {
          const { data } = await getUserLogged();
          setAuthedUser(data);
          setInitializing(false);
        }
    
        fetchUserData();
    
        return () => {
          setAuthedUser(null);
        };
      }, []);

    async function onLoginSucces({ accessToken }) {
        putAccessToken(accessToken);
    
        const { data } = await getUserLogged();
        setAuthedUser(data);
      }

      if (initializing) {
        return (
          <div className="app-container">
            <p>
              <strong>Loading Page</strong>
            </p>
          </div>
        );
      }

    if ( authedUser === null ) {
        return(
            <div>
                <Header/>
                <div  className="note-app__body">
                    <Routes>
                        <Route path="/*" element={<LoginPage loginSuccess={onLoginSucces}/>}/>
                        <Route path="/register" element={<RegisterPage/>}/>
                    </Routes>
                </div>
            </div>
        );
    }

    return(
        <div>
            <Header/>
            <div  className="note-app__body">
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                    <Route path="/detail/:id" element={<DetailPage/>}/>
                    <Route path="/archives" element={<ArchivePage/>}/>
                    <Route path="/new" element={<AddNotePage/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default NotesApps;