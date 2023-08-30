import React from "react";
import FormInput from "../components/FormInput";
import { useNavigate } from "react-router-dom";
import { addNote } from "../utils/local-data";

function AddNotePage() {
    const navigate = useNavigate();

    function onAddNoteHandler(note) {
      addNote(note);
      navigate("/");
    }

    return (
        <div>
            <FormInput addNotes={onAddNoteHandler}/>
        </div>
    )
}

export default AddNotePage;