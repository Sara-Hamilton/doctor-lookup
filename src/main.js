import './styles.css';
import { doctorSearch } from './js/doctor.js';

$(document).ready(function() {

  $("#search-form").submit(function(event) {
    event.preventDefault();
    const searchTerm = $("#search-term").val();
    const limit = $("#limit").val();
    const searchType = $("input[name='search']:checked").val();
    $(".well").hide();
    $('#reset-button').show();
    doctorSearch(searchTerm, limit, searchType);
  });

  $('#reset-button').click(function() {
    $('#search-form')[0].reset();
    $('#results').empty();
    $('.error').empty();
    $('.well').show();
    $('#reset-button').hide();
  });
});
