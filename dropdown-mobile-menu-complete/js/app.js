//Problem: It look gross in smaller browser widths and small devices
//Solution: To hide the text links and swap them out with a more appropriate navigation

//create a select element (dropdown) and append to the menu
var $select = $("<select id='dropdown'></select>");
$("#menu").append($select);

//Append each page link to the dropdown menu as options
$("#menu ul li a").each(function(index, link) {
  //create an option element
  var $option = $("<option></option>");
  var $link = $(link);

  if($link.parent().hasClass("selected")) {
    $option.prop("selected", true);
  }

  //set option's value to the href of the link
  $option.val(  $link.attr("href")  );
  //set option's text to be the same as the link's text
  $option.text($link.text());
  //append option to dropdown menu
  $select.append($option);
});


//When an option is selected, change the window to that selected option
$select.change(function() {
  window.location = $select.val();
});

//Modify CSS for large screens
  //Hide the dropdown menu

//Modify CSS for small screens
  //Hide the nav links and show the dropdown menu

//update the dropdown menu to show the selected page
