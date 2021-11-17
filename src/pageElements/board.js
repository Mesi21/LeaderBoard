const createBoard = (arr) => {
  const tableArea = document.createElement('div');
  const tableLeft = document.createElement('div');
  const tableRight = document.createElement('div');
  const titleLeft = document.createElement('div');
  const titleRecent = document.createElement('h1');
  const btnRefresh = document.createElement('button');
  const scoresArea = document.createElement('div');
  const scoresList = document.createElement('ul');
  const titleAdd = document.createElement('h1');
  const formAddScore = document.createElement('form');
  const inputName = document.createElement('input');
  const inputScore = document.createElement('input');
  const addBtn = document.createElement('input');
  tableArea.setAttribute('id', 'board');
  tableArea.setAttribute('class', 'f-row');
  tableLeft.setAttribute('class', 'f-col');
  tableLeft.setAttribute('id', 'left-col');
  tableRight.setAttribute('class', 'f-col');
  tableRight.setAttribute('id', 'right-col');
  titleLeft.setAttribute('class', 'f-row');
  titleLeft.setAttribute('id', 'left');
  btnRefresh.innerHTML = 'Refresh';
  titleRecent.innerHTML = 'Recent Scores';
  scoresArea.setAttribute('class', 'f-col');
  scoresArea.setAttribute('id', 'allScores');
  scoresList.setAttribute('id', 'scores-list');
  titleAdd.innerHTML = 'Add your score';
  formAddScore.setAttribute('id', 'addScoreForm');
  formAddScore.setAttribute('class', 'f-col');
  inputName.setAttribute('type', 'text');
  inputName.setAttribute('name', 'yourName');
  inputScore.setAttribute('type', 'text');
  inputScore.setAttribute('name', 'yourScore');
  addBtn.setAttribute('type', 'submit');
  addBtn.setAttribute('value', 'Submit');
  addBtn.setAttribute('id', 'add-btn');
  let idLi = 1;
  arr.forEach((player) => {
    const currLi = document.createElement('li');
    currLi.setAttribute('id', idLi);
    if (idLi % 2 === 0) {
      currLi.setAttribute('class', 'row-even');
    } else {
      currLi.setAttribute('class', 'row-odd');
    }
    idLi += 1;
    currLi.innerHTML = `${player.name}: ${player.score}`;
    scoresList.appendChild(currLi);
  });
  formAddScore.append(inputName, inputScore, addBtn);
  titleLeft.append(titleRecent, btnRefresh);
  scoresArea.appendChild(scoresList);
  tableLeft.append(titleLeft, scoresArea);
  tableRight.append(titleAdd, formAddScore);
  tableArea.append(tableLeft, tableRight);
  return tableArea;
};

export default createBoard;
