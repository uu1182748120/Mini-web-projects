const toggles =  document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
  toggle.addEventListener('click',()=>{
    //按钮点击后，在父标签上加active属性，classlist的toggle方法是切换来增加和删除一个class属性
    toggle.parentNode.classList.toggle('active')
  })
})
