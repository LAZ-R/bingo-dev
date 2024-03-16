import { getRandomIntegerBetween, setHTMLTitle } from "./utils/utils.js";
import { APP_NAME, APP_VERSION } from "../properties.js";
import { BLOCS } from "./data.js";

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
  console.log(blocId);
  const bloc = document.getElementById(blocId);
  if (bloc.classList.contains('untouched')) {
    bloc.classList.replace('untouched', 'touched');
  } else if (bloc.classList.contains('touched')) {
    if (!bloc.classList.contains('x2')) {
      bloc.classList.add('x2');
    } else {
      if (!bloc.classList.contains('x3')) {
        bloc.classList.add('x3');
      } else {
        if (!bloc.classList.contains('x4')) {
          bloc.classList.add('x4');
        }
      }
    }
  }
  const lineId = blocId[0];
  const columnId = blocId[1];
  console.log(lineId);
  console.log(columnId);

  if (getLineTouchedBlocs(lineId) == 5) {
    setLineBingo(lineId);
  }
  if (getColumnTouchedBlocs(columnId) == 5) {
    setColumnBingo(columnId);
  }
}
window.onBlocClick = onBlocClick;

// GÉNÉRATION DOM -----------------------------------------
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

const setLineBingo = (lineId) => {
  for (let index = 0; index < 5; index++) {
    let element = document.getElementById(`${lineId}${index + 1}`);
    element.classList.add('bingo');
  }
}

const setColumnBingo = (columnId) => {
  const CURRENT_BLOCS = ['A', 'B', 'C', 'D', 'E'];
  for (let index = 0; index < 5; index++) {
    let element = document.getElementById(`${CURRENT_BLOCS[index]}${columnId}`);
    element.classList.add('bingo');
  }
}

const setPlayingBoard = (categoryId) => {
  setCurrentBlocsLabels(categoryId);

  const main = document.getElementById('main');
  main.innerHTML = ``;

  main.innerHTML = `
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
  `;
}

/* ############################################################################
---------------------------------- EXECUTION ----------------------------------
############################################################################ */

// Auto ---------------------------------------------------


// Manuelle -----------------------------------------------

setHTMLTitle(APP_NAME);

const main = document.getElementById('main');
main.innerHTML = `
  <span>Coucou</span>
`;

setPlayingBoard(1);