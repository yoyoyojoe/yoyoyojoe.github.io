// bgm / sfx setup
let intro = new Audio('./assets/bgm/106-the_road_to_viridian_city-from_palette.mp3');
intro.volume = 0.05;

if (intro) intro.play();
console.log('if the bgm is really bothering you... here you go');
console.log('intro.pause()')

let bgm = new Audio('./assets/bgm/109-pewter_city_theme.mp3');
bgm.volume = 0.05;

document.addEventListener('DOMContentLoaded', () => {

  const body = document.querySelector('body');
  const board = document.querySelector('#board');

  const head = new Head(board);
  const apple = new Apple(board);

  // variables for pause feature, using closure
  let paused = false;
  let priorSPEED;

  // todo: throttling may help with edge cases of fast keystrokes 
  // (i.e. while going left, fast combo key presses of up, right triggers game over / hitting snake tail) 
  // 'keydown' is the case-sensitive string of event type to listen for
  body.addEventListener('keydown', (e) => {
    // the KeyboardEvent is the js built-in object with several properties
    // KeyboardEvent.code represents a phsyical key on the keyboard (as ooposed to the charactor generated by pressing the key)
    // KeyboardEvent.key returns the value of the key pressed by the user
    if (e.code === 'ArrowLeft' && head.currentDirection !== 'right') {
      head.currentDirection = 'left';
    } else if (e.code === 'ArrowRight' && head.currentDirection !== 'left') {
      head.currentDirection = 'right';
    } else if (e.code === 'ArrowDown' && head.currentDirection !== 'up') {
      head.currentDirection = 'down';
    } else if (e.code === 'ArrowUp' && head.currentDirection !== 'down') {
      head.currentDirection = 'up';
    }

    // possibly change to switch statement for better performance?

    // switch (e.code) {
    //   case 'ArrowLeft':
    //     // head.node.style.border = "1px solid black";
    //     // head.node.style.borderLeft = "5px solid #a05740";
    //     if (head.currentDirection !== 'right') {
    //       head.input = 'left';
    //     }
    // });
    // switch (str) {
    //   case 'a': console.log('A'); break;
    //   case 'b': console.log('B'); break;
    //   case 'c': console.log('C'); break;
    // }

    // using keyboard for speed management: e = easy, n = normal, h = hard
    if (e.code === 'KeyE') head.SPEED = 500;
    if (e.code === 'KeyN') head.SPEED = 250;
    if (e.code === 'KeyH') head.SPEED = 75;
    // todo: add pause feature
    // if (e.code === 'Space') {
    //   if (paused) {
    //     head.SPEED = Number(priorSPEED);
    //     paused = false;
    //     console.log('paused: ', paused, head.SPEED, 'prior speed:', priorSPEED, head.currentDirection)
    //   } else {
    //     priorSPEED = head.SPEED;
    //     head.SPEED = 500000;
    //     paused = true;
    //     console.log('paused: ', paused, head.SPEED, 'prior speed:', priorSPEED, head.currentDirection)
    //   }
    // }
    if (e.code === 'Enter') window.location.reload();
  });

  const easyButton = document.createElement('button');
  easyButton.innerText = 'Easy';
  easyButton.addEventListener('click', () => {
    console.log('Game level set to Easy.');
    head.SPEED = 500;
  });

  const normalButton = document.createElement('button');
  normalButton.innerText = 'Normal';
  normalButton.addEventListener('click', () => {
    console.log('Game level set to Normal.');
    head.SPEED = 250;
  });

  const hardButton = document.createElement('button');
  hardButton.innerText = 'Hard';
  hardButton.addEventListener('click', () => {
    console.log('Game level set to Hard.');
    head.SPEED = 75;
  });

  const p = document.createElement('p');
  // const br = document.createElement('br');
  p.appendChild(easyButton);
  p.appendChild(normalButton);
  p.appendChild(hardButton);
  // p.appendChild(br);
  body.prepend(p);

  // if player wishes to play again, reload the page
  document.querySelector('#again').addEventListener('click', () => {
    window.location.reload();
  });

  // if intro music ends, play gameBgm
  intro.addEventListener('ended', (e) => {
    console.log(e);
    if (e) bgm.play();
    bgm.loop = true;
  });

  // end of DOMContentLoaded event listener
});

/*

Event {
  isTrusted: true, 
  type: 'ended', 
  target: audio#intro, 
  currentTarget: audio#intro, 
  eventPhase: 2,
  …
}
  isTrusted: true
  bubbles: false
  cancelBubble: 
  falsecancelable: truec
  omposed: false
  currentTarget: null
  defaultPrevented: false
  eventPhase: 0
  path: [audio#intro]
  returnValue: true
  srcElement: null
  target: null
  timeStamp: 95692.09999999963
  type: "ended"
  [[Prototype]]: Event

main.js:123 Uncaught TypeError: Cannot read properties of undefined (reading 'play')
    at Audio.<anonymous> (main.js:123) 
    (anonymous) @ main.js:123

Head.js:128 Uncaught ReferenceError: time is not defined
    at Head.gameOver (Head.js:128)
    at Head.move (Head.js:98)

*/