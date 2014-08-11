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


			$(".one").click(function(event){
          event.preventDefault();
          $(".sectiontwo").addClass("sectiontwohidden");
          $(".sectionone").removeClass("sectiontwohidden");
      });
         

          $(".two").click(function(event){
          event.preventDefault();
          $(".sectiontwo").removeClass("sectiontwohidden");
          $(".sectionone").addClass("sectiontwohidden");

      });

		},

		render: function(template, data, $target) {
			var tmpl = _.template(template, data);

			$target.append(tmpl);
		},

		renderProfile: function($target){
			homePage.render($("#namesTmpl").html(), profilemyArr, $target);
			
		},

		renderRepo: function($target){
			homePage.render($("#repoTmpl").html(), repoArr, $target);
		},

		renderEvents: function($target){
			homePage.render($("#eventsTmpl").html(), eventsArr, $target);
		},

		renderPictures: function(){
			homePage.render($("#namesTmpl").html(), profilemyArr, $(".pictures"));
		}

	 };

	 homePage.init();

	 });
	

