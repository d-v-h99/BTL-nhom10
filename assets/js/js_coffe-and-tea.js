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
