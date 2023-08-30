import React from "react";
import { useNavigate } from "react-router-dom";

function DeleteButton({id, onDelete}) {
    const navigate = useNavigate();

    return (
        <button className="note-item__delete-button" onClick={() => {onDelete(id); navigate("/")}}>Hapus</button>
    )
}

export default DeleteButton;