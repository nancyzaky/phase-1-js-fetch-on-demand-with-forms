const init = () => {
  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (event)=> {
    console.log(event);
    const htmlCol = event.target.children[1];
    console.log(htmlCol)
  event.preventDefault();
  const input = document.querySelector('input#searchByID');
  console.log(input.value);

  fetch(`http://localhost:3000/movies/${input.value}`)
  .then(resp => resp.json())
  .then(data => {
    console.log(data.image.blob())
    const title = document.querySelector('section#movieDetails h4');

    const summary = document.querySelector('section#movieDetails p');
    const image = document.querySelector('section#movieDetails img');
    title.innerText = data.title;
    summary.innerText = data.summary;
    image.src = data.image
})

})

}


document.addEventListener('DOMContentLoaded', init);

