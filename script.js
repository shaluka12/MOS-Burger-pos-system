
const food = [
    {code:"B1001", name:"Classic Burger (Large)", price:750},
    {code:"B1002", name:"Classic Burger (Regular)", price:1500, discount:15},
    {code:"B1003", name:"Turkey Burger", price:1600},
    {code:"B1004", name:"Chicken Burger (Large)", price:1400},
    {code:"B1005", name:"Chicken Burger (Regular)", price:800, discount:20},
    {code:"B1006", name:"Cheese Burger (Large)", price:1000},
    {code:"B1007", name:"Cheese Burger (Regular)", price:600},
    {code:"B1008", name:"Bacon Burger", price:650, discount:15},
    {code:"B1009", name:"Shawarma Burger", price:800},
    {code:"B1010", name:"Olive Burger", price:1800},
    {code:"B1012", name:"Double-Cheese Burger", price:1250, discount:20},
    {code:"B1013", name:"Crispy Chicken Burger (Reguler)", price:1200},
    {code:"B1014", name:"Crispy Chicken Burger (Large)", price:1600, discount:10},
    {code:"B1015", name:"Paneer Burger", price:900},

    {code:"B1016", name:"Crispy Chicken Submarine (Large)", price:2000},
    {code:"B1017", name:"Crispy Chicken Submarine (Reguler)", price:1500},
    {code:"B1018", name:"Chicken Submarine (Large)", price:1800, discount:3},
    {code:"B1019", name:"Chicken Submarine (Reguler)", price:1400},
    {code:"B1020", name:"Grinder Submarine", price:2300},
    {code:"B1021", name:"Cheese Submarine", price:2200},
    {code:"B1022", name:"double cheesen Chicken Submarine", price:1900, discount:16},
    {code:"B1023", name:"Special Horgie Submarine", price:2800},
    {code:"B1024", name:"MOS Special Submarine", price:3000},

    {code:"B1025", name:"Steak Fries (Large)", price:1200},
    {code:"B1026", name:"Steak Fries (Medium)", price:600},
    {code:"B1027", name:"French Fries (Large)", price:800},
    {code:"B1028", name:"French Fries (Medium)", price:650},
    {code:"B1029", name:"French Fries (Small)", price:450},
    {code:"B1030", name:"Sweet Potato Fries (Large)", price:600},

    {code:"B1031", name:"Chicken Cheese Pasta", price:1600, discount:15},
    {code:"B1032", name:"Chicken Penne Pasta", price:1700},
    {code:"B1033", name:"Ground Turkey Pasta Bake", price:2900, discount:10},
    {code:"B1034", name:"Creamy Shrim Pasta", price:2000},
    {code:"B1035", name:"Lemon Butter Pasta", price:1950},
    {code:"B1036", name:"Tagliatelle Pasta", price:2400, discount:1},
    {code:"B1037", name:"Baked Ravioli", price:2000, discount:1},

    {code:"B1038", name:"Fries Chicken (Small)", price:1200},
    {code:"B1039", name:"Fries Chicken (Regular)", price:2300, discount:10},
    {code:"B1040", name:"Fries Chicken (Large)", price:3100, discount:5},
    {code:"B1041", name:"Hot Wings (Large)", price:2400},
    {code:"B1042", name:"Devilled Chicken (Large)", price:900},
    {code:"B1043", name:"BBQ Chicken (Regular)", price:2100},

    {code:"B1044", name:"Pepsi (330ml)", price:990, discount:5},
    {code:"B1045", name:"Coca-Cola (330ml)", price:1230},
    {code:"B1046", name:"Sprite (330ml)", price:1500, discount:3},
    {code:"B1047", name:"Mirinda (330ml)", price:850, discount:7}
]
 

let table = document.getElementById("table");

const cart = []

const order = []

const customer = []

        //----------------------------------------------Define food categories----------------------------------------------//

function foodcategoryburger(){
    let tablebody = `<thead>
                        <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        </tr>
                    </thead>
                    <tbody = "table-group-divider">`;
    for(let i = 0; i < 14; i++){
        tablebody += `<tr ondblclick= "addtocart(${i})">
                        <td>${food[i].code}</td>
                        <td>${food[i].name}</td>
                        <td>${food[i].price}/=</td>
                        <td>${food[i].discount == null ? '--' : food[i].discount + "%"}</td>   
                    </tr>`
    }
    tablebody += `</tbody>`
    table.innerHTML = tablebody;
}

