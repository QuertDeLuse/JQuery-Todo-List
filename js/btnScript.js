var id;

$('document').ready(function() {
  id = 0;
});

function createNew() {
  modal = ($("#modal"));
  modal.fadeIn(300);
  $('#inputData').select();

  ($(".bg__layer")).fadeIn(300);
}

function closeModal() {
  modal = ($("#modal"));
  modal.fadeOut(300);
  ($(".bg__layer")).fadeOut(300);
}

function addDeal() {
  id = id + 1;
  deal = document.getElementById("inputData").value;

  if (deal != "") {
    $('.deals__wrap')
      .prepend("<div class='deal' id='"+id+"'onclick='dealClick(id)'> <p>"+deal+"</p> <div class='dealClose' onclick='dealDelete("+id+")' ></div> <hr> </div>");

    document.getElementById("inputData").value = "";
  }

  modal = ($("#modal"));
  modal.fadeOut(300);
  ($(".bg__layer")).fadeOut(300);
}

function dealClick(id) {
  deal = ($('#'+id));
  if(deal.hasClass('done')) {

    deal.removeClass('done');
  } else {

    deal.addClass('done');
  }
}

function dealDelete(id) {
  $('#'+id).remove();
  console.log(id);
}
