const addEventListeners = () => {
  const squares = document.querySelectorAll('.square')
  squares.forEach(square =>
    square.addEventListener(
      'mouseover',
      () => (square.style.backgroundColor = generateRandomColor())
    )
  )
}

const drawNewGrid = sides => {
  const squareSize = 960 / sides

  for (i = 0; i < sides; i++) {
    const container = document.querySelector('.container')
    const newDiv = document.createElement('div')
    newDiv.classList.add('row')
    newDiv.style.display = 'flex'
    container.appendChild(newDiv)
  }

  const rows = document.querySelectorAll('.row')

  rows.forEach(row => {
    for (i = 0; i < sides; i++) {
      const newDiv = document.createElement('div')
      newDiv.classList.add('square')
      newDiv.style.backgroundColor = 'white'
      newDiv.style.height = `${squareSize}px`
      newDiv.style.flex = `0 0 ${squareSize}px`
      row.appendChild(newDiv)
    }
    addEventListeners()
  })
}

drawNewGrid(16)

const resetGrid = () => {
  const container = document.querySelector('.container')
  const squares = document.querySelectorAll('.square')
  squares.forEach(square => {
    container.remove(square)
  })
  const body = document.querySelector('body')
  const newContainer = document.createElement('div')
  newContainer.classList.add('container')
  body.appendChild(newContainer)
}

const getNewGridSize = () => {
  let sides
  do {
    sides = parseInt(
      prompt('Enter number of squares per side of new grid (max 100)')
    )
  } while (!Number.isInteger(sides) || sides <= 0 || sides > 100)

  resetGrid()
  drawNewGrid(sides)
}

const resizeGrid = document.querySelector('.resize-grid')
resizeGrid.addEventListener('click', getNewGridSize)

const generateRandomColor = () => {
  const generateNumber = () => {
    return Math.floor(Math.random() * 256)
  }
  const rValue = generateNumber()
  const gValue = generateNumber()
  const bValue = generateNumber()

  return `rgb(${rValue}, ${gValue}, ${bValue})`
}
