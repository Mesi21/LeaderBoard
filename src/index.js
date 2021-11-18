import './style.css';
import createHeader from './pageElements/header.js';
import createBoard from './pageElements/board.js';
import { getScores, postData } from './api/api_calls.js';

const createPage = () => {
  const mainArea = document.getElementById('mainArea');
  const header = createHeader();
  const board = createBoard();
  mainArea.append(header, board);
};

createPage();

const submitBtn = document.getElementById('addScoreForm');
const newName = document.getElementById('name');
const newScore = document.getElementById('score');
submitBtn.addEventListener('submit', (e) => {
  e.preventDefault();
  postData(newName, newScore);
  newName.value = '';
  newScore.value = '';
});

const scoresList = document.getElementById('scores-list');
const refresh = document.getElementById('refresh');

refresh.addEventListener('click', (e) => {
  e.preventDefault();
  getScores().then((v) => {
    if(scoresList.children.length !== v.length) {
      scoresList.innerHTML= '';
      let idLi = 1;
      v.forEach((player) => {
        const currLi = document.createElement('li');
        currLi.setAttribute('id', idLi);
        if (idLi % 2 === 0) {
          currLi.setAttribute('class', 'row-even');
        } else {
          currLi.setAttribute('class', 'row-odd');
        };
        idLi += 1;
        currLi.innerHTML = `${player.user}: ${player.score}`;
        scoresList.appendChild(currLi);
      });
    };
  });
});

getScores().then((t) => {
  let idLi = 1;
  t.forEach((player) => {
    const currLi = document.createElement('li');
    currLi.setAttribute('id', idLi);
    if (idLi % 2 === 0) {
      currLi.setAttribute('class', 'row-even');
    } else {
      currLi.setAttribute('class', 'row-odd');
    };
    idLi += 1;
    currLi.innerHTML = `${player.user}: ${player.score}`;
    scoresList.appendChild(currLi);
  });
});
