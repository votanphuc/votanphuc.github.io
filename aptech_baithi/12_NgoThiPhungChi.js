function showInfo() {
    let res = document.getElementById("res1");
    res.innerHTML = "";


    let name = document.getElementById("name");
    res.innerHTML += "Tên sản phẩm: " + name.value;

    let quantity = document.getElementById("quantity");
    res.innerHTML += "<br/>Số lượng: " + quantity.value;

    let cost = document.getElementById("cost");
    res.innerHTML += "<br/>Giá thành: " + cost.value;

    let discount = document.getElementById("discount");
    res.innerHTML += "<br/>Khuyến mãi: " + discount.value;
}
    function cong() {
        let res = document.getElementById("res2");
        res.innerHTML = "";
    
    
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
    
    
        let cong = num1 + num2;
        res.innerHTML += "Phép cộng: " + num1 + "+" + num2 + "=" + cong;
    }
    
    
    function tru() {
        let res = document.getElementById("res2");
        res.innerHTML = "";
    
    
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
    
    
        let tru = num1 - num2;
        res.innerHTML += "Phép trừ: " + num1 + "-" + num2 + "=" + tru;
    }
    
    
    function nhan() {
        let res = document.getElementById("res2"); // lấy thẻ theo id res2 để chuẩn bị in ra kết quả
        res.innerHTML = "";
    
    
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
    
    
        let nhan = num1 * num2;
        res.innerHTML += "Phép nhân: " + num1 + "*" + num2 + "=" + nhan;
    }
    
    
    function chia() {
        let res = document.getElementById("res2"); // lấy thẻ theo id res2 để chuẩn bị in ra kết quả
        res.innerHTML = "";
    
    
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
    
    
        let chia = num1 / num2;
        res.innerHTML += "Phép chia: " + num1 + "/" + num2 + "=" + chia;
    }
    
    
    function mu() {
        let res = document.getElementById("res2"); // lấy thẻ theo id res2 để chuẩn bị in ra kết quả
        res.innerHTML = "";
    
    
        let num1 = parseInt(document.getElementById("num1").value);
        let num2 = parseInt(document.getElementById("num2").value);
    
    
        let mu = num1;
        for (let i = 1; i < num2; i++) {
            mu *= num1;
        }
        res.innerHTML += "Phép mũ: " + num1 + "^" + num2 + "=" + mu;
    }
    function changebackground() {
	    let maunen = document.getElementById("color");
	    document.body.style.backgroundColor = maunen.value
	}

    