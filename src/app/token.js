var clientId  = 'be5dabf2a00e456f9a7bdfe214e3d18b';
var clientSecret = 'e1cac45ba5e2496eaecab59caded790a';
var tokenEndpoint = 'https://accounts.spotify.com/api/token';
var XMLHttpRequest = require('xhr2');

// Base64 encode the client ID and client secret
var encodedCredentials = btoa(clientId + ':' + clientSecret);

// Set the request parameters
var data = new URLSearchParams();
data.append('grant_type', 'client_credentials');

// Create a new XMLHttpRequest object
var xhr = new XMLHttpRequest();
xhr.open('POST', tokenEndpoint, true);
xhr.setRequestHeader('Authorization', 'Basic ' + encodedCredentials);
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

// Define the onload and onerror callbacks
xhr.onload = function() {
  if (xhr.status === 200) {
    var response = JSON.parse(xhr.responseText);
    var accessToken = response.access_token;
    var expiresIn = response.expires_in;
    // You can now use the access token for your Spotify API requests
    console.log('Access Token:', accessToken);
    console.log('Expires In:', expiresIn);
  } else {
    console.error('Error:', xhr.status);
  }
};

xhr.onerror = function() {
  console.error('Request failed');
};

// Send the request
xhr.send(data);