//selectLang
var  assets_img_path='assets/img/video/';
var assets_img_pdf_path='assets/img/pdf/';
var _homeM =document.getElementsByClassName("home")[0];
var _videoM=document.getElementsByClassName("video")[0];
var	_pdfM=document.getElementsByClassName("pdf")[0];	
var	_contactM=document.getElementsByClassName("contact")[0];
var	_head_title=document.getElementsByClassName("head-title-twoRow")[0];

///flags
var _set_Flag_text=document.getElementsByClassName("flag")[0];
//video sec titel
var _video_title=document.getElementsByClassName("video-title")[0];
var _video_sub_title= document.getElementsByClassName("video-sub-title")[0];
var _video_btn_all=document.getElementsByClassName("video-btn-all")[0];
//video sec menu 1///;
var _video_btn_sec=document.getElementsByClassName("video-btn-topic-one")[0];
//vidoe 1
var _video_btn_topic_one_hover_txt=document.getElementsByClassName("video-btn-topic-one-hover-text-one")[0];
var _video_img_one=document.getElementById("imgOne");;
var _video_external_link_one=document.getElementsByClassName("linkOne")[0];
//vidoe 2
var _video_btn_topic_two_hover_txt=document.getElementsByClassName("video-btn-topic-two-hover-text-two")[0];
var _video_img_two=document.getElementById("imgTwo");;
var _video_external_link_two=document.getElementsByClassName("linkTwo")[0];
//vidoe 3
var _video_btn_topic_three_hover_txt=document.getElementsByClassName("video-btn-topic-three-hover-text-three")[0];
var _video_img_three=document.getElementById("imgThree");;
var _video_external_link_three=document.getElementsByClassName("linkThree")[0];
/////////////////////
//End of sec one//
/////////////////////
//video sec menu 2///;
var _video_btnTwo_sec=document.getElementsByClassName("video-btn-topic-two")[0];
//menu 2 vidoe 1
var _video_btnTwo_topic_one_hover_txt=document.getElementsByClassName("video-btn-topic-two-hover-text-one")[0];
var _video_btnTwo_img_one=document.getElementById("btnTwoimgOne");;
var _video_btnTwo_external_link_one=document.getElementsByClassName("btnTwolinkOne")[0];

//menu 2 vidoe 2
var _video_btnTwo_topic_two_hover_txt=document.getElementsByClassName("video-btnTwo-topic-two-hover-text-two")[0];
var _video_btnTwo_img_two=document.getElementById("btnTwoimgTwo");;
var _video_btnTwo_external_link_two=document.getElementsByClassName("btnTwolinkTwo")[0];
//menu 2 video 3
var _video_btnThree_topic_three_hover_txt=document.getElementsByClassName("video-btnThree-topic-three-hover-text-three")[0];
var _video_btnThree_img_three=document.getElementById("btnThreeimgThree");;
var _video_btnThree_external_link_three=document.getElementsByClassName("btnThreelinkThree")[0];



/////////////////////
//End of sec tWO//
/////////////////////
//video sec menu 3///;
var _video_btnThree_sec=document.getElementsByClassName("video-btn-topic-three")[0];
//menu 2 vidoe 1
var _video_btnThree_topic_one_hover_txt=document.getElementsByClassName("video-btn-topic-three-hover-text-one")[0];
var _video_btnThree_img_one=document.getElementById("btnThreeimgOne");
var _video_btnThree_external_link_one=document.getElementsByClassName("btnThreelinkOne")[0];

