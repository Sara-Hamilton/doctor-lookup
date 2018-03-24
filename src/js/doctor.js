export class DoctorSearch {

  constructor(searchTerm, limit, type) {
    this.searchTerm = searchTerm;
    this.limit = limit;
    this.type = type;
    if (type === "condition") {
      this.searchWord = "query";
    } else if (type === "name") {
      this.searchWord = "name";
    }
  }

  getDoctorData(displayData) {
    $.get(`https://api.betterdoctor.com/2016-03-01/doctors?${this.searchWord}=${this.searchTerm}&location=or-portland&skip=0&limit=${this.limit}&user_key=${process.env.exports.apiKey}`)
    .then(function(response) {
      displayData(response);
    })
    .fail (function(error) {
      displayData(error);
    });
  }

}
