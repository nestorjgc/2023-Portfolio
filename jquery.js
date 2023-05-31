const div = $(".cubito-gif, .To-Do-Gif");
const originalHeight = div.height();
const originalWidth = div.width();

div.hover(
  function () {
    $(this).stop().animate({ height: "450px", width: "800px" }, 400);
  },
  function () {
    $(this)
      .stop()
      .animate({ height: originalHeight, width: originalWidth }, 800);
  }
);

const heading = $("#jquery-name");
let isGarcia = true;
let words = ["Web", "Developer"];

function toggleName() {
  if (isGarcia) {
    heading.text(words.join(" "));
  } else {
    heading.text(":)");
  }
  isGarcia = !isGarcia;
}

setInterval(toggleName, 2000);
