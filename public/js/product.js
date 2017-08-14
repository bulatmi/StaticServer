function sendProductData(product_name, price) {
    // создали json-объект
    let json = {};
    // положили туда данные
    json["product_name"] = product_name;
    json["price"] = price;

    // отправляем запрос на сервер
    $.ajax({
            url: "http://localhost:8080/products",
            type: "POST",
            contentType: "application/json",
            dataType: "json",
            data: JSON.stringify(json),
        headers: {
            'Auth-Token': $.cookie('Auth-Token')
        }, }


    )
}
