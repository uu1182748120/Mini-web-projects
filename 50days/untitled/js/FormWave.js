const labels = document.querySelectorAll(".form-control label")

//根据label中字符个数来进行动画效果，map方法按照括号中方法处理数组，并且返回新数组
labels.forEach(label=>{
  label.innerHTML = label.innerText
    .split('')
    .map((letter,idx)=> `<span style="transition-delay:${idx * 50}ms">${letter}</span>`)
    .join('')
})
