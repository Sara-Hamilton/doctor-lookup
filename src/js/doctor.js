export function doctorSearch(searchTerm, limit, type) {

  let searchWord = "";
  let searchTitle = "";
  if (type === "condition") {
    searchWord = "query";
    searchTitle = `Doctors in Portland who treat ${searchTerm}`;
  } else if (type === "name") {
    searchWord = "name";
    searchTitle = `Doctors in Portland with name ${searchTerm}`;
  }

  $.ajax({
    url: `https://api.betterdoctor.com/2016-03-01/doctors?${searchWord}=${searchTerm}&location=or-portland&skip=0&limit=${limit}&user_key=${process.env.exports.apiKey}`,
    type: 'GET',
    data: {
      format: 'json'
    },
    success: function(response) {
      $('#results').append(`<h3>${searchTitle}</h3>`);
      if (response.data.length === 0) {
        $('.error').text('The search provided no matching results.')
      }
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
    },
    error: function(response, textStatus, xhr) {
      $('.error').text(`There was a ${response.status} error handling your request - ${xhr}`);
    }
  });
}
