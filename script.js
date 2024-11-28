// Drag-and-drop functionality for virtual exhibition
const draggableItems = document.querySelectorAll('.item');
const droppedItems = document.querySelector('.dropped-items');

draggableItems.forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
  e.dataTransfer.setData('text', e.target.innerText);
  e.target.style.opacity = '0.5';
}

function dragEnd(e) {
  e.target.style.opacity = '1';
}

droppedItems.addEventListener('dragover', dragOver);
droppedItems.addEventListener('drop', drop);

function dragOver(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  const data = e.dataTransfer.getData('text');
  const newItem = document.createElement('div');
  newItem.textContent = data;
  droppedItems.appendChild(newItem);
}

// Optional: You can add more interactivity for models, events, etc.
