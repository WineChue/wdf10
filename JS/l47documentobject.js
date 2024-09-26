let chl;
const getul = document.querySelector('ul');
    
chl = getul.children;
chl = getul.children[0];
chl = getul.children[0].children[0];
chl = getul.children[0].children[0].children[0];
chl = getul.children[0].children[0].children[0].className;

// console.log(chl);

// child Element count 

chl = getul.childElementCount;
// console.log(chl);

chl = getul.parentElement;
// console.log(chl);

// =>Children to Parent 

const getfirstli = document.querySelector('li.list-group-item:first-child');

// let getparent = getfirstli.parentElement;
// getparent = getfirstli.parentElement.parentElement;

// console.log(getparent);

// => Next Element Sibling

let getsibling = getfirstli.nextElementSibling; //li2
    getsibling = getfirstli.nextElementSibling.nextElementSibling; //li3

// console.log(getsibling);

// =>Previous Element Sibling
let previousSibling = getsibling.previousElementSibling; //li2
    previousSibling = getsibling.previousElementSibling.previousElementSibling; //li1

// console.log(previousSibling);

// =>Create Element 

const newli = document.createElement('li');

// Add ID 
newli.id = "new-item";

//Add Class
newli.className = "list-group-item";
newli.className = "delete-item";
newli.className = "list-group-item delete-me";

newli.classList.add('delete-i');
newli.classList.add('delete-we',"delete-your",`delete-us`);


// Add attribute
// setAttribute("name","value");
newli.setAttribute("title","new-item");

// newli.innerText = "hay";
// newli.textContent = "hay";
// newli.innerHTML = `List Item 6 <a href="#" id="delete-item6" class="delete-item"><i class="fas fa-trash-alt"></i></a>`;

// const newtext = document.createTextNode("Hello World");
// newli.appendChild(newtext);

newli.appendChild(document.createTextNode("Hello World"));

const newlink = document.createElement('a');
newlink.href = "#";
newlink.id = "delete-item6";
newlink.classList.add("delete-item");

const newitalic = document.createElement('i');
newitalic.classList.add('fas',"fa-trash-alt");

newlink.appendChild(newitalic);

newli.appendChild(newlink);
// console.log(newitalic);

// console.log(newlink);

console.log(newli);

document.querySelector("ul.list-group").appendChild(newli);
// =>Replace child 
// replaceChild(new,old);

const newtitleh2 = document.createElement('h2');
newtitleh2.id = "tasktitle";

const newcaption = document.createTextNode("All My List");
newtitleh2.appendChild(newcaption);

const oldtitleh4 = document.querySelector("h4");

const getcardfooter = document.querySelector(".card-footer");

getcardfooter.replaceChild(newtitleh2,oldtitleh4);

// console.log(newtitleh2);

// =>Remove Element (self)

const getlis =document.querySelectorAll("li"); //Node List

// getlis[0].remove();
// getlis[1].remove();

// console.log(getlis); //6


// => Remove Child Element 

const getfirstul = document.querySelector("ul");
console.log(getfirstul);

// getfirstul.removeChild(getfirstul.children[0]);

// getfirstul.removeChild(getfirstul.children[1]);
// getfirstul.removeChild(getfirstul.children[4]);

// =>Attribute 

const firstli = document.querySelector("li");
console.log(firstli);

const firstlichild = firstli.children[0];
console.log(firstlichild);

// console.log(firstlichild);
// console.log(firstlichild.id);
// console.log(firstlichild.href);

console.log(firstlichild.getAttribute("id"));
console.log(firstlichild.getAttribute("href"));
// console.log(firstlichild.abc); //undefined cuz abc is not default attribute
console.log(firstlichild.getAttribute("abc")); //title

// =>Has attribute 

console.log(firstli.children[0].hasAttribute("class")); //true
console.log(firstli.children[0].hasAttribute("alt")); //false

// =>ClassName Vs ClassList 

// console.log(firstlichild.className);
// firstlichild.className = "delete-myself";
// firstlichild.className = "delete-item delete-myself";
// firstlichild.className = "delete-item delete-myself delete-ourselves";
// console.log(firstlichild.className);

// console.log(firstlichild.classList); //DOMTokenList
// console.log(firstlichild.classList[0]); //delete-item
// console.log(firstlichild.classList[1]); //undefined

firstlichild.classList.add("delete-myself");
firstlichild.classList.add("delete-ourselve");
// firstlichild.classList.add("delete-us","delete-yourself");

// firstlichild.classList.remove("delete-myself");
// firstlichild.classList.remove("delete-us","delete-ourselve");
// console.log(firstlichild.classList);

if(firstlichild.className === "delete-item delete-myself delete-ourselve"){
    console.log("Yes");
}else{
    console.log("No");
};

if(firstlichild.classList.contains("delete-item")){
    console.log("Yes");
}else{
    console.log("No");
};

// =>addEventListener(eventtype,callback Function);

const clearbtn = document.querySelector(".clear-task");

//Method1
// clearbtn.addEventListener("click",function(e){
//     console.log("I am working");

//     console.log(e.target);
//     console.log(e.target.id);
//     console.log(e.target.className);
//     console.log(e.target.classList);

//     console.log(this);
//     e.preventDefault();
// });

//Method2

clearbtn.addEventListener("click",myclick);

function myclick(e){
    console.log("Hay");
    console.log("this");
    console.log(e.target);

    console.log(this.id);

    e.preventDefault();

    // e.preventDefault.innerText = "Finished";
    this.innerText ="Done";
};















