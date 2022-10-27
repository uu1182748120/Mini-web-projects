const counters = document.querySelectorAll('.counter')

counters.forEach(counter=>{
  counter.innerText = '0'

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target')
    const c = +counter.innerText

    const increment = target / 200

    if(c < target){
      counter.innerText = `${Math.ceil(c + increment)}`
      setTimeout(updateCounter,1)
      //递归执行updateCounter,直到不再小于目标值
    } else {
      counter.innerText = target
    }
  }

  updateCounter()
})
