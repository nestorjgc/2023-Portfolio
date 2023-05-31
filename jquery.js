const div = $("#cubito");

div.animate({ height: "100px", color: "purple" }, 500);

const heading = $("#jquery-name");
let isGarcia = true;

function toggleName() {
  if (isGarcia) {
    heading.text("Web Developer");
  } else {
    heading.text(":)");
  }
  isGarcia = !isGarcia;
}

setInterval(toggleName, 2000);
