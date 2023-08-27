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
                <h2>Catatan Aktif</h2>
                <NoteList/>
                <h2>Arsip</h2>
                <NoteList/>
            </div>
        </div>
    )
}

export default MainPage;