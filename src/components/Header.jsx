import React from "react";

function Header ({onSearch, search}) {
    return (
        <div className="note-app__header">
            <h1>My Notes</h1>
            <input type="text" placeholder="Cari catatan ..." value={search} onChange={onSearch}/>
        </div>
    )
}

export default Header;