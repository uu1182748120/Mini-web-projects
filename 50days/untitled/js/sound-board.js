const sounds = ['applause','boo','gasp','tada','victory','wrong']
//使用这个循环的形式来添加，更加方便而不用一个个写。
sounds.forEach(sound => {
  const btn = document.createElement('button')//创建button标签
  btn.classList.add('btn')//加入class=btn

  btn.innerText = sound

  btn.addEventListener('click',() => {
    stopSongs()

    document.getElementById(sound).play()
  })

  document.getElementById('buttons').appendChild(btn)
})

function stopSongs(){
  sounds.forEach( sound=>{
    const song = document.getElementById(sound)
    song.pause()
    song.currentTime = 0;
  })
}
