/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  // document.getElementById("#the-excuse").textContent = generateExcuse();

  document.querySelector("#the-excuse").innerHTML = generateExcuse();
};

const generateExcuse = () => {
  const subject = [
    "A jogger",
    "A racoon",
    "My neighbor",
    "My cat",
    "My pinecone"
  ];
  const actions = ["threw m", "ate m", "lost my", "burnt", "chew "];
  const possesion = [
    "my homework",
    "my flowers",
    "my car",
    "my cat",
    "my pinecone"
  ];
  const where = [
    "in the street",
    "in my pool",
    "in my kitchen",
    "in my oven",
    "in my bathroom"
  ];

  const subjectIndex = Math.floor(Math.random() * subject.length);
  const actionsIndex = Math.floor(Math.random() * actions.length);
  const possesionIndex = Math.floor(Math.random() * possesion.length);
  const whereIndex = Math.floor(Math.random() * where.length);

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
