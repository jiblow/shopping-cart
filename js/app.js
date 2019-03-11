var orderList = "";

function getInventory() {
    fetch('/product.json')
        .then((res) => res.json())
        .then((data) => {
            
            var output = `<h6 class="title"><b>Product Name :</b> ${data.product_1.name}</h6>`;
            output +=`
            <span><img src="/img/firestick_1.jpg"</span>
            <span class ="align-text-top">${data.product_1.discription}</span>
            <p>${data.product_1.price}</p>
           
            `
            document.getElementById('output').innerHTML = output;
           
        })
   
    
}

getInventory();

function addList() {
    var node = document.createElement('LI');
    var orders = document.createTextNode(id_1);
    node.appendChild(orders);
    document.getElementById("myList").appendChild(node);
}