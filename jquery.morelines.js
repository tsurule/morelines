(function ( $ ) {

/* morelines - simple to use, if you need to expand the text by various line - this is it
 *
 * <script>
 *   $(function() {
 *     $('.js-description_readmore').moreLines({
 *       linecount: 2, 
 *       baseclass: 'b-description',
 *       basejsclass: 'js-description',
 *       classspecific: 'readmore',
 *       buttontxtmore: "read more",
 *       buttontxtless: "read less",
 *       animationspeed: 250 
 *     });
 *   });
 * </script>
 * 
 * V.Tsurule
 */
	$.fn.moreLines = function (options) {

	"use strict";

		this.each(function(){

			var element = $(this), 
				textelement = element.find("p"),
				baseclass = "b-morelines_",
				basejsclass = "js-morelines_",
				currentclass = "section",
				singleline = parseFloat(element.css("line-height")),
				auto = 1,
				fullheight = element.innerHeight(),
				settings = $.extend({
					linecount: auto,
					baseclass: baseclass,
					basejsclass: basejsclass,
					classspecific: currentclass,
					buttontxtmore: "more lines",
					buttontxtless: "less lines",
					animationspeed: auto
				}, options ),
				
				ellipsisclass = settings.baseclass+settings.classspecific+"_ellipsis",
				buttonclass = settings.baseclass+settings.classspecific+"_button",
				wrapcss = settings.baseclass+settings.classspecific+"_wrapper",
				wrapjs = settings.basejsclass+settings.classspecific+"_wrapper",
				wrapper = $("<div>").addClass(wrapcss+ ' ' +wrapjs).css({'max-width': element.css('width')}),
				linescount = singleline * settings.linecount;

			element.wrap(wrapper);

			if (element.parent().not(wrapjs)) {

				if (fullheight > linescount) {

				element.addClass(ellipsisclass).css({'min-height': linescount, 'max-height': linescount, 'overflow': 'hidden'});

				var moreLinesButton = $("<div>", {
					"class": buttonclass,
					click: function() {

						element.toggleClass(ellipsisclass);
						$(this).toggleClass(buttonclass+'_active');

						if (element.css('max-height') !== 'none') {
							element.css({'height': linescount, 'max-height': ''}).animate({height:fullheight}, settings.animationspeed, function () {
								moreLinesButton.html(settings.buttontxtless);
							});

						} else {
							element.animate({height:linescount}, settings.animationspeed, function () {
								moreLinesButton.html(settings.buttontxtmore);
								element.css('max-height', linescount);
							});
						}
					},

					html: settings.buttontxtmore
				});

				element.after(moreLinesButton);

				}
			}
		});

		return this;
	};

}(jQuery));