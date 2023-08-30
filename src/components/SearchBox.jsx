import React from "react";

function SearchBox({keyword, keywordChange}) {
    return (
        <input type="text" placeholder="Cari catatan ..." className="note-app_search" value={keyword} onChange={(event) => keywordChange(event.target.value)}/>
    )
}

export default SearchBox;