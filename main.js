console.log("talking");

    let submit = document.getElementById('submit');
    submit.addEventListener('click', search, false);

    function search() {
      let search_terms = document.getElementById('search_terms').value;
      console.log(search_terms);

      fetch('http://recipepuppyproxy.herokuapp.com/api/?q='+search_terms)
      //www.recipepuppy.com/api/?q=search-term

        .then(
          function(response) {
            if (response.status !== 200) {
              console.log('Looks like there was a problem. Status Code: ' +
                response.status);
              return;
            }

            response.json().then(function(data) {
              console.log(data);


            });
          }
        )
}
