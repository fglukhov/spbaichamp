$(window).on("scroll touchmove", function() {

	fixedHeader();

	var scrollPos = $(window).scrollTop();

	if ($("#md-indicator").css("display") == "block") {
		var yDiff = $("header").outerHeight();
	} else {
		var yDiff = $("header").outerHeight();
	}

	$("a[name]").each(function() {
		if (scrollPos > $(this).offset().top - yDiff - 100) {
			$(".navbar-nav a").removeClass("active");
			$(".navbar-nav a[href='#" + $(this).attr("name") + "']").addClass("active");
		}
	});

});

$(document).ready(function() {

	$(".btn-message-close").click(function () {

		$(this).closest(".form-message").hide();
		$(this).closest(".top-register-form-inner").find("form").fadeIn(250);


	});

	$("#formRegistrationTop, #formRegistrationDown").submit(function(form) {
		form.preventDefault();
		var actionurl = "https://spbaichamp.ru/api/subscribe/by-email/";
		var email = $(form.currentTarget).find('input[name=email]').val();
		var request = {"email":email};
		$.ajax({
			url: actionurl,
			type: 'post',
			//dataType: 'json',
			//headers: {'Content-Type': 'application/json'},
			//contentType: 'application/json; charset=utf-8',
			data: request,
			success: function(response) {
				if(response.status == "OK") {
					//$('#successModal').modal('show');
					$(form.currentTarget).hide();
					$(form.currentTarget).closest(".top-register-form-inner").find(".form-success").fadeIn(250);
					$(".form-email").html(email);
				} else {
					if(response.status == "ERR") {
						errText = "";
						for(var k in response.errors) {
							errText = errText + response.errors[k]+"<br/>";
						}
						$('.error-modal-text').html(errText);
						//$('#errorModal').modal('show');
					} else {
						$('.error-modal-text').text("Неизвестная ошибка");
						//$('#errorModal').modal('show');
					}

					//$(form.currentTarget).hide();
					//$(form.currentTarget).closest(".top-register-form-inner").find(".form-error").fadeIn(250);

				}
			},
			error: function(response) {
				$('.error-modal-text').text("Неизвестная ошибка");
				//$('#errorModal').modal('show');
				//$(form.currentTarget).hide();
				//$(form.currentTarget).closest(".top-register-form-inner").find(".form-error").fadeIn(250);
			}
		});
	});


	$(".svg-inline").svgInline();

	fixedHeader();

	$("body").on("click", function(e) {
		if ($("#md-indicator").css("display") == "block" && !$(e.target).hasClass("navbar-wrapper-inner") && !$(e.target).parents().hasClass("navbar-wrapper-inner") && !$(e.target).hasClass("navbar-trigger") && !$(e.target).parents().hasClass("navbar-trigger")) {
			$(".navbar-wrapper").fadeOut(150);
			$("body").removeClass("menu-open");
			$(".navbar-trigger").removeClass("active");
		}
	});

	$(".navbar-trigger").click(function() {
		$(this).toggleClass("active");
		$(".navbar-wrapper").fadeToggle(150);
		$("body").toggleClass("menu-open");
	});



	$(".navbar-nav a").click(function() {

		if ($("#md-indicator").css("display") == "block") {

			$(".navbar-wrapper").fadeOut(150);
			$("body").removeClass("menu-open");
			$(".navbar-trigger").removeClass("active");

		}

	});

	// $(".navbar-wrapper").click(function(e) {
	// 	if (!$(e.target).hasClass("navbar-wrapper-inner") && !$(e.target).parents().hasClass("navbar-wrapper-inner")) {
	// 		$(".navbar-wrapper").fadeOut(150);
	// 		$("body").removeClass("menu-open");
	// 		$(".navbar-trigger").removeClass("active");
	// 	}
	// });

	// $("body").on("click", function (e) {
	//
	// 	if ($("#md-indicator").css("display") != "block") {
	//
	// 		if (!$(e.target).hasClass("navbar-trigger") && !$(e.target).parents().hasClass("navbar-trigger") && !$(e.target).hasClass("navbar-wrapper") && !$(e.target).parents().hasClass("navbar-wrapper") && $(".navbar-trigger").hasClass("active")) {
	//
	// 			$(".navbar-wrapper").fadeOut(150);
	//
	// 			$(".navbar-trigger").removeClass("active");
	//
	// 		}
	//
	// 	}
	//
	// });

	$("body").on("click", ".navbar-nav a, .header-button a", function() {

		var curLink = $(this);

		if ($("#mobile-indicator").css("display") == "block") {
			var yDiff = $("header").outerHeight();
		} else {
			var yDiff = $("header").outerHeight();
		}

		$("html,body").animate({
			scrollTop: $("a[name='" + curLink.attr("href").replace("#","") + "']").offset().top - yDiff - 50
		},1000,function () {
			//curLink.addClass("active")
		});

		return false;

	});

	// Countdown

	var endDate = new Date(2021, 5, 7, 0, 0, 0, 0);

	$(".countdown").each(function() {
		$(this).countdown({
			until: endDate,
			layout : "<div class='cd-section cd-section-days'><div class='cd-num'>{dnn}</div><div class='cd-ttl'>{dl}</div></div><div class='cd-section cd-section-hours'><div class='cd-num'>{hnn}</div><div class='cd-ttl'>{hl}</div></div><div class='cd-section cd-section-minutes'><div class='cd-num'>{mnn}</div><div class='cd-ttl'>{ml}</div></div>"
		});
	});

	// Countdown END

	// Marquee

	$(".marquee-list").each(function () {

		var mList = $(this),
			mClone1 = $(this).clone(),
			mClone2 = $(this).clone(),
			mSize = $(this).find(".marquee-item").length;

		mList.before(mClone1);
		mList.after(mClone2);

		$(this).closest(".marquee-content").css({
			animationDuration: mSize * 20 + "s",
			width: mList.outerWidth() * 3
		});



	});

	// Marquee END

	// FAQ

	$("body").on("click", ".faq-item-ttl", function () {

		if (!$(this).closest(".faq-item").hasClass("active")) {

			var faqItemActive = $(".faq-item.active"),
				faqItemCur = $(this).closest(".faq-item");

			faqItemActive.find(".faq-item-content").slideUp("250", function () {

				faqItemActive.removeClass("active");

			});

			faqItemCur.find(".faq-item-content").slideDown("250", function () {

				faqItemCur.addClass("active");

			});

			//$(".faq-answer").html(faqItemCur.find(".faq-item-content").html());

		} else {

			var faqItemCur = $(this).closest(".faq-item");

			faqItemCur.find(".faq-item-content").slideUp("250", function () {

				faqItemCur.removeClass("active");

			});

		}

	});

	// FAQ END

	validateForms();

});

