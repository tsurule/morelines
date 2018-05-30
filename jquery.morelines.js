(($) => {
    "use strict";

    $.fn.moreLines = function (options) {
        
        const defaults = {
            linecount: 1,                       // Количество строк, отображаемых по умолчанию
            baseclass: 'b-morelines_',           // Базовый CSS класс
            basejsclass: 'js-morelines_',        // Базовый JS класс
            classspecific: 'section',            // Уникальный класс для стилизации
            buttontxtmore: "read more",          // Текст для кнопки "читать больше"
            buttontxtless: "read less",          // Текст для кнопки "читать меньше"
            animationspeed: 250                  // Скорость анимации в миллисекундах
        };

        const settings = { ...defaults, ...options };

        const ellipsisClass = `${settings.baseclass}${settings.classspecific}_ellipsis`;
        const buttonClass = `${settings.baseclass}${settings.classspecific}_button`;
        const wrapClass = `${settings.baseclass}${settings.classspecific}_wrapper`;
        const wrapJsClass = `${settings.basejsclass}${settings.classspecific}_wrapper`;


        return this.each(function () {
            const element = $(this);
            const fullHeight = element.innerHeight();
            const lineHeight = parseFloat(element.css("line-height"));
            const maxLinesHeight = lineHeight * settings.linecount;

            if (element.parent().hasClass(wrapJsClass) || fullHeight <= maxLinesHeight) return;

            element.wrap(
                $("<div>")
                    .addClass(`${wrapClass} ${wrapJsClass}`)
                    .css({ 'max-width': element.css('width') })
            );
            element.addClass(ellipsisClass).css({
                'min-height': maxLinesHeight,
                'max-height': maxLinesHeight,
                'overflow': 'hidden'
            });

            const moreLinesButton = $("<div>", {
                class: buttonClass,
                text: settings.buttontxtmore,
                click: () => {
                    element.toggleClass(ellipsisClass);
                    moreLinesButton.toggleClass(`${buttonClass}_active`);
                    if (element.hasClass(ellipsisClass)) {
                        element.animate({ height: maxLinesHeight }, settings.animationspeed, () => {
                            moreLinesButton.text(settings.buttontxtmore);
                            element.css('max-height', maxLinesHeight);
                        });
                    } else {
                        element.css('max-height', '').animate({ height: fullHeight }, settings.animationspeed, () => {
                            moreLinesButton.text(settings.buttontxtless);
                        });
                    }
                }
            });

            element.after(moreLinesButton);
        });
    };

})(jQuery);
