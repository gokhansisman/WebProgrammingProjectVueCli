function CategoryList(a) {
	var b = $("html, body");
	b.animate({
		scrollTop : 0
	}, {
		duration : "slow"
	}),
	$.ajax({
		type : "POST",
		url : "/WebMethods.aspx/ListByIsActiveByFilterProductCountCheckCache",
		data : "{filter:'" + a + "'}",
		contentType : "application/json; charset=utf-8",
		dataType : "json"
	}).done(function (a) {
		$("#divList").empty();
		for (var b = a.d, c = 0; c < b.length; c++)
			if (null == b[c].ParentCategoryId)
				$("#divList").append("<div id='divCategory" + b[c].CategoryId + '\' class="katana"><div class="col-xs-12 katana1"><a href="' + b[c].Url + '" class="section-title">' + b[c].Name + " (<span id='spanCategoryProductCount" + b[c].CategoryId + "'>0</span>)</a></div></div>");
			else {
				$("#divCategory" + b[c].ParentCategoryId).append('<div class="col-sm-4"><a class="section-title" href="' + b[c].Url + '">' + b[c].Name + " (" + b[c].ProductCount + ")</a></div>");
				var d = parseInt($("#spanCategoryProductCount" + b[c].ParentCategoryId).text());
				d += b[c].ProductCount,
				$("#spanCategoryProductCount" + b[c].ParentCategoryId).text(d)
			}
		for (var c = 0; c < b.length; c++)
			null == b[c].ParentCategoryId && $("#divCategory" + b[c].CategoryId).append('<div class="clearfix"></div>')
	})
}
ShowPage(), $(document).ready(function () {
	var a = $("#txtSearchText").val();
	CategoryList(a),
	$(document).on("click", "#btnSearch", function () {
		a = $("#txtSearchText").val(),
		CategoryList(a)
	}),
	$("#txtSearchText").keypress(function (b) {
		var c = b.keyCode || b.which;
		13 === c && (a = $("#txtSearchText").val(), CategoryList(a))
	})
});
