function addIndexButtons(a, b) {
	0 === b && $(".ulPaging").empty();
	var c = a - 3 < 0 ? 0 : a - 2,
	d = a + 3 > b ? b : a + 3;
	$(".ulPaging").empty(),
	$(".ulPaging").append('<li><a class="aPageFirst paging">İlk</a></li><li><a class="aPageBack paging"><<</a></li>');
	for (var e = c; e < d; e++)
		e === a ? $(".ulPaging").append('<li class="paging activeli"><a>' + (e + 1) + "</a></li>") : $(".ulPaging").append('<li class="paging"><a class="aPageIndex">' + (e + 1) + "</a></li>");
	$(".ulPaging").append('<li><a class="aPageNext paging">>></a></li><li><a class="aPageLast paging">Son</a></li>')
}
function checkButtons(a, b) {
	0 === b && $(".ulPaging").empty(),
	a === b - 1 ? ($(".aPageNext").addClass("not-active"), $(".aPageLast").addClass("not-active")) : ($(".aPageNext").removeClass("not-active"), $(".aPageLast").removeClass("not-active")),
	0 === a ? ($(".aPageBack").addClass("not-active"), $(".aPageFirst").addClass("not-active")) : ($(".aPageBack").removeClass("not-active"), $(".aPageFirst").removeClass("not-active"))
}
function ManufacturerList() {
	var a = $("html, body");
	a.animate({
		scrollTop : 0
	}, {
		duration : "slow"
	});
	var b = $("#txtSearchText").val().length > 3 ? $("#txtSearchText").val() : "",
	c = $("#hdnPage").val(),
	d = parseInt($("#hdnActivePage").val()) * pageSize;
	$.ajax({
		type : "POST",
		url : "/WebMethods.aspx/ListManufacturerByTypeIdByFilter",
		data : "{typeId:" + typeId + ",filter:'" + b + "',  page:'" + c + "', startIndex:" + d + ", pageSize:" + pageSize + " }",
		contentType : "application/json; charset=utf-8",
		dataType : "json"
	}).done(function (a) {
		$("#divList").empty();
		for (var b = a.d.Records, c = 0; c < b.length; c++)
			$("#divList").append('<div class="col-sm-4"><a style="font-size: 17px;" class="section-title" href="' + b[c].Url + '">' + b[c].Name + " (" + b[c].ProductCount + ")</a></div>");
		var d = parseInt($("#hdnActivePage").val()),
		e = a.d.TotalRecordCount,
		f = e % pageSize > 0 ? parseInt(e / pageSize) + 1 : e / pageSize;
		$("#hdnPageCount").val(f),
		$("#pRecordsCount").text("Listenen : " + e),
		addIndexButtons(d, f),
		checkButtons(d, f)
	})
}
var typeId = 2, pageSize = 48;
ShowPage(), $(document).ready(function () {
	ManufacturerList(),
	$(document).on("click", "#btnSearch", function () {
		$("#hdnActivePage").val(0),
		ManufacturerList()
	}),
	$(document).on("click", ".letter", function () {
		$("#hdnActivePage").val(0),
		$(".letter").attr("class", "btn btn-warning letter"),
		$(this).attr("class", "btn btn-danger active letter"),
		$("#hdnPage").val($(this).text()),
		ManufacturerList()
	}),
	$("#txtSearchText").keypress(function (a) {
		var b = a.keyCode || a.which;
		13 === b && ManufacturerList()
	})
}), $(document).ajaxComplete(function () {
	$(".aPageFirst").click(function () {
		$("#hdnActivePage").val(0),
		ManufacturerList()
	}),
	$(".aPageLast").click(function () {
		var a = parseInt($("#hdnPageCount").val());
		$("#hdnActivePage").val(a - 1),
		ManufacturerList()
	}),
	$(".aPageBack").click(function () {
		var a = parseInt($("#hdnActivePage").val());
		a -= 1,
		a < 0 && (a = 0),
		$("#hdnActivePage").val(a),
		ManufacturerList()
	}),
	$(".aPageNext").click(function () {
		var a = parseInt($("#hdnActivePage").val()),
		b = parseInt($("#hdnPageCount").val());
		a += 1,
		a > b - 1 && (a = b),
		$("#hdnActivePage").val(a),
		ManufacturerList()
	}),
	$(".aPageIndex").click(function () {
		var a = $(this).text();
		a -= 1,
		$("#hdnActivePage").val(a),
		ManufacturerList()
	})
});
