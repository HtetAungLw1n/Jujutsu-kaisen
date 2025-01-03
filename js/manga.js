let group = document.querySelector(".manga-group");

function addManga() {
  let mainHTML = "";
  for (let i = 0; i < 31; i++) {
    let html = ` <div><img src="img/manga vol/${i}.jpg" alt="" /></div>`;

    mainHTML += html;
  }
  mainHTML += "<div><p>This is the latest chapter.</p></div>";

  group.innerHTML = mainHTML;
}
addManga();
