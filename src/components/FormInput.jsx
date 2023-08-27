import React from "react";

function FormInput() {
    return (
        <div className="note-input">
            <h2 className="note-input__title">Buat catatan</h2>
            <form className="note-input__body">
                <p className="note-input__title__char-limit">Sisa karakter: 50</p>
                <input type="text" placeholder="Judul catatan..."/>
                <textarea type="text" placeholder="Isi catatan..."/>
                <button type="submit">Buat</button>
            </form>
        </div>
    )
}

export default FormInput;