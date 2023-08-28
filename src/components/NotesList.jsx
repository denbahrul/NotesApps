import React from "react";
import NoteItem from "./NoteItem";
import { getInitialData } from "../utils/index";

function NoteList() {
    const notes = getInitialData();

    return(
        <div className="notes-list">
            {notes.map((note) => <NoteItem key={note.id} {...note}/> )}
        </div>
    )
}

export default NoteList;