// $("h1").addClass("big-title margin-50");

// // $("h1").text("Bye")              //inserting pure text inside an element.

// // $("button").text("Hi")                        //just to add  text in an element.
// $("button").html("<em>Hey</em>")             //normally we use innerhtml because of jquery small text html

// console.log($("a").attr("href","https://yahoo.com"));    // manipulate attributes using jquery

// $("h1").click(function(){
//     $("h1").css("color","purple");
// });

// for(var i = 0; i<5;i++){
//     document.querySelectorAll("button")[i].addEventListener("click",function(){
//         document.querySelector("h1").style.color = "purple";
//     });
// };

//doing above code using jquery

// $("button").click(function(){
//     $("h1").css("color","purple");
// });

//detecting keystrokes inside the text box
// $("input").keypress(function(event){
//     console.log(event.key);
// });

// if want to check keystrokes for whole website then replace input with "body"
// $("body").keypress(function(event){
//     console.log(event.key);
// });

//letters og h1 changing while keypress
// $("body").keypress(function(event){
//     $("h1").text(event.key);
//  });

//changing text color using mouseover event
// $("h1").on("mouseover",function(){
//     $("h1").css("color","purple");
// })

//adding and removing elements with jquery

// $("h1").before("<button>before</button>");
// $("h1").after ("<button>after</button>");
// $("h1").prepend ("<button>prepend</button>");
// $("h1").append ("<button>append</button>");

//website animations using j-query

// $("button").on("click",function(){               //hide using jquery
//     $("h1").hide();
// });

// $("button").on("click",function(){
//     $("h1").toggle();                                            //to toggle between hide and show
// });

// $("button").on("click",function(){
//     $("h1").fadeToggle();                                            //to toggle between fadeOut and fadeIn usign fadeToggle
// });                                                               //fadetoggle slows the hide and show

//  $("button").on("click",function(){
//     $("h1").slideUp();                                            //to slideUp and slidDown
//  });

//or wee can use animate property

// $("button").on("click", function () {
// 	$("h1").animate({opacity:0.5});        //0.5 will reduce visibility to 50%
//     //in css can only change css properties which has a number property.
// });

 $("button").on("click",function(){
      $("h1").slideUp().slideDown().animate({opacity:0.5})                             //this is in order                                 
     });