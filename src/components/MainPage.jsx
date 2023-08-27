import React from "react";
import Header from "./Header";
import FormInput from "./FormInput";
import NoteList from "./NotesList";

function MainPage() {
    return (
        <div>
            <Header/>
            <div className="note-app__body">
                <FormInput/>
                <NoteList/>
                <p>Arsip Catatan</p>
            </div>
        </div>
    )
}

export default MainPage;