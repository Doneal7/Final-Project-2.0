var $select = $("<select></select");
$("#dropdown").append($select);

//Cycle over menu links
$("#dropdown a").each(function(){
  var $anchor = $(this);
  //Create an option
  var $option = $("<option></option>");
//Deal with selected options depending on current page
  if($anchor.parent().hasClass("main-nav")){

  $option.prop("main-nav", true);
  }





  //options value is href of link
  $option.val($anchor.attr("href"));
  //options text is the text of link
  $option.text($anchor.text());
  //append option to select
  $select.append($option);
});
//bind change listener to button
$select.change(function(){
 //  go to select's location
 window.location = $select.val();
});
