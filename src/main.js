import './styles.css';
import { conditionSearch } from './js/condition.js';
import { nameSearch } from './js/name.js';

$(document).ready(function() {
  $("#condition-form").submit(function(event) {
  event.preventDefault();
  const condition = $("#condition").val();
  const conditionLimit = $("#condition-limit").val();
  $(".well").hide();
  conditionSearch(condition, conditionLimit);
  });

  $("#doctor-name-form").submit(function(event) {
  event.preventDefault();
  const doctorName = $("#doctor-name").val();
  const nameLimit = $("#name-limit").val();
  $(".well").hide();
  nameSearch(doctorName, nameLimit);
  });
});
