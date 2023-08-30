import React from "react";
import NoteDetail from "../components/NoteDetail";
import { getAllNotes, getNote, archiveNote, unarchiveNote, deleteNote } from "../utils/local-data";
import { useParams } from "react-router-dom";

function DetailPageWrapper() {
    const { id } = useParams();

    return <DetailPage id={id}/>;
  }

class DetailPage extends React.Component {
    constructor(props) {
        super(props);
     
        this.state = {
          notes: getNote(props.id)
        };

        this.onDeleteHandler = this.onDeleteHandler.bind(this);
        this.onArchiveHandler = this.onArchiveHandler.bind(this);
      }

      onDeleteHandler(id) {
        deleteNote(id);
    
        this.setState(() => {
          return {
            notes: getAllNotes(),
          };
        });
      }
    
      onArchiveHandler(id) {
        const isArchived = this.state.notes.archived;
        isArchived ? unarchiveNote(id) : archiveNote(id);
    
        this.setState(() => {
          return {
            notes: getAllNotes(),
          };
        });
      }

    render() {
        return (
            <NoteDetail {...this.state.notes} onDelete={this.onDeleteHandler} onArchive={this.onArchiveHandler} isArchived={this.state.notes.archived} />
        )
    }
}

export default DetailPageWrapper;