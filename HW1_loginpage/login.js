// Lấy phần select và nút cookies
const langSelect = document.querySelector(".lang-select");
const cookiesBtn = document.querySelector(".cookies");

// Khi người dùng đổi ngôn ngữ
langSelect.addEventListener("change", function () {
  const lang = langSelect.value;
  alert(`Bạn vừa chọn ngôn ngữ: ${lang}`);
  // hoặc bạn có thể viết logic đổi text trang, chuyển URL ...
});

// Khi click nút cookies
cookiesBtn.addEventListener("click", function () {
  alert("Thông báo: Trang này sử dụng cookies để cải thiện trải nghiệm.");
});
