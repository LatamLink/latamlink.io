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

  var i18n = $.i18n({
    locale: "en",
  });

  // i18n configuration
  var language = "en";
  var path = "../../jquery.i18n/languages/" + language + ".json";
  i18n.load(path, language).done(() => $("html").i18n());

  $(".language").change(function () {
    language = $(".language option:selected").val();
    i18n.locale = language;
    path = `../../jquery.i18n/languages/${language}.json`;
    console.log(language);
    i18n.load(path, language).done(() => $("html").i18n());
  });

  // Enable debug
  $.i18n.debug = true;
});
