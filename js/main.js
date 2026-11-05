 $(document).ready(function () {
  // فتح وإغلاق القائمة عند الضغط على زر الهامبرغر
  $(".toggle-menu").click(function (e) {
    e.stopPropagation();
    $("header nav ul").toggleClass("active");
  });

  // إغلاق القائمة عند الضغط في أي مكان خارجها
  $(document).click(function () {
    $("header nav ul").removeClass("active");
  });
});