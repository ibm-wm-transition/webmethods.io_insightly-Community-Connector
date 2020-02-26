module.exports = {

  name: "adds_a_project",

  title: "Adds A Project",

  description: "",
  version: "v1",

  input:{
    title: "Adds A Project",
    type: "object",
    properties: {
      userid: {
    title : "Owner UserID",
    type : "string",
    minlength : 1, 

      },
      name: {
        title : "Project Name",
        type : "string",
        minlength : 1, 
    
          },
          status: {
            title : "Status",
            type : "string",
            minlength : 1, 
            enum : [
                "Not Started",
                "In Progress",
                "Deferred",
                "Cancelled",
                "Completed",
                "Abandoned"

            ]
              },
          

    }
  },

  output: {
    title: "output",
  	type: "object",
  	properties: {

    }
  },

  mock_input:{},


    // output(null, { data : "OK"});
    mock_input:{},

    execute: function(input, output){
      var request = require("request")
    var x=  "https://api.insightly.com/v3.1/Projects";
    var y= "Basic " + new Buffer(input.auth.access_token).toString("base64");
   var options = {
    method: 'POST',
    url:x,
    headers: {
      "Content-Type": 'application/json',
     "authorization": y
      //"authorization": "Basic "+(input.auth.access_token:,
    },
    body: JSON.stringify({"PROJECT_NAME":input.name,"STATUS":input.status,"OWNER_USER_ID":input.userid})
    //json: true
  };
    
    
    request(options, function (error, response, body) {
   try {
             if (body && typeof(body) === "string") {
                 body = JSON.parse(body);
             }
         } catch (e) {
             return output(body);
         };
     
       if (response.statusCode === 403) {
             return output("the authentication information is incorrect.");
         }
      if (response.statusCode === 400) {
             return output("there is an error in the construction of the request. The body of the response will contain more detail of the problem.");
         }
     if (response.statusCode === 404) {
       return output(body);
             return output(" the requested record could not be found. This may also occur if the user does not have access to the requested record");
         }
         if (response.statusCode !== 200) {
             return output(body.status.errorDetails);
         }
      if (response.statusCode === 200) {
            // return output(body);
           
        // }
          // return output(body);//.categories);
           return output(null,body);
        
        }
         
  });
    
     
     }
  
    }
  
