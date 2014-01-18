if($('div.interiorContent').text().search('No items found.') > -1 ){
	$('#ageFilter').hide();
	$('.webApp_Tournaments').hide();
	}

	$("#ageFilter li").click(  function(){ 
		filter = $(this).data("agefilter").replace('/', '\\/');
		
		$("#ageFilter li.selected").removeClass("selected");
		$(this).addClass("selected");

		$("table.sortable" + " " + "tbody" + " " + "tr").hide();
		if ( $(this).data("agefilter") == "All"){
			$("table.sortable" + " " + "tbody" + " " + "tr").show()
			}
		else if(( $(this).data("agefilter") == "Young")){
			$("table.sortable tbody tr.9\\/u, table.sortable tbody tr.8\\/u, table.sortable tbody tr.7\\/u").show()
			}
		else { $("table.sortable tbody tr." + filter).show();
			}
		});

	$("table.webApp_Tournaments tbody tr").click(function(){
    	 window.location=$(this).find("td.tournamentName a").attr("href"); 
     	return false;
		});
		