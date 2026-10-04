const flower = document.querySelector(".sunflower");


flower.addEventListener("click",()=>{


    flower.style.animation =
    "none";


    setTimeout(()=>{


        flower.style.animation =
        "wind 4s ease-in-out infinite";


    },100);


    alert("🌻 Una flor amarilla para ti");


});