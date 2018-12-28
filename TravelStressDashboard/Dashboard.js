jQuery(document).ready(function () {
  $('.main_card1').popover({
    html: true,
    container: 'body',
    trigger: 'hover',
    placement: 'bottom',
    content: " <span class='label label-danger'>10 or more flights in the past year</span>",
  });
  $('.main_card2').popover({
    html: true,
    container: 'body',
    trigger: 'hover',
    placement: 'bottom',
    content: " <span class='label label-warning'>5 - 10 flights in the past year</span>",
  });
  $('.main_card3').popover({
    html: true,
    container: 'body',
    trigger: 'hover',
    placement: 'bottom',
    content: "<span class='label label-success'>0 - 4 flights in the past year</span>",
  });
  $('.tooltip1').popover({
    html: true,
    trigger: 'hover',
    placement: 'left',
    content: " <li class='list-group-item'>Economy</li><li class='list-group-item'>Weekend Trip</li><li class='list-group-item'>Long Journey</li><li class='list-group-item'>Time Zone Change</li>",
  });
  $('.tooltip2').popover({
    html: true,
    trigger: 'hover',
    placement: 'left',
    content: " <li class='list-group-item'>Economy</li><li class='list-group-item'>Weekend Trip</li><li class='list-group-item'>Layover</li>",
  });
  $('.tooltip3').popover({
    html: true,
    trigger: 'hover',
    placement: 'left',
    content: " <li class='list-group-item'>Weekend Trip</li><li class='list-group-item'>Long Journey</li><li class='list-group-item'>Time Zone Change</li>",
  });

  $(".searchbox-input").on("keyup", function () {
    var filter = $(this).val().toLowerCase();
    $(".column").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(filter) > -1);
    });
  });

  $("#filterbutton1").click(function () {
    var x = document.getElementsByClassName("gauge");
    var $myDiv;
    for (i = 0; i < x.length; i++) {
      var inner = x[i].innerHTML;
      $myDiv = $(".column")[i];
      $myDiv.style.display = "block";
      if (inner.indexOf("smallgauge-5") == -1) {
        $myDiv.style.display = "none";
      }
    }
  });
  $("#filterbutton2").click(function () {
    var x = document.getElementsByClassName("gauge");
    var $myDiv;
    for (i = 0; i < x.length; i++) {
      var inner = x[i].innerHTML;
      $myDiv = $(".column")[i];
      $myDiv.style.display = "block";
      if (inner.indexOf("smallgauge-1") == -1) {
        $myDiv.style.display = "none";
      }
    }
  });
});
