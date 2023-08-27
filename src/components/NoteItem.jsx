import React from "react";

function NoteItem() {
    return (
        <div className="note-item">
            <div className="note-item__content">
                <p className="note-item__title">Judul</p>
                <p className="note-item__date">Tanggal</p>
                <p className="note-item__body">Isi</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__delete-button">Hapus</button>
                <button className="note-item__archive-button">Arsipkan</button>
            </div>
        </div>
    )
}

export default NoteItem;