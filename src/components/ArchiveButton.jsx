import React from "react";
import { useNavigate } from "react-router-dom";

function ArchiveButton({id, isArchived, onArchive}) {
    const navigate = useNavigate();

    return isArchived ? (
        <button className="note-item__archive-button" onClick={() => {onArchive(id); navigate("/")}}>Pindahkan</button>
    ) : (
        <button className="note-item__archive-button" onClick={() => {onArchive(id); navigate("/archives")}}>Arsipkan</button>
    )
}

export default ArchiveButton;