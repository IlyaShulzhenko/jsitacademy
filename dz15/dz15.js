let figures = document.querySelectorAll('.figure');
figures.forEach(element => {
  element.addEventListener('mousedown', function() {
    let sizeX = event.pageX - getElementPos(element).left;
    let sizeY = event.pageY - getElementPos(element).top;
    element.classList.add('position');
    document.body.append(element);

    moveElement(event.pageX, event.pageY);

    function moveElement(pageX, pageY) {
      element.style.left = pageX - sizeX + 'px';
      element.style.top = pageY - sizeY + 'px';
    }
    
    function onMouseMove(event) {
      moveElement(event.pageX, event.pageY);
      element.style.cursor = 'pointer';
    }

    document.addEventListener('mousemove', onMouseMove);

    element.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      element.onmouseup = null;
    };
  });
  element.ondragstart = function() {
    return false;
  };
});

function getElementPos(elem) {
  let position = elem.getBoundingClientRect();
  return {
    left: position.left,
    top: position.top
  };
}