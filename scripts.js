// @todo may need to make this close other element (reuse code from isi tabs)
const lines = document.querySelectorAll(".line");

lines.forEach( line => {
    line.addEventListener("click", function() {
        this.classList.toggle("collapsed");
    }, false);
});