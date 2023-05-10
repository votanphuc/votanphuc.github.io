function showInfo() {
    let res = document.getElementById("res1");
    res.innerHTML = "";

    let ten = document.getElementById("name");
    res.innerHTML += "<br>Tên sản phẩm: " + ten.value;

    let soluong = document.getElementById("sl");
    res.innerHTML += "<br>Số lượng:" + soluong.value;

    let giathanh = document.getElementById("gt");
    res.innerHTML += "<br/>Giá thành: " + giathanh.value;

    let khuyenmai = document.getElementById("km");
    res.innerHTML += "<br/>Khuyến mãi: " + km.value;

   
}
function changebackground() {
    let maunen = document.getElementById("color");
    document..style.backgroundColor = maunen.value;
  }