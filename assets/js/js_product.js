// auto next logo 
var change_img = document.querySelector(".h_logo .img_logo")
setInterval(function(){
    var index_img = 0
    var imgs = ["./assets/img/logo.png","./assets/img/logo_2.png","./assets/img/logo_1.png"]
    change_img.setAttribute("src", imgs[index_img]) 
    index_img++
    if(index_img == 3){
        index_img = 0
    }
},1000);


//reponsive
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
const elementRoot = ReactDOM.createRoot(document.getElementById('root'))
const elementRoot_1 = ReactDOM.createRoot(document.getElementById('root1'))
var  liss = []

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
var i=0 , j=0 , money_sm , money_lg , all_money_cart =0  , mumber_product_car =0

function Product ({
    title_Vn,
    title_En,
    title_Cost,
    href,
    btn,
    onclick
    
}) {
    
    return btn != 'Liên hệ' ? 
    (
        <div className='item-drink col-md-3 col-sm-6' >
            <div className='item-drink-box'>
                <img src={href} alt="" className='item-drink-index'></img>
                <div className="item-drink-info">
                    <div className="item-drink-name-Vn "  ><p>{title_Vn}</p></div>
                    <div className="item-drink-name-En " ><p>{title_En}</p></div>
                    <div className="item-drink-cost " ><p>{title_Cost}</p></div>
                    <button className="btn item-drink-btn text-uppercase " data-toggle="modal" data-target="#myModal" onClick={onclick}>{btn}</button>
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
                    <button className="btn item-drink-btn text-uppercase" >{btn}</button>
                </div>
            </div>
        </div>
    )

}

var elementRS = (
        <div className="row">
            {lish_product_drink.map((e) => 
                <Product 
                title_Vn = {e.title_Vn} 
                title_En = {e.title_En}
                title_Cost = {e.title_Cost}
                href = {e.href}   
                btn = 'Đặt hàng'
                key = {i++}
                onclick ={ () => {
                    var modal_img = document.querySelector('.modal_img')
                    modal_img.src = e.href 
                    var modal_name = document.querySelector('.info_product_name')
                    modal_name.innerText = e.title_Vn
                    var modal_cost = document.querySelector('.gia_tien')
                    modal_cost.innerText = e.title_Cost
                    money_sm = e.title_Cost
                    var modal_cost = document.querySelector('#modal_cost')
                    modal_cost.innerText = "Thành tiền : " + e.title_Cost
                }}
                />  
            )}   
        </div>
    )
    
elementRoot.render(elementRS)

    // js các nút chọn menu
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
                <Product 
                title_Vn = {e.title_Vn} 
                title_En = {e.title_En}
                title_Cost = {e.title_Cost}
                href = {e.href} 
                btn = 'Đặt hàng' 
                onclick ={ () => {
                    var modal_img = document.querySelector('.modal_img')
                    modal_img.src = e.href 
                    var modal_name = document.querySelector('.info_product_name')
                    modal_name.innerText = e.title_Vn
                    var modal_cost = document.querySelector('.gia_tien')
                    modal_cost.innerText = e.title_Cost
                    var modal_cost = document.querySelector('#modal_cost')
                    modal_cost.innerText = "Thành tiền : " + e.title_Cost
                    money_sm = e.title_Cost
                }}
                key = {i++} 
                />  
            )}   
        </div>
    )
    var title = document.querySelector('title')
    title.innerText = "Đồ Uống"
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
                <Product 
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
    var title = document.querySelector('title')
    title.innerText = "Snacks"
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
                    <Product 
                    title_Vn = {e.title_Vn} 
                    title_En = ''
                    title_Cost = {e.title_Cost}
                    href = {e.href}  
                    btn = 'Đặt hàng' 
                    onclick ={ () => {
                        var modal_img = document.querySelector('.modal_img')
                        modal_img.src = e.href 
                        var modal_name = document.querySelector('.info_product_name')
                        modal_name.innerText = e.title_Vn
                        var modal_cost = document.querySelector('.gia_tien')
                        modal_cost.innerText = e.title_Cost
                        var modal_cost = document.querySelector('#modal_cost')
                        modal_cost.innerText = "Thành tiền : " + e.title_Cost
                        money_sm = e.title_Cost
                    }}
                    key = {i++}
                    />  
                )}   
            </div>
        )
        var title = document.querySelector('title')
        title.innerText = "Bakery"
        elementRoot.render(elementRS)
    }
// 


//click giảm và thêm số lượng của sản phẩm
function tinh_tien() {
    var add_item_index_count = document.querySelector('.index')
    var modal_cost_gt = document.querySelector('.gia_tien')
    var gia_tien =  modal_cost_gt.innerText.substring(0, modal_cost_gt.innerText.length-2)
    var modal_cost = document.querySelector('#modal_cost')
    modal_cost.innerText = "Thành tiền : " + ( +gia_tien * (+add_item_index_count.innerText) ).toFixed(3).toString() + "đ" 
}
var add_item_index_1 = document.querySelector('.index--')
add_item_index_1.onclick = () => {
    //giảm index
    var add_item_index = document.querySelector('.index')
    add_item_index.innerText > 1 ? add_item_index.innerText = +add_item_index.innerText - 1 : 1  
    //tính thành tiền
    tinh_tien()
}

