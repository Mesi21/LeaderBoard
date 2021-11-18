import './style.css';
import createHeader from './pageElements/header.js';
import createBoard from './pageElements/board.js';

const createPage = () => {
  const mainArea = document.getElementById('mainArea');
  const header = createHeader();
  const board = createBoard();
  mainArea.append(header, board);
};

createPage();
