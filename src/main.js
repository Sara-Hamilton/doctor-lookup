import './styles.css';
// import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { specialtySearch } from './js/api.js';


$(document).ready(function() {
  $('#condition-form').submit(function(event) {
  event.preventDefault();
  const condition = $("#condition").val();
  const limit = $("#limit").val();
  specialtySearch(condition, limit);
  });
});
