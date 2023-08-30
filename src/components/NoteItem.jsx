import React from "react";
import { showFormattedDate } from "../utils";
import DeleteButton from "./DeleteButton";
import ArchiveButton from "./ArchiveButton";
import { Link } from "react-router-dom";

function NoteItem({id, title, createdAt, body}) {
    return (
        <div className="note-item">
                <div className="note-item__content">
                    <p className="note-item__title">{title}</p>
                    <p className="note-item__date">{showFormattedDate(createdAt)}</p>
                    <p className="note-item__body">{body}</p>
                </div>
                <div className="note-item__action">
                    <button className="note-item__archive-button">
                        <Link to={`/detail/${id}`} className="link-detail">Detail</Link>
                    </button>
                </div>
        </div>
    )
}

export default NoteItem;