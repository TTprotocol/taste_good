$(document).ready(function () {
	let count = 0;

	// 배너 이미지 슬라이드
	setInterval(function () {
		if (count >= 2) count = 0;
		else count++;

		$("#banner").css({
			marginLeft: -100 * count + "%",
		});
	}, 3000);

	// recommand 마우스 오버시 추천 리스트 출력
	$(".team").mouseover(function () {
		$(this)
			.css({
				width: "100%",
				// height: "100%",
				display: "flex",
			})
			.siblings(".team")
			.css({
				display: "none",
			});

		$(this)
			.children("div")
			.css({
				width: "30%",
				// height: "100%",
			})
			.children(".profile")
			.css({
				width: "30%",
			});

		$(this).children(".list").css({
			display: "block",
		});
	});

	// recommand 마우스 아웃시 추천 리스트 숨김
	$(".team").mouseleave(function () {
		$(".team").css({
			width: "33.333%",
			height: "100%",
			display: "block",
		});

		$(this)
			.children("div")
			.css({
				width: "100%",
				height: "200%",
			})
			.children(".profile")
			.css({
				width: "35%",
				height: "30%",
			});

		$(this).children(".list").css({
			display: "none",
		});
	});
});

function writeReview() {
	let star = $("#star").val();
	let user = $("#id").val();
	let review = $("#review").val();
	let starCount = "";

	for (let i = 0; i < star; i++) {
		starCount += "&starf;";
	}

	if (user !== "" && review !== "") {
		$("#reviewList").append(
			"<tr><td>" +
				user +
				"</td><td>" +
				starCount +
				'</td><td colspan="2">' +
				review +
				"</td></tr>"
		);

		$("#id").val("");
		$("#review").val("");
	}
}
