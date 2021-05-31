if ($("#mobile-indicator").css("display") == "none") {

	var is_mobile = false;

} else {

	var is_mobile = true;

}

var animMultiplier = 0.75;

$(".task-tmb-small, .task-tmb-big, .task-arrow").each(function (index) {

	$(this).attr("data-anim-index", index);

});

function animateAll() {

	if ($("#mobile-indicator").css("display") == "none" && !$("body").hasClass("animated")) {

		$("body").addClass("animated");

		var controller = new ScrollMagic.Controller();

		$(".section-top-descr .anim").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).prevAll().length * .4 * animMultiplier + .5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".section-top-pic-1").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: 2.5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".section-top-pic-2").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: 2.5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".top-arrow").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).prevAll(".top-arrow").length * .5 * animMultiplier + 2.5 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

			if ($(element).hasClass("top-arrow-2")) {

				TweenMax.to($(".section-task .section-header"), .7 * animMultiplier, {
					x: 0,
					y: 0,
					opacity: 1,
					ease: Sine.easeOut,
					// overwrite: "none",
					delay: $(element).prevAll(".top-arrow").length * .5 * animMultiplier + 2.5 * animMultiplier + .7 * animMultiplier
				});

			}

		});

		$(".task-wrapper *[data-anim-index]").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).attr("data-anim-index") * .7 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".task-bottom-col").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).prevAll().length * .7 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".task-row-bottom"),
				offset: -200,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".part-col").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).prevAll().length * .7 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".part-arrow").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).prevAll().length * .7 * animMultiplier + 1 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".stage-tmb").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).prevAll().length * .7 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

			if ($(element).hasClass("stage-tmb-4")) {

				TweenMax.to($(".stages-arrow"), .7 * animMultiplier, {
					x: 0,
					y: 0,
					opacity: 1,
					ease: Sine.easeOut,
					// overwrite: "none",
					delay:  $(element).prevAll().length * .7 * animMultiplier + .7 * animMultiplier
				});

			}

		});

		$(".prize-line").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: 0
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".prizes-col").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).data("index") * .7 * animMultiplier + .7 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});

		$(".timer-wrapper *[data-index]").each(function (index, element) {

			let elTween = TweenMax.to($(element), .7 * animMultiplier, {
				x: 0,
				y: 0,
				opacity: 1,
				ease: Sine.easeOut,
				// overwrite: "none",
				delay: $(element).attr("data-index") * .7 * animMultiplier
			});

			let elScene = new ScrollMagic.Scene({
				triggerElement: element.closest(".section"),
				offset: 0,
				reverse: false
			})
				.setTween(elTween)
				.addTo(controller);

		});



	} else if ($("#mobile-indicator").css("display") == "block") {

		$("body").removeClass("animated");

		//controller = controller.enabled(false);
		//controller = controller.destroy(true);

	}

}

$(window).on("resize", function () {

	animateAll();

});

$(document).ready(function () {

	animateAll();

});

