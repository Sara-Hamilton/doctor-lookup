import './styles.css';
import { conditionSearch } from './js/condition.js';
import { nameSearch } from './js/name.js';
import { comboSearch } from './js/combo.js';

$(document).ready(function() {
  $("#condition-form").submit(function(event) {
    event.preventDefault();
    const condition = $("#condition").val();
    const conditionLimit = $("#condition-limit").val();
    $(".well").hide();
    $('#reset-button').show();
    // conditionSearch(condition, conditionLimit);
    comboSearch(condition, conditionLimit, "condition");
  });

  $("#doctor-name-form").submit(function(event) {
    event.preventDefault();
    const doctorName = $("#doctor-name").val();
    const nameLimit = $("#name-limit").val();
    $(".well").hide();
    $('#reset-button').show();
    // nameSearch(doctorName, nameLimit);
    comboSearch(doctorName, nameLimit, "name");
  });

  $('#reset-button').click(function(event) {
    // event.preventDefault();
    $('#condition-form')[0].reset();
    $('#doctor-name-form')[0].reset();
    $('#results').empty();
    $('.error').empty();
    $('.well').show();
    $('#reset-button').hide();
  });
});
