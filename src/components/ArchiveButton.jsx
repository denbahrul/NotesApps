import React from "react";

function ArchiveButton({id, isArchived, onArchive}) {
    return isArchived ? (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>Pindahkan</button>
    ) : (
        <button className="note-item__archive-button" onClick={() => onArchive(id)}>Arsipkan</button>
    )
}

export default ArchiveButton;