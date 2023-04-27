//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  let date = document.querySelector('input').value 
  const url = `https://api.nasa.gov/planetary/apod?api_key=FynrFGrwE0LIdemqt1PpsOeXyi7B6MeImUNJ8bUH&date=${date}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)

        if(data.media_type === 'image'){
          // document.querySelector('img').classList.toggle('hidden')
          // document.querySelector('iframe').classList.add('hidden')
          document.querySelector('img' ).src = data.hdurl

        } else if(data.media_type === 'video'){
          // document.querySelector('img').classList.add('hidden')
          // document.querySelector('iframe').classList.toggle('hidden')
          document.querySelector('iframe').src = data.url

        }

        document.querySelector('h3').innerHTML = data.explanation
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}

