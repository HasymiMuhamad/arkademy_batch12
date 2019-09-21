function biodataSaya(){

var express = require("express");
var app = express();

app.listen(3000, () => {
    console.log("Server running on port 3000");
   });

app.get("/biodata", (req, res, next) => {
    res.json(
        {
            "name" : "muhamad hasymi hilman", 
            "age"  : "23",
            "address": "jalan brigjend katamso 141 purworejo",
            "hobbies" : ['berenang', 'bersepeda', 'travelling'],
            "is_married" : false,
            "list_school" : [{
                "name" : "madrasah aliyah ali maksum",
                "year_in" : 2011,
                "year_out" : 2014,
                "major" : "IPA"
            }],
            "skills" : [{
                "skill_name" : "html",
                "level" : "beginner"
            }, {
                "skill_name" : "css",
                "level" : "beginner"
            }, {
                "skill_name" : "javascript",
                "level" : "beginner"
            }, {
                "skill_name" : "node.js",
                "level" : "beginner"
            }, {
                "skill_name" : "react.js",
                "level" : "beginner"
            }],
            "interest_in_coding" : true
        });
   });

}

biodataSaya();