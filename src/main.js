import './styles.css';
import { conditionSearch } from './js/condition.js';


$(document).ready(function() {
  $("#condition-form").submit(function(event) {
  event.preventDefault();
  const condition = $("#condition").val();
  const limit = $("#limit").val();
  $("#condition-well").hide();
  conditionSearch(condition, limit);
  });
});
