function ShowHideLi(a) {
	$("." + a).toggle("fast")
}
function ProductList(a, b, c, d, e, f, g) {
	function o(a, b) {
		0 === b && $(".ulPaging").empty();
		var c = a - 3 < 0 ? 0 : a - 2,
		d = a + 3 > b ? b : a + 3;
		$(".ulPaging").empty(),
		$(".ulPaging").append('<li><a class="aPageFirst paging">İlk</a></li><li><a class="aPageBack paging"><<</a></li>');
		for (var e = c; e < d; e++)
			e === a ? $(".ulPaging").append('<li class="paging activeli"><a>' + (e + 1) + "</a></li>") : $(".ulPaging").append('<li class="paging"><a class="aPageIndex">' + (e + 1) + "</a></li>");
		$(".ulPaging").append('<li><a class="aPageNext paging">>></a></li><li><a class="aPageLast paging">Son</a></li>')
	}
	function p(a, b) {
		0 === b && $(".ulPaging").empty(),
		a === b - 1 ? ($(".aPageNext").addClass("not-active"), $(".aPageLast").addClass("not-active")) : ($(".aPageNext").removeClass("not-active"), $(".aPageLast").removeClass("not-active")),
		0 === a ? ($(".aPageBack").addClass("not-active"), $(".aPageFirst").addClass("not-active")) : ($(".aPageBack").removeClass("not-active"), $(".aPageFirst").removeClass("not-active"))
	}
	function q() {
		var a = 12,
		b = parseInt($("#hdnActivePage").val()) * a,
		c = $("#slcOrderBy").val();
		i = $("#hdnManufacturers").val(),
		j = $("#hdnEmployees").val(),
		k = $("#hdnCategories").val(),
		l = $("#hdnPriceRanges").val(),
		$.ajax({
			type : "POST",
			url : "/WebMethods.aspx/ListProductByFilterByPagingForUserInterface",
			data : "{filter:'" + h + "', manufacturerId:'" + i + "', employeeId:'" + j + "', categoryId: '" + k + "', productPriceRangeId:'" + l + "', productGroupId: " + m + ", campaignId:" + n + ", startIndex:" + b + ", pageSize: " + a + ", orderBy: '" + c + "'  }",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			success : function (a) {
				if ("OK" !== a.d.Result)
					toastr.error("Hata oluştu: " + a.d.Message, {
						closeButton : !1,
						debug : !1,
						positionClass : "toast-bottom-center",
						onclick : null,
						showDuration : "300",
						hideDuration : "1000",
						timeOut : "5000",
						extendedTimeOut : "1000",
						showEasing : "swing",
						hideEasing : "linear",
						showMethod : "fadeIn",
						hideMethod : "fadeOut"
					});
				else {
					var b = a.d.Records,
					c = a.d.TotalRecordCount;
					$("#divProducts").empty(),
					0 === c ? $("#pRecordsCount").text("Ürün bulunamadı.") : $("#pRecordsCount").text("Listelen ürün : " + c);
					for (var d = 0; d < b.length; ++d)
						AppendHtmlProductInner('<div class="h-product col-xs-6 col-sm-4 col-md-4 col-lg-3">', "divProducts", b[d])
				}
			}
		}).done(function (a) {
			var b = a.d.TotalRecordCount;
			0 === b ? ($("#divProducts").hide(), $("#divProductsEmpty").show(), $("#divFilteringDescription").text("Uygun sonuç bulunamadı.")) : ($("#divProductsEmpty").hide(), $("#divProducts").show(), $("#divFilteringDescription").text("'" + $("#txtSearch").val() + "' Arama Sonuçları"), "" !== g && $("#divFilteringDescription").text("'" + g + "'"));
			var c = b % 12 > 0 ? parseInt(b / 12) + 1 : b / 12;
			$("#hdnPageCount").val(c);
			var d = parseInt($("#hdnActivePage").val());
			o(d, c),
			p(d, c),
			$(".aPageFirst").click(function () {
				$("#hdnActivePage").val(0),
				q()
			}),
			$(".aPageLast").click(function () {
				var a = parseInt($("#hdnPageCount").val());
				$("#hdnActivePage").val(a - 1),
				q()
			}),
			$(".aPageBack").click(function () {
				var a = parseInt($("#hdnActivePage").val());
				a -= 1,
				a < 0 && (a = 0),
				$("#hdnActivePage").val(a),
				q()
			}),
			$(".aPageNext").click(function () {
				var a = parseInt($("#hdnActivePage").val()),
				b = parseInt($("#hdnPageCount").val());
				a += 1,
				a > b - 1 && (a = b),
				$("#hdnActivePage").val(a),
				q()
			}),
			$(".aPageIndex").click(function () {
				var a = $(this).text();
				a -= 1,
				$("#hdnActivePage").val(a),
				q()
			}),
			$(window).width() < 600 ? $("html, body").animate({
				scrollTop : 390
			}, "slow") : $("html, body").animate({
				scrollTop : 0
			}, "slow"),
            ShowPage(),
			$(".lazyload").lazy({
				effect : "fadeIn",
				effectTime : 500,
				threshold : 0,
				bind : "event",
				afterLoad : function (a) {
					"img-wrap" === a.parent().prop("className") && a.parent().addClass("img-wrap-visible")
				}
			})
		})
	}
	function r(a) {
		i = $("#hdnManufacturers").val(),
		j = $("#hdnEmployees").val(),
		k = $("#hdnCategories").val(),
		l = $("#hdnPriceRanges").val(),
		$.ajax({
			type : "POST",
			url : "/WebMethods.aspx/ListManufacturerByTypeIdByProductFilter",
			data : "{typeId:" + a.ManufacturerTypeId + ", manufacturerId:'" + i + "', employeeId:'" + j + "', categoryId: '" + k + "', productGroupId:" + m + " , campaignId:" + n + ", filter:'" + h + "'}",
			contentType : "application/json; charset=utf-8",
			dataType : "json"
		}).done(function (b) {
			var c = b.d;
			if (c.length > 0) {
				for (var d = c.length > 10 ? 10 : c.length, e = 0; e < d; e++)
					$("#ulManufacturersType" + a.ManufacturerTypeId).append('<li><div style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"><input type="checkbox" class="regular-checkbox chcManufacturers" id="checkboxManufacturer' + c[e].ManufacturerId + '"' + (1 === d ? "checked='true'" : "") + '/><label for="checkboxManufacturer' + c[e].ManufacturerId + '"></label><label for="checkboxManufacturer' + c[e].ManufacturerId + '">' + c[e].Name + '</label></div><div style="float: right; margin-right: 5px; margin-top: 7px"><span class="">(' + c[e].ProductCount + ")</span></div></li>");
				if (10 === d) {
					for (var f = d; f < c.length; f++)
						$("#ulManufacturersType" + a.ManufacturerTypeId).append('<li class="manufacturerType' + a.ManufacturerTypeId + '" style="display:none;"><div style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"><input type="checkbox" class="regular-checkbox chcManufacturers" id="checkboxManufacturer' + c[f].ManufacturerId + '" /><label for="checkboxManufacturer' + c[f].ManufacturerId + '"></label><label for="checkboxManufacturer' + c[f].ManufacturerId + '">' + c[f].Name + '</label></div><div style="float: right; margin-right: 5px; margin-top: 7px"><span class="">(' + c[f].ProductCount + ")</span></div></li>");
					$("#ulManufacturersType" + a.ManufacturerTypeId).append('<li style="margin-top: 5px"><a  onclick="ShowHideLi(\'manufacturerType' + a.ManufacturerTypeId + '\');" style="color: #febf00; font-weight: bold; font-size: 15px; margin-left: 18px; cursor:pointer;">Devamı </a></li>')
				}
			} else
				$("#divManufacturersType" + a.ManufacturerTypeId).remove();
			$(".chcManufacturers").click(function () {
				var a = $(".chcManufacturers:checkbox:checked").map(function () {
						return this.id.replace("checkboxManufacturer", "")
					}).get();
				$("#hdnManufacturers").val(("(" + a + ")").replace("()", "")),
				$("#hdnActivePage").val(0),
				q()
			}),
			$(window).width() < 600 ? $("#ulManufacturersType" + a.ManufacturerTypeId).collapse("hide") : $("'ulManufacturersType" + a.ManufacturerTypeId).collapse("show")
		})
	}
	function s(a) {
		i = $("#hdnManufacturers").val(),
		j = $("#hdnEmployees").val(),
		k = $("#hdnCategories").val(),
		l = $("#hdnPriceRanges").val(),
		$.ajax({
			type : "POST",
			url : "/WebMethods.aspx/ListEmployeeByTypeIdByProductFilter",
			data : "{typeId:" + a.EmployeeTypeId + ", manufacturerId:'" + i + "', employeeId:'" + j + "', categoryId: '" + k + "', productGroupId:" + m + " , campaignId:" + n + ", filter:'" + h + "'}",
			contentType : "application/json; charset=utf-8",
			dataType : "json"
		}).done(function (b) {
			var c = b.d;
			if (c.length > 0) {
				for (var d = c.length > 10 ? 10 : c.length, e = 0; e < d; e++)
					$("#ulEmployeesType" + a.EmployeeTypeId).append('<li><div style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"><input type="checkbox" class="regular-checkbox chcEmployees' + a.EmployeeTypeId + '" id="checkboxEmployee' + a.EmployeeTypeId + "-" + c[e].EmployeeId + '" ' + (1 === d ? "checked='true'" : "") + '/><label for="checkboxEmployee' + a.EmployeeTypeId + "-" + c[e].EmployeeId + '"></label><label for="checkboxEmployee' + a.EmployeeTypeId + "-" + c[e].EmployeeId + '">' + c[e].NameSurname + '</label></div><div style="float: right; margin-right: 5px; margin-top: 7px"><span class="">(' + c[e].ProductCount + ")</span></div></li>");
				if (10 === d) {
					for (var f = d; f < c.length; f++)
						$("#ulEmployeesType" + a.EmployeeTypeId).append('<li class="employeeType' + a.EmployeeTypeId + '" style="display:none;"><div style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"><input type="checkbox" class="regular-checkbox chcEmployees' + a.EmployeeTypeId + '" id="checkboxEmployee' + a.EmployeeTypeId + "-" + c[f].EmployeeId + '" /><label for="checkboxEmployee' + a.EmployeeTypeId + "-" + c[f].EmployeeId + '"></label><label for="checkboxEmployee' + a.EmployeeTypeId + "-" + c[f].EmployeeId + '">' + c[f].NameSurname + '</label></div><div style="float: right; margin-right: 5px; margin-top: 7px"><span class="">(' + c[f].ProductCount + ")</span></div></li>");
					$("#ulEmployeesType" + a.EmployeeTypeId).append('<li style="margin-top: 5px"><a onclick="ShowHideLi(\'employeeType' + a.EmployeeTypeId + '\');" style="color: #febf00; font-weight: bold; font-size: 15px; margin-left: 18px; cursor:pointer;">Devamı </a></li>')
				}
			} else
				$("#divEmployeesType" + a.EmployeeTypeId).remove();
			$(".chcEmployees" + a.EmployeeTypeId).click(function () {
				var b = $(".chcEmployees" + a.EmployeeTypeId + ":checkbox:checked").map(function () {
						return this.id.replace("checkboxEmployee" + a.EmployeeTypeId + "-", "")
					}).get(),
				c = a.EmployeeTypeId + ":(" + b + ")";
				c = c.replace(a.EmployeeTypeId + ":()", ""),
				$("#hdnEmployees").val(c),
				q()
			}),
			$(window).width() < 600 ? $("#ulEmployeesType" + a.EmployeeTypeId).collapse("hide") : $("#ulEmployeesType" + a.EmployeeTypeId).collapse("show")
		})
	}
	function t() {
		i = $("#hdnManufacturers").val(),
		j = $("#hdnEmployees").val(),
		k = $("#hdnCategories").val(),
		l = $("#hdnPriceRanges").val(),
		$.ajax({
			type : "POST",
			url : "/WebMethods.aspx/ListPriceRangeByProductFilter",
			data : "{filter:'" + h + "', manufacturerId:'" + i + "', employeeId:'" + j + "', categoryId: '" + k + "',  productGroupId:" + m + ", campaignId:" + n + "}",
			contentType : "application/json; charset=utf-8",
			dataType : "json"
		}).done(function (a) {
			var b = a.d;
			if (b.length > 0) {
				$("#divFilter").append('<div id="divPriceRanges" class="filtresag"><div class="titlebck" data-toggle="collapse" data-target="#ulPriceRanges">Fiyat Filtrele</div><ul id="ulPriceRanges" class="aramalist collapse in"></ul></div>');
				for (var c = 0; c < b.length; c++)
					$("#ulPriceRanges").append('<li><div style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"><input type="checkbox" class="regular-checkbox chcPriceRanges" id="checkboxPriceRange' + b[c].ProductPriceRangeId + '" /><label for="checkboxPriceRange' + b[c].ProductPriceRangeId + '"></label><label for="checkboxPriceRange' + b[c].ProductPriceRangeId + '">' + b[c].Description + '</label></div><div style="float: right; margin-right: 5px; margin-top: 7px"><span class="">(' + b[c].ProductCount + ")</span></div></li>")
			} else
				$("#divPriceRanges").remove();
			$(".chcPriceRanges").click(function () {
				var a = $(".chcPriceRanges:checkbox:checked").map(function () {
						return this.id.replace("checkboxPriceRange", "")
					}).get();
				$("#hdnPriceRanges").val("(" + a + ")"),
				$("#hdnPriceRanges").val($("#hdnPriceRanges").val().replace("()", "")),
				q()
			}),
			$(window).width() < 600 ? $("#ulPriceRanges").collapse("hide") : $("#ulPriceRanges").collapse("show")
		})
	}
	function u() {
		i = $("#hdnManufacturers").val(),
		j = $("#hdnEmployees").val(),
		k = $("#hdnCategories").val(),
		l = $("#hdnPriceRanges").val(),
		$.ajax({
			type : "POST",
			url : "/WebMethods.aspx/ListCategoryByProductFilter",
			data : "{filter:'" + h + "', manufacturerId:'" + i + "', employeeId:'" + j + "', categoryId: '" + k + "', productGroupId:" + m + " , campaignId:" + n + "}",
			contentType : "application/json; charset=utf-8",
			dataType : "json"
		}).done(function (a) {
			var b = a.d;
			if (b.length > 0) {
				$("#divFilter").append('<div id="divCategories" class="filtresag"><div class="titlebck" data-toggle="collapse" data-target="#ulCategories">Kategori Filtrele</div><ul id="ulCategories" class="aramalist collapse in"></ul></div>');
				for (var c = b.length > 10 ? 10 : b.length, d = 0; d < c; d++)
					$("#ulCategories").append('<li><div style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"><input type="checkbox" class="regular-checkbox chcCategories" id="checkboxCategory' + b[d].CategoryId + '"' + (1 === c ? "checked='true'" : "") + ' /><label for="checkboxCategory' + b[d].CategoryId + '"></label><label for="checkboxCategory' + b[d].CategoryId + '">' + b[d].Name + '</label></div><div style="float: right; margin-right: 5px; margin-top: 7px"><span class="">(' + b[d].ProductCount + ")</span></div></li>");
				if (10 === c) {
					for (var e = c; e < b.length; e++)
						$("#ulCategories").append('<li class="category" style="display:none;"><div style="float: left; width: 200px; height: 25px; padding-left: 3px; margin-left: -2px; overflow: hidden;"><input type="checkbox" class="regular-checkbox chcCategories" id="checkboxCategory' + b[e].CategoryId + '" /><label for="checkboxCategory' + b[e].CategoryId + '"></label><label for="checkboxCategory' + b[e].CategoryId + '">' + b[e].Name + '</label></div><div style="float: right; margin-right: 5px; margin-top: 7px"><span class="">(' + b[e].ProductCount + ")</span></div></li>");
					$("#ulCategories").append('<li style="margin-top: 5px"><a  onclick="ShowHideLi(\'category\');" style="color: #febf00; font-weight: bold; font-size: 15px; margin-left: 18px; cursor:pointer;">Devamı </a></li>')
				}
			} else
				$("#divCategories").remove();
			$(".chcCategories").click(function () {
				var a = $(".chcCategories:checkbox:checked").map(function () {
						return this.id.replace("checkboxCategory", "")
					}).get();
				$("#hdnCategories").val("(" + a + ")"),
				$("#hdnCategories").val($("#hdnCategories").val().replace("()", "")),
				q()
			}),
			t(),
			$(window).width() < 600 ? $("#ulCategories").collapse("hide") : $("#ulCategories").collapse("show")
		})
	}
	function v() {
		$.ajax({
			type : "POST",
			url : "/WebMethods.aspx/ListEmployeeTypeByIsActiveByFilter",
			contentType : "application/json; charset=utf-8",
			dataType : "json",
			success : function (a) {
				var b = a.d;
				if (b.length > 0)
					for (var c = 0; c < b.length; c++) {
						var d = b[c];
						$("#divFilter").append('<div id="divEmployeesType' + d.EmployeeTypeId + '" class="filtresag"><div class="titlebck" data-toggle="collapse" data-target="#ulEmployeesType' + d.EmployeeTypeId + '">' + d.Name + ' Filtrele</div><ul id="ulEmployeesType' + d.EmployeeTypeId + '" class="aramalist collapse in"></ul></div>')
					}
			}
		}).done(function (a) {
			var b = a.d;
			if (b.length > 0)
				for (var c = 0; c < b.length; c++)
					$("#divEmployees").append('<input type="hidden" id="hdnEmployeeType' + b[c] + '" value="" />'), s(b[c]);
			u()
		})
	}
	var h = getParameterByName("filter");
	$("#txtSearch").val(h);

    h = h.replace("'", "\\\'");
	var i = "";
	a > 0 && $("#hdnManufacturers").val("(" + a + ")"),
	i = $("#hdnManufacturers").val();
	var j = "";
	c > 0 && $("#hdnEmployees").val("" + b + ":(" + c + ")"),
	j = $("#hdnEmployees").val();
	var k = "";
	d > 0 && $("#hdnCategories").val("(" + d + ")"),
	k = $("#hdnCategories").val();
	var l = $("#hdnPriceRanges").val(),
	m = e,
	n = f;
	$.ajax({
		type : "POST",
		url : "/WebMethods.aspx/ListManufacturerTypeByIsActive",
		contentType : "application/json; charset=utf-8",
		dataType : "json",
		success : function (a) {
			var b = a.d;
			if (b.length > 0)
				for (var c = 0; c < b.length; c++) {
					var d = b[c];
					$("#divFilter").append('<div id="divManufacturersType' + d.ManufacturerTypeId + '" class="filtresag"><div data-toggle="collapse" data-target="#ulManufacturersType' + d.ManufacturerTypeId + '" class="titlebck">' + d.Name + ' Filtrele</div><ul id="ulManufacturersType' + d.ManufacturerTypeId + '" class="aramalist collapse in"></ul></div>')
				}
		}
	}).done(function (a) {
		var b = a.d;
		if (b.length > 0)
			for (var c = 0; c < b.length; c++)
				r(b[c]);
		v()
	}),
	$(document).ready(function () {
		q()
	}),
	
	$("#slcOrderBy").change(function () {
		$("#hdnActivePage").val(0),
		q()
	})
}
