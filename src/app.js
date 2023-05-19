/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  // document.getElementById("#the-excuse").textContent = generateExcuse();

  document.querySelector("#the-excuse").innerHTML = generateExcuse();
};

let generateExcuse = () => {
  let subject = [
    "A jogger",
    "A racoon",
    "My neighbor",
    "My cat",
    "My pinecone"
  ];
  let actions = ["threw m", "ate m", "lost my", "burnt", "chew "];
  let possesion = [
    "my homework",
    "my flowers",
    "my car",
    "my cat",
    "my pinecone"
  ];
  let where = [
    "in the street",
    "in my pool",
    "in my kitchen",
    "in my oven",
    "in my bathroom"
  ];

  let subjectIndex = Math.floor(Math.random() * subject.length);
  let actionsIndex = Math.floor(Math.random() * actions.length);
  let possesionIndex = Math.floor(Math.random() * possesion.length);
  let whereIndex = Math.floor(Math.random() * where.length);

  return (
    subject[subjectIndex] +
    " " +
    actions[actionsIndex] +
    " " +
    possesion[possesionIndex] +
    " " +
    where[whereIndex]
  );
};
