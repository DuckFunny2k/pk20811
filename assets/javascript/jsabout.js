$(document).ready(function () {
  // Chọn phần tử có class "test-caro" và áp dụng Owl Carousel
  $(".test-caro").owlCarousel({
    items: 1, // Số lượng hiển thị slide trong mỗi lượt trượt
    dots: true, // Hiển thị nút điều hướng
    dotsContainer: ".owl-dots", // Phần tử chứa nút điều hướng
    loop: true, // Vòng lặp các slide
    autoplay: true, // Tự động chuyển đổi slide
    autoplayTimeout: 5000, // Thời gian chờ giữa các slide (5 giây)
    autoplayHoverPause: true, // Tạm dừng chuyển đổi khi di chuột qua slide
  });
});

// map
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    showMap(latitude, longitude);
  });
}

function showMap(latitude, longitude) {
  var map = new Datamap({
    element: document.getElementById("map"),
    responsive: true,

    fills: {
      defaultFill: "rgba(255,129,126,0.9)",
      userLocation: "#4DE8B7",
    },
    geographyConfig: {
      popupOnHover: false,
      highlightOnHover: true,
    },
    bubblesConfig: {
      borderWidth: 1,
      borderColor: "#FFFFFF",
      fillOpacity: 0.75,
    },
  });

  map.bubbles([
    {
      name: "Your Location",
      latitude: latitude,
      longitude: longitude,
      radius: 5,
      fillKey: "userLocation",
    },
  ]);
}
