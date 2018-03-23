import $ from 'jquery';

export function specialtySearch(condition) {
  $.ajax({
  url:
  `https://api.betterdoctor.com/2016-03-01/doctors?query=${condition}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.exports.apiKey}`,
  type: 'GET',
  data: {
    format: 'json'
  },
  success: function(response) {
    console.log(response);
    let reply = response.data[0].profile.first_name;
    console.log(reply);
    $('#condition-first-name').append(`<p>${reply}</p>`);
  },
  error: function() {
    $('.error').text(`There was a problem.`)
  }
});
}
