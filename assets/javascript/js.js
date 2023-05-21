$(document).ready(function () {
  $("#toggle-video-button").click(function () {
    $("#video-container").toggle();

    var video = $("#my-video")[0];
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

var canvas = document.getElementById("play-button");
var context = canvas.getContext("2d");

// Vẽ biểu tượng play
context.fillStyle = "#ff817e";
context.beginPath();
context.moveTo(10, 5);
context.lineTo(35, 20);
context.lineTo(10, 35);
context.closePath();
context.fill();

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
