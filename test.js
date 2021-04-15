/**
 * Created by hiren on 26/11/15.
 */


 let msg91 = require("./index.js")("API_KEY", "SENDER_ID", "ROUTE_NO");

var mobileNo = "XXXXXXXXXX";

msg91.send("mobileNo", "MESSAGE","DLTE_TEMPLATE_ID", function (err, response) {
    console.log(err);
    console.log(response);
});