function foodcategorysubmarines(){
    let tablebody = `<thead>
                        <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        </tr>
                    </thead>
                    <tbody = "table-group-divider">`;
    for(let i = 14; i < 23; i++){
        tablebody += `<tr ondblclick= "addtocart(${i})">
                        <td>${food[i].code}</td>
                        <td>${food[i].name}</td>
                        <td>${food[i].price}/=</td>
                        <td>${food[i].discount == null ? '--' : food[i].discount + "%"}</td>

                    </tr>`
    }
    tablebody += '</tbody>'
    table.innerHTML = tablebody;
}

function foodcategoryfries(){
    let tablebody = `<thead>
                        <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        </tr>
                    </thead>
                    <tbody = "table-group-divider">`;
    for(let i = 23; i < 29; i++){
        tablebody += `<tr ondblclick= "addtocart(${i})">
                        <td>${food[i].code}</td>
                        <td>${food[i].name}</td>
                        <td>${food[i].price}/=</td>
                        <td>${food[i].discount == null ? '--' : food[i].discount + "%"}</td>

                    </tr>`
    }
    tablebody += '</tbody>'
    table.innerHTML = tablebody;
}

function foodcategorypasta(){
    let table = document.getElementById("table");
    let tablebody = `<thead>
                        <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        </tr>
                    </thead>
                    <tbody = "table-group-divider">`;
    for(let i = 29; i < 36; i++){
        tablebody += `<tr ondblclick= "addtocart(${i})">
                        <td>${food[i].code}</td>
                        <td>${food[i].name}</td>
                        <td>${food[i].price}/=</td>
                        <td>${food[i].discount == null ? '--' : food[i].discount + "%"}</td>

                    </tr>`
    }
    tablebody += '</tbody>' 
    table.innerHTML = tablebody;
}

function foodcategorychicken(){
    let table = document.getElementById("table");
    let tablebody = `<thead>
                        <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        </tr>
                    </thead>
                    <tbody = "table-group-divider">`;
    for(let i = 36; i < 42; i++){
        tablebody += `<tr ondblclick= "addtocart(${i})">
                        <td>${food[i].code}</td>
                        <td>${food[i].name}</td>
                        <td>${food[i].price}/=</td>
                        <td>${food[i].discount == null ? '--' : food[i].discount + "%"}</td>

                    </tr>`
    }
    tablebody += '</tbody>' 
    table.innerHTML = tablebody;
}

function foodcategorybeverages(){
    let table = document.getElementById("table");
    let tablebody = `<thead>
                        <tr>
                        <th scope="col">Code</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Discount</th>
                        </tr>
                    </thead>
                    <tbody = "table-group-divider">`;
    for(let i = 42; i < 46; i++){
        tablebody += `<tr ondblclick= "addtocart(${i})">
                        <td>${food[i].code}</td>
                        <td>${food[i].name}</td>
                        <td>${food[i].price}/=</td>
                        <td>${food[i].discount == null ? '--' : food[i].discount + "%"}</td>

                    </tr>`
    }
    tablebody += '</tbody>'
    table.innerHTML = tablebody;
}

                    //-------------------------------------search items-----------------------------------//
function searchfood(){
    let foodname = document.getElementById("foodname").value;

    for(let i = 0; i < food.length; i++){
        if (food[i].name == foodname) {
            let tablebody = `<thead>
                                <tr>
                                <th scope="col">Code</th>
                                <th scope="col">Name</th>
                                <th scope="col">Price</th>
                                <th scope="col">Discount</th>
                                </tr>
                            </thead>
                        <tbody = "table-group-divider">
                            <tr ondblclick= "addtocart(${i})">
                                <td>${food[i].code}</td>
                                <td>${food[i].name}</td>
                                <td>${food[i].price}</td>
                                <td>${food[i].discount == null ? '--' : food[i].discount + "%"}</td>

                            </tr>
                        </tbody>`
                        table.innerHTML = tablebody;
        }
    }
}


                 //----------------------------------------cart management------------------------------------------------------//

function addtocart(i) {
    if (selectedqty(i)){
        cart.push({
            name : food[i].name,
            price : food[i].price,
            qty : 1,
            total : (1*food[i].price)*(food[i].discount == null ? 1 : ((100-food[i].discount)/100))
        })
    }
    loadcart()
}

function selectedqty(i){
    var bool = true
    cart.forEach(element => {
        if (food[i].name == element.name) {
            element.qty++;
            element.total*=2;
            bool = false
        }
    });
    return bool;
}

function gettotal(){
    let total = 0;
    cart.forEach(element =>{
        total += element.total;
    });
    return total;
}
function removefromcart(element) {
    if (cart[element].qty>1) {
        cart[element].qty--;
    }else {
        cart.splice(element,1)
    }

    loadcart()
}

