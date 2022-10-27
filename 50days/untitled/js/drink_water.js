const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup, idx)=>{
  cup.addEventListener('click',() => highlightCups(idx))
})

function highlightCups(idx){
  //如果点第8个，那么会出现第八个的下一个属性值不存在，这个if来解决这个问题
  if (idx===7 && smallCups[idx].classList.contains("full")){
    idx--
  }
  //如果点击的瓶子是满，而idx+1的不满，就只是让点击的不满
  else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')){
    idx--
  }

  smallCups.forEach((cup,idx2)=>{
    if(idx2 <= idx){
      cup.classList.add('full')
    }else{
      cup.classList.remove('full')
    }
  })

  updateBigCup()
}

function updateBigCup() {
  //根据满的属性个数来对大杯子中百分比和剩余进行样式修改
  const fullCups = document.querySelectorAll('.cup-small.full').length
  const totalCups = smallCups.length

  if(fullCups === 0){
    percentage.style.visibility = 'hidden'
    percentage.style.height = 0
  } else {
    percentage.style.visibility = 'visible'
    percentage.style.height = `${fullCups / totalCups * 330}px`
    percentage.innerText = `${fullCups / totalCups * 100}%`
  }

  if(fullCups === totalCups){
    remained.style.visibility = 'hidden'
    remained.style.height = 0
  } else {
    remained.style.visibility = 'visible'
    liters.innerText = `${2 - (250 * fullCups / 1000)}L`
  }
}
