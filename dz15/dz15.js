const screen = document.querySelector('.screen');

const balls = Array.from(screen.children);

balls.reverse().forEach(ball => {
  const coords = ball.getBoundingClientRect();
  ball.style.left = coords.left + 'px';
  ball.style.top = coords.top + 'px';
  ball.classList.add('positioned');

  ball.addEventListener('mouseover', event => event.target.classList.add('grab'));
  ball.addEventListener('mouseout', removeGrabbing);
  ball.addEventListener('mousedown', down);

});

function removeGrabbing (event) {
  event.target.classList.remove('grab');
  event.target.removeEventListener('mouseout', removeGrabbing);
}

function down(event) {
  const ball = event.target;
  screen.append(ball);

  const shiftX = event.clientX - parseInt(ball.style.left);
  const shiftY = event.clientY - parseInt(ball.style.top);

  ball.classList.add('scaleble');
  screen.addEventListener('mousemove', move);
  screen.addEventListener('mouseup', up);

function move(event) {
  ball.style.left = event.clientX - shiftX + 'px';
  ball.style.top = event.clientY - shiftY + 'px';
}

function up() {
  screen.removeEventListener('mousemove', move);
  screen.removeEventListener('mouseup', up);
  ball.classList.remove('scaleble');
}

ball.ondragstart = function () {
  return false;
}
}
