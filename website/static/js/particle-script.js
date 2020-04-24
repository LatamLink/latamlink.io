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

  let style = window.getComputedStyle($("div.tools")[0]);
  switch (style.gridTemplateColumns.split(" ").length) {
    case 1:
      $("div.tools > div").removeClass("border-t border-b border-r border-l");
      $("div.tools > div").removeClass("pt-5 pb-5 pl-5 pr-5");
      break;
    case 2:
      $("div.tools > div").removeClass("border-t");
      $("div.tools > div").removeClass("border-b");
      $("div.tools > div").removeClass("border-r");
      $("div.tools > div").removeClass("border-l");
      $("div.tools > div:nth-child(odd)").addClass("border-b border-r");
      $("div.tools > div:nth-child(even)").addClass("border-b");
      break;
    default:
      break;
  }
});
