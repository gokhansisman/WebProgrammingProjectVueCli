function RightBlock(a) {
	$.ajax({
		type : "POST",
		url : "/WebMethods.aspx/ListBannerByBannerGroupIdCheckCache",
		data : "{bannerGroupId:4}",
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function (b) {
			for (var c = b.d, d = a = c.length > a ? a : c.length, e = $(window).width(), f = 0; f < d; ++f)
				$("#divBannersGroupId4").append('<div class="mg-image hidden-xs hidden-sm"><a href=" ' + c[f].Url + '"><img class="sp-image lazyload img-responsive" ' + (e < 700 ? ' src="/Content/global/images/banners/' + c[f].Image + '" />' : ' data-src="/Content/global/images/banners/' + c[f].Image + '" />') + "</a></div>")
		}
	}),
	AppendProductGroupsForSliderItem("child-slider-2", 4, 10)
}
