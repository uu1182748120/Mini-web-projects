const panels = document.querySelectorAll('.panel')//获取所有panel属性的class

panels.forEach(panel=>{//循环给每个panel添加监听,=>为arrow function
  panel.addEventListener('click',()=>{//点击后执行监听函数内容
    removeActiveClasses()
    panel.classList.add('active')//只对点击的添加active属性
  })
})

function removeActiveClasses(){//每个panel都移除active属性
  panels.forEach(panel=>{
    panel.classList.remove('active')
  })
}
