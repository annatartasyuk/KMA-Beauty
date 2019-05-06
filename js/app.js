$(function () {
    $(document).foundation();

});

function initialize() {
    var point = {lat: 50.465156, lng: 30.519444};
    home = new google.maps.LatLng(point);

    var mapProp = {
        center: home,
        zoom: 15
    };
    var html_element = document.getElementById("googleMap");
    mapp = new google.maps.Map(html_element, mapProp);

    var marker = new google.maps.Marker({
        position: point,
        map: mapp,
        icon: {
            url: "css/image/macaron.png",
            scaledSize: new google.maps.Size(41, 41)
        }
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
$('.about-click').click(function () {
    $('html,body').animate({
            scrollTop: $('.about-us').offset().top - 90
        },
        'slow');
});

$('.services-click').click(function () {
    $('html,body').animate({
            scrollTop: $('.services').offset().top - 90
        },
        'slow');
});
$('.gallery-click').click(function () {
    $('html,body').animate({
            scrollTop: $('.gallery').offset().top - 90
        },
        'slow');
});
$('.contacts-click').click(function () {
    $('html,body').animate({
            scrollTop: $('.contacts').offset().top - 90
        },
        'slow');
});
$('.beauty-click').click(function () {
    $('html,body').animate({
            scrollTop: $('.logo-section').offset().top
        },
        'slow');
});

var userFeed = new Instafeed({
    get: 'user',
    userId: '309411904',
    clientId: '45f4ab8a02fe4a78bc0fe531756d8103',
    accessToken: '309411904.45f4ab8.bcf93f6a714347a8badf4e76fa90b163',
    sortBy: 'most-recent',
    limit: 9,
    links: false,
    resolution: 'low_resolution'
});
userFeed.run();
