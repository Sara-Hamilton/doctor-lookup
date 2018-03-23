import './styles.css';
import { specialtySearch } from './js/api.js';


$(document).ready(function() {
  $('#condition-form').submit(function(event) {
  event.preventDefault();
  const condition = $("#condition").val();
  const limit = $("#limit").val();
  specialtySearch(condition, limit);
  });
});
