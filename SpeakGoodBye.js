(function (window) {
byeSpeaker.speak = function (name) {
  console.log(speakWord + " " + name);
}

window.byeSpeaker = byeSpeaker;

})(window);