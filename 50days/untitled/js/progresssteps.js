const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click',()=>{
  currentActive++

  if(currentActive>circles.length){
    currentActive = circles.length
  }
  update()
})

prev.addEventListener('click',()=>{
  currentActive--

  if(currentActive<1){
    currentActive = 1
  }
  update()
})

//箭头函数function(circle,idx){},其中circle为每个元素，idx为索引
function update(){
  circles.forEach((circle,idx)=>{
    if(idx < currentActive){
      circle.classList.add('active')
    }else{
      circle.classList.remove('active')
    }
  })

  const actives = document.querySelectorAll('.active')
  //这里progress属性被选中，为蓝色条，每次点击就改变宽度覆盖
  progress.style.width = (actives.length - 1) / (circles.length - 1)*100+'%'

  if(currentActive === 1){
    prev.disabled = true
  }else if(currentActive === circles.length){
    next.disabled = true
  }else{
    prev.disabled=false
    next.disabled=false
  }
}
