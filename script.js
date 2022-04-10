const number = document.getElementById('number');
const adv = document.getElementById('advice')

async function dice(){

    const config = {
        headers: {
            Accept: 'JSONP',
        },
    }


  const response = await fetch('https://api.adviceslip.com/advice', config)
  
  const data = await response.json()


  adv.innerHTML = data.slip.advice
  number.innerText = data.slip.id
}
