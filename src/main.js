import './styles.css';
import { DoctorSearch } from './js/doctor.js';

const showData = function(response) {
  if (response.status) {
    $('.error').show()
    $('.error').text(`There was a ${response.status} error handling your request - ${response.statusText}`);
  } else if (response.data.length === 0) {
    $('.error').show()
    $('.error').text('The search provided no matching results.')
  } else {
    for (let i = 0; i < response.data.length; i++) {
      let firstName = response.data[i].profile.first_name;
      let lastName = response.data[i].profile.last_name;
      let address = response.data[i].practices[0].visit_address;
      let phone = response.data[i].practices[0].phones;
      let website = response.data[i].practices[0].website;
      if (website === undefined) {
        website = "unavailable";
      }
      let newPatients = response.data[i].practices[0].accepts_new_patients;
      if (newPatients === true) {
        newPatients = "yes";
      } else {
        newPatients = "no";
      }
      $('#results').append(`<div class="panel panel-default">
                            <div class="panel-heading"><h4>Name: ${firstName} ${lastName}</h4></div>
                            <div class="panel-body">
                            <p>Address: ${address.street}, ${address.city}, ${address.state} ${address.zip}</p>
                            <p>Phone: ${phone[0].number} Type: ${phone[0].type}</p>
                            <p>Website: ${website}</p>
                            <p>Accepting new patients: ${newPatients}</p></div></div>`);
    }
  }
}

$(document).ready(function() {

  $("#search-form").submit(function(event) {
    event.preventDefault();
    const searchTerm = $("#search-term").val();
    const limit = $("#limit").val();
    const searchType = $("input[name='search']:checked").val();
    $(".well").hide();
    $('#reset-button').show();
    let search = new DoctorSearch(searchTerm, limit, searchType);
    if (search.type === "condition") {
      search.searchTitle = `Doctors in Portland who treat ${searchTerm}`;
    } else if (search.type === "name") {
      search.searchTitle = `Doctors in Portland with name ${searchTerm}`;
    }
    $('#results').append(`<div class="panel panel-default"><h3>${search.searchTitle}</h3></div>`);
    search.getDoctorData(showData);
  });

  $('#reset-button').click(function() {
    $('#search-form')[0].reset();
    $('#results').empty();
    $('.error').empty();
    $('.error').hide();
    $('.well').show();
    $('#reset-button').hide();
  });
});