function fixedHeader() {

	var scrollPos = $(window).scrollTop();

	if (scrollPos > $(".section-top").outerHeight()) {

		$("header").addClass("header-fixed");

	} else {

		$("header").removeClass("header-fixed");

	}

}

(function($) {
	$.fn.svgInline = function() {
		return this.each(function() {
			var $img = jQuery(this);
			var imgID = $img.attr('id');
			var imgClass = $img.attr('class');
			var imgURL = $img.attr('src');
			jQuery.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = jQuery(data).find('svg');
				// Add replaced image's ID to the new SVG
				if (typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if (typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass + ' replaced-svg');
				}
				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');
				// Replace image with new SVG
				$img.replaceWith($svg);
			}, 'xml');
		});
	};

})(jQuery);

function validateForms() {
	//$('.textarea-autogrow').autogrow();
	//$("input.input-phone").mask("+7 (999) 999-99-99");
	jQuery.validator.addClassRules('phone-email-group', {
		require_from_group: [1, ".phone-email-group"]
	});
	$("select").not(".location-tabs-select").not(".filter-form select").on("change", function() {
		if (!$(this).closest(".picker").length && !$(this).hasClass("faq-select")) {
			$(this).valid();
		}
	});
	$("body").on("click", ".form-item", function(e) {
		if ($(this).find(".bootstrap-select").length && !$(e.target).hasClass("bootstrap-select") && !$(e.target).parents().hasClass("bootstrap-select")) {
			$(e.target).closest(".form-item").find("select").selectpicker('toggle');
		}
	});
	$("form").each(function() {
		form = $(this);
		$(this).validate({
			focusInvalid: true,
			sendForm: false,
			errorPlacement: function(error, element) {
				if (element[0].tagName == "SELECT") {
					element.closest(".form-item").addClass("error");
					element.closest(".btn-group").addClass("btn-group-error");
					if (element.closest(".form-item").length) {
						error.insertAfter(element.closest(".form-item"));
					} else {
						error.insertAfter(element.closest(".btn-group"));
					}
				} else {
					if (element.attr("type") == "checkbox") {
						element.siblings("label").addClass("checkbox-label-error")
					} else {
						error.insertAfter(element);
						element.closest(".form-group").addClass("form-group-error");
					}
				}
			},
			unhighlight: function(element, errorClass, validClass) {
				$(element).removeClass(errorClass);
				$(element).closest(".form-item").removeClass("error").addClass("valid");
				$(element).closest(".form-group").removeClass("form-group-error");
				if ($(element)[0].tagName == "SELECT") {
					$(element).closest(".form-item").removeClass("error");
					$(element).closest(".btn-group").removeClass("btn-group-error");
					if ($(element).closest(".form-item").length) {
						error.insertAfter(element.closest(".form-item"));
						$(element).closest(".form-item").next("label.error").remove();
					} else {
						$(element).closest(".btn-group").next("label.error").remove();
					}
				} else {
					$(element).next(".error").remove();
					if ($(element).attr("type") == "checkbox") {
						$(element).siblings("label").removeClass("checkbox-label-error")
					}
				}
			},
			invalidHandler: function(form, validatorcalc) {
				var errors = validatorcalc.numberOfInvalids();
				if (errors && validatorcalc.errorList[0].element.tagName == "INPUT") {
					validatorcalc.errorList[0].element.focus();
				}
			},
			submitHandler: function(form) {
				// $.ajax({
				// 	type: "POST",
				// 	data: $(form).serialize(),
				// 	success: function () {
				// 		formSuccess(form);
				// 	}
				// });
				// return false;
			}
		});
		if ($(this).find("input.password").length && $(this).find("input.password-repeat").length) {
			$(this).find("input.password-repeat").rules('add', {
				equalTo: "#" + form.find("input.password").attr("id")
			});
		}
	});

	$.validator.addMethod(
		"regex",
		function(value, element, regexp) {
			var re = new RegExp(regexp);
			return this.optional(element) || re.test(value);
		},
		"Неправильный Email"
	);

	$("input[type='email']").rules("add", { regex: /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/ });

}

jQuery.extend(jQuery.validator.messages, {
	required: "Не заполнено поле",
	remote: "Please fix this field.",
	email: "Неправильный Email",
	url: "Please enter a valid URL.",
	date: "Please enter a valid date.",
	dateISO: "Please enter a valid date (ISO).",
	number: "Please enter a valid number.",
	digits: "Please enter only digits.",
	creditcard: "Please enter a valid credit card number.",
	equalTo: "Пароли не совпадают.",
	accept: "Please enter a value with a valid extension.",
	maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
	minlength: jQuery.validator.format("Please enter at least {0} characters."),
	rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
	range: jQuery.validator.format("Please enter a value between {0} and {1}."),
	max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
	min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
});
