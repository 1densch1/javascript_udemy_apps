const PageState = function () {
  let currentState = new homeState(this);

  this.init = function(){
    this.change(new homeState);
  }

  this.change = function(state){
    currentState = state;
  }
};

// Home State
const homeState = function(){
  document.querySelector('#heading').textContent = null;
  document.querySelector('#content').innerHTML = `
    <div class="jumbotron">
      <h1 class="display-4">Hello, world!</h1>
      <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      <hr class="my-4">
      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </div>
  `;
}

// About State
const aboutState = function(){
  document.querySelector('#heading').textContent = 'About US';
  document.querySelector('#content').innerHTML = `
    <p>This is the about page</p>
  `;
};

// Contact State
const contactState = function(){
  document.querySelector('#heading').textContent = 'Contact US';
  document.querySelector('#content').innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input type="text" class="form-control">
    </div>
    <div class="form-group">
      <label>Email adress</label>
      <input type="email" class="form-control">
    </div>
  </form>
  `;
};

// Instantiate pageState
const page = new PageState();

// Init first State
page.init();

// UI Vars
const home = document.getElementById('home'),
      about = document.getElementById('about'),
      contact = document.getElementById('contact');

// Home
home.addEventListener('click', (e)=>{
  page.change(new homeState);
  e.preventDefault();
});

// About
about.addEventListener('click', (e)=>{
  page.change(new aboutState);
  e.preventDefault();
});

// Contact
contact.addEventListener('click', (e)=>{
  page.change(new contactState);
  e.preventDefault();
});