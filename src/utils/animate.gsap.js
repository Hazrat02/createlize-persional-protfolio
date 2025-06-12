
import ScrollMagic from 'scrollmagic'
import { TweenMax, TimelineMax } from 'gsap'

// ScrollMagic.Scene.addOption("tweenChanges", false, function (val) {
//   return !!val;
// })

ScrollMagic.Scene.prototype.setTween = function (TweenObject) {
  this._tween = TweenObject;
  this.on("progress", (e) => {
    if (this._tween && typeof this._tween.progress === "function") {
      this._tween.progress(e.progress);
    }
  });
  return this;
};
