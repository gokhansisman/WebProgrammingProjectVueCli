!function(a){var b,c;return c="undefined"!=typeof window&&null!==window?window:global,c.BarRating=b=function(){function b(){this.show=function(){var c,d,f,g,b=a(this.elem),e=this.options;b.data("barrating")||(g=e.initialRating?a('option[value="'+e.initialRating+'"]',b):a("option:selected",b),b.data("barrating",{currentRatingValue:g.val(),currentRatingText:g.text(),originalRatingValue:g.val(),originalRatingText:g.text()}),c=a("<div />",{class:"br-widget"}).insertAfter(b),b.find("option").each(function(){var b,d,f,g;b=a(this).val(),b&&(d=a(this).text(),f=a("<a />",{href:"#","data-rating-value":b,"data-rating-text":d}),g=a("<span />",{text:e.showValues?d:""}),c.append(f.append(g)))}),e.showSelectedRating&&c.append(a("<div />",{text:"",class:"br-current-rating"})),b.data("barrating").deselectable=!b.find("option:first").val(),f=e.reverse?"nextAll":"prevAll",e.reverse&&c.addClass("br-reverse"),e.readonly&&c.addClass("br-readonly"),c.on("ratingchange",function(c,d,f){d=d?d:b.data("barrating").currentRatingValue,f=f?f:b.data("barrating").currentRatingText,b.find('option[value="'+d+'"]').prop("selected",!0),b.change(),e.showSelectedRating&&a(this).find(".br-current-rating").text(f)}).trigger("ratingchange"),c.on("updaterating",function(c){a(this).find('a[data-rating-value="'+b.data("barrating").currentRatingValue+'"]').addClass("br-selected br-current")[f]().addClass("br-selected")}).trigger("updaterating"),d=c.find("a"),d.on("touchstart",function(b){b.preventDefault(),b.stopPropagation(),a(this).click()}),e.readonly&&d.on("click",function(a){a.preventDefault()}),e.readonly||(d.on("click",function(g){var i,j,h=a(this);return g.preventDefault(),d.removeClass("br-active br-selected"),h.addClass("br-selected")[f]().addClass("br-selected"),i=h.attr("data-rating-value"),j=h.attr("data-rating-text"),h.hasClass("br-current")&&b.data("barrating").deselectable?(h.removeClass("br-selected br-current")[f]().removeClass("br-selected br-current"),i="",j=""):(d.removeClass("br-current"),h.addClass("br-current")),b.data("barrating").currentRatingValue=i,b.data("barrating").currentRatingText=j,c.trigger("ratingchange"),e.onSelect.call(this,b.data("barrating").currentRatingValue,b.data("barrating").currentRatingText),!1}),d.on({mouseenter:function(){var b=a(this);d.removeClass("br-active").removeClass("br-selected"),b.addClass("br-active")[f]().addClass("br-active"),c.trigger("ratingchange",[b.attr("data-rating-value"),b.attr("data-rating-text")])}}),c.on({mouseleave:function(){d.removeClass("br-active"),c.trigger("ratingchange").trigger("updaterating")}})),b.hide())},this.clear=function(){var b=a(this.elem),c=b.next(".br-widget");c&&b.data("barrating")&&(c.find("a").removeClass("br-selected br-current"),b.data("barrating").currentRatingValue=b.data("barrating").originalRatingValue,b.data("barrating").currentRatingText=b.data("barrating").originalRatingText,c.trigger("ratingchange").trigger("updaterating"),this.options.onClear.call(this,b.data("barrating").currentRatingValue,b.data("barrating").currentRatingText))},this.destroy=function(){var b=a(this.elem),c=b.next(".br-widget");if(c&&b.data("barrating")){var d=b.data("barrating").currentRatingValue,e=b.data("barrating").currentRatingText;b.removeData("barrating"),c.off().remove(),b.show(),this.options.onDestroy.call(this,d,e)}}}return b.prototype.init=function(b,c){var d;return d=this,d.elem=c,d.options=a.extend({},a.fn.barrating.defaults,b)},b}(),a.fn.barrating=function(c,d){return this.each(function(){var e=new b;return a(this).is("select")||a.error("Sorry, this plugin only works with select fields."),e.hasOwnProperty(c)?(e.init(d,this),e[c]()):"object"!=typeof c&&c?void a.error("Method "+c+" does not exist on jQuery.barrating"):(d=c,e.init(d,this),e.show())})},a.fn.barrating.defaults={initialRating:null,showValues:!1,showSelectedRating:!0,reverse:!1,readonly:!1,onSelect:function(a,b){},onClear:function(a,b){},onDestroy:function(a,b){}}}(jQuery);