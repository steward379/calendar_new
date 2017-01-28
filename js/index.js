$("._27").mouseenter(
  function(){
  $(this).css("background-color","red");
  $(this).css("color","white");
  $(".call").html("<h4>除夕</h4>");
  }
);

$("._27").mouseleave(
  function(){
  $(this).css("background-color","white");
  $(this).css("color","black");
  $(".call").html("<h4>今天是什麼日子?</h4>");
  }
);

$("._29").mouseenter(
  function(){
  $(this).css("background-color","red");
  $(this).css("color","white");
  $(".call").html("<h4>初二</h4>");
  }
);

$("._29").mouseleave(
  function(){
  $(this).css("background-color","white");
  $(this).css("color","black");
  $(".call").html("<h4>今天是什麼日子?</h4>");
  }
);

$("._30").mouseenter(
  function(){
  $(this).css("background-color","black");
  $(this).css("color","white");
  $(".call").html("<h4>初三</h4>");
  }
);

$("._30").mouseleave(
  function(){
  $(this).css("background-color","white");
  $(this).css("color","black");
  $(".call").html("<h4>今天是什麼日子?</h4>");
  }
);

$("._31").mouseenter(
  function(){
  $(this).css("background-color","black");
  $(this).css("color","white");
  $(".call").html("<h4>初四</h4>");
  }
);

$("._31").mouseleave(
  function(){
  $(this).css("background-color","white");
  $(this).css("color","black");
  $(".call").html("<h4>今天是什麼日子?</h4>");
  }
);

$(".green").mouseenter(
  function(){
  $(this).css("background-color","green");
  $(this).css("color","white");
  $(".call").html("<h4>初一</h4>");
  $(this).addclass("hat");
  }
);

$(".green").mouseleave(
  function(){
  $(this).css("background-color","white");
  $(this).css("color","black");
  $(".call").html("<h4>今天是什麼日子?</h4>");
  }
);

$(".mouth").mouseenter(
  function(){ 
  $(".talk").html("➤　　　　　　欠揍嗎？咬你喔。");
  }
);
$(".mouth").mouseleave(
  function(){ 
  $(".talk").html("➤　　　　　　　　　　　🐔掰。");
  }
);
$(".hat").mouseenter(
  function(){ 
  $(".talk").html("➤　　　　　　　　　key 摸🐔~");
  }
);

$(".hat").mouseleave(
  function(){ 
  $(".talk").html("➤　　　　　　　　　　呼呼...蘇胡");
  }
);

$(".eyes").mouseenter(
  function(){ 
  $(".talk").html("➤　　　　　　　戳我眼睛幹嘛？");
  }
);
$(".eyes").mouseleave(
  function(){ 
  $(".talk").html("➤　　　　　　　　祝你長🐔眼。");
  }
);
$(".wing").mouseenter(
  function(){ 
  $(".talk").html("➤　　　　　　　　　🐔年高飛!");
  }
);
$(".wing").mouseleave(
  function(){ 
  $(".talk").html("➤　　　　　　　　　我在飛呀～");
  }
);
$(".foot").mouseenter(
  function(){ 
  $(".talk").html("➤　　　　　我沒有第三🐔腳！");
  }
);
$(".foot").mouseleave(
  function(){ 
  $(".talk").html("➤　　　公🐔都被幹掉惹，幫QQ。");
  }
);
$(".junk").mouseenter(
  function(){ 
  $(".junk ").css("background-color","#1566ea");
  $(".junk ").css("color","#edeff2");
  }
);
$(".junk").mouseleave(
  function(){ 
  $(".junk ").css("background-color","#edeff2");
  $(".junk ").css("color","#1566ea");
  }
);