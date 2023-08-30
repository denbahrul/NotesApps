import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import NotesApps from './pages/NotesApps';

// import style
import './styles/style.css';

const root = createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <NotesApps/>
    </BrowserRouter>
);