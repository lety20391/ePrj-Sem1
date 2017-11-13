// JavaScript Document
//Tu dong chay carousel 2giay
$('.multi-item-carousel').carousel({
  interval: 2000
});
//Moi item se copy them 2 item ke tiep tao thanh 1 slide 3 item
$('.multi-item-carousel .item').each(function(){	
	var indexCurrentItem = $(this).index();	
	totalItem = $(this).parent().children().length;
	$("span.info").text(totalItem);	
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
