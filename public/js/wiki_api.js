//get composer from wikipedia api
function getComposerList () {

  //fist remove previous DOM elements
  var wikipedia_content = document.getElementById("wikipedia_content");
  var wiki_urls = document.getElementsByClassName("wiki_urls");
  while (wikipedia_content.firstChild) {
    wikipedia_content.removeChild(wikipedia_content.firstChild);
  }
  while (wiki_urls[0]) {
    wiki_urls[0].parentNode.removeChild(wiki_urls[0]);
  }

  //create script for json with callback
  var script = document.createElement("script");
  script.src = "https://en.wikipedia.org/w/api.php?action=query&list=categorymembers&cmtitle=Category:21st-century_classical_composers&cmlimit=500&format=json&callback=getRandomComposer";
  script.classList.add('wiki_urls');
  document.getElementsByTagName("head")[0].appendChild(script);
};

function getRandomComposer(data) {
  var randomInt = Math.floor(Math.random() * 495) + 4;
  var randomComposer =  data.query.categorymembers[randomInt];
  var pageid = randomComposer.pageid;
  var url = "https://en.wikipedia.org/w/api.php?format=json&action=query&redirects=true&prop=extracts&pageids=" + pageid + "&callback=showComposer";
  var script = document.createElement("script");
  script.src = url;
  script.classList.add("wiki_urls");
  document.getElementsByTagName("head")[0].appendChild(script);
};

function showComposer (data) {
  var wikiDiv = document.getElementById("wikipedia_content");
  var contentDiv = document.createElement("div");
  var pageid = Object.keys(data.query.pages)[0];
  var title = document.createElement("h2");
  title.innerHTML = data["query"]["pages"][pageid]["title"];
  contentDiv.innerHTML = data["query"]["pages"][pageid]["extract"];
  wikiDiv.appendChild(title);
  wikiDiv.appendChild(contentDiv);
  removeExternalLinks();
}

//remove external links section of wikipedia because they are only text and not actually links
function removeExternalLinks () {
  if (document.getElementById("External_links")) {
    var title = document.getElementById('External_links');
    title = title.parentElement;
    var links = title.nextElementSibling;
    links.parentNode.removeChild(links);
    title.parentNode.removeChild(title);
  }
}

var newWikipediaComposer = document.getElementById("newWikipediaComposer").addEventListener("click", function () {
  getComposerList();
});
