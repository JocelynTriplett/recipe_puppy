console.log("talking");

let submit = document.getElementById('submit');
submit.addEventListener('click', search, false);

function search() {
  let search_terms = document.getElementById('search_terms').value;
  console.log(search_terms);

  fetch('http://recipepuppyproxy.herokuapp.com/api/?q='+search_terms)

  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
        response.status);
        return;
      }

      response.json().then(function(data) {
        console.log(data);
        let row1 = document.getElementsByClassName('row1')[0];
        let row2 = document.getElementsByClassName('row2')[0];
        row1.innerHTML = '<div></div>' // clears previous search results
        row2.innerHTML = '<div></div>'
        for (var i = 0; i < 8; i++) {
          let title = data.results[i].title;
          let href = data.results[i].href;
          var thumbnail = data.results[i].thumbnail;
          if (thumbnail == "") {
            thumbnail = "http://via.placeholder.com/200x200";
          }

          let recipe = document.createElement("a");
          recipe.setAttribute("href", href);
          let recipeInfo = `
          <div class="flex-item">
          <img src="${thumbnail}" />
          <p>${title}</p>
          </div>
          `
          if (i<4){
            row1.appendChild(recipe);
            recipe.innerHTML = recipeInfo;
          }
          else {
            row2.appendChild(recipe);
            recipe.innerHTML = recipeInfo;
          }
        }
      });
    }
  )
}
