import { api_key } from "./api_key";

const urlName = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const fetchLink = `${urlName}${api_key}/scores`;

const getScores = async () => {
  const scores = await fetch(fetchLink)
    .then(resp => resp.json())
    .then(data => data.result);
  return scores;
};

const postData = async (newName, newScore) => {
  const score = await fetch(fetchLink, {
  method: 'POST',
  body: JSON.stringify({
    user: newName.value,
    score: newScore.value,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
  });
  return score;
};

export { getScores, postData };
