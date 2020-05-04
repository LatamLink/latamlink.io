/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "other/particles.json", function () {});
$(document).ready(function () {
  $("#more").click(function () {
    $("html,body").animate(
      {
        scrollTop: $(".content").offset().top,
      },
      "slow"
    );
  });
});
