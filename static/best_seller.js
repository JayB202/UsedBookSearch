// 알라딘에 신간 리스트 
let static_json2 =
    'http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbliujjang1711001&QueryType=Bestseller&MaxResults=1&start=1&SearchTarget=Book&output=js&Version=20131101';


$.ajax({
    url: static_json2,
    dataType: 'jsonp',
    jsonpCallback: 'myCallback',
    success: function (data) {
        let items = data['item'][0];
        let cover_p = items['cover'].replace('sum', '500');
        let b_link =`/information?id=`+items['itemId'];
        document.getElementById("best_img").src = cover_p;
        document.getElementById("bestseller_name").innerHTML =  items['title'];
        document.getElementById("bestseller_author").innerHTML = items['author'].replace('(지은이)', '');


        document.getElementById("bestseller_des").innerHTML = items['description'];
        document.getElementById("bestseller_link").onclick= function(){window.open(b_link);};
    }
});