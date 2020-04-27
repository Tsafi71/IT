 var classes = ["lang-en", "lang-sp", "lang-pt"]; 
//var animaTxt=(".home,.video,.pdf,.contact,.head-title-twoRow,.flag_text,.video-title,.video-sub-title,.video-btn-all,.video-btn-topic-one,.video-btn-topic-one-hover-text-one,.video-btn-topic-two-hover-text-two,.video-btn-topic-three-hover-text-three,.video-btn-topic-two,.video-btn-topic-two-hover-text-one,.video-btnTwo-topic-two-hover-text-two,.video-btnThree-topic-three-hover-text-three,.video-btn-topic-three,.video-btn-topic-three-hover-text-one,.video-btn-topic-three-hover-text-two,.video-btnFour-topic-one,.video-btnFour-topic-one-hover-text-one,.video-btnFour-topic-two-hover-text-two,.video-btnFour-topic-three-hover-text-three,.pdf-title,.pdf-sub-title,.pdf-title-one,.pdf-sub-text-one,.pdf-title-two,.pdf-sub-text-two,.pdf-title-three,.pdf-sub-text-three,.ooter-title-contact,.footer-email,.footer-opyright,.footer-title-contact");
 //var disArr = ["home", "video", "pdf","contact","head-title-twoRow","flag_text","video-title","video-sub-title","video-btn-all","video-btn-topic-one"];

//var flag_select=document.getElementsByClassName("lang-flag")[0];
//flag_select.innerHTML= '<label for='+'"toggle"' +'class='+'"lang-flag lang-en"'+'>';


if(lod.cashLang=='pt'){
	
   console.log(lod.cashLang+'pt');
	 $('.lang-flag').addClass("lang-pt");
	 $(".lang-pt").addClass("selected")
	//console.log(testo)
   }else if(lod.cashLang=='sp'){
	  $('.lang-flag').addClass("lang-sp");
	 $(".lang-sp").addClass("selected")
		 console.log(lod.cashLang+'sp')	
	}else{
	 console.log(lod.cashLang+'if');
	 $('.lang-flag').addClass("lang-en");
	 $(".lang-en").addClass("selected")	
	}
//setflag();

$(".lang-flag").click(function(){ 

	$(".language-dropdown").toggleClass("open");});





  $("ul.lang-list li").click(function(){
	// console.log("click flag")
    $("ul.lang-list li").removeClass("selected");
    $(this).addClass("selected");
	  
    if($(this).hasClass('lang-en')){
      $(".language-dropdown").find(".lang-flag").addClass("lang-en").removeClass("lang-pt").removeClass("lang-sp");
   //  $("#lang_selected").html("<div class='flag'"+'>'+tsafi.flag_text+'</div>');//tsafi.flag_text
		
    }else if($(this).hasClass('lang-sp')){
      $(".language-dropdown").find(".lang-flag").addClass("lang-sp").removeClass("lang-pt").removeClass("lang-en");
    // $(".lang-pt").html("<span class='flag'"+'>'+_pt.flag_text+'</span>');//tsafi.flag_text
	
		
    }else if($(this).hasClass('lang-pt')){
      $(".language-dropdown").find(".lang-flag").addClass("lang-pt").removeClass("lang-en").removeClass("lang-sp");
      // $("#lang_selected").html("<div class='flag'"+'>'+_pt.flag_text+'</div>');//tsafi.flag_text
		//$(".lang-pt").html("<span class='flag'"+'>'+_pt.flag_text+'</span>');
		
    }
    $(".language-dropdown").removeClass("open");
	  
	 var self = $(this);
    for(var i =0, ii = classes.length;i<ii;i++)
    {
        var className = classes[i];
        if(self.hasClass(className))
        {
			 localStorage.removeItem('storeLang');
            switch(className)
            {
                case 'lang-en':

				selectLang();

                break;
                case 'lang-sp':

                selectLangSp()
                break;      
                case 'lang-pt':
				selectLangPt(); 
                    
                break;     
               
            }

        }
    }  
	  
	  
	  
 // $(animaTx).delay( 100 ).fadeIn( 400 );	  
	  
	  
	  
  });///end $("ul.lang-list li").click


function setflag(){

	
}


