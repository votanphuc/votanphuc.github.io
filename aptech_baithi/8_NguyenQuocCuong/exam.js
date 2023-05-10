function showInfo() {
    let res = document.getElementById("res1");
    res.innerHTML = "";

    let ten = document.getElementById("nameSP")
    res.innerHTML += "Tên sản phẩm: " + ten.value + "<br>";

    let soluong = document.getElementById("soLuong")
    res.innerHTML += "Số lượng: " + soluong.value + "<br>";

    let gia = document.getElementById("priceSP")
    res.innerHTML += "Giá: " + gia.value + "</br>";

    let km = document.getElementById("km");
    res.innerHTML += "Khuyến mãi: " + km.value + "<br>";

    var tong = soluong.value * gia.value;
    // let tong = document.getElementById("soLuong") * document.getElementById("priceSP");
    // let tt = document.getElementById("soluong*price")
    res.innerHTML += "Giá thành: " + tong; 
}

function cong() {
    let res = document.getElementById("res2");
    res.innerHTML = "";

    let numA = parseInt(document.getElementById("numA").value);
    let numB = parseInt(document.getElementById("numB").value);

    if(!numA || !numB)
    {
        alert("Bạn chưa nhập số");
    }else 
    {
        let cong = numA + numB;
        res.innerHTML += "Phép cộng: " + numA + "+" + numB + "=" + cong;
    }

   
}

function tru() {
    let res = document.getElementById("res2");
    res.innerHTML = "";

    let numA = parseInt(document.getElementById("numA").value);
    let numB =  parseInt(document.getElementById("numB").value);

    if(!numA || !numB)
    {
        alert("Bạn chưa nhập số !");
    }else
    {
        let tru = numA - numB;
        res.innerHTML += "Phép trừ: " + numA + "-" + numB + "=" + tru;
    }
}

function nhan() {
    let res = document.getElementById("res2");
    res.innerHTML = "";

    let numA = parseInt(document.getElementById("numA").value);
    let numB = parseInt(document.getElementById("numB").value);

    let nhan = numA * numB;
    if(!numA || !numB )
    {
        alert("Bạn chưa nhập số !");
    }else
    {
        res.innerHTML += "Phép nhân: " + numA + "*" + numB + "=" + nhan;
    }
}

function chia() {
    let res = document.getElementById("res2");
    res.innerHTML = "";

    let numA = parseInt(document.getElementById("numA").value);
    let numB = parseInt(document.getElementById("numB").value);

    let chia = numA / numB;
    if(!numA || !numB)
    {
        alert("Bạn chưa nhập số !");
    }else 
    {
        res.innerHTML += "Phép chia: " + numA + "/" + numB + "=" + chia;
    }
}

function mu() {
    let res = document.getElementById("res2");
    res.innerHTML = "";

    let numA = parseInt(document.getElementById("numA").value);
    let numB = parseInt(document.getElementById("numB").value);

    let mu = numA;
    for(let i=1;i<numB;i++) {
        mu *= numA;
    }

    if(!numA || !numB)
    {
        alert("Bạn chưa nhập số !");
    }else 
    {
        res.innerHTML += "Phép mũ: " + numA + "^" + numB + "=" + mu;
    }
}

function boiso() {
    let res = document.getElementById("res2");
    res.innerHTML = "";

    let numA = parseInt(document.getElementById("numA").value);
    let numB = parseInt(document.getElementById("numB").value);

    var a = numA % numB;

    if(a === 0)
        res.innerHTML += "a = " + numA + " là bội số của b = " + numB;
        // alert("pass!")
    else
        res.innerHTML += "a = " + numA + " không là bội số của b = " + numB;




}

function changeBackground() {
    let color = document.getElementById("colorTheme")
    let maunen = document.getElementById("color");

    color.style.backgroundColor = maunen.value;
    
}