var add_item_index_2 = document.querySelector('.index__')
add_item_index_2.onclick = () => {
    //tăng index
    var add_item_index = document.querySelector('.index')
    add_item_index.innerText = +add_item_index.innerText + 1 
    //tính thành tiền
    tinh_tien()
}
var  add_item_close = document.querySelector('.close')
add_item_close.onclick = () => {
    document.querySelector('.index').innerText = 1 
    var info_product_size_sm = document.querySelector('.info_product_size_lish .sm ')
    info_product_size_sm.classList.add('active') 
    }


// chọn kích thước của sản phẩm
function remove_class_size_lish()  {
    var info_product_size = document.querySelectorAll('.info_product_size_lish li') 
    info_product_size.forEach(e => e.classList.remove('active'))
}

var info_product_size_sm = document.querySelector('.info_product_size_lish .sm ') 
info_product_size_sm.onclick = () => {
    remove_class_size_lish()
    info_product_size_sm.classList.add("active")
    var modal_cost_gt_ = document.querySelector('.gia_tien')
    var gia_tien_ =  modal_cost_gt_.innerText.substring(0, modal_cost_gt_.innerText.length-2)
    modal_cost_gt_.innerText = money_sm
    tinh_tien()
}

var info_product_size_lg = document.querySelector('.info_product_size_lish .lg ') 
info_product_size_lg.onclick = () => {
    remove_class_size_lish()
    info_product_size_lg.classList.add("active")
    var modal_cost_gt_ = document.querySelector('.gia_tien')
    money_lg =  (+money_sm.substring(0, money_sm.length-2) + 10).toString() + " đ"
    modal_cost_gt_.innerText = money_lg
    tinh_tien()
}


function Cart_product ({
    img,
    name,
    size,
    index,
    cost,
    count,
    remove_product,
    
})
{
    return <li className = {'remove-' + count.toString() }>
            <div id="box-product">
                <img src={img} alt="" className="box-product-img"></img>
                <div className="product-info">
                    <div className="product-info-name text-uppercase">{name}</div>
                    <div className="product-info-size">{size}</div>
                    <div className="product-info-index">{ index + ' x ' + cost}</div>
                </div>
                <button type="button" className='close' onClick={remove_product} >&times;</button>
                </div>
            </li>
        
}



var btn_pay = document.querySelector('.btn_pay')
btn_pay.onclick = () => {

    var product_img = document.querySelector('.modal_img')
    var product_name = document.querySelector('.info_product_name')
    var product_size = document.querySelector('.info_product_size_lish .active')
    var product_index = document.querySelector('.index')
    var product_cost = document.querySelector('.gia_tien')
    var element_mumber_product_car = document.querySelector('.h_cart_mumber')

    liss.push({ id : ++j,
                img : product_img.src,
                name : product_name.innerText,
                size : product_size.innerText,
                index : product_index.innerText,
                cost : product_cost.innerText,

            })
            element_mumber_product_car.innerText = ++mumber_product_car
    // tính tổng tiền
    all_money_cart =0
    liss.map(e => all_money_cart += +e.index *e.cost.substring(0, e.cost.length-2))

     var buy_product = (
                    <ul className="Cart_ListProduct">
                        {liss.map(e => 
                            <Cart_product
                                img = {e.img}
                                name = {e.name}
                                size = {e.size}
                                index = {e.index}
                                cost = {e.cost}
                                key = {e.id}
                                count = {e.id}
                                
                                remove_product ={ () => {
                                    var cart_remove_product = document.querySelector('.remove-' + e.id.toString() )
                                    cart_remove_product.setAttribute("style" , "display : none;") 

                                    for(var i_pr=0 ; i_pr<liss.length ; i_pr++){
                                        if(liss[i_pr].id == e.id){
                                            all_money_cart -= +e.index * liss[i_pr].cost.substring(0, e.cost.length-2) 
                                            liss.splice(i_pr,1)     
                                        }
                                    }
                                    element_mumber_product_car.innerText = --mumber_product_car
                                    all_money_cart > 0 
                                        ? document.querySelector(".cart-total span").innerText = all_money_cart.toFixed(3).toString() + " đ" 
                                        : document.querySelector(".cart-total span").innerText = '0 đ'

                                }}
                            />
                            
                        )}
                    </ul>
                )
    document.querySelector(".cart-total span").innerText = all_money_cart.toFixed(3).toString() + " đ"                            
    
    // cho số lượng khi thoát thành 1
    product_index.innerText = 1 
    
    elementRoot_1.render(buy_product)
    }



