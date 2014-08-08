$(document).ready(function(){
	var homePage = {

		init:function(){
			homePage.initStyling();
			homePage.initEvents();
		},

		initStyling: function (){
			homePage.renderProfile($("aside"));
			homePage.renderRepo($(".sectionone"));
			homePage.renderEvents($(".sectiontwo"));
		},

		initEvents: function(){
			$(".sectionone").tabs(function(mouseover){
				event.preventDefault();
			});
			$(".sectiontwo").tabs( function(mouseover){
				event.preventDefault();
			});

		},

		render: function(template, data, $target) {
			var tmpl =_.template(template, data);

			$target.append(tmpl);
		},

		renderProfile: function($target){
			homePage.render($("#namesTmpl").html(), profilemyArr, $target);
			homePage.render($("#followersTmpl").html(), profilemyArr, $target);
			homePage.render($("#starrTmpl").html(), profilemyArr, $target);
			homePage.render($("#firstdayTmpl").html(), profilemyArr, $target);
			homePage.render($("#organizeTmpl").html(), profilemyArr, $target);
		},

		renderRepo: function($target){
			homepage.render($("#repoTmpl").html(), repoArr, $target);
		},

		renderEvents: function($target){
			homepage.render($("#eventsTmpl").html(), eventsArr, $target);
		},

	 };

	 homePage.init();

	 });
	

