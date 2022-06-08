$(document).ready(function () {
    console.log('123')
})
const elementRoot = ReactDOM.createRoot(document.getElementById('root'))

var lish_product_drink = [
    {
        title_Vn :'sữa chua Phúc Bồn Tử Đác Cam',
        href : 'https://phuclong.com.vn/uploads/dish/4136b3715bff3e-sachuaphcbntccamphclong.png' , 
        title_En :'Berry Berry Yogurt',
        title_Cost :  '68.727 đ'
    },
    {
        href:'https://phuclong.com.vn/uploads/dish/65a7d028c2229d-sachuaxoicthmphclong.png',
        title_Vn :'Sữa Chua Xoài Đác Thơm',
        title_En: 'Troical Yogurt',
        title_Cost : '68.727 đ'
    },
    {
        href:'https://phuclong.com.vn/uploads/dish/b8f1dd4d4f583c-dacthom.png',
        title_Vn :'Trà Lài Đác Thơm',
        title_En: 'Forest Jasmine Tea',
        title_Cost : '49.091 đ'
    },
    {
        href:'https://phuclong.com.vn/uploads/dish/dae727e03e8092-daccam.png',
        title_Vn :'Hồng Trà Đác Cam',
        title_En: 'Forest Black Tea',
        title_Cost : '68.727 đ'
    },
    {
        href:'https://phuclong.com.vn/uploads/dish/7c8006f72742d8-trnhnphclong.png',
        title_Vn :'Trà Nhãn - Sen',
        title_En: 'Logan Tea (Lotus)',
        title_Cost : '49.091 đ'
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/005aaeed660473-trnhnphclong.png' ,
        title_Vn : 'Trà Nhãn - Lài',
        title_En: 'Longan Tea (Jasmine)',
        title_Cost : '49.091 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/063555c21c4206-trviliphclong.png' ,
        title_Vn : 'Trà Vải - Lài',
        title_En: 'Lychee Tea (Jasmine)',
        title_Cost : '49.091 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/5a893da4cab487-trthomcphclong.png' ,
        title_Vn : 'Trà Thảo Mộc',
        title_En: 'Lucky Team',
        title_Cost : '49.091 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/e160951ba017fe-trviliphclong.png' ,
        title_Vn : 'Trà Vải - Sen',
        title_En: 'Lychee Tea (lotus)',
        title_Cost : '49.091 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/3937476a64a213-trophclong.png' ,
        title_Vn : 'Trà Đào Phúc Long',
        title_En: 'Phuc Long Peach Tea',
        title_Cost : '49.091 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/3c2d50a2c26783-hngtrsaphclongtrosaphclong.png' ,
        title_Vn : 'Hồng Trà Sữa',
        title_En: 'Phuc Long Black Milk Team',
        title_Cost : '44.128 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/ad7f4b76f4b694-trsaphclongtrlongsaphclong.png' ,
        title_Vn : 'Trà Sữa Phúc Long',
        title_En: 'Phuc Long Tea Latte',
        title_Cost : '44.128 đ',
    }
] 

var lish_product_snacks = [
    {
        href : 'https://phuclong.com.vn/uploads/dish/16fe719b78fd67-anh_viber_20210127_153153.jpg',
        title_Vn : 'Mận Dẻo Gừng',
        title_En : 'Khối lượng tịnh : 100 g',
        title_Cost : '45.163 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/bb6c510fc498d1-anh_viber_20210127_153152.jpg',
        title_Vn : 'Gừng Nướng Mật Ong',
        title_En : 'Khối lượng tịnh : 50 g',
        title_Cost : '56.945 đ ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/e8bf964785cc8f-anh_viber_20210127_153151.jpg',
        title_Vn : 'Nho Khô Úc - Hộp',
        title_En : 'Khối lượng tịnh : 100 g',
        title_Cost : '38.291 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/ea88d8bc85ea77-anh_viber_20210127_153150.jpg',
        title_Vn : 'Nho Khô Úc - Gói',
        title_En : 'Khối lượng tịnh : 40 g',
        title_Cost : '18.655 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/b380798cdac374-traicaytuoisaydeo.png',
        title_Vn : 'Trái Cây Tươi Sấy Dẻo',
        title_En : 'Khối lượng tịnh : 50 g',
        title_Cost : '31.481 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/3c54192a843ade-xoaisaydeo.png',
        title_Vn : 'Xoài Sấy Dẻo',
        title_En : 'Khối lượng tịnh : 50 g',
        title_Cost : '31.418 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/4435480ff2bcfb-thomsaydeo.png',
        title_Vn : 'Thơm Sấy Dẻo',
        title_En : 'Khối lượng tịnh : 50 g',
        title_Cost : '31.418 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/76ea674c025829-dudusaydeo.png',
        title_Vn : 'Đu Đủ Sấy Dẻo',
        title_En : 'Khối lượng tịnh : 50 g',
        title_Cost : '31.418 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/66767e9f99f891-hopdieutuoirangcui.png',
        title_Vn : 'Hạt Điều Rang Củi (Vỏ Lụa) - Lon ',
        title_En : 'Khối lượng tịnh : 130 g',
        title_Cost : '76.528 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/dc98ac0043a59c-hatdieurangcuitoiot.png',
        title_Vn : 'Hạt Điều Rang Củi Tỏi Ớt - Gói',
        title_En : 'Khối lượng tịnh : 40 g',
        title_Cost : '25.527 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/fcabc67c04409a-hopdieutuoirangtoiot.png',
        title_Vn : 'Hạt Điều Rang Củi Tỏi Ớt - Lon',
        title_En : 'Khối lượng tịnh : 130 g',
        title_Cost : '73.637 đ',
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/c8c9cb7c3aff7e-hatdieurangcui.png',
        title_Vn : 'Hạt Điều Rang Củi (Vỏ Lụa) - Gói',
        title_En : 'Khối lượng tịnh : 40 g',
        title_Cost : '26.509',
    },

]

