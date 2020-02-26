module.exports = {

  name: "adds_a_contact",

  title: "Adds A Contact",

  description: "",
  version: "v1",
  input:{
    title: "Adds A Contact",
    type: "object",
    properties: {
      // CONTACT_ID:{
      //   title : "Contact ID",
      //   type : "string",
      //   minLength : 1,


      // },
      FIRST_NAME: {
          title : "FIRST_NAME",
          type : "string",
          minLength : 1,


      },
    LAST_NAME: {
      title : "LAST_NAME",
      type : "string",
    


  },
  PHONE: {
    title : "PHONE",
    type : "string",



},
EMAIL_ADDRESS: {
  title : "EMAIL_ADDRESS",
  type : "string",



},
ADDRESS_MAIL_STATE: {
  title : "ADDRESS_MAIL_STATE",
  type : "string",



},
ADDRESS_MAIL_COUNTRY: {
  title : "ADDRESS_MAIL_COUNTRY",
  type : "string",
  


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
    var x=  "https://api.insightly.com/v3.1/Contacts";
    var y= "Basic " + new Buffer(input.auth.access_token).toString("base64");
   var options = {
    method: 'POST',
    url:x,
    headers: {
      "Content-Type": 'application/json',
     "authorization": y
      //"authorization": "Basic "+(input.auth.access_token:,
    },
    body: JSON.stringify({"FIRST_NAME":input.FIRST_NAME,"LAST_NAME":input.LAST_NAME,"PHONE":input.PHONE,"EMAIL_ADDRESS":input.EMAIL_ADDRESS,"ADDRESS_MAIL_STATE":input.ADDRESS_MAIL_STATE,"ADDRESS_MAIL_COUNTRY":input.ADDRESS_MAIL_COUNTRY})
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
  
