// auto next logo 
var index = 0;
changeImg = function(){
    var imgs = ["/assets/img/logo.png","/assets/img/logo_2.png","/assets/img/logo_1.png"];
    document.getElementById('img').src = imgs[index];
    index++;
    if(index == 3){
        index = 0;
    }
}
setInterval(changeImg,1000);


// tab content 
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)
const tabs = $$(".tab-item")
const contents = $$(".tab-content")
tabs.forEach((tab, index) => {
    const content = contents[index];
    tab.onclick = function () {
        $(".tab-item.active").classList.remove("active");
        $(".tab-content.active-content").classList.remove("active-content");
            
        this.classList.add("active");
        content.classList.add("active-content");
    }; 
});


// backtop 
const backtop = document.querySelector('.backtop');
console.log(backtop.offsetTop);
var trangthai = 'dautrang';
window.addEventListener('scroll', function () {
    if (this.window.pageYOffset > 0) {
        if (trangthai == 'dautrang') {
            trangthai = 'dichuyen';
            backtop.style.display = 'flex';
        }
    }
    else {
        if (trangthai == 'dichuyen') {
            trangthai = 'dautrang';
            backtop.style.display = 'none';
        }
    }
})