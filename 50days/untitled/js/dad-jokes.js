const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')

jokeBtn.addEventListener('click',generateJoke)

// generateJoke()

async function generateJoke(){
  const config = {
    headers:{
      Accept: 'application/json',
    },
  }
//async声明函数就可以使用延时await，fetch是一个发送请求的函数，先写地址然后请求参数
  const res = await fetch('https://icanhazdadjoke.com',config)
  const data = await res.json()
  jokeEl.innerHTML = data.joke
}
