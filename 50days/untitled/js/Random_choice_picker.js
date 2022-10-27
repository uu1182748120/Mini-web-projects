const tagsEl = document.getElementById('tags')
const textarea = document.getElementById('textarea')

textarea.focus()
//增加选择输入框的效果

textarea.addEventListener('keyup', (e) => {
  createTags(e.target.value)
//在输入框下面生成标签，点击enter后开始进行随机选择，并且输入框内容清空
  if(e.key === 'Enter'){
    setTimeout(() =>{
      e.target.value = ''
    },10)
    randomSelect()
  }
})

function createTags(input){
  //从左到右的对input进行筛选，先根据逗号划分，然后filter过滤掉去边后等于空的，然后是map让每个数组元素都去一遍边的空格；map是会改变原数组的。
  const tags = input.split(',').filter(tag=> tag.trim()!=='').map(tag=>tag.trim())
//一次性把输入框的值全都拆分弄成标签，所以每次都要把原来存在的标签全删除，然后换成全新的
  tagsEl.innerHTML = ''

  tags.forEach(tag =>{
    const tagEl = document.createElement('span')
    tagEl.classList.add('tag')
    tagEl.innerText = tag
    tagsEl.appendChild(tagEl)
  })
}

function randomSelect(){
  const times = 30
//setInterval来循环进行随机，
  const interval = setInterval(()=>{
    const randomTag = pickRandomTag()
    //需要随机的标签数量

    if(randomTag !== undefined){
      highlightTag(randomTag)

      setTimeout(()=>{
        unHighlightTag(randomTag)
      },100)
    }
  },100)
//在上面转完之后，结束循环interval，然后进行一个选中和高亮
  setTimeout(()=>{
    clearInterval(interval)

    setTimeout(()=>{
      const randomTag = pickRandomTag()

      highlightTag(randomTag)
    },100)
  },times * 100)
}

function pickRandomTag(){
  const tags = document.querySelectorAll('.tag')
  //floor向下取整，0到1内随机数×标签个数
  return tags[Math.floor(Math.random() * tags.length)]
}

function highlightTag(tag){
  tag.classList.add('highlight')
}

function unHighlightTag(tag){
  tag.classList.remove('highlight')
}
