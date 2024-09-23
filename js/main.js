var ptoductnameinput = document.getElementById("ptoductnameinput");
var ptoductpriceinput = document.getElementById("ptoductpriceinput");
var ptoducttypeinput = document.getElementById("ptoducttypeinput");
var ptoductdescriptioninput = document.getElementById("ptoductdescriptioninput");
var searchid = document.getElementById("searchid");
var addbutton = document.getElementById("addbutton");
var updateBtn = document.getElementById("updateBtn");
var nammassig = document.getElementById("nammassig");
var pricemasseg = document.getElementById("pricemasseg");
var typemasseg = document.getElementById("typemasseg");
var descriptionmsg = document.getElementById("descriptionmsg");

var indexupdate = 0;
var productlist = [];
if (localStorage.getItem("products") != null) {
    productlist = JSON.parse(localStorage.getItem("products"));
display();
}

function addproduct() {
    if (validationName() && validationprice() && validationtype() && validationdescription()) {
        var product = {
            name: ptoductnameinput.value,
            price: ptoductpriceinput.value,
            type: ptoducttypeinput.value,
            description: ptoductdescriptioninput.value
        };
        productlist.push(product);
        
       
        display();
        
       
        clearform();
      
        localStorage.setItem("products", JSON.stringify(productlist));
        
        
        ptoductnameinput.classList.remove("is-valid");
        ptoductpriceinput.classList.remove("is-valid");
        ptoducttypeinput.classList.remove("is-valid");
        ptoductdescriptioninput.classList.remove("is-valid");
    }
}

function clearform() {
    ptoductnameinput.value = "";
    ptoductpriceinput.value = "";
    ptoducttypeinput.value = "";
    ptoductdescriptioninput.value = "";
}
 
function display() {
    var cartona = "";
    for (i = 0; i < productlist.length; i++)
    {
        cartona += `
            <tr >
            <td>${i}</td>
            <td>${productlist[i].name}</td>
            <td>${productlist[i].price}</td>
            <td>${productlist[i].type}</td>
            <td>${productlist[i].description}</td>
              <td>
            <button class=" btn btn-warning" onclick ="setData(${i})"> update</button>
            <button class="btn btn-danger" onclick="deleteproudect(${i})">delete</button>
        </td>

           
        </tr>`;
    }
    document.getElementById("tabletbady").innerHTML = cartona;
}
function deleteproudect(index) {
    productlist.splice(index, 1);
       localStorage.setItem("products", JSON.stringify(productlist));
    display();
}
function searchproudect() {
    var term = searchid.value;
    var cartona = "";
    for (i = 0; i < productlist.length; i++)
    {
        if (productlist[i].name.toLowerCase().includes(term.toLowerCase()))
        {
 cartona += `
            <tr >
            <td>${i}</td>
            <td>${productlist[i].name}</td>
            <td>${productlist[i].price}</td>
            <td>${productlist[i].type}</td>
            <td>${productlist[i].description}</td>
              <td>
            <button class=" btn btn-warning " onclick="setData(${i})> update</button>
                        <button class="btn btn-danger" onclick="deleteproudect(${i})">delete</button>

        </td>

           
        </tr>`;
        }
        }
    document.getElementById("tabletbady").innerHTML = cartona;
 
       
}
function setData(index) {
    indexUpdate=index
    var currentProduct=productlist[index]
ptoductnameinput.value=currentProduct.name;
ptoductpriceinput.value=currentProduct.price;
ptoducttypeinput.value=currentProduct.type;
ptoductdescriptioninput.value=currentProduct.description;
addbutton.classList.add("d-none")
updateBtn.classList.remove("d-none")
}
 
function updateproduct() {
     var product = {
        name: ptoductnameinput.value,
        price: ptoductpriceinput.value,
        type: ptoducttypeinput.value,
        description: ptoductdescriptioninput.value,
    }; 
    productlist.splice(indexupdate, 1, product)
    localStorage.setItem("products", JSON.stringify(productlist));
addbutton.classList.remove("d-none")
updateBtn.classList.add("d-none")
    display();
    clearform();
}


console.log();
function validationName() {
    var regux = /^[A-Z][a-z]{3,8}$/;
    var text = ptoductnameinput.value;
    console.log(regux.test(text));
    if (regux.test(text)) {
        ptoductnameinput.classList.add("is-valid");
        ptoductnameinput.classList.remove("is-invalid");
        nammassig.classList.add("d-none")
        return true
    }
    else {
        ptoductnameinput.classList.add("is-invalid");
        ptoductnameinput.classList.remove("is-valid");
        nammassig.classList.remove("d-none");
        return false
    }
    
}
function validationprice() {
    var reguxprice = /\b(10000|[1-9][0-9]{3})\b/;
     var textp = ptoductpriceinput.value;
    console.log(reguxprice.test(textp));
     if (reguxprice.test(textp)) {
        ptoductpriceinput.classList.add("is-valid");
        ptoductpriceinput.classList.remove("is-invalid");
        pricemasseg.classList.add("d-none")
        return true
    }
    else {
        ptoductpriceinput.classList.add("is-invalid");
        ptoductpriceinput.classList.remove("is-valid");
        pricemasseg.classList.remove("d-none");
        return false
    }
    

}
function validationtype() {
     var reguxtype = /^[A-Za-z\s]+$/;
     var texttype = ptoducttypeinput.value;
    console.log(reguxtype.test(texttype));
     if (reguxtype.test(texttype)) {
        ptoducttypeinput.classList.add("is-valid");
        ptoducttypeinput.classList.remove("is-invalid");
        typemasseg.classList.add("d-none")
        return true
    }
    else {
        ptoducttypeinput.classList.add("is-invalid");
        ptoducttypeinput.classList.remove("is-valid");
        typemasseg.classList.remove("d-none");
        return false
    }
    

    
}
function validationdescription() {
     var reguxdecription = /^.{1,50}$/;
     var textdescription = ptoducttypeinput.value;
    console.log(reguxdecription.test(textdescription));
     if (reguxdecription.test(textdescription)) {
        ptoductdescriptioninput.classList.add("is-valid");
        ptoductdescriptioninput.classList.remove("is-invalid");
        descriptionmsg.classList.add("d-none")
        return true
    }
    else {
        ptoductdescriptioninput.classList.add("is-invalid");
        ptoductdescriptioninput.classList.remove("is-valid");
        descriptionmsg.classList.remove("d-none");
        return false
    }
    

    
}