//menu 3 vidoe popUp
var _video_btnThree_topic_two_hover_txt=document.getElementsByClassName("video-btn-topic-three-hover-text-two")[0];
var _video_btnThree_img_two=document.getElementById("btnThreeimgtwo");
var _video_btnThree_external_link_two=document.getElementsByClassName("btnThreelinktwo")[0];
/////////////////////
//End of sec Three//
/////////////////////
//video sec menu 4///;
var _video_btnFour_sec=document.getElementsByClassName("video-btnFour-topic-one")[0];
//vidoe 1
var _video_btnFour_topic_one_hover_txt=document.getElementsByClassName("video-btnFour-topic-one-hover-text-one")[0];
var _video_btnFour_img_one=document.getElementById("FourimgOne");
var _video_btnFour_external_link_one=document.getElementsByClassName("FourlinkOne")[0];
//vidoe 2
var _video_btnFour_topic_two_hover_txt=document.getElementsByClassName("video-btnFour-topic-two-hover-text-two")[0];
var _video_btnFour_img_two=document.getElementById("FourimgTwo");
var _video_btnFour_external_link_two=document.getElementsByClassName("FourlinkTwo")[0];
//vidoe 3
var _video_btnFour_topic_three_hover_txt=document.getElementsByClassName("video-btnFour-topic-three-hover-text-three")[0];
var _video_btnFour_img_three=document.getElementById("FourimgThree");
var _video_btnFour_external_link_three=document.getElementsByClassName("FourlinkThree")[0];

///////////////////////	
//////PDF SECTION/////;
////////sec 1///////////
var _pdf_title=document.getElementsByClassName("pdf-title")[0];
var _pdf_sub_title=document.getElementsByClassName("pdf-sub-title")[0];	
////////sec 2 pdf 1///////////
var _pdf_title_one=document.getElementsByClassName("pdf-title-one")[0];
var _pdf_sub_title_one=document.getElementsByClassName("pdf-sub-text-one")[0];	
var _pdf_img_one=document.getElementById("pdfImageOne");
var _pdf_url_one=document.getElementsByClassName("pdfurlOne")[0];
////////sec 2 pdf 2///////////
var _pdf_title_two=document.getElementsByClassName("pdf-title-two")[0];
var _pdf_sub_title_two=document.getElementsByClassName("pdf-sub-text-two")[0];	
var _pdf_img_two=document.getElementById("pdfImagetwo");
var _pdf_url_two=document.getElementsByClassName("pdfurltwo")[0];
////////sec 2 pdf 3///////////
var _pdf_title_three=document.getElementsByClassName("pdf-title-three")[0];
var _pdf_sub_title_three=document.getElementsByClassName("pdf-sub-text-three")[0];	
var _pdf_img_three=document.getElementById("pdfImagethree");
var _pdf_url_three=document.getElementsByClassName("pdfurlthree")[0];
/////////////////////////	
//////FOOTER SECTION/////
/////////////////////////
var footer_title_contact=document.getElementsByClassName("footer-title-contact")[0];
var footer_email=document.getElementsByClassName("footer-email")[0];

/////////////////////////	
//////Cpyright SECTION/////
/////////////////////////
var footer_copyright=document.getElementsByClassName("footer-opyright")[0];

