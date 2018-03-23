import $ from 'jquery';

export function specialtySearch(condition, limit) {
  $.ajax({
  url:
  `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=or-portland&skip=0&limit=${limit}&user_key=${process.env.exports.apiKey}`,
  type: 'GET',
  data: {
    format: 'json'
  },
  success: function(response) {
    console.log(response);
    let firstName = response.data[0].profile.first_name;
    let lastName = response.data[0].profile.last_name;
    let address = response.data[0].practices[0].visit_address;
    let phone = response.data[0].practices[0].phones;
    let website = response.data[0].practices[0].website;
    let newPatients = response.data[0].practices[0].accepts_new_patients;
    console.log("first", firstName);
    console.log("last", lastName);
    console.log("address", address);
    console.log("phone", phone);
    console.log("web", website);
    console.log("new patients", newPatients);
    $('#condition-first-name').append(`<p>Name: ${firstName} ${lastName}</p>`);
  },
  error: function() {
    $('.error').text(`There was a problem.`)
  }
});
}
