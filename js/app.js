import { getRandomIntegerBetween, setHTMLTitle } from "./utils/utils.js";
import { APP_NAME, APP_VERSION } from "../properties.js";
import { BLOCS, CATEGORIES } from "./data.js";

/* ############################################################################
--------------------------------- CONSTANTES ---------------------------------
############################################################################ */
const CURRENT_BLOCS = [
  { id: 'A1', label: '', fontSize: '', state: 'untouched' },
  { id: 'A2', label: '', fontSize: '', state: 'untouched' },
  { id: 'A3', label: '', fontSize: '', state: 'untouched' },
  { id: 'A4', label: '', fontSize: '', state: 'untouched' },
  { id: 'A5', label: '', fontSize: '', state: 'untouched' },

  { id: 'B1', label: '', fontSize: '', state: 'untouched' },
  { id: 'B2', label: '', fontSize: '', state: 'untouched' },
  { id: 'B3', label: '', fontSize: '', state: 'untouched' },
  { id: 'B4', label: '', fontSize: '', state: 'untouched' },
  { id: 'B5', label: '', fontSize: '', state: 'untouched' },

  { id: 'C1', label: '', fontSize: '', state: 'untouched' },
  { id: 'C2', label: '', fontSize: '', state: 'untouched' },
  { id: 'C3', label: '', fontSize: '', state: 'untouched' },
  { id: 'C4', label: '', fontSize: '', state: 'untouched' },
  { id: 'C5', label: '', fontSize: '', state: 'untouched' },

  { id: 'D1', label: '', fontSize: '', state: 'untouched' },
  { id: 'D2', label: '', fontSize: '', state: 'untouched' },
  { id: 'D3', label: '', fontSize: '', state: 'untouched' },
  { id: 'D4', label: '', fontSize: '', state: 'untouched' },
  { id: 'D5', label: '', fontSize: '', state: 'untouched' },

  { id: 'E1', label: '', fontSize: '', state: 'untouched' },
  { id: 'E2', label: '', fontSize: '', state: 'untouched' },
  { id: 'E3', label: '', fontSize: '', state: 'untouched' },
  { id: 'E4', label: '', fontSize: '', state: 'untouched' },
  { id: 'E5', label: '', fontSize: '', state: 'untouched' },
];

/* ############################################################################
---------------------------------- FONCTIONS ----------------------------------
############################################################################ */

// INTERACTIONS UTILISATEUR -------------------------------
const onBlocClick = (blocId) => {
  let scoreToAdd = 0;
  //console.log(blocId);
  const bloc = document.getElementById(blocId);
  if (!bloc.classList.contains('x4')) {
    if (bloc.classList.contains('untouched')) {
      bloc.classList.replace('untouched', 'touched');
      scoreToAdd += 10;
    } else if (bloc.classList.contains('touched')) {
      if (!bloc.classList.contains('x2')) {
        bloc.classList.add('x2');
        scoreToAdd += 20;
      } else {
        if (!bloc.classList.contains('x3')) {
          bloc.classList.add('x3');
          scoreToAdd += 40;
        } else {
          if (!bloc.classList.contains('x4')) {
            bloc.classList.add('x4');
            scoreToAdd += 80;
          }
        }
      }
    }
    const lineId = blocId[0];
    const columnId = blocId[1];
  
    if (getLineTouchedBlocs(lineId) == 5) {
      scoreToAdd += setLineBingo(lineId, blocId);
    }
    if (getColumnTouchedBlocs(columnId) == 5) {
      scoreToAdd += setColumnBingo(columnId, blocId);
    }

    if (blocId == 'A1' || blocId == 'B2' || blocId == 'C3' || blocId == 'D4' || blocId == 'E5') {

    }
    if (blocId == 'A5' || blocId == 'B4' || blocId == 'C3' || blocId == 'D2' || blocId == 'E1') {
      
    }
  }

  console.log('+ ' + scoreToAdd);
  totalScore += scoreToAdd;
  setTotalScore();
}
window.onBlocClick = onBlocClick;

// GÉNÉRATION DOM -----------------------------------------

const getCategoriesButtons = () => {
  let txt = `<div class="buttons-container">`;
  CATEGORIES.forEach(category => {
    txt += `<button onclick="setPlayingBoard(${category.id})" class="category-button" style="background-image: url('${category.img}');"><span>${category.label}</span></button>`;
  });
  txt += `</div>`;
  return txt;
}