var lish_product_bakery = [
    {
        href : 'https://phuclong.com.vn/uploads/dish/61b22d5643fc80-img_67711.png' ,
        title_Vn : 'Bánh Mì Phúc Long (M)',
        title_Cost : '31.418 đ', 
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/774b3f1fd9202e-greenteachocolatecake.png' ,
        title_Vn : 'Green Tea Choco Cake',
        title_Cost : '34.363 đ', 
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/a9686c8f36a908-passionpannacotta.png' ,
        title_Vn : 'Passion Panna Cotta',
        title_Cost : '34.363 đ', 
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/dd626a9639b006-tiramisumini.png' ,
        title_Vn : 'Tiramisu Mini',
        title_Cost : '34.363 đ', 
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/a1c4d22a41ec76-banhphap_0003s_0000_chocobuttercroissant.jpg' ,
        title_Vn : 'Butter Chocolate Croissant 30g',
        title_Cost : '22.000 đ', 
    },
    {
        href : 'https://phuclong.com.vn/uploads/dish/01b9696b860549-banhphap_0000s_0001_buttercroissant.jpg' ,
        title_Vn : 'Pure Butter Croissant 30g',
        title_Cost : '19.637 đ', 
    },
]
var i=0
function Content ({
    title_Vn,
    title_En,
    title_Cost,
    href,
    btn,
    
}) {
    
    return title_En != "" ? 
    (
        <div className='item-drink col-md-3 col-sm-6' >
            <div className='item-drink-box'>
                <img src={href} alt=""></img>
                <div className="item-drink-info">
                    <div className="item-drink-name-Vn"><p>{title_Vn}</p></div>
                    <div className="item-drink-name-En"><p>{title_En}</p></div>
                    <div className="item-drink-cost"><p>{title_Cost}</p></div>
                    <button className="btn item-drink-btn text-uppercase" data-toggle="modal" data-target="#myModal" >{btn}</button>
                </div>
            </div>
        </div>
    ) 
    : 
    (
        <div className='item-drink col-md-3 col-sm-6' >
            <div className='item-drink-box'>
                <img src={href} alt=""></img>
                <div className="item-drink-info">
                    <div className="item-drink-name-Vn"><p>{title_Vn}</p></div>
                    <div className="item-drink-cost"><p>{title_Cost}</p></div>
                    <button className="btn item-drink-btn text-uppercase">{btn}</button>
                </div>
            </div>
        </div>
    )

}
var elementRS = (
        <div className="row">
            {lish_product_drink.map((e) => 
                <Content 
                title_Vn = {e.title_Vn} 
                title_En = {e.title_En}
                title_Cost = {e.title_Cost}
                href = {e.href}   
                btn = 'Đặt hàng'
                key = {i++}
                />  
            )}   
        </div>
    )
    
    elementRoot.render(elementRS)

    function remove_attribute_active(){
        var listItemDrink = document.querySelectorAll(".title-menu-cr li ")
            listItemDrink.forEach((e) => {
                e.classList.remove('active')
            })
    }

    var click_drink = document.getElementById('title-menu-div-2-drink')
    click_drink.onclick = () => {
        remove_attribute_active()
        document.querySelector(".title-menu-li-1").classList.add("active")
        document.querySelector(".title-h1").innerHTML = "thức uống"
        document.querySelector(".title-menu-a-1-1").innerHTML = "thức uống"
        elementRS = (
            <div className="row">
                {lish_product_drink.map((e) => 
                    <Content 
                    title_Vn = {e.title_Vn} 
                    title_En = {e.title_En}
                    title_Cost = {e.title_Cost}
                    href = {e.href} 
                    btn = 'Đặt hàng' 
                    key = {i++} 
                    />  
                )}   
            </div>
        )
        elementRoot.render(elementRS)
    }

    var click_snacks = document.getElementById('title-menu-div-2-snacks');
    click_snacks.onclick = function ()  {
        remove_attribute_active()
        document.querySelector(".title-menu-li-2").classList.add("active")
        document.querySelector(".title-h1").innerHTML = "snacks"
        document.querySelector(".title-menu-a-1-1").innerHTML = "snacks"
        elementRS = (
            <div className="row">
                {lish_product_snacks.map((e) => 
                    <Content 
                    title_Vn = {e.title_Vn} 
                    title_En = {e.title_En}
                    title_Cost = {e.title_Cost}
                    href = {e.href}  
                    btn = 'Liên hệ' 
                    key = {i++}
                    />  
                )}   
            </div>
        )
        elementRoot.render(elementRS)
    }

    var click_bakery = document.getElementById('title-menu-div-2-bakery');
    click_bakery.onclick = function ()  {
        remove_attribute_active()
        document.querySelector(".title-menu-li-3").classList.add("active")
        document.querySelector(".title-h1").innerHTML = "bakery"
        document.querySelector(".title-menu-a-1-1").innerHTML = "bakery"
            elementRS = (
                <div className="row">
                    {lish_product_bakery.map((e) => 
                        <Content 
                        title_Vn = {e.title_Vn} 
                        title_En = ''
                        title_Cost = {e.title_Cost}
                        href = {e.href}  
                        btn = 'Đặt hàng' 
                        key = {i++}
                        />  
                    )}   
                </div>
            )
            elementRoot.render(elementRS)
        }