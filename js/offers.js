$(document).ready(function () {

  // 1. تحديد الوقت الابتدائي للعداد (ساعات، دقائق، ثواني)
  var hours = 8, minutes = 45, seconds = 12;

  // 2. دالة التحديث التي تعمل كل ثانية
  setInterval(function () {
    if (seconds > 0) {
      seconds--;
    } else {
      if (minutes > 0) {
        minutes--;
        seconds = 59;
      } else {
        if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
   /*  hours=24;
    minutes=0;
    seconds=0; */
        }
      }
    }

    // 3. تحديث الأرقام في الـ HTML مع إضافة 0 إذا كان الرقم أقل من 10
    $("#hours").text(hours < 10? "0" + hours : hours);
    $("#minutes").text(minutes < 10 ? "0" + minutes : minutes);
    $("#seconds").text(seconds < 10 ? "0" + seconds : seconds);

  }, 1000); // 1000ms = ثانية واحدة

  // كود النسخ للكوبونات
  $(".coupon-card").click(function () {
    var codeText = $(this).find(".code").text();
    navigator.clipboard.writeText(codeText);
    
    var $codeBadge = $(this).find(".code");
    var originalText = $codeBadge.text();
    
    $codeBadge.text("COPIED!").css({"background-color": "#22c55e", "color": "#fff"});
    
    setTimeout(function () {
      $codeBadge.text(originalText).css({"background-color": "#f1f5f9", "color": "#0f172a"});
    }, 1500);
  });

});
