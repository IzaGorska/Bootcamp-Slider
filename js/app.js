const people = [
    {
        img: "images/image-tanya.jpg",
        description: "\“ I\’ve been interested in coding for a while but never taken the jump, until now. I couldn\’t recommend this course enough. I\’m now in the job of my dreams and so excited about the future. \”",
        name: "Tanya Sinclair",
        profession: "UX Engineer"
    },
    {
        img: "images/image-john.jpg",
        description: "\“ If you want to lay the best foundation possible I\’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \”",
        name: "John Tarkpor",
        profession: "Junior Front-end Developer"
    }
]

const img = document.querySelector("img.slider");
const h3 = document.querySelector("h3.slider");
const h4 = document.querySelector("h4.slider");
const h5 = document.querySelector("h5.slider");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

let active = 0;
h3.innerHTML = people[active].description;
h4.innerHTML = people[active].name;
h5.innerHTML = people[active].profession;

const prevPerson=()=>{
    if(active==0){
        active=people.length
    }
    active--;
    img.src = people[active].img;
    h3.innerHTML = people[active].description;
    h4.innerHTML = people[active].name;
    h5.innerHTML = people[active].profession;

}

const nextPerson=()=>{
active++;
if(active===people.length){
    active=0;
}
img.src = people[active].img;
h3.innerHTML = people[active].description;
h4.innerHTML = people[active].name;
h5.innerHTML = people[active].profession;
}


prev.addEventListener('click', prevPerson);
next.addEventListener('click', nextPerson);
