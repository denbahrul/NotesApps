import React from "react";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";

function NoteItem({id, title, createdAt, body, onDelete}) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <p className="note-item__title">{title}</p>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}/>
                <button className="note-item__archive-button">Arsipkan</button>
            </div>
        </div>
    )
}

export default NoteItem;