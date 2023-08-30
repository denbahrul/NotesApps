import React from "react";
import MainPage from "./MainPage";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./DetailPage";
import ArchivePage from "./ArchivePage";
import AddNotePage from "./AddNotePage";
import HomePage from "./HomePage";
import Header from "../components/Header";

function NotesApps() {
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
    )
}

export default NotesApps;