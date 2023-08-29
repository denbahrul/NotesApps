import React from "react";
import NoteItem from "./NoteItem";

function NoteList({notes, onDelete, onArchive, isArchived}) {
    return notes.length !== 0 ? (
        <div className="notes-list">
            {notes.map((note) => <NoteItem key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} isArchived={note.archived} {...note}/> )}
        </div>
    ) : (
        <div className="notes-list__empty-message">
            <p>Tidak ada catatan</p>
        </div>
    )
}

export default NoteList;