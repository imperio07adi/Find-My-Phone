  window.addEventListener("load", function () {
    setTimeout(() => {
      const loader = document.getElementById("loader");
      const content = document.getElementById("main-content");

      loader.style.display = "none";
      content.style.display = "block";
    }, 2000); // 5000 ms = 5 seconds
  });
