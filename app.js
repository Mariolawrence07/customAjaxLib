const http = new easyHTTP;

// get post

http.get('https://jsonplaceholder.typicode.com/pts', function(err, response) {
 if(err) {
     console.log(err);
 } else {
    console.log (response);
 }
 });
  
