
//Text file data
document.getElementById('button1').addEventListener('click',getText);

function getText() {
  fetch('text.txt').then(res => res.text()).then(data => {
    document.getElementById('output').innerHTML = data;
  })
  .catch(err => console.log(err));
}

//JSON data
document.getElementById('button2').addEventListener('click',getJson);

function getJson() {
  fetch('posts.json').then(res => res.json()).then(data => {
    let output = '';
    data.forEach(function(post) {
      output += `<li>${post.title}</li>`;
    });
    document.getElementById('output').innerHTML = output;
    
  })
  .catch(err => console.log(err));
}

// Get API
document.getElementById('button3').addEventListener('click',getExternal);

function getExternal() {
  fetch('https://api.github.com/users').then(res => res.json())
  .then(function(data) {
    let output = '';
    data.forEach(user => {
      output += `<li>${user.login}</li>`;
    });
    document.getElementById('output').innerHTML = output;
    
  })
  .catch(err => console.log(err));
}