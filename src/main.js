import './styles.css';
import { conditionSearch } from './js/condition.js';
import { nameSearch } from './js/name.js';
import { comboSearch } from './js/combo.js';

$(document).ready(function() {
  // $("#condition-form").submit(function(event) {
  //   event.preventDefault();
  //   const condition = $("#condition").val();
  //   const conditionLimit = $("#condition-limit").val();
  //   $(".well").hide();
  //   $('#reset-button').show();
  //   comboSearch(condition, conditionLimit, "condition");
  // });
  //
  // $("#doctor-name-form").submit(function(event) {
  //   event.preventDefault();
  //   const doctorName = $("#doctor-name").val();
  //   const nameLimit = $("#name-limit").val();
  //   $(".well").hide();
  //   $('#reset-button').show();
  //   comboSearch(doctorName, nameLimit, "name");
  // });

  $("#search-form").submit(function(event) {
    event.preventDefault();
    const searchTerm = $("#search-term").val();
    const limit = $("#limit").val();
    const searchType = $("input[name='search']:checked").val();
    $(".well").hide();
    $('#reset-button').show();
    console.log("searchType", searchType);
    comboSearch(searchTerm, limit, searchType);
  });

  $('#reset-button').click(function(event) {
    // $('#condition-form')[0].reset();
    // $('#doctor-name-form')[0].reset();
    $('#search-form')[0].reset();
    $('#results').empty();
    $('.error').empty();
    $('.well').show();
    $('#reset-button').hide();
  });
});