function selectLang(){
	
	lod.conLang='en';
	localStorage.setItem("storeLang",lod.conLang);	
	lod.cashLang = localStorage.getItem('storeLang');
	////////////flag text/////////////////
	_set_Flag_text.innerHTML=tsafi.flag_text;	
	
	
    _homeM.innerHTML      =tsafi._home_menu_text;
	_videoM.innerHTML     =tsafi._video_menu_text;
	_pdfM.innerHTML       =tsafi._pdf_menu_text;	
	_contactM.innerHTML   =tsafi._contact_menu_text;
	_head_title.innerHTML =tsafi._head_title_text;	
	
    ////////////Video start/////////////////
	//video sec///";
	////////////Video start/////////////////
	_video_title.innerHTML=tsafi._video_title_txt;
	_video_sub_title.innerHTML =tsafi._video_sub_title_txt;
	_video_btn_all.innerHTML =tsafi._video_btn_all_txt;
	
	
	///////////////////////	
	//video sec menu 1///";
	//////////////////////
    _video_btn_sec.innerHTML = tsafi._video_btn_sec_txt;
	///////////////////////	
	//video block 1 1///";
	//////////////////////
	//_video_btn_topic_one_hover_txt.innerHTML = tsafi.video_btn_topic_one_hover_txt;
	//_video_img_one.src=assets_img_path+tsafi.video_imgOne;
	//_video_external_link_one.innerHTML= '<a href='+'"'+tsafi.video_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
		///////////////////////	
	//video block 1 2///";
	//////////////////////
	_video_btn_topic_two_hover_txt.innerHTML = tsafi.video_btn_topic_two_hover_txt;
	_video_img_two.src=assets_img_path+tsafi.video_imgTwo;
	_video_external_link_two.innerHTML= '<a href='+'"'+tsafi.video_two_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
	
	///////////////////////	
	//video block 1 3///";
	//////////////////////
	_video_btn_topic_three_hover_txt.innerHTML = tsafi.video_btn_topic_three_hover_txt;
	_video_img_three.src=assets_img_path+tsafi.video_imgThree;
	_video_external_link_three.innerHTML= '<a href='+'"'+tsafi.video_three_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
	
	
	///////////////////////	
	//video sec menu 2 Btn video one///";
	//////////////////////
    _video_btnTwo_sec.innerHTML = tsafi._video_btnTwo_secTwo_txt;
	_video_btnTwo_topic_one_hover_txt.innerHTML = tsafi.video_btnTwo_topic_one_hover_txt;
	_video_btnTwo_img_one.src=assets_img_path+tsafi.video_btnTwo_imgOne;
	_video_btnTwo_external_link_one.innerHTML= '<a href='+'"'+tsafi.video_btnTwo_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
   
    ///////////////////////	
	//video sec menu 2 Btn video two///";
	//////////////////////
	_video_btnTwo_topic_two_hover_txt.innerHTML = tsafi.video_btnTwo_topic_two_hover_txt;
	_video_btnTwo_img_two.src=assets_img_path+tsafi.video_btnTwo_imgTwo;
	_video_btnTwo_external_link_two.innerHTML= '<a href='+'"'+tsafi.video_btnTwo_two_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
     ///////////////////////	
	//video sec menu 2 Btn video Three///";
	//////////////////////
    _video_btnThree_topic_three_hover_txt.innerHTML = tsafi.video_btnThree_topic_three_hover_txt;
	_video_btnThree_img_three.src=assets_img_path+tsafi.video_btnThree_imgThree;
	_video_btnThree_external_link_three.innerHTML= '<a href='+'"'+tsafi.video_btnThree_three_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';

	///////////////////////	
	//video sec menu 3 Btn video one///";
	//////////////////////
    _video_btnThree_sec.innerHTML = tsafi._video_btnThree_secThree_txt;
	_video_btnThree_topic_one_hover_txt.innerHTML = tsafi.video_btnThree_topic_one_hover_txt;
	_video_btnThree_img_one.src=assets_img_path+tsafi.video_btnThree_imgOne;
	_video_btnThree_external_link_one.innerHTML= '<a href='+'"'+tsafi.video_btnThree_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
	

	_video_btnThree_topic_two_hover_txt.innerHTML = tsafi.video_btnThree_topic_two_hover_txt;
	_video_btnThree_img_two.src=assets_img_path+tsafi.video_btnThree_imgtwo;
	_video_btnThree_external_link_two.innerHTML= '<a href='+'"'+tsafi.video_btnThree_two_url+'"'+ 'class='+"video-popup"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
	 // <a href="assets/img/video/Summer_Forest.mp4" class='video-btn-topic-three-hover-text-two' class="video-popup"><i class="lni-film-play"></i>Rpop-up</a>
	
	
    // console.log(_video_btnThree_topic_one_hover_txt.innerHTML)
	

	
	///////////////////////	
	//video sec 4/////////";
	///////////////////////
    _video_btnFour_sec.innerHTML = tsafi._video_btnFour_secFour_txt;
	///////////////////////	
	//video block 4 1///";
	//////////////////////
	_video_btnFour_topic_one_hover_txt.innerHTML = tsafi.video_btnFour_topic_one_hover_txt;
	_video_btnFour_img_one.src=assets_img_path+tsafi.video_btnFour_imgOne;
	_video_btnFour_external_link_one.innerHTML= '<a href='+'"'+tsafi.video_btnFour_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
		///////////////////////	
	//video block 4 2///";
	//////////////////////
	_video_btnFour_topic_two_hover_txt.innerHTML = tsafi. video_btnFour_topic_two_hover_txt;
	_video_btnFour_img_two.src=assets_img_path+tsafi.video_btnFour_imgTwo;
	_video_btnFour_external_link_two.innerHTML= '<a href='+'"'+tsafi.video_btnFour_two_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
	
	///////////////////////	
	//video block 4 3///";
	//////////////////////
	_video_btnFour_topic_three_hover_txt.innerHTML = tsafi.video_btnFour_topic_three_hover_txt;
	_video_btnFour_img_three.src=assets_img_path+tsafi.video_btnFour_imgThree;
	_video_btnFour_external_link_three.innerHTML= '<a href='+'"'+tsafi.video_btnFour_three_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';

		
	////////////pdf start/////////////////
	//pdf sec///";
	////////////pdf start/////////////////
	///pdf-title//////
	_pdf_title.innerHTML = tsafi._pdf_title;
    _pdf_sub_title.innerHTML = tsafi._pdf_sub_title;
	///pdf-sec one//////
	_pdf_title_one.innerHTML=tsafi._pdf_title_one;
    _pdf_sub_title_one.innerHTML=tsafi._pdf_sub_text_one;
    _pdf_img_one.src=assets_img_pdf_path+tsafi._pdf_img_One;
    _pdf_url_one.innerHTML= '<a href='+'"'+tsafi._pdf_url_one+'"'+ 'target='+"_blank"+'><div class='+'"btn btn-common btn-rm"'+'>'+tsafi._pdf_download_one_txt+'</div></a>';

	///pdf-sec two//////
	_pdf_title_two.innerHTML=tsafi._pdf_title_two;
    _pdf_sub_title_two.innerHTML=tsafi._pdf_sub_text_two;
    _pdf_img_two.src=assets_img_pdf_path+tsafi._pdf_img_two;
    _pdf_url_two.innerHTML= '<a href='+'"'+tsafi._pdf_url_two+'"'+ 'target='+"_blank"+'><div class='+'"btn btn-common btn-rm"'+'>'+tsafi._pdf_download_two_txt+'</div></a>';
	///pdf-sec three//////
	_pdf_title_three.innerHTML=tsafi._pdf_title_three;
    _pdf_sub_title_three.innerHTML=tsafi._pdf_sub_text_three;
    _pdf_img_three.src=assets_img_pdf_path+tsafi._pdf_img_three;
    _pdf_url_three.innerHTML= '<a href='+'"'+tsafi._pdf_url_three+'"'+ 'target='+"_blank"+'><div class='+'"btn btn-common btn-rm"'+'>'+tsafi._pdf_download_three_txt+'</div></a>';

	/////////////////////////	
	///Footer Title//////
	/////////////////////////
	footer_title_contact.innerHTML=tsafi.footer_title_contact;
	footer_email.innerHTML='<p class='+'"footer-email"'+'><a href='+'"'+'mailto:'+tsafi.footer_email_to+'?subject='+tsafi.footer_email_subj+'"'+'>'+tsafi.footer_email_txt+'</a></p>';
	///copyright//////
	footer_copyright.innerHTML=tsafi.footer_copyright;

	
}

