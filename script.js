document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault(); // ไม่ให้ reload หน้า

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  // กำหนด username และ password ที่อนุญาตให้ล็อกอิน
  const validUsername = "admin";
  const validPassword = "1234";
  

  if (username === validUsername && password === validPassword) {
    window.location.href = "main.html"; // ไปหน้าเว็บหลัก
  } else {
    alert("ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง");
  }
});
