import React from "react";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";

function NoteItem({id, title, createdAt, body, onDelete, onArchive, isArchived}) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <p className="note-item__title">{title}</p>
                <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <DeleteButton id={id} onDelete={onDelete}/>
                <ArchiveButton id={id} onArchive={onArchive} isArchived={isArchived}/>
            </div>
        </div>
    )
}

export default NoteItem;