window.addEventListener("load", (e) => {
    let form = document.querySelector(".product2-main");
    // let ul = document.querySelector(".errores");
    let name = document.getElementById("name");
    let description = document.getElementById("description");
    let image = document.getElementById("image");
    let price = document.getElementById("price");
    let year = document.getElementById("year");
    let varietal = document.getElementById("varietal");
    let brand = document.getElementById("brand");
    let origin = document.getElementById("origen");
    let region = document.getElementById("region");
    let category = document.getElementById("category");
    let paragraph = document.querySelector(".p");
    let button = document.querySelector('.sub-btn-reg2')
    //   let campos = [
    //     name,
    //     description,
    //     image,
    //     price,
    //     year,
    //     varietal,
    //     brand,
    //     origin,
    //     region,
    //     category,
//   ];

button.addEventListener("click", (e) => {
    
    let errors ;
    // e.preventDefault()
    errors = inputIsNotEmpty(name, 'name-error')
    if (!errors) e.preventDefault();
    errors = inputMinLength(name, 5, 'name-length-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(description, 'description-error')
    if (!errors) e.preventDefault();
    errors = inputMinLength(description, 20, 'description-length-error')
    if (!errors) e.preventDefault();

    errors = imgFormat(image, 'image-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(price, 'price-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(year, 'year-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(varietal, 'varietal-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(brand, 'brand-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(origin, 'origin-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(region, 'region-error')
    if (!errors) e.preventDefault();

    errors = inputIsNotEmpty(category, 'category-error')
    if (!errors) e.preventDefault();

    console.log(image.value);

  });

});