function selectLangPt(){
	
	lod.conLang='pt';
	localStorage.setItem("storeLang",lod.conLang);	
	lod.cashLang = localStorage.getItem('storeLang');
	////////////flag text/////////////////
	_set_Flag_text.innerHTML=_pt.flag_text;	

    _homeM.innerHTML      =_pt._home_menu_text;
	_videoM.innerHTML     =_pt._video_menu_text;
	_pdfM.innerHTML       =_pt._pdf_menu_text;	
	_contactM.innerHTML   =_pt._contact_menu_text;
	_head_title.innerHTML =_pt._head_title_text;	
	
    ////////////Video start/////////////////
	//video sec///";
	////////////Video start/////////////////
	_video_title.innerHTML=_pt._video_title_txt;
	_video_sub_title.innerHTML =_pt._video_sub_title_txt;
	_video_btn_all.innerHTML =_pt._video_btn_all_txt;
	
	
	///////////////////////	
	//video sec menu 1///";
	//////////////////////
    _video_btn_sec.innerHTML = _pt._video_btn_sec_txt;
	///////////////////////	
	//video block 1 1///";
	//////////////////////
	//_video_btn_topic_one_hover_txt.innerHTML = _pt.video_btn_topic_one_hover_txt;
//	_video_img_one.src=assets_img_path+_pt.video_imgOne;
//	_video_external_link_one.innerHTML= '<a href='+'"'+_pt.video_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
		///////////////////////	
	//video block 1 2///";
	//////////////////////
	_video_btn_topic_two_hover_txt.innerHTML = _pt.video_btn_topic_two_hover_txt;
	_video_img_two.src=assets_img_path+_pt.video_imgTwo;
	_video_external_link_two.innerHTML= '<a href='+'"'+_pt.video_two_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
	
	///////////////////////	
	//video block 1 3///";
	//////////////////////
	_video_btn_topic_three_hover_txt.innerHTML = _pt.video_btn_topic_three_hover_txt;
	_video_img_three.src=assets_img_path+_pt.video_imgThree;
	_video_external_link_three.innerHTML= '<a href='+'"'+_pt.video_three_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
	
	
	///////////////////////	
	//video sec menu 2 Btn video one///";
	//////////////////////
    _video_btnTwo_sec.innerHTML = _pt._video_btnTwo_secTwo_txt;
	_video_btnTwo_topic_one_hover_txt.innerHTML = _pt.video_btnTwo_topic_one_hover_txt;
	_video_btnTwo_img_one.src=assets_img_path+_pt.video_btnTwo_imgOne;
	_video_btnTwo_external_link_one.innerHTML= '<a href='+'"'+_pt.video_btnTwo_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
   
    ///////////////////////	
	//video sec menu 2 Btn video two///";
	//////////////////////
	_video_btnTwo_topic_two_hover_txt.innerHTML = _pt.video_btnTwo_topic_two_hover_txt;
	_video_btnTwo_img_two.src=assets_img_path+_pt.video_btnTwo_imgTwo;
	_video_btnTwo_external_link_two.innerHTML= '<a href='+'"'+_pt.video_btnTwo_two_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
     ///////////////////////	
	//video sec menu 2 Btn video Three///";
	//////////////////////
    _video_btnThree_topic_three_hover_txt.innerHTML = _pt.video_btnThree_topic_three_hover_txt;
	_video_btnThree_img_three.src=assets_img_path+_pt.video_btnThree_imgThree;
	_video_btnThree_external_link_three.innerHTML= '<a href='+'"'+_pt.video_btnThree_three_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';

	///////////////////////	
	//video sec menu 3 Btn video one///";
	//////////////////////
    _video_btnThree_sec.innerHTML = _pt._video_btnThree_secThree_txt;
	_video_btnThree_topic_one_hover_txt.innerHTML = _pt.video_btnThree_topic_one_hover_txt;
	_video_btnThree_img_one.src=assets_img_path+_pt.video_btnThree_imgOne;
	_video_btnThree_external_link_one.innerHTML= '<a href='+'"'+_pt.video_btnThree_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
	

	_video_btnThree_topic_two_hover_txt.innerHTML = _pt.video_btnThree_topic_two_hover_txt;
	_video_btnThree_img_two.src=assets_img_path+_pt.video_btnThree_imgtwo;
	_video_btnThree_external_link_two.innerHTML= '<a href='+'"'+_pt.video_btnThree_two_url+'"'+ 'class='+"video-popup"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
	 // <a href="assets/img/video/Summer_Forest.mp4" class='video-btn-topic-three-hover-text-two' class="video-popup"><i class="lni-film-play"></i>Rpop-up</a>
	
	
    // console.log(_video_btnThree_topic_one_hover_txt.innerHTML)
	

	
	///////////////////////	
	//video sec 4/////////";
	///////////////////////
    _video_btnFour_sec.innerHTML = _pt._video_btnFour_secFour_txt;
	///////////////////////	
	//video block 4 1///";
	//////////////////////
	_video_btnFour_topic_one_hover_txt.innerHTML = _pt.video_btnFour_topic_one_hover_txt;
	_video_btnFour_img_one.src=assets_img_path+_pt.video_btnFour_imgOne;
	_video_btnFour_external_link_one.innerHTML= '<a href='+'"'+_pt.video_btnFour_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
		///////////////////////	
	//video block 4 2///";
	//////////////////////
	_video_btnFour_topic_two_hover_txt.innerHTML = _pt.video_btnFour_topic_two_hover_txt;
	_video_btnFour_img_two.src=assets_img_path+_pt.video_btnFour_imgTwo;
	_video_btnFour_external_link_two.innerHTML= '<a href='+'"'+_pt.video_btnFour_two_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
	
	///////////////////////	
	//video block 4 3///";
	//////////////////////
	_video_btnFour_topic_three_hover_txt.innerHTML = _pt.video_btnFour_topic_three_hover_txt;
	_video_btnFour_img_three.src=assets_img_path+_pt.video_btnFour_imgThree;
	_video_btnFour_external_link_three.innerHTML= '<a href='+'"'+_pt.video_btnFour_three_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';

		
	////////////pdf start/////////////////
	//pdf sec///";
	////////////pdf start/////////////////
	///pdf-title//////
	_pdf_title.innerHTML = _pt._pdf_title;
    _pdf_sub_title.innerHTML = _pt._pdf_sub_title;
	///pdf-sec one//////
	_pdf_title_one.innerHTML=_pt._pdf_title_one;
    _pdf_sub_title_one.innerHTML=_pt._pdf_sub_text_one;
    _pdf_img_one.src=assets_img_pdf_path+_pt._pdf_img_One;
    _pdf_url_one.innerHTML= '<a href='+'"'+_pt._pdf_url_one+'"'+ 'target='+"_blank"+'><div class='+'"btn btn-common btn-rm"'+'>'+_pt._pdf_download_one_txt+'</div></a>';

	///pdf-sec two//////
	_pdf_title_two.innerHTML=_pt._pdf_title_two;
    _pdf_sub_title_two.innerHTML=_pt._pdf_sub_text_two;
    _pdf_img_two.src=assets_img_pdf_path+_pt._pdf_img_two;
    _pdf_url_two.innerHTML= '<a href='+'"'+_pt._pdf_url_two+'"'+ 'target='+"_blank"+'><div class='+'"btn btn-common btn-rm"'+'>'+_pt._pdf_download_two_txt+'</div></a>';
	///pdf-sec three//////
	_pdf_title_three.innerHTML=_pt._pdf_title_three;
    _pdf_sub_title_three.innerHTML=_pt._pdf_sub_text_three;
    _pdf_img_three.src=assets_img_pdf_path+_pt._pdf_img_three;
    _pdf_url_three.innerHTML= '<a href='+'"'+_pt._pdf_url_three+'"'+ 'target='+"_blank"+'><div class='+'"btn btn-common btn-rm"'+'>'+_pt._pdf_download_three_txt+'</div></a>';

	/////////////////////////	
	///Footer Title//////
	/////////////////////////
	footer_title_contact.innerHTML=_pt.footer_title_contact;
	footer_email.innerHTML='<p class='+'"footer-email"'+'><a href='+'"'+'mailto:'+_pt.footer_email_to+'?subject='+_pt.footer_email_subj+'"'+'>'+_pt.footer_email_txt+'</a></p>';
	///copyright//////
	footer_copyright.innerHTML=_pt.footer_copyright;

	
}
function selectLangSp(){
	lod.conLang='sp';
	localStorage.setItem("storeLang",lod.conLang);	
	lod.cashLang = localStorage.getItem('storeLang');
	////////////flag text on start/////////////////
	_set_Flag_text.innerHTML=_sp.flag_text;	
	
	
	console.log('selectLang + spanish');
    _homeM.innerHTML      =_sp._home_menu_text;
	_videoM.innerHTML     =_sp._video_menu_text;
	_pdfM.innerHTML       =_sp._pdf_menu_text;	
	_contactM.innerHTML   =_sp._contact_menu_text;
	_head_title.innerHTML =_sp._head_title_text;	
	console.log( _homeM.innerHTML+'zzzzzzzzzzzzzzzzzzzzz');
   
    ////////////Video start/////////////////
	//video sec///";
	////////////Video start/////////////////
	_video_title.innerHTML=_sp._video_title_txt;
	_video_sub_title.innerHTML =_sp._video_sub_title_txt;
	_video_btn_all.innerHTML =_sp._video_btn_all_txt;
	
	
	///////////////////////	
	//video sec menu 1///";
	//////////////////////
    _video_btn_sec.innerHTML = _sp._video_btn_sec_txt;
	///////////////////////	
	//video block 1 1///";
	//////////////////////
	_video_btn_topic_one_hover_txt.innerHTML = _sp.video_btn_topic_one_hover_txt;
	_video_img_one.src=assets_img_path+_sp.video_imgOne;
	_video_external_link_one.innerHTML= '<a href='+'"'+_sp.video_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-eye item-icon"'+'></i></a>';
		///////////////////////	
	//video block 1 2///";
	//////////////////////
	_video_btn_topic_two_hover_txt.innerHTML = _sp.video_btn_topic_two_hover_txt;
	_video_img_two.src=assets_img_path+_sp.video_imgTwo;
	_video_external_link_two.innerHTML= '<a href='+'"'+_sp.video_two_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-eye item-icon"'+'></i></a>';
	
	///////////////////////	
	//video block 1 3///";
	//////////////////////
	_video_btn_topic_three_hover_txt.innerHTML = _sp.video_btn_topic_three_hover_txt;
	_video_img_three.src=assets_img_path+_sp.video_imgThree;
	_video_external_link_three.innerHTML= '<a href='+'"'+_sp.video_three_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-eye item-icon"'+'></i></a>';
	
	
	///////////////////////	
	//video sec menu 2 Btn video one///";
	//////////////////////
    _video_btnTwo_sec.innerHTML = _sp._video_btnTwo_secTwo_txt;
	_video_btnTwo_topic_one_hover_txt.innerHTML = _sp.video_btnTwo_topic_one_hover_txt;
	_video_btnTwo_img_one.src=assets_img_path+_sp.video_btnTwo_imgOne;
	_video_btnTwo_external_link_one.innerHTML= '<a href='+'"'+_sp.video_btnTwo_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-eye item-icon"'+'></i></a>';
   
    ///////////////////////	
	//video sec menu 2 Btn video two///";
	//////////////////////
	_video_btnTwo_topic_two_hover_txt.innerHTML = _sp.video_btnTwo_topic_two_hover_txt;
	_video_btnTwo_img_two.src=assets_img_path+_sp.video_btnTwo_imgTwo;
	_video_btnTwo_external_link_two.innerHTML= '<a href='+'"'+_sp.video_btnTwo_two_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-eye item-icon"'+'></i></a>';
	
	 ///////////////////////	
	//video sec menu 2 Btn video Three///";
	//////////////////////
    _video_btnThree_topic_three_hover_txt.innerHTML = _sp.video_btnThree_topic_three_hover_txt;
	_video_btnThree_img_three.src=assets_img_path+_sp.video_btnThree_imgThree;
	_video_btnThree_external_link_three.innerHTML= '<a href='+'"'+_sp.video_btnThree_two_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-eye item-icon"'+'></i></a>';

	///////////////////////	
	//video sec menu 3 Btn video one///";
	//////////////////////
    _video_btnThree_sec.innerHTML = _sp._video_btnThree_secThree_txt;
	_video_btnThree_topic_one_hover_txt.innerHTML = _sp.video_btnThree_topic_one_hover_txt;
	_video_btnThree_img_one.src=assets_img_path+_sp. video_btnThree_imgOne;
	_video_btnThree_external_link_one.innerHTML= '<a href='+'"'+_sp.video_btnThree_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';	
	
		_video_btnThree_topic_two_hover_txt.innerHTML = _sp.video_btnThree_topic_two_hover_txt;
	_video_btnThree_img_two.src=assets_img_path+_sp.video_btnThree_imgtwo;
	_video_btnThree_external_link_two.innerHTML= '<a href='+'"'+_sp.video_btnThree_two_url+'"'+ 'class='+"video-popup"+'><i class='+'"lni-film-play item-icon"'+'></i></a>';
     console.log(_video_btnThree_external_link_two.innerHTML)
	

	
	///////////////////////	
	//video sec 4/////////";
	///////////////////////
    _video_btnFour_sec.innerHTML = _sp._video_btnFour_secFour_txt;
	///////////////////////	
	//video block 4 1///";
	//////////////////////
	_video_btnFour_topic_one_hover_txt.innerHTML = _sp.video_btnFour_topic_one_hover_txt;
	_video_btnFour_img_one.src=assets_img_path+_sp.video_btnFour_imgOne;
	_video_btnFour_external_link_one.innerHTML= '<a href='+'"'+_sp.video_btnFour_one_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-eye item-icon"'+'></i></a>';
		///////////////////////	
	//video block 4 2///";
	//////////////////////
	_video_btnFour_topic_two_hover_txt.innerHTML = _sp.video_btnFour_topic_two_hover_txt;
	_video_btnFour_img_two.src=assets_img_path+_sp.video_btnFour_imgTwo;
	_video_btnFour_external_link_two.innerHTML= '<a href='+'"'+_sp.video_btnFour_two_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-eye item-icon"'+'></i></a>';
	
	///////////////////////	
	//video block 4 3///";
	//////////////////////
	_video_btnFour_topic_three_hover_txt.innerHTML = _sp.video_btnFour_topic_three_hover_txt;
	_video_btnFour_img_three.src=assets_img_path+_sp.video_btnFour_imgThree;
	_video_btnFour_external_link_three.innerHTML= '<a href='+'"'+_sp.video_btnFour_three_url+'"'+ 'target='+"_blank"+'><i class='+'"lni-eye item-icon"'+'></i></a>';

		
	////////////pdf start/////////////////
	//pdf sec///";
	////////////pdf start/////////////////
	///pdf-title//////
	_pdf_title.innerHTML = _sp._pdf_title;
    _pdf_sub_title.innerHTML = _sp._pdf_sub_title;
	///pdf-sec one//////
	_pdf_title_one.innerHTML=_sp._pdf_title_one;
    _pdf_sub_title_one.innerHTML=_sp._pdf_sub_text_one;
    _pdf_img_one.src=assets_img_pdf_path+_sp._pdf_img_One;
    _pdf_url_one.innerHTML= '<a href='+'"'+_sp._pdf_url_one+'"'+ 'target='+"_blank"+'><div class='+'"btn btn-common btn-rm"'+'>'+_sp._pdf_download_one_txt+'</div></a>';

	///pdf-sec two//////
	_pdf_title_two.innerHTML=_sp._pdf_title_two;
    _pdf_sub_title_two.innerHTML=_sp._pdf_sub_text_two;
    _pdf_img_two.src=assets_img_pdf_path+_sp._pdf_img_two;
    _pdf_url_two.innerHTML= '<a href='+'"'+_sp._pdf_url_two+'"'+ 'target='+"_blank"+'><div class='+'"btn btn-common btn-rm"'+'>'+_sp._pdf_download_two_txt+'</div></a>';
	///pdf-sec three//////
	_pdf_title_three.innerHTML=_sp._pdf_title_three;
    _pdf_sub_title_three.innerHTML=_sp._pdf_sub_text_three;
    _pdf_img_three.src=assets_img_pdf_path+_sp._pdf_img_three;
    _pdf_url_three.innerHTML= '<a href='+'"'+_sp._pdf_url_three+'"'+ 'target='+"_blank"+'><div class='+'"btn btn-common btn-rm"'+'>'+_sp._pdf_download_three_txt+'</div></a>';

	/////////////////////////	
	///Footer Title//////
	/////////////////////////
	footer_title_contact.innerHTML=_sp.footer_title_contact;
	footer_email.innerHTML='<p class='+'"footer-email"'+'><a href='+'"'+'mailto:'+_sp.footer_email_to+'?subject='+_sp.footer_email_subj+'"'+'>'+_sp.footer_email_txt+'</a></p>';
	///copyright//////
	footer_copyright.innerHTML=_sp.footer_copyright;
}