'use strict';
//Buttons
const button1 = document.getElementById('change-color-user1');
const button2 = document.getElementById('change-color-user2');

//Color Card
const changeCardColors = cardId => {
  const card = document.querySelector(`#${cardId}`);
  const colorVariables = [
    '--glass-color',
    '--title-color',
    '--circle1-color',
    '--circle2-color',
    '--circle3-color',
    '--circle4-color',
    '--circle5-color',
    '--black',
  ];
  //Random Color
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  //Set Random Color
  colorVariables.forEach(variable => {
    const randomColor = getRandomColor();
    card.style.setProperty(variable, randomColor);
  });
};
//Button Listener
button1.addEventListener('click', () => {
  changeCardColors('card1');
});
button2.addEventListener('click', () => {
  changeCardColors('card2');
});
