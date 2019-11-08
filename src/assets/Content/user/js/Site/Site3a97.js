function ShowPage() {
    $(".loader").delay(50).fadeOut("slow"),
	$("body").delay(50).css({
	    overflow: "visible"
	})
}
function ShowPageDefault() {
    $(".loader").delay(50).fadeOut("slow"),
	$("body").delay(50).css({
	    overflow: "visible"
	}),
	$(".loader").promise().done(function () {
	    jQuery("#effect").fadeIn(100).animate({
	        bottom: "+=50px"
	    }, 100).animate({
	        bottom: "-=50px"
	    }, 100).animate({
	        bottom: "+=40px"
	    }, 100).animate({
	        bottom: "-=40px"
	    }, 100).animate({
	        bottom: "+=30px"
	    }, 100).animate({
	        bottom: "-=30px"
	    }, 100).animate({
	        bottom: "+=20px"
	    }, 100).animate({
	        bottom: "-=20px"
	    }, 100).animate({
	        bottom: "+=10px"
	    }, 100).animate({
	        bottom: "-=10px"
	    }, 100, "swing", function () {
	        jQuery("#effect").data("bouncing", !1)
	    })
	})
}
function toUpper(a) {
    for (var d, e, b = a.value, c = b.split(" "), f = new Array, g = 0; g < c.length; g++)
        d = "i" === c[g].substring(0, 1) ? "İ" : "ı" === c[g].substring(0, 1) ? "I" : c[g].substring(0, 1).toUpperCase(), e = c[g].substring(1).toLowerCase(), f[g] = d + e;
    return newstring = f.join(" "),
	a.value = newstring,
	!0
}
function getParameterByName(a) {
    a = a.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var b = new RegExp("[\\?&]" + a + "=([^&#]*)"),
	c = b.exec(location.search);
    return null == c ? "" : decodeURIComponent(c[1].replace(/\+/g, " "))
}

function Search() {
    $("#divFilterSearch").empty();
    $("#divFilterSearch").removeClass("active");
}

$(document).ready(function () {

    $("#txtSearch").autocomplete({
        source: function (request, response) {
            var param = { keyword: $('#txtSearch').val() };
            $.ajax({
                url: "/WebMethods.aspx/ListForSearch",
                data: JSON.stringify(param),
                dataType: "json",
                type: "POST",
                contentType: "application/json; charset=utf-8",
                dataFilter: function (data) { return data; },
                success: function (data) {
                    response($.map(data.d, function (item) {

                        $("#divFilterSearch").empty();

                        if (data.d == null) {

                            $("#divFilterSearch").empty();
                            $("#divFilterSearch").removeClass("active");
                        } else {

                            var b = data.d.Item1;
                            if (b.length > 0) {
                                var c = "";
                                c += '<ul class="product">',
                                    c += '<li class="suggest-head"><span>Ürünler</span></li>';
                                for (var d = 0; d < b.length; d++)
                                    c += '<li><a href="' + b[d].Url + '/' + $('#txtSearch').val() + '">' + b[d].Name + '</a><span class="price"><strong>' + b[d].LastSalePriceFormatted + "</strong></span></li>";
                                c += "</ul>",
                                    $("#divFilterSearch").append(c);
                            }
                            var e = data.d.Item2;
                            if (e.length > 0) {
                                var f = "";
                                f += ' <ul class="category">',
                                    f += ' <li class="suggest-head"><span>Kategoriler</span></li>';
                                for (var g = 0; g < e.length; g++)
                                    f += '<li><a href="' + e[g].Url + '">' + e[g].Name + "</a></li>";
                                f += "</ul>",
                                    $("#divFilterSearch").append(f);
                            }
                            var h = data.d.Item3;
                            if (h.length > 0) {
                                var i = "";
                                i += ' <ul class="brand">',
                                    i += ' <li class="suggest-head"><span>Yayınevleri</span></li>';
                                for (var g = 0; g < h.length; g++)
                                    i += '<li><a href="' + h[g].Url + '">' + h[g].Name + "</a></li>";
                                i += "</ul>",
                                    $("#divFilterSearch").append(i);
                            }
                            var j = data.d.Item4;
                            if (j.length > 0) {
                                var k = "";
                                k += ' <ul class="author">',
                                    k += ' <li class="suggest-head"><span>Yazarlar</span></li>';
                                for (var g = 0; g < j.length; g++)
                                    k += '<li><a href="' + j[g].Url + '">' + j[g].Employee.NameSurname + "</a></li>";
                                k += "</ul>",
                                    $("#divFilterSearch").append(k);
                            }

                            b.length > 0 ||
                                e.length > 0 ||
                                h.length > 0 ||
                                j.length > 0
                                ? $("#divFilterSearch").addClass("active")
                                : $("#divFilterSearch").removeClass("active");
                        }

                    }));
                },
                error: function () {
                    $("#divFilterSearch").empty();
                }
            });
        },
        minLength: 3,
        delay: 500
    });
});

