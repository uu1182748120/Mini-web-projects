const search=document.querySelector('.search')
const btn=document.querySelector('.btn')
const input=document.querySelector('.input')

btn.addEventListener('click',()=>{
  search.classList.toggle('active')
  input.focus()
  // if (input.value!==''){
  //   window.location.href = "https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd="+input.value
  // }
})
