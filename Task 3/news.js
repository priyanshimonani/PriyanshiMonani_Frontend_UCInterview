function search(){
  const selectedLang=document.getElementById("lang").value
fetch(`https://newsdata.io/api/1/latest?apikey=pub_e3c662ea415f4da9b9c76a5f7e1d4ec7&language=${selectedLang}`)
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById("news-container");
    container.innerHTML = ""; // Clear previous content

    data.results.forEach(article => {
      
      const articleEl = document.createElement("div");
      
      articleEl.innerHTML = `
        <h2>${article.title}</h2>
        <p>${article.description}</p>
        <img src="${article.image_url}" /><br/>
        <div id="link">
        <i class="fa fa-newspaper-o"></i>
        <label> Read full article</label>
        <a href="${article.link}">here</a></div>
        <hr>
      `;
      container.appendChild(articleEl);
    });
  })
  .catch(error => console.error("Error fetching live news:", error));
}
