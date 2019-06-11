(function ($) {

    window.Chat = function ({ fullname, phone, company, age, gender, money, salary }) {
        var url = "https://api.telegram.org/bot609354304:AAEoOU6L4q5FvlnpUqTUFcSs2bkoXBX9m3E/sendMessage";
        var data = {
            chat_id: "-284655353",
            text:
                `
  <b>Họ, tên</b>: ${fullname}
  <b>Sdt</b>: ${phone}
  <b>Giới tính</b>: ${gender}
  <b>Tuổi</b>: ${age}
  <b>Công ty</b>: ${company}
  <b>Lương</b>: ${salary}
  <b>Khoản vay</b>: ${money}
  `,
            parse_mode: 'HTML'
        };

        return new Promise(function (resolve, reject) {
            $.post(url, data)
                .then(function (resp) {
                    resolve(resp.ok);
                }).fail(function (e) {
                    reject(e);
                });
        })
    }
})($)

var animFlag = true;
$(function () {
    var getHeight = $(window).height();
    $('#home').css({ 'height': getHeight })

    $(window).resize(function () {
        $('#home').css({ 'height': $(window).height() })

    })


    //cuon chuot
    $("a[href='#home']").click(function () {
        if (animFlag) {
            animFlag = false;
            $("html, body").animate({ scrollTop: 0 }, "slow", function () {
                animFlag = true;
            });
        }
        return false;
    });


    $("a[href='#dangky']").click(function () {
        if (animFlag) {
            animFlag = false;
            $("html, body").animate({ scrollTop: $('#dangky').offset().top - 65 }, "easeInOutExpo", function () {
                animFlag = true;
            });
        }
        return false;
    })

    $("a[href='#dangkynhanh']").click(function () {
        if (animFlag) {
            animFlag = false;
            $("html, body").animate({ scrollTop: $('#dangkynhanh').offset().top - 65 }, 1500, function () {
                animFlag = true;
            });
        }
        return false;
    })

    $("a[href='#khachhang']").click(function () {
        if (animFlag) {
            animFlag = false;
            $("html, body").animate({ scrollTop: $('#khachhang').offset().top - 65 }, 1500, function () {
                animFlag = true;
            });
        }
        return false;
    })

    $("a[href='#lienhe']").click(function () {
        if (animFlag) {
            animFlag = false;
            $("html, body").animate({ scrollTop: $('#lienhe').offset().top - 65 }, 1500, function () {
                animFlag = true;
            });
        }
        return false;
    })


    //customize maps

    // function myMap() {
    //     var mapOptions = {
    //         center: new google.maps.LatLng(51.5, -0.12),
    //         zoom: 10,
    //         mapTypeId: google.maps.MapTypeId.HYBRID
    //     }
    // var map = new google.maps.Map(document.getElementById("map"), mapOptions);
    // }

    // $('.mapcover').click(function(){
    //     console.log("click");
    //    $('.mapcover').hide();
    // });

    // $('.b7map').mouseleave(function(){
    //     console.log("leave");
    //      $('.mapcover').show();
    // })




    /*   var onMapMouseleaveHandler = function(event) {
           var that = $(this);
           that.on('click', onMapClickHandler);
           that.off('mouseleave', onMapMouseleaveHandler);
           that.find('iframe').css("pointer-events", "none");
   
           console.log("onMapMouseleaveHandler");
       }
   
       
       var onMapClickHandler = function(event) {
           var that = $(this);
           // Disable the click handler until the user leaves the map area
           that.off('click', onMapClickHandler);
           // Enable scrolling zoom
           that.find('iframe').css("pointer-events", "auto");
           // Handle the mouse leave event
           that.on('mouseleave', onMapMouseleaveHandler);
           console.log("onMapClickHandler");
       }
       // Enable map zooming with mouse scroll when the user clicks the map
       $('.block7').on('click', onMapClickHandler);*/


})

function serializeObject(form) {
    return $(form).serializeArray().reduce((obj, n) => {
        obj[n.name] = n.value;
        return obj;
    }, {});
}

$("#dkyvay").submit(function (event) {
    $('#myModal').modal('show');
    event.preventDefault();
    const formData = serializeObject(this);
    console.log("Form data", formData);

    Chat(formData);
    return false;
});
