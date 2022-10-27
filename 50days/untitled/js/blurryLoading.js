const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
//setInterval在30ms间隔执行一次blurring
let int = setInterval(blurring , 30)

function blurring(){
  load++

  if(load>99){
    clearInterval(int)
  }
  //··不是引号
  loadText.innerText = `${load}%`
  //计数值0-100转换为透明度的0,1
  loadText.style.opacity = scale(load,0,100,1,0)
  //	给图像设置高斯模糊。"radius"一值设定高斯函数的标准差，或者是屏幕上以多少像素融在一起， 所以值越大越模糊；
  // 如果没有设定值，则默认是0；这个参数可设置css长度值，但不接受百分比值。
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num,in_min,in_max,out_min,out_max)=>{
  return((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}
