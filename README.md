# _Doctor Lookup_

##### Web app that uses the BetterDoctor API to allow users to search for doctors in their area by medical issue or doctor name. 03/23/2018

## By Sara Hamilton

# Description
This is the Epicodus weekly project for week 2 of the JavaScript course. It uses API calls to gather data and generate results. It's purpose is to display understanding of API calls.

## _Doctor Lookup_
* Allows the user to look up doctors in the Portland area by medical issue or doctor name.

## Specifications

| Spec | Input | Output |
| :---------------| :---------------| :---------------|
| A user can enter a medical issue to receive a list of doctors in the Portland area that fit the search query. | "sore throat" | a list of doctors that treat sore throats |
| A user can enter a name to receive a list of doctors in the Portland area that fit the search query. | "Smith" | a list of all doctors with the name Smith |
| If the query response includes any doctors, the following information is included about each doctor: first name, last name, address, phone number, website and whether or not the doctor is accepting new patients | query: doctors with name Smith | John Smith, 123 Elm Street, 503-555-5555, bestdoctor.com, accepting new patients|
| If the API call results in an error (any message not a 200 OK), the application returns a notification that states what the error is. | limit: -3 | response: "There was a 400 error handling your request - Bad Request" |
| If the query response doesn't include any doctors (for instance, if no doctors meet the search criteria), the application returns a notification that states that no doctors meet the criteria. | query: doctors with the name Xyzoo | response: "The search provided no matching results."|


## Technologies Used
------------

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* Karma
* Jasmine
* Node JS
* ES Lint
* Webpack
* Babel

Installation
------------

```
$ git clone https://github.com/Sara-Hamilton/doctor-lookup.git
```

_Requires node.js; instructions to install:_ https://www.learnhowtoprogram.com/javascript/getting-started-with-javascript-2f9a73dc-b7f5-4a22-9101-e69d49f552ac/installing-node-js 

Get a free API key from https://developer.betterdoctor.com/

Create a new file named .env in the root directory of this repository containing the following code
 ```
exports.apiKey=[YOUR API KEY HERE]
```

Install required npm packages and dependencies:

```
$ npm install
$ npm run build
```

Start the webserver:
```
$ npm run start
```

## Known Bugs

  * _No known bugs at this time._

## Support and contact details

  _To suggest changes, submit a pull request in the GitHub repository._

### License

*MIT License*

Copyright (c) 2018 **_Sara Hamilton_**

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
