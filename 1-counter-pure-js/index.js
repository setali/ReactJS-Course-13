const root = document.getElementById('root')

const counter = document.createElement('span')
counter.innerText = 0

const increase = document.createElement('button')
increase.innerText = 'Increase'
increase.style.marginLeft = '5px'
increase.addEventListener('click', e => {
  counter.innerText = +counter.innerText + 1
})

const decrease = document.createElement('button')
decrease.innerText = 'Decrease'
decrease.addEventListener('click', () => {
  counter.innerText = +counter.innerText - 1
})

root.appendChild(counter)
root.appendChild(increase)
root.appendChild(decrease)
