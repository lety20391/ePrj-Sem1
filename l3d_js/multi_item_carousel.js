// JavaScript Document
//Goi requestAnimFrame ~ tuong tu nhu setInterval 60Hz
window.requestAnimFrame = (function(){
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function( callback ){ window.setTimeout(callback, 1000 / 60); };
})();

//Kiem tra resolution neu thay doi thi goi resChange
var resWidth = $(document).width();
	checkRes = function (){
		if (resWidth != $(document).width()){
			resWidth = $(document).width();
			$("span.info").text(resWidth);
		}
	};
$(function loop(){
	requestAnimFrame(loop);
	checkRes();	
})
//Tu dong chay carousel 2giay
//Carousel se tu dong dung khi dua chuot vao
$('.multi-item-carousel').carousel({
  interval: 2000,
  pause:"hover"
});


//Moi item se copy them 2 item ke tiep tao thanh 1 slide 3 item
$(function createMultiItem(){
	$('.multi-item-carousel .item').each(function(){		
		var indexCurrentItem = $(this).index();	
		totalItem = $(this).parent().children().length;	
		/*Them vao phan tu thu 2*/
		if ( indexCurrentItem == totalItem - 1){
				nextItem = $(this).siblings(":first");
			}else{
				nextItem = $(this).next();}
		nextItem.children("div:first-child").clone().appendTo($(this));
		/*Them vao phan tu thu 3 */
		if (indexCurrentItem == totalItem - 2){
			nextNextItem = $(this).siblings(":first");
		}else{
			nextNextItem = nextItem.next();
		}
		nextNextItem.children("div:first-child").clone().appendTo($(this));	
	});
});