
let newdata = [];
let image = ['7914','7915','7916','12949','12950','12951','613','15060','15061','15056','15057'];
let brand = ['FXR','BCA','509','FXR','BCA','509','FXR','BCA','509','FXR','BCA'];
let cat = ['Куртки','Ботинки','Штаны','Куртки','Ботинки','Штаны','Куртки','Ботинки','Штаны','Куртки','Ботинки']
let dc = ['odegda','optic','sumruk','shlem'];
for(let i = 0; i < 30; i++){
    let rand = Math.floor(0 + (10 - 1) * Math.random());
    let rand1 = Math.floor(0 + (10 - 1) * Math.random());
    let rand2 = Math.floor(0 + (10 - 1) * Math.random());
    let rand3 = Math.floor(0 + (3 - 1) * Math.random());
    let randId = Math.floor(0 + (1000 - 1) * Math.random());
    newdata.push({
        L: "1",
        action_id:"0",
        actioncolor:"#00b068",
        actiontitle:"НОВИНКА",
        add_object_id:0,
        adult:"1",
        age:"Взрослые",
        arrive_date:"05.11",
        arrive_qty:"1",
        articul:"210021-0510-13",
        black :"1",
        brand:brand[rand],
        cat:cat[rand1],
        catid:"43",
        child :"0",
        colors:
            {
                0: "Серый",
                1: "Черный",
                2:
                    "Желтый"
            },
        desc: "<p><br> • HydrX™ – водонепроницаемость 5 000 мм/ паропроницаемость 5 000 г/м<br> • Прочный внешний слой из полиэстера 450 ден с мембраной HydrX™ <br> • Подкладка из сетчатой ткани и флиса<br> • Съемная подкладка с 260 г утеплителя FXR Thermal Flex™ с наполнителем F.A.S.T.™ и перфорацией для вентиляции<br> • Система вентиляции FXR Dry Vent™ с водонепроницаемой поверхностью и защитой от попадания снега на груди и по бокам <br> • Водонепроницаемые молнии YKK® Aquaguard <br> • Регулируемая ветрозащитная юбка<br> • Светоотражающие вставки 360° 3M™ Scotchlite™ <br> • Передняя планка с застежкой на липучке для защиты от холода<br> • Воротник регулируется шнуром<br> • Нижний край регулируется шнуром<br> • Съемный капюшон регулируется шнуром<br> • Удлиненные регулируемые манжеты из лайкры</p>↵",
        free_qty: "0",
        gender: "муж",
        grey: "1",
        images: image[rand2],
        is_new: "1",
        itemcount: 5,
        male: "1",
        objectX_id: "48",
        object_id: randId,
        odegda: "1",
        options:
            {
                11
                    :
                    "Куртки",
                15
                    :
                    "CX",
                19
                    :
                    "с утеплителем",
                27
                    :
                    "Серый,Черный,Желтый",
                40
                    :
                    "Grey/Black/Char/Hi Vis",
                42
                    :
                    "Взрослые",
                43
                    :
                    "муж",
                1253
                    :
                    "2021",
                1307
                    :
                    "M Outerwear"
            },
        preorder_id: "0",
        price: "16&nbsp;492",
        price1: "16492",
        price_action: "0.00",
        price_preorder: "0.00",
        price_user: "21&nbsp;990",
        price_user1: "21990",
        ptype: "2",
        check:false,
        title: "Ботинки Jethwear Method BOA",
        sizes:{
            0
                :
                {
                    arrive_date: "05.11",
                    arrive_qty: "1",
                    articul: "210021-0510-13",
                    free_qty: "0",
                    object_id: "78647",
                    original_object_id: "78647",
                    size: "L",
                    subcat: "Куртки",
                    subcatid: "43",
                    title: "Куртка FXR CX с утеплителем",
                    weight_cat: "9100",
                    weight_subcat: "9600",
                    yellow: "1"
                }
        }
    });
}
export default newdata;
