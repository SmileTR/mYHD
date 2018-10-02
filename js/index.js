// 搜索框功能
var yhd_search = document.querySelector(".yhd_search");
var banner_list = document.querySelector(".banner_list");
var banner_listHeight = banner_list.offsetHeight;

window.onscroll = function(){
	var scrollTop = document.documentElement.scrollTop;	
	opc = scrollTop/banner_listHeight;
	if(opc < 1){
		
		yhd_search.style.backgroundColor = "rgba(22,22,195," + opc + ")";

	}else{
		yhd_search.style.backgroundColor = "rgba(22,22,195,1)";
	}
}


//倒计时功能
var super_proTime = document.querySelector(".super_proTime");
var span_list = super_proTime.querySelectorAll("span"); 
var time = 2*60*60;
function djs(){
	time--;
	var h = parseInt(time / 3600);
	var m = parseInt(time % 3600 / 60);
	var s = parseInt(time % 3600 % 60);
	h = h < 10 ? "0" + h : h;
	m = m < 10 ? "0" + m : m;
	s = s < 10 ? "0" + s : s;

	span_list[0].innerHTML = h;
	span_list[2].innerHTML = m;
	span_list[4].innerHTML = s;

	if(time == 0){
		clearInterval(timer);
	}

}
djs();
var timer = setInterval(djs,1000);


//轮播图功能

//获取轮播图容器
var banner_list = document.querySelector(".banner_list");

//获取轮播图每个li
var banner_imgs = banner_list.querySelectorAll(".banner_img");

//拷贝第一张图
var newImg = banner_imgs[0].cloneNode(true);

//将第一张图添加为最后一张图
banner_list.appendChild(newImg);

//重新获取修改后的轮播图li
banner_imgs = banner_list.querySelectorAll(".banner_img");

//修改轮播图容器宽度
banner_list.style.width = banner_imgs.length * 100 + "%";

//修改每个li宽度
for(var i = 0;i < banner_imgs.length;i++){

	banner_imgs[i].style.width = 100/banner_imgs.length + "%";

}


//开始轮播
var index = 0;
function bannerNext(){
	index++;
	banner_list.style.transition = "transform 0.3s ease-in-out";
	banner_list.style.transform = "translateX(" + (-index * 100)/banner_imgs.length + "%" +")";
	setTimeout(function(){

		if(index >= 4){
		index = 0;
		banner_list.style.transition = "none";
		banner_list.style.transform = "";
	}

	},300)
}


var timer2 = setInterval(bannerNext, 2000);

