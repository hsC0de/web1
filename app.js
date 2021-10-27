var bodyElement = {
  body: document.querySelector("body"),
  handleBGColor: function (color) {
    this.body.style.backgroundColor = color;
  },
  handleColor: function (color) {
    this.body.style.color = color;
  },
};

var linkElement = {
  handleLinkColor: function (color) {
    var links = document.querySelectorAll("a");
    Array.from(links).forEach((x) => (x.style.color = color));
  },
};

function handleDayAndNight(self) {
  var btnValue = self.value;

  var INPUT_INITIAL_VALUE = "night";
  var BLACK_COLOR = "black";
  var WHITE_COLOR = "white";

  if (btnValue === INPUT_INITIAL_VALUE) {
    bodyElement.handleBGColor(BLACK_COLOR);
    bodyElement.handleColor(WHITE_COLOR);
    btnValue = "day";
    linkElement.handleLinkColor("yellowgreen");
  } else {
    bodyElement.handleBGColor(WHITE_COLOR);
    bodyElement.handleColor(BLACK_COLOR);
    btnValue = INPUT_INITIAL_VALUE;
    linkElement.handleLinkColor("blue");
  }
  self.value = btnValue;
}
