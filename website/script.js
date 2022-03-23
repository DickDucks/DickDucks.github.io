let entered = false;
$(document).ready(() => {
        if (entered) return;
        entered = true;

$("pre").fadeIn();
  setInterval(function() {
        $("pre").fadeOut();
        setInterval(function() {
                $("pre").fadeIn();
        }, 500);
  }, 9000);

$("audio").get(0).play();
});