function GetRibbon(a) {
	var b = "",
	c = $(window).width();
	return a.IsFreeShippingActual ? b = "<span " + (c < 700 ? 'src="/Content/user/img/kargo-bedava.png" ' : 'data-src="/Content/user/img/kargo-bedava.png" ') + ' class="kargo-bedava-rib lazyload"></span>' : a.FastShipping ? b = "" : a.IsBestSeller ? b = "<span " + (c < 700 ? 'src="/Content/user/img/cok-satan2.png" ' : 'data-src="/Content/user/img/cok-satan2.png" ') + 'class="cok-satan-rib lazyload"></span>' : a.IsSoon ? b = "<span " + (c < 700 ? 'src="/Content/user/img/yakindarib.png" ' : 'data-src="/Content/user/img/yakindarib.png" ') + 'class="yakinda-rib lazyload"></span>' : a.IsNew && (b = "<span " + (c < 700 ? 'src="/Content/user/img/yeni.png" ' : 'data-src="/Content/user/img/yeni.png" ') + 'class="yeni-rib lazyload"></span>'),
	b
}
function ProductInner(a) {
	var b = "";
	if (null != a.Authors) {
		for (var c = 0; c < a.Authors.length; ++c)
			b += '<span><a href="' + a.Authors[c].Url + '"><span>' + a.Authors[c].NameSurname + "</span></a></span> , ";
		b = b.substr(0, b.length - 3)
	}
	var d = '<span><a href="' + a.Manufacturer.Url + '"><span>' + a.Manufacturer.Name + "</span></a></span>",
	e = GetRibbon(a),
	f = 145,
	g = $(window).width(),
	h = '<div class="product-inner innr"><div class="prod"><a style="text-decoration: none !important;" class="u-url" href="' + a.Url + '"><div class="prod"><div class="pr">' + e + '<span class="img-wrap' + (2 !== a.BaseCategoryId || a.IsTopProduct ? "-no-background" : "") + '"style="width:' + f + 'px;"><img style="display:block;" width="' + f + '"class="mx lazyload" ' + (g < 700 ? 'src="' + a.DefaultImageMiddle + '" ' : 'data-src="' + a.DefaultImageMiddle + '" ') + 'alt="' + a.Name + '"></span></div></a></div><a style="text-decoration: none !important;" class="u-url" href="' + a.Url + '"><h5 class="p-name">' + a.Name + '</h5></a><h6 class="p-brand">' + b + '</h6><h6 class="p-brand">' + d + '</h6><div class="stars clearfix"><div class="input select rating-f" style="margin-left: 15%;"><select class="slcVote"><option ' + (1 === a.Rating ? "selected=''" : "") + ' value="1">1</option><option ' + (2 === a.Rating ? "selected=''" : "") + 'value="2">2</option><option ' + (3 === a.Rating ? "selected=''" : "") + 'value="3">3</option><option ' + (4 === a.Rating ? "selected=''" : "") + 'value="4">4</option><option ' + (5 === a.Rating ? "selected=''" : "") + 'value="5">5</option></select></div><br></div>' +
	    '<span class="yuzde">'
	    + (a.PriceFormatted != a.LastSalePriceFormatted ? a.LastDiscountFormatted + '<span>indirim</span>' : '') +
	    '</span>' +
	    '<div class="top-eksi">' +
	    '<span class="old-price">' + (a.PriceFormatted != a.LastSalePriceFormatted ? a.PriceFormatted : '-') + '</span> <span class="p-price">' + a.LastSalePriceFormatted + "</span></div></div>";
	return h
}
function ProductSlider(a) {
	var b = "";
	if (null != a.Authors) {
		for (var c = 0; c < a.Authors.length; ++c)
			b += '<span><a href="' + a.Authors[c].Url + '"><span >' + a.Authors[c].NameSurname + "</span></a></span> , ";
		b = b.substr(0, b.length - 3)
	}
	var d = '<span><a href="' + a.Manufacturer.Url + '"><span>' + a.Manufacturer.Name + "</span></a></span>",
	e = GetRibbon(a),
	f = 145,
	g = $(window).width(),
	h = '<div class="slider-inner"><div class="prod"><div class="pr"><a style="text-decoration: none !important;" class="u-url" href="' + a.Url + '">' + e + '<span class="img-wrap' + (2 !== a.BaseCategoryId || a.IsTopProduct ? "-no-background" : "") + '"style="width:' + f + 'px;"><img style="display:block;" width="' + f + '"class="mx" ' + ('src="' + a.DefaultImageMiddle + '" ') + 'alt="' + a.Name + '"></span></a></div></div><a style="text-decoration: none !important;" class="u-url" href="' + a.Url + '"><h5 class="p-name">' + a.Name + '</h5></a><h6 class="p-brand hidden-md" style="margin-bottom:0 !important;">' + b + '</h6><h6 class="p-brand hidden-md" style="margin-bottom:0 !important;">' + d + '</h6><span class="yuzde">'
	    + (a.PriceFormatted != a.LastSalePriceFormatted ? a.LastDiscountFormatted + '<span>indirim</span>' : '') + '</span>' +
	    '<span class="old-price">' + (a.PriceFormatted != a.LastSalePriceFormatted ? a.PriceFormatted : '-') + '</span> ' +
	    '<span class="p-price">' + a.LastSalePriceFormatted + "</span></div></div>";
	return h
}
function ProductBestSellers(a, b) {
	var c = a.DefaultImageMiddleWidth / 97,
	d = Math.round(a.DefaultImageMiddleHeight / c);
	d += 10;
	var e = '<h6 class="p-brand">' + a.Manufacturer.Name + "</h6>",
	f = $(window).width(),
	g = '<div data-margin="10"><a style="text-decoration: none !important;" class="u-url" href="' + a.Url + '"><div class="view view-first"><div class="img-wrap2' + (2 !== a.BaseCategoryId || a.IsTopProduct ? "-no-background" : "") + ' lazyload"><img class="mx2 lazyload" ' + (f < 700 ? 'src="' + a.DefaultImageMiddle + '" ' : 'data-src="' + a.DefaultImageMiddle + '" ') + 'alt="' + a.Name + '"></div><div class="mask" style=" height:' + d + 'px;"><h5 class="ktpad">' + a.Name + "</h5>" + e + '<span class="old-price">' + a.PriceFormatted + '</span> <br><span class="p-price">' + a.LastSalePriceFormatted + '</span></div></div><div class="bracket-top"><div class="bracket-outer"><p class="bracket">' + (b + 1) + "</p></div></div></a></div>";
	return g
}
function AppendHtmlProductInner(a, b, c) {
	var d = ProductInner(c);
	"" !== a && (d = a + d + "<div>"),
	$("#" + b).append(d)
}
function AppendHtmlSliderItem(a, b) {
	$("#" + a).append(ProductSlider(b))
}
function AppendHtmlBestSellers(a, b, c) {
	$("#" + a).append(ProductBestSellers(b, c))
}
function AppendGroupProductsForProductInner(a, b, c, d) {
	$.ajax({
		type : "POST",
		url : "/WebMethods.aspx/ListProductByProductGroupIdByTopCountCheckCache",
		data : "{productGroupId:" + c + ", topCount:" + d + "}",
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function (c) {
			for (var e = c.d, f = e.length > d ? d : e.length, g = 0; g < f; ++g)
				AppendHtmlProductInner(a, b, e[g])
		}
	})
}
function AppendCampaignDetailsForProductInner(a, b, c, d) {
	$.ajax({
		type : "POST",
		url : "/WebMethods.aspx/ListProductByCampaignIdByTopCountCheckCache",
		data : "{campaignId:" + c + ", topCount:" + d + "}",
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function (c) {
			if (null != c.d)
				for (var e = c.d, f = e.length > d ? d : e.length, g = 0; g < f; ++g)
					AppendHtmlProductInner(a, b, e[g])
		}
	})
}
function AppendManufacturerProductsForProductInner(a, b, c, d) {
	$.ajax({
		type : "POST",
		url : "/WebMethods.aspx/ListByManufacturerIdByNotProductIdTopCountCheckCache",
		data : "{productId:" + c + ", topCount:" + d + "}",
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function (c) {
			for (var e = c.d, f = e.length > d ? d : e.length, g = 0; g < f; ++g)
				AppendHtmlProductInner(a, b, e[g])
		}
	})
}
function AppendProductGroupsForSliderItem(a, b, c) {
	$.ajax({
		type : "POST",
		url : "/WebMethods.aspx/ListProductByProductGroupIdByTopCountCheckCache",
		data : "{productGroupId:" + b + ", topCount:" + c + "}",
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function (b) {
			for (var c = b.d, d = 0; d < c.length; ++d)
				AppendHtmlSliderItem(a, c[d])
		}
	}).done(function () {
		$("#" + a).owlCarousel({
			navigation : !0,
			navigationText : ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
			slideSpeed : 500,
			paginationSpeed : 500,
			singleItem : !0,
			autoPlay : 4e3,
			baseClass : "",
			theme : "owl-single"
		})
	})
}
