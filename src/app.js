/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
};

const generateExcuse = () => {
  const excuseObject = {
    subject: ["A jogger", "A racoon", "My neighbor", "My cat", "My pinecone"],
    actions: ["threw", "ate", "lost", "burnt", "chewed"],
    possession: [
      "my homework",
      "my flowers",
      "my car",
      "my cat",
      "my pinecone"
    ],
    where: [
      "in the street",
      "in my pool",
      "in my kitchen",
      "in my oven",
      "in my bathroom"
    ]
  };

  let finalPhrase = "";

  Object.values(excuseObject).forEach(arr => {
    const randomizingTheExcuseObjectValues = Math.floor(
      Math.random() * arr.length
    );
    finalPhrase += arr[randomizingTheExcuseObjectValues] + " ";
  });

  return finalPhrase;
};

/* 
  This is what I had before... just trying a simpler form above
  
  
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
*/