function hideSeek() {
    $(window).width() < 992 ? ($("#bnozel").removeClass("in"), $("#ulEmployeesType1").collapse("hide"), $("#ulCategories").collapse("hide"), $("#ulManufacturersType2").collapse("hide"), $("#ulPriceRanges").collapse("hide")) : ($("#bnozel").addClass("in"), $("#ulEmployeesType1").collapse("show"), $("#ulCategories").collapse("show"), $("#ulManufacturersType2").collapse("show"), $("#ulPriceRanges").collapse("show"))
}
$(function () {
    $(document).ready(function () {
        var a = !1;
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && (a = !0),
		a || $(".top-header").scrollToFixed();
        var b = 100,
		c = 1200,
		d = 700,
		e = $(".cd-top");
        $(window).scroll(function () {
            $(this).scrollTop() > b ? e.addClass("cd-is-visible") : e.removeClass("cd-is-visible cd-fade-out"),
			$(this).scrollTop() > c && e.addClass("cd-fade-out")
        }),
		e.on("click", function (a) {
		    a.preventDefault(),
			$("body,html").animate({
			    scrollTop: 0
			}, d)
		})
    }),
	$(".primary-menu").find("li").hover(function () {
	    $(this).children("ul").stop().fadeIn()
	}, function () {
	    $(this).children("ul").stop().fadeOut()
	}),
	$(".mobile-primary-menu").find(".icon-wrap").click(function () {
	    $(".mobile-inner").stop().slideToggle(200)
	});
    var a = $(".mobile-inner > ul > li").children("ul");
    a.each(function () {
        $(this).siblings("a").append('<i class="open-menu fa fa-chevron-down"></i>')
    }),
	$(".mobile-inner").find(".fa-chevron-down").click(function (a) {
	    a.preventDefault(),
		$(this).parents("a").siblings("ul").stop().slideToggle(200)
	});
    var b = $("#number").val();
    $("#minus").click(function () {
        b--,
		b < 1 && (b = 1),
		$("#number").val(b)
    }),
	$("#plus").click(function () {
	    b++,
		$("#number").val(b)
	}),
	hideSeek()
}), $(document).ready(function () {
    $(".lazyload").lazy({
        effect: "fadeIn",
        effectTime: 500,
        threshold: 0,
        bind: "event",
        afterLoad: function (a) {
            "img-wrap" === a.parent().prop("className") && a.parent().addClass("img-wrap-visible")
        }
    })
}), $(document).ajaxComplete(function () {
    $(".lazyload").lazy({
        effect: "fadeIn",
        effectTime: 500,
        threshold: 0,
        bind: "event",
        afterLoad: function (a) {
            "img-wrap" === a.parent().prop("className") && a.parent().addClass("img-wrap-visible")
        }
    }),
	$('a[data-toggle="tab"]').on("shown.bs.tab", function () {
	    $(".lazyload").lazy({
	        effect: "fadeIn",
	        effectTime: 500,
	        threshold: 0,
	        bind: "event",
	        afterLoad: function (a) {
	            "img-wrap" === a.parent().prop("className") && a.parent().addClass("img-wrap-visible")
	        }
	    })
	}),
	$(".slcVote").barrating("show", {
	    showSelectedRating: !1,
	    readonly: !0
	}),
	$(".hoverTooltip").tooltip({
	    placement: "top",
	    html: !0,
	    trigger: "hover"
	})
}), $('a[data-toggle="tab"]').on("shown.bs.tab", function () {
    $(".lazyload").lazy({
        effect: "fadeIn",
        effectTime: 500,
        threshold: 0,
        bind: "event",
        afterLoad: function (a) {
            "img-wrap" === a.parent().prop("className") && a.parent().addClass("img-wrap-visible")
        }
    })
}), navigator.userAgent.toLowerCase().indexOf("firefox") > -1 && $(".txtSearch").attr("style", "height:42px;"), $(".hoverTooltip").tooltip({
    placement: "top",
    html: !0,
    trigger: "hover"
}), $(document).ajaxComplete(function () {
    $(".integer").inputmask("integer", {
        rightAlign: !1
    }),
	$(".double").inputmask("decimal", {
	    rightAlign: !1,
	    radixPoint: ","
	})
}), $(".integer").inputmask("integer", {
    rightAlign: !1
}), $(".double").inputmask("decimal", {
    rightAlign: !1,
    radixPoint: ","
}), $(document).ajaxComplete(function () {
    $(".money").formatCurrency({
        region: "tr-TR"
    })
}), $(".money").formatCurrency({
    region: "tr-TR"
}), $(".iban").inputmask("mask", {
    mask: "TR99 9999 9999 9999 9999 9999 99"
}), $(".firsCapitalUpper").keyup(function () {
    toUpper(this)
}), $("#txtSearch").keypress(function (a) {
    var b = a.keyCode || a.which;
    return 13 === b && $.trim($("#txtSearch").val()).length > 2 ? (window.location.href = "/arama/?filter=" + $("#txtSearch").val(), !1) : 13 === b ? (toastr.error("En az 3 harfli bir kelime arayabilirsiniz. ", {
        closeButton: !1,
        debug: !1,
        positionClass: "toast-bottom-center",
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    }), !1) : void 0
}), $("#btnSearchMaster").click(function () {
    return $.trim($("#txtSearch").val()).length > 2 ? (window.location.href = "/arama/?filter=" + $("#txtSearch").val(), !1) : 13 === keyCode ? (toastr.error("En az 3 harfli bir kelime arayabilirsiniz. ", {
        closeButton: !1,
        debug: !1,
        positionClass: "toast-bottom-center",
        onclick: null,
        showDuration: "300",
        hideDuration: "1000",
        timeOut: "5000",
        extendedTimeOut: "1000",
        showEasing: "swing",
        hideEasing: "linear",
        showMethod: "fadeIn",
        hideMethod: "fadeOut"
    }), !1) : void 0
}), $(document).on("onclick", "#btnListele", function (a) {
    return Search(),
	!1
});
var timeout;
$("#txtSearch").keypress(function () {
    $(window).width() > 600 && (timeout && (clearTimeout(timeout), timeout = null), timeout = setTimeout(Search, 400))
}), $(window).resize(function () {
    hideSeek()
});
//$(document).ready(function () {
//    $("#txtSearch").on('input', function (e) {
//        if ($("#txtSearch").val().length < 3) {
//            $("#divFilterSearch").removeClass("active")
//        } else {
//            $("#divFilterSearch").addClass("active")
//        }
//    });
//});

$(document).click(function (e) {
    e.stopPropagation();
    var container = $("#divFilterSearch");
    if (container.has(e.target).length === 0) {
        $('#divFilterSearch').removeClass("active");
    }
})