const getRandomBlocsByCategoryId = (categoryId) => {
  //console.table(BLOCS);
  let eligibleBlocs = BLOCS.filter((element) => element.categories.includes(categoryId));
  //console.table(eligibleBlocs);
  let rndArray = [];
  for (let index = 0; index < 25; index++) {
    let rndIndex = getRandomIntegerBetween(0, eligibleBlocs.length - 1);
    rndArray.push(eligibleBlocs[rndIndex]);
    eligibleBlocs.splice(rndIndex, 1);
    //console.table(eligibleBlocs);
  };
  //console.table(rndArray);
  return rndArray;
}

const setCurrentBlocsLabels = (categoryId) => {
  const rndArray = getRandomBlocsByCategoryId(categoryId);
  let currentIndex = 0;
  CURRENT_BLOCS.forEach(currentBloc => {
    currentBloc.label = rndArray[currentIndex].label;
    currentBloc.fontSize = rndArray[currentIndex].fontSize;
    currentIndex += 1;
  });
}

const getLineTouchedBlocs = (lineId) => {
  let touchedBlocks = 0;
  for (let index = 0; index < 5; index++) {
    let element = document.getElementById(`${lineId}${index + 1}`);
    if (element.classList.contains('touched')) {
      touchedBlocks += 1;
    }
  }
  return touchedBlocks;
}

const getColumnTouchedBlocs = (columnId) => {
  let touchedBlocks = 0;
  const CURRENT_BLOCS = ['A', 'B', 'C', 'D', 'E'];
  for (let index = 0; index < 5; index++) {
    let element = document.getElementById(`${CURRENT_BLOCS[index]}${columnId}`);
    if (element.classList.contains('touched')) {
      touchedBlocks += 1;
    }
  }
  return touchedBlocks;
}

const setLineBingo = (lineId, blocId) => {
  let scoreToAdd = 0;

  let shouldPassEverythingInX2 = false;
  let shouldPassEverythingInX3 = false;
  let shouldPassEverythingInX4 = false;

  for (let index = 0; index < 5; index++) {
    let element = document.getElementById(`${lineId}${index + 1}`);
    if (element.classList.contains('bingo')) {
      if (!(element.getAttribute('id') == blocId)) {
        if ((!element.classList.contains('x2') && document.getElementById(blocId).classList.contains('x2'))
          || (element.classList.contains('x2') && !(document.getElementById(blocId).classList.contains('x2')))) {
          shouldPassEverythingInX2 = true;
        } 

        if ((!element.classList.contains('x3') && document.getElementById(blocId).classList.contains('x3')) 
        || (element.classList.contains('x3') && !(document.getElementById(blocId).classList.contains('x3')))) {
          shouldPassEverythingInX3 = true;
        } 

        if ((!element.classList.contains('x4') && document.getElementById(blocId).classList.contains('x4')) 
        || (element.classList.contains('x4') && !(document.getElementById(blocId).classList.contains('x4')))) {
          shouldPassEverythingInX4 = true;
        }
      }
    } else {
      element.classList.add('bingo');
      if (element.classList.contains('x2') && !(document.getElementById(blocId).classList.contains('x2'))) {
        shouldPassEverythingInX2 = true;
      }
      if (element.classList.contains('x3') && !(document.getElementById(blocId).classList.contains('x3'))) {
        shouldPassEverythingInX3 = true;
      }
      if (element.classList.contains('x4') && !(document.getElementById(blocId).classList.contains('x4'))) {
        shouldPassEverythingInX4 = true;
      }
    }
  }

  if (shouldPassEverythingInX2) {
    for (let index = 0; index < 5; index++) {
      let element = document.getElementById(`${lineId}${index + 1}`);
      if (!element.classList.contains('x2')) {
        element.classList.add('x2');
      }
    }
  }
  if (shouldPassEverythingInX3) {
    for (let index = 0; index < 5; index++) {
      let element = document.getElementById(`${lineId}${index + 1}`);
      if (!element.classList.contains('x3')) {
        element.classList.add('x3');
      }
    }
  }
  if (shouldPassEverythingInX4) {
    for (let index = 0; index < 5; index++) {
      let element = document.getElementById(`${lineId}${index + 1}`);
      if (!element.classList.contains('x4')) {
        element.classList.add('x4');
      }
    }
  }

  if (shouldPassEverythingInX4) {
    scoreToAdd += 800;
  } else if (shouldPassEverythingInX3) {
    scoreToAdd += 400;
  } else if (shouldPassEverythingInX2) {
    scoreToAdd += 200;
  } else {
    scoreToAdd += 100;
  }

  return scoreToAdd;
}

