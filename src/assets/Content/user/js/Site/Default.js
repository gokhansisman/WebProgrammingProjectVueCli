function AppendCampaignTypeProductCounter(a, b, c) {
	$.ajax({
		type : "POST",
		url : "/WebMethods.aspx/ListProductByCampaignTypeIdTopCountCheckCache",
		data : "{campaignTypeId:" + b + ", topCount:" + c + "}",
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function (b) {
			for (var c = b.d, d = 0; d < c.length; ++d)
				AppendHtmlSliderItemCounter(a, c[d])
		}
	}).done(function () {
		$("#" + a).owlCarousel({
			navigation : !0,
			navigationText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem : !0,
			autoPlay : 4e3,
			autoPlay : !1,
			baseClass : "",
			theme : "owl-single"
		}),
		$("#" + a).prepend("<h4><b style='color:black;'>İn</b>dream Fırsatları</h4>")
	})
}
function AppendHtmlSliderItemCounter(a, b) {
	$("#" + a).append(ProductSliderCounter(b))
}
function ProductSliderCounter(a) {
	var b = "",
	c = $(window).width();
	if (null != a.Authors) {
		for (var d = 0; d < a.Authors.length; ++d)
			b += '<span><a href="' + a.Authors[d].Url + '"><span>' + a.Authors[d].NameSurname + "</span></a></span> , ";
		b = b.substr(0, b.length - 3)
	}
	var e = GetRibbon(a),
	f = 145,
	g = a.DefaultImageMiddleWidth / f,
	h = Math.round(a.DefaultImageMiddleHeight / g),
	i = '<div class="slider-inner">' +
	    '<div class="countdown" ' +
	    'data-year="' + a.CampaignDetail.Campaign.Time.split("-")[0] + '" ' +
	    'data-month="' + a.CampaignDetail.Campaign.Time.split("-")[1] + '" ' +
	    'data-day="' + a.CampaignDetail.Campaign.Time.split("-")[2] + '" ' +
	    'data-hours="' + a.CampaignDetail.Campaign.Time.split("-")[3] + '" ' +
	    'data-minutes="' + a.CampaignDetail.Campaign.Time.split("-")[4] + '" ' +
	    'data-seconds="' + a.CampaignDetail.Campaign.Time.split("-")[5] + '"></div>' +
	    '<div class="prod">' +
	    '<div class="pr">' +
	    '<a style="text-decoration: none !important;" class="u-url" href="' + a.Url + '">' +
        e +
        '<span class="img-wrap' + (1 !== a.BaseCategoryId || a.IsTopProduct ? "-no-background" : "") + '"style="width:' + f + ';">' +
	    '<img style="display:block;" width="' + f + '" src="' + a.DefaultImageMiddle + '" ' + 'alt="' + a.Name + '">' +
	    '</span>' +
	    '</a>' +
	    '</div>' +
	    '</div>' +
	    '<a style="text-decoration: none !important;" class="u-url" href="' + a.Url + '">' +
	    '<h5 class="p-name">' + a.Name + '</h5>' +
	    '</a>' +
	    '<h6 class="p-brand">' + b + '</h6>' +
	    '<span class="yuzde">' + a.LastDiscountFormatted +
        '<span>indirim</span>' +
	    '</span>' +
	    '<span class="old-price">' + a.PriceFormatted + '</span> ' +
	    '<span class="p-price">' + a.LastSalePriceFormatted + "</span>" +
	    "</div>" +
	    "</div>";
    return i;
}
$.ajax({
	type : "POST",
	url : "/WebMethods.aspx/ListBannerByBannerGroupIdCheckCache",
	data : "{bannerGroupId:2}",
	contentType : "application/json; charset=utf-8",
	dataType : "json",
	success : function (a) {
		for (var b = $(window).width(), c = a.d, d = 0; d < c.length; ++d)
			$("#divBannersGroupId2").append('<div class="sp-slide"><a href=" ' + c[d].Url + '"><img class="sp-image lazyload" ' + (b < 700 ? ' src="/Content/global/images/banners/' + c[d].Image + '" />' : ' data-src="/Content/global/images/banners/' + c[d].Image + '" ') + ' /></a></div>')
	}
}).done(function () {
	$("#divSlider").sliderPro({
		width : 960,
		height : 408,
		arrows : !0,
		buttons : !0,
		waitForLayers : !1,
		thumbnailWidth : 200,
		thumbnailHeight : 100,
		thumbnailPointer : !1,
		autoplay : !0,
		autoScaleLayers : !1,
		breakpoints : {
			300 : {
				thumbnailWidth : 120,
				thumbnailHeight : 50
			}
		}
	}),
	$.ajax({
		type : "POST",
		url : "/WebMethods.aspx/ListBannerByBannerGroupIdCheckCache",
		data : "{bannerGroupId:3}",
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function (a) {
			var b = a.d,
			c = $(window).width();
			b.length > 0 ? $("#divBannersGroupId3").append('<section class="section-best-sellers"><div class="container"><div class="mg-image"><div style="text-align: center;"><a href=" ' + b[0].Url + '"><img class="sp-image lazyload" ' + (c < 700 ? ' src="/Content/global/images/banners/' + b[0].Image + '" />' : ' data-src="/Content/global/images/banners/' + b[0].Image + '" />') + "</a></div></div></div></section>") : $("#divBannersGroupId3").remove()
		}
	}),
    $.ajax({
        type: "POST",
        url: "/WebMethods.aspx/ListBannerByBannerGroupIdCheckCache",
        data: "{bannerGroupId:23}",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (a) {
            var b = a.d,
			c = $(window).width();
            b.length > 0 ? $("#divBannersGroupId3-4").append('<section class="section-best-sellers"><div class="container"><div class="mg-image"><div style="text-align: center;"><a href=" ' + b[0].Url + '"><img class="sp-image lazyload" ' + (c < 700 ? ' src="/Content/global/images/banners/' + b[0].Image + '" />' : ' data-src="/Content/global/images/banners/' + b[0].Image + '" />') + "</a></div></div></div></section>") : $("#divBannersGroupId3-4").remove()
        }
    }),
	RightBlock(),
	AppendProductGroupsForSliderItem("child-slider", 3, 10),
	$.ajax({
		type : "POST",
		url : "/WebMethods.aspx/ListProductByProductGroupIdByTopCountCheckCache",
		data : "{productGroupId:1, topCount:10}",
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function (a) {
			for (var b = a.d, c = 0; c < b.length; ++c)
				AppendHtmlBestSellers("ulProductsGroupId1Top10", b[c], c)
		}
	}).done(function () {
		$("#ulProductsGroupId1Top10").owlCarousel({
			autoPlay : 3e3,
			pagination : !1,
			items : 10,
			itemsDesktop : [1199, 8],
			itemsDesktopSmall : [991, 5],
			itemsTabletSmall : [767, 3],
			itemsMobile : [480, 2]
		}),
		$.ajax({
			type : "POST",
			url : "/WebMethods.aspx/ListCampaignByIsPublicByIsActiveSortOrder",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			success : function (a) {
				var b = a.d;
				if (b.length > 0) {
					var e,
					c = "",
					d = "";
					for (e = 0; e < b.length; e++)
						c += '<li class="' + (0 === e ? "active" : "") + '"><a data-toggle="tab" role="tab" aria-controls="tabCampaign-' + (e + 1) + '" href="#tabCampaign-' + (e + 1) + '">' + b[e].Name + "</a></li>", d += '<div id="tabCampaign-' + (e + 1) + '" class="tab-pane ' + (0 === e ? "active" : "") + '" role="tabpanel"><div id="divCampaign' + (e + 1) + '" class="product-block clearfix"></div></div>';
					for ($("#divCampaigns").append('<section class="section-main-products clearfix"><div class="main-content-block"><div id="tabs" class="tab-block"><ul role="tablist" class="nav nav-tabs">' + c + '</ul><div class="tab-content">' + d + "</div></div></div></section>"), e = 0; e < b.length; e++)
						AppendCampaignDetailsForProductInner('<div class="h-product col-xs-6 col-sm-4 col-md-4 col-lg-3">', "divCampaign" + (e + 1), b[e].CampaignId, 8)
				} else
					$("#divCampaigns").remove()
			}
		}),
		$.ajax({
			type : "POST",
			url : "/WebMethods.aspx/ListProductGroupByIsPublicByIsActiveSortOrder",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			success : function (a) {
				var b = a.d;
				if (b.length > 0) {
					var e,
					c = "",
					d = "";
					for (e = 0; e < b.length; e++)
						c += '<li class="' + (0 === e ? "active" : "") + '"><a data-toggle="tab" role="tab" aria-controls="tabProductGroup-' + (e + 1) + '" href="#tabProductGroup-' + (e + 1) + '">' + b[e].Name + "</a></li>", d += '<div id="tabProductGroup-' + (e + 1) + '" class="tab-pane ' + (0 === e ? "active" : "") + '" role="tabpanel"><div id="divProductGroup' + (e + 1) + '" class="product-block clearfix"></div></div>';
					for ($("#divProductGroups").append('<section class="section-main-products clearfix"><div class="main-content-block"><div id="tabs" class="tab-block"><ul role="tablist" class="nav nav-tabs">' + c + '</ul><div class="tab-content">' + d + "</div></div></div></section>"), e = 0; e < b.length; e++)
						AppendGroupProductsForProductInner('<div class="h-product col-xs-6 col-sm-4 col-md-4 col-lg-3">', "divProductGroup" + (e + 1), b[e].ProductGroupId, 20)
				} else
					$("#divProductGroups").remove()
			}
		}),
		AppendGroupProductsForProductInner('<div class="h-product col-xs-6 col-sm-4 col-md-4 col-lg-3 sifirla">', "divProductGroupId8Top4", 8, 4),
		AppendGroupProductsForProductInner('<div class="h-product col-xs-6 col-sm-4 col-md-4 col-lg-3 sifirla">', "divProductGroupId9Top4", 9, 4),
		AppendGroupProductsForProductInner('<div class="h-product col-xs-6 col-sm-4 col-md-4 col-lg-3 sifirla">', "divProductGroupId10Top4", 10, 4),
		AppendGroupProductsForProductInner('<div class="h-product col-xs-6 col-sm-4 col-md-2 col-lg-2 sifirla">', "divProductsGroupId11Top12", 11, 12),
		ShowPageDefault()
	})
}), $(document).ready(function () {
	AppendCampaignTypeProductCounter("divCampaign", 4, 50),
	$(".countdown").each(function () {
		var a = $(this),
		b = a.data(),
		c = new Date(b.year, b.month || 0, b.day || 1, b.hours || 0, b.minutes || 0, b.seconds || 0);
		a.countdown({
			until : c,
			format : "dHMS",
			labels : ["yıl", "ay", "hafta", "gün", "saat", "dak.", "sn."]
		})
	})
}), $(document).ajaxComplete(function () {
	$(".countdown").each(function () {
		var a = $(this),
		b = a.data(),
		c = new Date(b.year.toString(), b.month - 1, b.day, b.hours.toString(), b.minutes.toString(), b.seconds.toString());
		a.countdown({
			until : c,
			format : "dHMS",
			labels : ["yıl", "ay", "hafta", "gün", "saat", "dak.", "sn."]
		})
	})
});