function loadcart(){
    let carttable = document.getElementById("carttable");
    let total = document.getElementById("total");
    let cartt = `<thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Price</th>
                            <th scope="col">Qty</th>
                            <th scope="col">Total</th>
                        </tr>
                    </thead>
                    <tbody = "table-group-divider">`;
    for (let i = 0; i < cart.length; i++) {
        cartt += `<tr ondblclick = "removefromcart(${i})">
                        <td>${cart[i].name}</td>
                        <td>${cart[i].price}</td>
                        <td>${cart[i].qty}</td>
                        <td>${cart[i].total}</td>
                    </tr>`
    }
    cartt += '</tbody>' 
    carttable.innerHTML = cartt
    total.innerHTML = `total -: `+gettotal()+`LKR`;
}

                     //-------------------------------------------order manegement----------------------------------------//

function placeorder() {
    if (customer.length == 0 || iscontactexist(document.getElementById("contactatorder").value)) {
        customer.push({
            contact : document.getElementById("contactatorder").value, 
            name: document.getElementById("nameatorder").value, 
            age : document.getElementById("ageatorder").value,
            address : document.getElementById("addressatorder").value,
            order : order.length+1
        })  
    } else{
        customer.forEach(element=>{
            if (element.contact = document.getElementById("contactatorder").value) {
                element.name = document.getElementById("nameatorder").value;
                element.age = document.getElementById("ageatorder").value;
                element.address = document.getElementById("addressatorder").value;
                element.order = order.length+1
            }
        })
    }

    order.push({
        orderID : order.length+1,
        customer : document.getElementById("contactatorder").value ,
        price : gettotal() ,
        time : new Date().toISOString().split('T')[0]+ " : " + new Date().getHours() + ":" + new Date().getMinutes()
    })

    loadordertable()
    loadcustomertable()
    loadcart()
    while(cart.length > 0) {
        cart.pop();
    }
}

function loadordertable(){
    let ordertable = document.getElementById("ordertable");
    let orderbody = `<thead>
                        <tr>
                            <th scope="col">OrderID</th>
                            <th scope="col">Customer</th>
                            <th scope="col">Price</th>
                            <th scope="col">Time</th>
                        </tr>
                    </thead>
                    <tbody = "table-group-divider">`;
    for (let i = 0; i < order.length; i++) {
        orderbody += `<tr onclick = "addorderdetails(${i})" ondblclick = "removefromorder(${i})">
                        <td>${order[i].orderID}</td>
                        <td>${order[i].customer}</td>
                        <td>${order[i].price}</td>
                        <td>${order[i].time}</td>
                    </tr>`
    }
    orderbody += '</tbody>' 
    ordertable.innerHTML = orderbody
}

function removefromorder(element){
    order.splice(element,1)
    loadordertable()
}

                   //---------------------------------------customer management-------------------------------------------//

function addcustomer() {
    document.getElementById("addcustomerbtn").innerHTML = "Add Customer"
    if (customer.length == 0 || iscontactexist(document.getElementById("contact").value)) {
        customer.push({
            contact : document.getElementById("contact").value, 
            name: document.getElementById("name").value, 
            age : document.getElementById("age").value,
            address : document.getElementById("address").value
        })  
    } else{
        customer.forEach(element=>{
            if (element.contact = document.getElementById("contact").value) {
                element.name = document.getElementById("name").value;
                element.age = document.getElementById("age").value;
                element.address = document.getElementById("address").value;
            }
        })
    }

    loadcustomertable()
}

function iscontactexist(contact) {
    let bool = true
    customer.forEach(element=>{
        if (element.contact = contact) {
            bool = false
        }
    })
    return bool
}

function removefromcustomer(element){
    customer.splice(element,1)
    loadcustomertable()
}

function loadcustomertable(){
    let customertable = document.getElementById("customertable");
    let customerbody = `<thead>
                        <tr>
                            <th scope="col">Contact</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">Address</th>
                            <th scope="col">Order</th>
                        </tr>
                    </thead>
                    <tbody = "table-group-divider">`;
    for (let i = 0; i < customer.length; i++) {
        customerbody += `<tr onclick = "addcustomerdetails(${i})" ondblclick = "removefromcustomer(${i})">
                        <td>${customer[i].contact}</td>
                        <td>${customer[i].name}</td>
                        <td>${customer[i].age}</td>
                        <td>${customer[i].address}</td>
                        <td>${customer[i].order == null} ? -- : ${customer[i].order}</td>
                    </tr>`
    }
    customerbody += '</tbody>' 
    customertable.innerHTML = customerbody
}

function addcustomerdetails(element) {
    document.getElementById("addcustomerbtn").innerHTML = "Update Customer"
    document.getElementById("contact").value = customer[element].contact
    document.getElementById("name").value = customer[element].name
    document.getElementById("age").value = customer[element].age
    document.getElementById("address").value = customer[element].address
}