const setColumnBingo = (columnId, blocId) => {
  let scoreToAdd = 0;
  
  const CURRENT_BLOCS = ['A', 'B', 'C', 'D', 'E'];

  let shouldPassEverythingInX2 = false;
  let shouldPassEverythingInX3 = false;
  let shouldPassEverythingInX4 = false;

  for (let index = 0; index < 5; index++) {
    let element = document.getElementById(`${CURRENT_BLOCS[index]}${columnId}`);
    if (element.classList.contains('bingo')) {
      if (!(element.getAttribute('id') == blocId)) {
        if ((!element.classList.contains('x2') && document.getElementById(blocId).classList.contains('x2'))
          || (element.classList.contains('x2') && !(document.getElementById(blocId).classList.contains('x2')))) {
          shouldPassEverythingInX2 = true;
        } 

        if ((!element.classList.contains('x3') && document.getElementById(blocId).classList.contains('x3')) 
        || (element.classList.contains('x3') && !(document.getElementById(blocId).classList.contains('x3')))) {
          shouldPassEverythingInX3 = true;
        } 

        if ((!element.classList.contains('x4') && document.getElementById(blocId).classList.contains('x4')) 
        || (element.classList.contains('x4') && !(document.getElementById(blocId).classList.contains('x4')))) {
          shouldPassEverythingInX4 = true;
        }
      }
    } else {
      element.classList.add('bingo');
      if (element.classList.contains('x2') && !(document.getElementById(blocId).classList.contains('x2'))) {
        shouldPassEverythingInX2 = true;
      }
      if (element.classList.contains('x3') && !(document.getElementById(blocId).classList.contains('x3'))) {
        shouldPassEverythingInX3 = true;
      }
      if (element.classList.contains('x4') && !(document.getElementById(blocId).classList.contains('x4'))) {
        shouldPassEverythingInX4 = true;
      }
    }
  }

  if (shouldPassEverythingInX2) {
    for (let index = 0; index < 5; index++) {
      let element = document.getElementById(`${CURRENT_BLOCS[index]}${columnId}`);
      if (!element.classList.contains('x2')) {
        element.classList.add('x2');
      }
    }
  }
  if (shouldPassEverythingInX3) {
    for (let index = 0; index < 5; index++) {
      let element = document.getElementById(`${CURRENT_BLOCS[index]}${columnId}`);
      if (!element.classList.contains('x3')) {
        element.classList.add('x3');
      }
    }
  }
  if (shouldPassEverythingInX4) {
    for (let index = 0; index < 5; index++) {
      let element = document.getElementById(`${CURRENT_BLOCS[index]}${columnId}`);
      if (!element.classList.contains('x4')) {
        element.classList.add('x4');
      }
    }
  }

  if (shouldPassEverythingInX4) {
    scoreToAdd += 800;
  } else if (shouldPassEverythingInX3) {
    scoreToAdd += 400;
  } else if (shouldPassEverythingInX2) {
    scoreToAdd += 200;
  } else {
    scoreToAdd += 100;
  }

  return scoreToAdd;
}

