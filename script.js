for (i = 0; i < 16; i++) {
  const container = document.querySelector('.container')
  const newDiv = document.createElement('div')
  newDiv.classList.add('row')
  newDiv.style.display = 'flex'
  container.appendChild(newDiv)
}

const rows = document.querySelectorAll('.row')

rows.forEach(row => {
  for (i = 0; i < 16; i++) {
    const newDiv = document.createElement('div')
    newDiv.classList.add('square')
    newDiv.style.backgroundColor = 'white'
    newDiv.style.height = '96px'
    newDiv.style.flex = '0 0 96px'
    row.appendChild(newDiv)
  }
})

const squares = document.querySelectorAll('.square')
console.log(squares)
squares.forEach(square =>
  square.addEventListener(
    'mouseover',
    () => (square.style.backgroundColor = 'black')
  )
)

const resetGrid = () => {
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => (square.style.backgroundColor = 'white'))
}

const getNewGridSize = () => {
  console.log('test')
  const sides = prompt('Enter number of squares per side of new grid')
  console.log(sides)
  resetGrid()
}

const resizeGrid = document.querySelector('.resize-grid')
resizeGrid.addEventListener('click', getNewGridSize)
