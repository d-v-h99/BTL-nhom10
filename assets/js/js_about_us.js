var span = document.querySelectorAll(".h_menu ul li span")
console.log("hello",span);
var menu_sub = document.querySelectorAll(".menu-sub") 
span.forEach((item, index) => {
    var flag = true;
    var id = index;
    item.addEventListener("click", () => {
        flag = !flag
        menu_sub.forEach((item, ind) =>  {
            if (id === ind + 1) {
                item.style.display = flag ? "none" : "block"
            }
        })
    })
})
var bars = document.getElementById('bars')
var h_menu = document.querySelector('.h_menu')
var flag = false
bars.addEventListener("click", () => {
    flag = !flag;
    h_menu.style.display = flag ? "block" : "none"
    console.log(1);
})