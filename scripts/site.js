function ClearForm() {
  //    alert('You Clicked Clear!!!!');
  // document.getElementById("fullname").value = "";
  document.getElementById("contactForm").reset();
}

function hidePTags() {
  // alert('You Clicked Hide P Tags');
  let pTags = document.getElementsByTagName("p");
  for (let item of pTags) {
    //item.style.visibility = "hidden"; //removes elements, leave space
    item.style.display = "none"; //remove element and space
  }
}
// # is for id
// 'p' is for tag name

$("#jQueryBtn").click(function () {
  $("p").hide();
});

$(function() {
    var pages = ['index','about','contact'];
    var pathname = window.location.pathname;

    $('.nav-link').each(function(item) {
      if(pathname.includes(pages[item])){
        $(this).addClass('active');
        $(this).attr('aria-current', 'page');
      }
    })
});
