document.addEventListener("DOMContentLoaded",function(){
    // xử lý reponsive
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
    
    // xử lí slide
    var nut = document.querySelectorAll('.chuyenslide ul li');
    var slides = document.querySelectorAll('.cacslide ul li');
    var thoigian = setInterval(function () { autoSlide() }, 2000);
    for (var i = 0; i < nut.length; i++) {
        nut[i].addEventListener('click', function () {
            clearInterval(thoigian);
            for (var i = 0; i < nut.length; i++) {
                nut[i].classList.remove('kichhoat');
            }
            this.classList.add('kichhoat');
            var nutkichhoat = this;
            var vitrinut = 0
            for (vitrinut = 0; nutkichhoat = nutkichhoat.previousElementSibling; vitrinut++) {}
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                slides[vitrinut].classList.add('active');
            }
        })
    }
    
    function autoSlide() {
        var vitrislide = 0;
        var slideHienThi = document.querySelector('.cacslide ul li.active');
        for (vitrislide = 0; slideHienThi = slideHienThi.previousElementSibling; vitrislide++) { }
        if (vitrislide < (slides.length - 1)) {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                nut[i].classList.remove('kichhoat');
            }
            slides[vitrislide].nextElementSibling.classList.add('active');
            nut[vitrislide].nextElementSibling.classList.add('kichhoat');
        }
        else {
            for (var i = 0; i < slides.length; i++) {
                slides[i].classList.remove('active');
                nut[i].classList.remove('kichhoat');
            }
            slides[0].classList.add('active');
            nut[0].classList.add('kichhoat')
        }
    
    }
    var nutPhai = document.querySelector('.nuts b.phai');
    var nutTrai = document.querySelector('.nuts b.trai');
    chisoHienTai = 0;
    soluongslide = slides.length;
    //-------
    chi_so_nut = 0;
    for (var i = 0; i < nut.length; i++) {
        nut[i].addEventListener('click', function () {
            clearInterval(thoigian);
            for (var i = 0; i < nut.length; i++) {
                nut[i].classList.remove('kichhoat');
            }
            this.classList.add('kichhoat');
            var nutkichhoat = this;
            var chi_so_nut = 0
            for (chi_so_nut = 0; nutkichhoat = nutkichhoat.previousElementSibling; chi_so_nut++) {}
            console.log("Chỉ số nút mới",chi_so_nut);
        })
    }
    so_luong_nut = nut.length;
    //-------
    var chuyenSlideChoNutPhai = function () {
        clearInterval(thoigian);
        var phanTuHienTai = slides[chisoHienTai];
        if (chisoHienTai < soluongslide - 1) {
            chisoHienTai = chisoHienTai + 1;
        }
        else {
            chisoHienTai = 0;
        }
        var phanTuTiepTheo = slides[chisoHienTai];
        //-----
        var nut_hien_tai = nut[chi_so_nut];
        console.log("nút hiện tại",nut_hien_tai);
        if (chi_so_nut < so_luong_nut - 1) { chi_so_nut = chi_so_nut + 1; }
        else { chi_so_nut = 0; }
        var nut_tiep_theo = nut[chi_so_nut];
        var xuLyHienTaiKetThucCD = function () {
    
            this.classList.remove('active');
            this.classList.remove('bienMatKhiAnNext');
    
        }
        var xuLyTiepTheoKetThucCD = function () {
    
            this.classList.remove('diVaoKhiAnNext');
            this.classList.add('active');
        }
        phanTuTiepTheo.addEventListener("webkitAnimationEnd", xuLyTiepTheoKetThucCD);
        phanTuHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiKetThucCD);
        phanTuHienTai.classList.add('bienMatKhiAnNext');
        phanTuTiepTheo.classList.add('diVaoKhiAnNext');
    
        //------
        nut_hien_tai.classList.remove('kichhoat');
        nut_tiep_theo.classList.add('kichhoat');
        //-----
    };
    nutPhai.addEventListener('click', chuyenSlideChoNutPhai);
    
    
    var chuyenSlideNutTrai = function () {
        clearInterval(thoigian);
    
        var phanTuHienTai = slides[chisoHienTai];
    
        if (chisoHienTai > 0) {
            chisoHienTai--;
        }
        else {
    
            chisoHienTai = soluongslide - 1;
        }
        var phanTuTiepTheo = slides[chisoHienTai];
        //---------
        var nut_hien_tai = nut[chi_so_nut];
        if (chi_so_nut > 0) { chi_so_nut--; }
        else {
            chi_so_nut = so_luong_nut - 1;
        }
        var nut_tiep_theo = nut[chi_so_nut];
        //---
        var xuLyHienTaiKetThucCD = function () {
    
            this.classList.remove('active');
            this.classList.remove('bienMatKhiAnPre');
        }
        var xuLyTiepTheoKetThucCD = function () {
    
            this.classList.remove('diVaoKhiAnPre');
            this.classList.add('active');
    
        }
        phanTuTiepTheo.addEventListener("webkitAnimationEnd", xuLyTiepTheoKetThucCD);
        phanTuHienTai.addEventListener('webkitAnimationEnd', xuLyHienTaiKetThucCD);
    
    
        phanTuHienTai.classList.add('bienMatKhiAnPre');
        phanTuTiepTheo.classList.add('diVaoKhiAnPre');
    
        //------
        nut_hien_tai.classList.remove('kichhoat');
        nut_tiep_theo.classList.add('kichhoat');
        //-----
    
    }
    nutTrai.addEventListener('click', chuyenSlideNutTrai);
    
    // xử lí js nút backtop
    const back_top = document.querySelector('.back_top');
    console.log(back_top.offsetTop);
    var trangthai = 'dautrang';
    window.addEventListener('scroll', function () {
        if (this.window.pageYOffset > 200) {
            if (trangthai == 'dautrang') {
                trangthai = 'dichuyen';
                back_top.style.display = 'flex';
            }
        }
        else {
            if (trangthai == 'dichuyen') {
                trangthai = 'dautrang';
                back_top.style.display = 'none';
            }
        }
    })
    
    // xử lí animation _2
    var ptuload = document.querySelector('.animation_2');
    var trangthais3 = "duoi";
    var vitris3 = ptuload.offsetTop - 400;
    window.addEventListener('scroll', function () {
        if (this.window.pageYOffset > vitris3) {
            if (trangthais3 == 'duoi') {
                trangthais3 = 'tren';
                ptuload.classList.add('sangtrai');
            }
        }
    })
    // xử lí animation_3
    var ptuload1 = document.querySelector('.animation_3');
    var trangthais4 = "duoi";
    var vitris4 = ptuload1.offsetTop - 400;
    window.addEventListener('scroll', function () {
        if (this.window.pageYOffset > vitris3) {
            if (trangthais4 == 'duoi') {
                trangthais4 = 'tren';
                ptuload1.classList.add('sangphai');
            }
        }
    })
    // animation_1
    var ptuload2 = document.querySelector('.animation_1');
    var trangthais5 = "duoi";
    var vitris5 = ptuload2.offsetTop - 400;
    window.addEventListener('scroll', function () {
        if (this.window.pageYOffset > vitris5) {
            if (trangthais5 == 'duoi') {
                trangthais5 = 'tren';
                ptuload2.classList.add('dilen');
            }
        }
    })
    
})
// auto next logo 
var index = 0;
changeImg = function(){
    var imgs = ["./assets/img/logo.png","./assets/img/logo_2.png","./assets/img/logo_1.png"];
    document.getElementById('img_logo').src = imgs[index];
    index++;
    if(index == 3){
        index = 0;
    }
}
setInterval(changeImg,1000);