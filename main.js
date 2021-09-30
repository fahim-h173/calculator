const calculator = document.querySelector('.calculator')
const keys = calculator.querySelector('.calculator__keys')
const display = calculator.querySelector('.calculator__display')


keys.addEventListener('click', event => {
  if (!event.target.closest('button')) return
  
  const key = event.target
  const keyValue = key.textContent
  const displayValue = display.textContent

display.textContent = keyValue
})
