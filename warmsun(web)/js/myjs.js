$(function(){
	// ************************administrator
	$("#group_activity").hide();
	$("#group_house_service").hide();
	$("#group_have_activity").hide();
	$("#activity").click(function(){
			$("#group_policy").hide();
			$("#group_have_activity").hide();
			$("#group_house_service").hide();
			$("#group_activity").show();
			$("#activity").addClass("active");
			$("#policy").removeClass("active");
			$("#house_service").removeClass("active");
			$("#have_activity").removeClass("active");
	})
	$("#policy").click(function(){
			$("#group_have_activity").hide();
			$("#group_activity").hide();
			$("#group_house_service").hide();
			$("#group_policy").show();
			$("#activity").removeClass("active");
			$("#house_service").removeClass("active");
			$("#have_activity").removeClass("active");
			$("#policy").addClass("active");
	})
	$("#house_service").click(function(){
			$("#group_policy").hide();
			$("#group_activity").hide();
			$("#group_have_activity").hide();
			$("#group_house_service").show();
			$("#activity").removeClass("active");
			$("#have_activity").removeClass("active");
			$("#policy").removeClass("active");
			$("#house_service").addClass("active");
	})
	$("#have_activity").click(function(){
			$("#group_policy").hide();
			$("#group_activity").hide();
			$("#group_house_service").hide();
			$("#group_have_activity").show();
			$("#activity").removeClass("active");
			$("#policy").removeClass("active");
			$("#house_service").removeClass("active");
			$("#have_activity").addClass("active");
	})
	// ********************************
	// ********************************form
	$("#password2 > input").blur(function(){
		if($(this).val()!=$("#password > input").val()){
			$(this).css("border-color" , "red");
			alert("两次密码不一致");
		}
		else{
			$(this).css("border-color" , "gainsboro");
		}
	})
	$("#email > input").blur(function(){
		var $email = $(this).val();
		var  re = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/ ;
		if(re.test($email )){
		        	$(this).css("border-color" , "gainsboro");
		}else{
		        	$(this).css("border-color" , "red");
			alert("邮箱格式不正确");
		}
	})
	$("#username > input").blur(function(){
		var $username= $(this).val();
		var  re =  /^[a-zA-z]\w{3,15}$/ ;
		if(re.test($username)){
		        	$(this).css("border-color" , "gainsboro");
		}else{
		        	$(this).css("border-color" , "red");
			alert("账号格式不正确");
		}
	})
	$("#SignIn_zyz").hide();
	$("#btn_zyz").click(function(event) {
		/* Act on the event */
		$("#SignIn_lr").hide();
		$("#SignIn_zyz").show();
		$("#btn_zyz").addClass("active");
		$("#btn_lr").removeClass("active");
	});
	$("#btn_lr").click(function(event) {
		/* Act on the event */
		$("#SignIn_zyz").hide();
		$("#SignIn_lr").show();
		$("#btn_lr").addClass("active");
		$("#btn_zyz").removeClass("active");
	});
	// ********************************
	// ********************************backmanagement
	$(".BM_lrInfo").show();
		$(".BM_zyzInfo").hide();
		$(".BM_policyInfo").hide();
		$(".BM_activityInfo").hide();
		$(".BM_jzgsInfo").hide();
		$(".BM_jzfw").hide();
		$(".BM_WaitActivity").hide();
		$(".BM_WaitCompanies").hide();
	$("#ch1").click(function(){
		$(".BM_lrInfo").show();
		$(".BM_zyzInfo").hide();
		$(".BM_policyInfo").hide();
		$(".BM_activityInfo").hide();
		$(".BM_jzgsInfo").hide();
		$(".BM_jzfw").hide();
		$(".BM_WaitActivity").hide();
		$(".BM_WaitCompanies").hide();
	});
	$("#ch2").click(function(){
		$(".BM_lrInfo").hide();
		$(".BM_zyzInfo").show();
		$(".BM_policyInfo").hide();
		$(".BM_activityInfo").hide();
		$(".BM_jzgsInfo").hide();
		$(".BM_jzfw").hide();
		$(".BM_WaitActivity").hide();
		$(".BM_WaitCompanies").hide();
	});
	$("#ch3").click(function(){
		$(".BM_lrInfo").hide();
		$(".BM_zyzInfo").hide();
		$(".BM_policyInfo").show();
		$(".BM_activityInfo").hide();
		$(".BM_jzgsInfo").hide();
		$(".BM_jzfw").hide();
		$(".BM_WaitActivity").hide();
		$(".BM_WaitCompanies").hide();
	});
	$("#ch4").click(function(){
		$(".BM_lrInfo").hide();
		$(".BM_zyzInfo").hide();
		$(".BM_policyInfo").hide();
		$(".BM_activityInfo").show();
		$(".BM_jzgsInfo").hide();
		$(".BM_jzfw").hide();
		$(".BM_WaitActivity").hide();
		$(".BM_WaitCompanies").hide();
	});
	$("#ch5").click(function(){
		$(".BM_lrInfo").hide();
		$(".BM_zyzInfo").hide();
		$(".BM_policyInfo").hide();
		$(".BM_activityInfo").hide();
		$(".BM_jzgsInfo").show();
		$(".BM_jzfw").hide();
		$(".BM_WaitActivity").hide();
		$(".BM_WaitCompanies").hide();
	});
	$("#ch6").click(function(){
		$(".BM_lrInfo").hide();
		$(".BM_zyzInfo").hide();
		$(".BM_policyInfo").hide();
		$(".BM_activityInfo").hide();
		$(".BM_jzgsInfo").hide();
		$(".BM_jzfw").show();
		$(".BM_WaitActivity").hide();
		$(".BM_WaitCompanies").hide();
	});

	$("#ch7").click(function(){
		$(".BM_lrInfo").hide();
		$(".BM_zyzInfo").hide();
		$(".BM_policyInfo").hide();
		$(".BM_activityInfo").hide();
		$(".BM_jzgsInfo").hide();
		$(".BM_jzfw").hide();
		$(".BM_WaitActivity").show();
		$(".BM_WaitCompanies").hide();
	});
	$("#ch8").click(function(){
		$(".BM_lrInfo").hide();
		$(".BM_zyzInfo").hide();
		$(".BM_policyInfo").hide();
		$(".BM_activityInfo").hide();
		$(".BM_jzgsInfo").hide();
		$(".BM_jzfw").hide();
		$(".BM_WaitActivity").hide();
		$(".BM_WaitCompanies").show();
	});
})
window.onload=function fun()
{
    var bg =document.getElementById("SignIn_bg");
    bg.style.height=document.body.scrollHeight + "px";
}