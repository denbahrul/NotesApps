import React from "react";

function NoteItem({title, createdAt, body}) {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <p className="note-item__title">{title}</p>
                <p className="note-item__date">{createdAt}</p>
                <p className="note-item__body">{body}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button">Hapus</button>
                <button className="note-item__archive-button">Arsipkan</button>
            </div>
        </div>
    )
}

export default NoteItem;