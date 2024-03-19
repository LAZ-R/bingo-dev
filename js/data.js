export const CATEGORIES = [
  { id: 1, label: `Surveillance routière`, img: `./medias/images/categ-1.png` },
  { id: 2, label: `Drogues & banlieues`, img: `./medias/images/categ-2-2.png` },
  { id: 3, label: `Délinquance estivale`, img: `./medias/images/categ-3.png` },
];

export const BLOCS = [
  {
    label: `"Dans le jargon"`,
    fontSize: `3.8dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Vieux de la vieille"`,
    fontSize: `4dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Petite leçon de morale"`,
    fontSize: `3.7dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Les grands moyens"`,
    fontSize: `4dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Le chat et la souris"`,
    fontSize: `3.8dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `Expression en latin`,
    fontSize: `3.4dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `Explication d'un acronyme des forces de l'ordre`,
    fontSize: `2.7dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"N'est pas dans son état normal"`,
    fontSize: `3.3dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Citoyen lambda"`,
    fontSize: `4dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Au jour d'aujourd'hui"`,
    fontSize: `2.5dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `Laurent`,
    fontSize: `4dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `Windows XP`,
    fontSize: `3.8dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `Liste de mots chocs`,
    fontSize: `4dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `Crainte de caillassage`,
    fontSize: `3.2dvw`,
    categories: [ 2, 3 ]
  },
  {
    label: `"Prennent tous les risques"`,
    fontSize: `3.2dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"On se rend pas compte de la vitesse avec cet engin"`,
    fontSize: `2.4dvw`,
    categories: [ 1 ]
  },
  {
    label: `Souffle mal dans l'appareil`,
    fontSize: `3.8dvw`,
    categories: [ 1, 3 ]
  },
  {
    label: `"On peut pas s'arranger ?"`,
    fontSize: `3.2dvw`,
    categories: [ 1, 3 ]
  },
  //{
    //label: `Gear-up shot`,
    //fontSize: `3.6dvw`,
    //categories: [ 1, 2, 3 ]
  //},
  {
    label: `Victime torse nu`,
    fontSize: `4dvw`,
    categories: [ 3 ]
  },
  {
    label: `Querelle de voisinnage`,
    fontSize: `3.2dvw`,
    categories: [ 2, 3 ]
  },
  {
    label: `"Record"`,
    fontSize: `4dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Fou du volant"`,
    fontSize: `4dvw`,
    categories: [ 1 ]
  },
  {
    label: `"Grosse cylindrée / bolide"`,
    fontSize: `3.8dvw`,
    categories: [ 1 ]
  },
  {
    label: `"Le / la plus ... de France"`,
    fontSize: `3.4dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Mais rien ne va se passer comme prévu"`,
    fontSize: `2.6dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `06h00, heure légale des interpellations`,
    fontSize: `2.6dvw`,
    categories: [ 2 ]
  },
  {
    label: `L'agent mâche un chewing-gum`,
    fontSize: `2.8dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Opération coup de poing"`,
    fontSize: `3.2dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Zone de non-droit"`,
    fontSize: `3.8dvw`,
    categories: [ 2 ]
  },
  {
    label: `"En alerte maximum"`,
    fontSize: `3.4dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Chauffard"`,
    fontSize: `3.2dvw`,
    categories: [ 1 ]
  },
  {
    label: `"Les autres usagers"`,
    fontSize: `3.8dvw`,
    categories: [ 1 ]
  },
  {
    label: `"Chassé-croisé"`,
    fontSize: `3.8dvw`,
    categories: [ 1, 3 ]
  },
  {
    label: `Phillipe`,
    fontSize: `4dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Le risque de sur-accident"`,
    fontSize: `3.2dvw`,
    categories: [ 1 ]
  },
  {
    label: `"Au mépris du danger"`,
    fontSize: `3.2dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Dans le collimateur"`,
    fontSize: `3dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `Grand excès de vitesse`,
    fontSize: `3.6dvw`,
    categories: [ 1 ]
  },
  {
    label: `"Pour ne pas éveiller les soupçons"`,
    fontSize: `3.2dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Sur le qui-vive"`,
    fontSize: `4dvw`,
    categories: [ 1, 2, 3 ]
  },
  {
    label: `"Les Anges gardiens de l'autoroute"`,
    fontSize: `3.2dvw`,
    categories: [ 1, 3 ]
  },
  {
    label: `"N'en est pas à son coup d'essai"`,
    fontSize: `3.2dvw`,
    categories: [ 1, 2, 3 ]
  },
];

let stats = {
  total: BLOCS.length,
  securite_routiere: BLOCS.filter((element) => element.categories.includes(1)).length,
  only_securite_routiere: BLOCS.filter((element) => element.categories.includes(1) && !element.categories.includes(2) && !element.categories.includes(3)).length,
  drogues_et_banlieues: BLOCS.filter((element) => element.categories.includes(2)).length,
  only_drogues_et_banlieues: BLOCS.filter((element) => element.categories.includes(2) && !element.categories.includes(1) && !element.categories.includes(3)).length,
  delinquance_estivale: BLOCS.filter((element) => element.categories.includes(3)).length,
  only_delinquance_estivale: BLOCS.filter((element) => element.categories.includes(3) && !element.categories.includes(2) && !element.categories.includes(1)).length,
}
console.log(`
=======================================
- - - - - - - - BINGO - - - - - - - - -
=======================================

Total de cases différentes: ${stats.total}

- - - - - - - - - - - - - - - - - - - -
SURVEILLANCE ROUTIÈRE
- - - - - - - - - - - - - - - - - - - -
${stats.securite_routiere} cases disponibles
[dont ${stats.only_securite_routiere} case(s) exclusive(s)]

- - - - - - - - - - - - - - - - - - - -
DROGUES & BANLIEUES
- - - - - - - - - - - - - - - - - - - -
${stats.drogues_et_banlieues} cases disponibles
[dont ${stats.only_drogues_et_banlieues} case(s) exclusive(s)]

- - - - - - - - - - - - - - - - - - - -
DÉLINQUANCE ESTIVALE
- - - - - - - - - - - - - - - - - - - -
${stats.delinquance_estivale} cases disponibles
[dont ${stats.only_delinquance_estivale} case(s) exclusive(s)]
`);
//console.table(stats);