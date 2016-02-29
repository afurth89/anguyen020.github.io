$(document).ready(function() {
    $('#fullpage').fullpage({
      sectionsColor: ['#1bbc9b', '#D2A476', '#A2BED2', 'whitesmoke', '#ccddff'],
      anchors: ["home", "about", "projects", "contact", "lastPage"],
      menu: "#menu"
    });
});

//  Add projects to the page
var github = 'https://github.com/anguyen020/'
var projects = [
  { name: 'space-invaders', url: 'http://www.ashleyngu.com/space-invaders',
    code: github + 'space-invaders' },
  { name: 'roadtripper', url: 'https://ashleyngu-roadtripper.herokuapp.com/', code: github + 'roadtripper'},
  { name: 'reddit-redux', url: 'http://ashleyngu-reddit.herokuapp.com/',
    code: github + 'reddit-redux'},
  { name: 'love-a-mole', url: 'https://www.ashleyngu.com/love-a-mole',
    code: github + 'love-a-mole' },
  { name: 'pixel-art-maker', url: 'http://www.ashleyngu.com/pixel-art-maker', code: github + 'pixel-art-maker'}
];
var fragment = document.createDocumentFragment();

projects.forEach(function(project) {
  var div  = make("div"),
      a    = make("a"),
      code = make('a'),
      h2   = make("h2"),
      img  = make("img")

  a.href = project.url;
  h2.innerHTML = project.name.replace(/-/g, " ");
  img.src = "images/" + project.name + ".png";
  a.appendChild(h2);
  a.appendChild(img);

  code.className = 'code';
  code.innerHTML = 'Source code';
  code.href = project.code;

  div.appendChild(a);
  div.appendChild(code);
  div.className = "project";
  fragment.appendChild(div);
});

document.getElementById("sect-projects").appendChild(fragment);

function make(tag) {
  return document.createElement(tag);
}