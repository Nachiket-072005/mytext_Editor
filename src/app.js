let inp = document.querySelector("#text");

inp.addEventListener("input", function() {
    console.log(inp.value);

    let p = document.querySelector("p");
    p.innerText = inp.value;
})

