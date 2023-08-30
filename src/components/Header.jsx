import React from "react";
import SearchBox from "./SearchBox";
import { Link } from "react-router-dom";

function Header ({onSearch, search}) {
    return (
        <div className="note-app__header">
            <h1><Link to="/" className="link">NotesApps</Link></h1>
            <div className="note-app_navigasi">
            <p><Link to="/new" className="link-detail">+ Buat Catatan</Link></p>
                <p><Link to="/" className="link">My Notes</Link></p>
                <p><Link to="/archives" className="link">Arsip</Link></p>
            </div>
        </div>
    )
}

export default Header;