const setPlayingBoard = (categoryId) => {
  setCurrentBlocsLabels(categoryId);
  const currentCategory = CATEGORIES[categoryId - 1];

  const main = document.getElementById('main');
  main.style.opacity = 0;
  setTimeout(() => {
    main.innerHTML = ``;
  
    main.innerHTML = `
      <div class="top-board">
        <span id="categoryLabel">${currentCategory.label}</span>
        <span><span id="totalScore">0</span>pts</span>
      </div>
  
      <div class="playing-board">
        <div id="A" class="playing-board-line">
          <button id="${CURRENT_BLOCS[0].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[0].id}')" style="font-size: ${CURRENT_BLOCS[0].fontSize};">${CURRENT_BLOCS[0].label}</button>
          <button id="${CURRENT_BLOCS[1].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[1].id}')" style="font-size: ${CURRENT_BLOCS[1].fontSize};">${CURRENT_BLOCS[1].label}</button>
          <button id="${CURRENT_BLOCS[2].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[2].id}')" style="font-size: ${CURRENT_BLOCS[2].fontSize};">${CURRENT_BLOCS[2].label}</button>
          <button id="${CURRENT_BLOCS[3].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[3].id}')" style="font-size: ${CURRENT_BLOCS[3].fontSize};">${CURRENT_BLOCS[3].label}</button>
          <button id="${CURRENT_BLOCS[4].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[4].id}')" style="font-size: ${CURRENT_BLOCS[4].fontSize};">${CURRENT_BLOCS[4].label}</button>
        </div>
  
        <div id="B" class="playing-board-line">
          <button id="${CURRENT_BLOCS[5].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[5].id}')" style="font-size: ${CURRENT_BLOCS[5].fontSize};">${CURRENT_BLOCS[5].label}</button>
          <button id="${CURRENT_BLOCS[6].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[6].id}')" style="font-size: ${CURRENT_BLOCS[6].fontSize};">${CURRENT_BLOCS[6].label}</button>
          <button id="${CURRENT_BLOCS[7].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[7].id}')" style="font-size: ${CURRENT_BLOCS[7].fontSize};">${CURRENT_BLOCS[7].label}</button>
          <button id="${CURRENT_BLOCS[8].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[8].id}')" style="font-size: ${CURRENT_BLOCS[8].fontSize};">${CURRENT_BLOCS[8].label}</button>
          <button id="${CURRENT_BLOCS[9].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[9].id}')" style="font-size: ${CURRENT_BLOCS[9].fontSize};">${CURRENT_BLOCS[9].label}</button>
        </div>
  
        <div id="C" class="playing-board-line">
          <button id="${CURRENT_BLOCS[10].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[10].id}')" style="font-size: ${CURRENT_BLOCS[10].fontSize};">${CURRENT_BLOCS[10].label}</button>
          <button id="${CURRENT_BLOCS[11].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[11].id}')" style="font-size: ${CURRENT_BLOCS[11].fontSize};">${CURRENT_BLOCS[11].label}</button>
          <button id="${CURRENT_BLOCS[12].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[12].id}')" style="font-size: ${CURRENT_BLOCS[12].fontSize};">${CURRENT_BLOCS[12].label}</button>
          <button id="${CURRENT_BLOCS[13].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[13].id}')" style="font-size: ${CURRENT_BLOCS[13].fontSize};">${CURRENT_BLOCS[13].label}</button>
          <button id="${CURRENT_BLOCS[14].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[14].id}')" style="font-size: ${CURRENT_BLOCS[14].fontSize};">${CURRENT_BLOCS[14].label}</button>
        </div>
  
        <div id="D" class="playing-board-line">
          <button id="${CURRENT_BLOCS[15].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[15].id}')" style="font-size: ${CURRENT_BLOCS[15].fontSize};">${CURRENT_BLOCS[15].label}</button>
          <button id="${CURRENT_BLOCS[16].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[16].id}')" style="font-size: ${CURRENT_BLOCS[16].fontSize};">${CURRENT_BLOCS[16].label}</button>
          <button id="${CURRENT_BLOCS[17].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[17].id}')" style="font-size: ${CURRENT_BLOCS[17].fontSize};">${CURRENT_BLOCS[17].label}</button>
          <button id="${CURRENT_BLOCS[18].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[18].id}')" style="font-size: ${CURRENT_BLOCS[18].fontSize};">${CURRENT_BLOCS[18].label}</button>
          <button id="${CURRENT_BLOCS[19].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[19].id}')" style="font-size: ${CURRENT_BLOCS[19].fontSize};">${CURRENT_BLOCS[19].label}</button>
        </div>
  
        <div id="E" class="playing-board-line">
          <button id="${CURRENT_BLOCS[20].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[20].id}')" style="font-size: ${CURRENT_BLOCS[20].fontSize};">${CURRENT_BLOCS[20].label}</button>
          <button id="${CURRENT_BLOCS[21].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[21].id}')" style="font-size: ${CURRENT_BLOCS[21].fontSize};">${CURRENT_BLOCS[21].label}</button>
          <button id="${CURRENT_BLOCS[22].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[22].id}')" style="font-size: ${CURRENT_BLOCS[22].fontSize};">${CURRENT_BLOCS[22].label}</button>
          <button id="${CURRENT_BLOCS[23].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[23].id}')" style="font-size: ${CURRENT_BLOCS[23].fontSize};">${CURRENT_BLOCS[23].label}</button>
          <button id="${CURRENT_BLOCS[24].id}" class="bloc untouched" onclick="onBlocClick('${CURRENT_BLOCS[24].id}')" style="font-size: ${CURRENT_BLOCS[24].fontSize};">${CURRENT_BLOCS[24].label}</button>
        </div>
      </div>
  
      <div class="bottom-board">
        <span></span>
      </div>
    `;
    setTimeout(() => {
      main.style.opacity = 1;
    }, 100);
  }, 200);
}
window.setPlayingBoard = setPlayingBoard;

const setTotalScore = () => {
  document.getElementById('totalScore').innerHTML = totalScore;
}

/* ############################################################################
---------------------------------- EXECUTION ----------------------------------
############################################################################ */

// Auto ---------------------------------------------------


// Manuelle -----------------------------------------------

setHTMLTitle(APP_NAME);
const year = new Date().getFullYear();
const main = document.getElementById('main');
main.innerHTML = `
  ${getCategoriesButtons()}
  <div style="margin-bottom: 1dvh;">&copy ${year} <a href="https://laz-r.github.io">laz_R</a> - v${APP_VERSION}</div>
`;

let totalScore = 0;