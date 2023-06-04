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
//
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

// Web Storage

let userAcct = [];

class Account {
  constructor(name, email, service, number, date, time, notes) {
    this.name = name;
    this.email = email;
    this.service = service;
    this.number = number;
    this.date = date;
    this.time = time;
    this.notes = notes;
  }
}

function clearInputs() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("service").selectedIndex = 0;
  document.getElementById("number").value = "";
  document.getElementById("date").value = "";
  document.getElementById("time").value = "";
  document.getElementById("comments").value = "";
}

// Xử lý sự kiện submit của form
function xuLySubmit() {
  event.preventDefault(); // Ngăn chặn hành động mặc định của form

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let service = document.getElementById("service").value;
  let number = document.getElementById("number").value;
  let date = document.getElementById("date").value;
  let time = document.getElementById("time").value;
  let notes = document.getElementById("comments").value;

  // Kiểm tra xem các trường đã được nhập đầy đủ hay chưa
  if (
    name === "" ||
    email === "" ||
    service === "" ||
    number === "" ||
    date === "" ||
    time === ""
  ) {
    // Hiển thị thông báo lỗi
    let messageElement = document.getElementById("amessage");
    messageElement.innerHTML = "Please fill in all required fields!";
    messageElement.style.color = "red";
    messageElement.style.display = "block";
    return; // Dừng xử lý tiếp theo nếu có lỗi
  }

  const userLocal = localStorage.getItem("users");

  if (!userLocal) {
    const newUser = new Account(
      name,
      email,
      service,
      number,
      date,
      time,
      notes
    );
    userAcct.push(newUser);
    localStorage.setItem("users", JSON.stringify(userAcct));

    // Hiển thị thông báo thành công
    let messageElement = document.getElementById("amessage");
    messageElement.innerHTML = "Appointment submitted successfully!";
    messageElement.style.color = "green";
    messageElement.style.display = "block";
  } else {
    userAcct = JSON.parse(userLocal);
    const found = userAcct.find((user) => user.email === email);
    if (found) {
      let messageElement = document.getElementById("amessage");
      messageElement.innerHTML = "Your email is registered!";
      messageElement.style.color = "red";
      messageElement.style.display = "block";
      return;
    }

    const newUser = new Account(
      name,
      email,
      service,
      number,
      date,
      time,
      notes
    );
    userAcct.push(newUser);
    localStorage.setItem("users", JSON.stringify(userAcct));
    let messageElement = document.getElementById("amessage");
    messageElement.innerHTML = "Appointment submitted successfully!";
    messageElement.style.color = "green";
    messageElement.style.display = "block";
  }
  clearInputs();
}

//  Drag & Drop

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
