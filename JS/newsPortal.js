

const newsCatagories = () => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
        .then(res => res.json())
        .then(data => showCatagories(data.data.news_category));
}

const showCatagories = (data) => {
    console.log(data);

    data.forEach(catagori => {
        // console.log(catagori.category_name);
        const categoriesContainer = document.getElementById('categories-container');
        categoriesContainer.innerHTML += `<a onclick="countCatagory('${catagori.category_id}','${catagori.category_name}')" 

        class="nav-link" href="#">${catagori.category_name}</a>`
    });


}

const countCatagory = (category_id, category_name) => {
    // console.log(category_name);
    // console.log(category_id);
    fetch(`https://openapi.programming-hero.com/api/news/category/${category_id}`)
        .then(res => res.json())
        .then(data => showCatagoriesAllNews(data.data, category_name))


}

const showCatagoriesAllNews = (data, category_name) => {
    console.log(data);
    document.getElementById('count-news').innerText = data.length;
    document.getElementById('catagory-name').innerText = category_name;

    const cardSection = document.getElementById('card-section');
    cardSection.innerHTML = ""
data.forEach((singleNews) =>{
    console.log(singleNews);

    //Destructure the object 
const {image_url,title,details} =singleNews;
    cardSection.innerHTML += `<div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src=${image_url} class="img-fluid rounded-start" alt="...">
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">${title
          }</h5>
          <p class="card-text">${details.slice(0,200)}</p>
          <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    </div>
  </div>`

})

}