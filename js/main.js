renderUI()

function renderUI(){
    let productListDom = document.getElementById("productList")
    let html = ""
    for(let i=0; i < productList.length; i++){
        let product = productList[i]
        html += `<div class="col-md-3">
                        <a href=""><img src="${product.image}" alt="" class="picture"></a>
                        <div class="span">${product.name1}</div>
                        <div class="div">${product.name}</div>
                        <div class="stars">
                            <i class="fas fa-star"> </i>
                            <i class="fas fa-star"> </i>
                            <i class="fas fa-star"> </i>
                            <i class="fas fa-star"> </i>
                            <i class="fas fa-star"> </i>
                        </div>
                        <div class="price">
                            <div class="old-price">${product.oldprice}</div>
                            <div class="new-price">${product.newprice}</div>
                        </div>
                    </div>`
    }
    productListDom.innerHTML = html
}







