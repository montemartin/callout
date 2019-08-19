// @todo may need to make this close other element (reuse code from isi tabs)
const lines = document.querySelectorAll(".selector");

lines.forEach( line => {
    line.addEventListener("click", function() {
        x = this.classList
        x.toggle("open")
        x.toggle("closed")
    }, false);
});