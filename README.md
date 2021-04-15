# Msg91
Msg91 API for node.js


[![NPM](https://nodei.co/npm/msg91.png?downloads=true)](https://npmjs.org/package/msg91)


# Msg91 Installation

```javascript 
npm install msg91-templateid --save
```

## This is a fork from [msg91](https://github.com/hirenrojasara/Msg91) by Hiren Soni to support Msg91 API with DLT Template Id


# Msg91 Integration

### If you want to send messages in India as per new TRAI rule  
- You need to register your sender Id  at Dlt
- You need to approve your msg teplate at Dlt

### Send SMS

```javascript

// Provide sender Id that has been approve by DLT
var msg91 = require("msg91")("API_KEY", "SENDER_ID", "ROUTE_NO" );


// Mobile No can be a single number, list or csv string

var mobileNo = "XXXXXXXXXX";

var mobileNo = [ "XXXXXXXXXX", "XXXXXXXXXX", "XXXXXXXXXX" ];

var mobileNo =  "XXXXXXXXXX,XXXXXXXXXX,XXXXXXXXXX";

// provide the approved DLT TemplateId that has been associated with the senderId 

msg91.send(mobileNo, "MESSAGE","TEMPLATE_ID", function(err, response){
    console.log(err);
    console.log(response);
});
```




### Get Balance

```javascript
msg91.getBalance(function(err, msgCount){
    console.log(err);
    console.log(msgCount);
});

// Get Balance for given Route.
msg91.getBalance("ROUTE_NO", function(err, msgCount){
    console.log(err);
    console.log(msgCount);
});
```



# Msg91 Constants


### ROUTE_NO
```javascript
1 - Promotional Route
4 - Transactional Route
```

