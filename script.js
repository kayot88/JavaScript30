function columize(wrapper, piks) {
  const grid = document.querySelector(wrapper);
  // const imgs = document.querySelector(piks);
  // console.log(grid);
  const imgs = Array.from(grid);
  const picks = [...grid.children].filter(el => el.matches('img'));
  const elseAll = [...grid.children].filter(el => !el.matches('img'));
  //create left
  const left = document.createElement('div');
  left.classList.add('left');

  picks.forEach(pick => left.appendChild(pick));
  console.log(left);

  //create reft
  const right = document.createElement('div');
  right.classList.add('right');

  elseAll.forEach(el => right.appendChild(el));
  console.log(right);
  // put them back to the dom
  grid.appendChild(left);
  grid.appendChild(right);
}

columize('.wrapper', 'img');
