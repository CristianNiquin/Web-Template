function Btn_Top_Nav() {
    var x = document.getElementById("navtop");
    if (x.className === "top-nav") {
        x.className += " responsive";
    } else {
        x.className = "top-nav";
    }
}