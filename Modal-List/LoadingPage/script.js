$("#social-media").hide();
$(window).load(function () {
  //$("#loading-page").fadeOut();
  $("#social-media").fadeIn(3000);
  //alert("Window");
});
var icon_height =
  parseInt($(".icon .fa").css("height").split("px")[0]) -
  parseInt($(".icon span").css("height").split("px")[0]);
icon_height /= 2;
//alert(icon_height);
$(".icon span").css("top", icon_height);
//alert($(".icon span").css("top"));
//store the heights of all the major boxes in the heightarray
var heightArray = [];
$(".holder .box").each(function (index) {
  heightArray[index] = parseInt($(this).css("height").split("px")[0]);
  if (index !== 0) heightArray[index] += heightArray[index - 1];
});
//alert(heightArray);
$("#nav-bar a").css("height", $("#nav-bar a").css("font-size"));

var nav_font_height = $("#nav-bar a").css("height").split("px");

var height = $(".home").css("height").split("px");
$("#nav-bar").css("height", 0.1 * height[0] + "px");

var nav_height = $("#nav-bar").css("height").split("px");

//alert(nav_height[0]);
$("#nav-bar").css("top", height[0] - nav_height[0] + "px");
$("#nav-bar a").css("top", (nav_height[0] - nav_font_height[0]) / 2);
//alert($("#nav-bar").css("top")+" "+height);
//alert(height);

$(window).scroll(function () {
  var scrollPosition = $(window).scrollTop();
  //alert(scrollPosition);

  if (scrollPosition >= height[0] - nav_height[0]) {
    $("#nav-bar").css("position", "fixed");
    $("#nav-bar").css("top", "0");
    // var index=getIndex(scrollPosition);
    var flag = 1;
    var indice;
    $.each(heightArray, function (index, value) {
      if (value > scrollPosition + parseInt(nav_height[0]) && flag && index) {
        indice = index;
        flag = 0;
      }
    });
    indice++;
    //alert(indice);
    $("#nav-bar a:nth-child(n)").removeClass("selected");
    $("#nav-bar a:nth-child(" + indice + ")").addClass("selected");
  } else {
    $("#nav-bar").css("position", "absolute");
    $("#nav-bar").css("top", height[0] - nav_height[0]);
    $("#nav-bar a:nth-child(n)").removeClass("selected");
    $("#nav-bar a:nth-child(1)").addClass("selected");
  }
});
var colorchange = 1;

/*For smooth Scroll*/
$('a[href^="#"]').on("click", function (event) {
  var target = $($(this).attr("href"));

  if (target.length) {
    event.preventDefault();
    $("html, body").animate(
      {
        scrollTop: target.offset().top,
      },
      900
    );
  }
});
/*For animating the arrow */
$("#icon-bar .one").click(function () {
  $("#triangle").animate(
    {
      left: "20%",
    },
    800
  );
});
$("#icon-bar .two").click(function () {
  $("#triangle").animate(
    {
      left: "50%",
    },
    800
  );
});

$("#icon-bar .three").click(function () {
  $("#triangle").animate(
    {
      left: "85%",
    },
    800
  );
});
