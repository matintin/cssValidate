
$(function(){

	$("#income").mask('000,000,000,000,000.00', {reverse: true});
	// $("#dob").mask('AB/CD/EFGH', {'translation': {
 //                                        A: {pattern: /[0-3]/,
 //                                        if(A = 0){B:{pattern: /[1-9]/}else{B:{pattern: /[0-9]/}}
 //                                        },
 //                                        C: {pattern: /[0-1]/}, 
 //                                        D: {if(C = 1) {pattern: /[0-9]/}else {pattern: /[1-9]/}}, 
 //                                        E: {pattern: /[0-9]/}, 
 //                                        F: {pattern: /[0-9]/},  
 //                                        G: {pattern: /[0-9]/},  
 //                                        H: {pattern: /[0-9]/}
 //                                      }
 //                                });
	//json format
	$("#signup").validate({

		rules: {

			username: {
				required: true
			},
			password: {
				required: true,
				minlength: 5
			},
			email: {
				required: true,
				email: true
			},
			other: {
				required: {
					depends: function(){
						return $("#ethnicity-other").is(":checked");
					}
				}

			},
			dob: {
				required: true

			}
		}, //rules
		messages: {

			email: {
				required: "Bro! email please",
				email: "Common Bro! wrong format"
			},
			dob: {
				required: "Please fill in",
				dob: "Please type number"
			}
		}, //messages
		highlight: function(el,errorClass){

			$(el).addClass("animated shake");
			$(el).one("animationend",function(){
				$(this).removeClass();
			});
		},  //highlight
 		
 		errorContainer: ".pure-control-group",
 		errorLabelContainer: "pure-control-group label",
 		wrapper: "li", deburg:true,
 		submitHandler: function() {alert("Submitted!!")},

 		showErrors: function(errorMap, errorList) {
    	$(".pure-control-group>li>label.error").addClass("animated bounce");
    	$(".pure-control-group>li>label.error").one("animationend",function(){
    		$(this).removeClass("animated bounce");
    	});

    	this.defaultShowErrors();
  }
 	});

});