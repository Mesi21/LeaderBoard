import './style.css';
import createHeader from './pageElements/header.js';
import createBoard from './pageElements/board.js';

const mockScores = [
  {
    name: 'Name 1',
    score: 10,
  },
  {
    name: 'Name 2',
    score: 30,
  },
  {
    name: 'Name 3',
    score: 15,
  },
  {
    name: 'Name 4',
    score: 21,
  },
];

const displayPage = () => {
  const mainArea = document.getElementById('mainArea');
  const header = createHeader();
  const board = createBoard(mockScores);
  mainArea.append(header, board);
};

displayPage();
