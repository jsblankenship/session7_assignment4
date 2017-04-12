// JavaScript Document

function iNeedParameter(outer) {
			   if (outer && (typeof outer == "function")) {
				  outer();   
			   }
			}

			//this calls iNeedParameter and sends the other function to it
			iNeedParameter(function(){
			  console.log("Hello World From Inner Function");
			}); 