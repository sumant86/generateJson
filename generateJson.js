var fs = require('fs');

var json = [];
var tags = ["Tag-01","Tag-02", "Tag-03", "Tag-04", "Tag-05", "Tag-06"];
var yearList = [2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021];
var objStructure= [
    {
        name:"Tag"
    },
    {
        name:"Val"
    },
    {
        name:"Year"
    }
];

var count = 10;

for(let i = 0; i < count; i++){
    let obj = {};
    objStructure.forEach((o)=>{
        if(o.name === "Tag"){
            obj.Tag = tags[Math.floor(Math.random() * tags.length)];;
        };
        if(o.name === "Year"){
            obj.Year = yearList[Math.floor(Math.random() * yearList.length)];
        };
        if(o.name === "Val"){
            obj.Value = Math.random() * 1000
        };
    });
    json.push(obj);
}

var JSONData = JSON.stringify(json);
// Convert object to string, write json to file
fs.writeFileSync('generated.json', JSONData, 'utf8', (err) => console.log(err));