// // Enter Key enable
// $("#search_field").keyup(function(event){
//   if (event.keyCode == 13) {
//     printRequestedElementOnNumberSubmit();
//   }
// });

$(".search_field").keyup(function (e) {
  var key = e.which;
  if(key == 13)  // the enter key code
   {
    printRequestedElement();
  }
});
// End of Enter Key Enable
$("#submit_number").click(printRequestedElement);
// Search by Number
  function printRequestedElement(){
    var val = $("#value").val();
    var element = printElementObject(val);
    $(".result_number_research").html(`
    <p><span class="element_property">Number</span>: <span class="element_number">${element.number}</span></p>
    <p><span class="element_property">Name</span>: <span class="element_name">${element.name}</span></p>
    <p><span class="element_property">Symbol</span>: <span class="element_symbol">${element.symbol}</span></p>
    <p><span class="element_property">Atomic Weight</span></span>: <span class="element_atomic_weight">${element.atomic_weight}</span></p>
    <p><span class="element_property">Name Origin</span></span>: <span class="element_name_origin">${element.name_origin}</span></p>
    <p><span class="element_property">Melt Temperature</span></span>: <span class="element_melt_temp">${element.melt_temp}</span></p>
    <p><span class="element_property">Density</span></span>: <span class="element_density">${element.density}</span></p>
    <p><span class="element_property">Boil Temperature</span></span>: <span class="element_boil_temp">${element.boil_temp}</span></p>`);
    $("#value").val("");
};
