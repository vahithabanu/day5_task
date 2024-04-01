let resume={
    "name":"Vahitha Banu",
    "contact": {
        "location":"Cuddalore",
        "email":"svahitha25@gmail.com"

    },
    "personal Details": {
        "Father's Name":"Shafiulla Baig",
        "Mother's Name":"Rameeza Begum",
        "Date of Birth":"25-oct-1998",
        "Nationality":"Indian",
        "marital status":"married",
        "languages ":['english','tamil','urudu'],
        "hobbies":"listening songs"
         
},
"Summary" : "To work with a passion in a challenging environment with a technology drivem company to enhance my skills and knowledge and deliver them at a work with full understanding of the organizational objectives",
"Education": ["B.E(Computer science and engineering)", "HSC", "SSLC"],
"skills": ["Java", "HTML", "CSS", "Bootstrap", "SQL"],
"Academic Project":"Stock and commodity price monitoring using RPA",
"Certificates":"Won 2nd prize in national level technical symposium",
"work experience":"Fresher",
"Area of interest":"Software Engineering"

}
//console.log(resume);

//for loop

let resumeEntries=Object.entries(resume);
for(let index=0;index<resumeEntries.length;index++){
    console.log(resumeEntries[index][0],':',resumeEntries[index][1]);
}

//use for.....in  loop

for(let key in resume) {
    console.log(key, ':',resume[key]);
}

//for...of loop

let resumeEntries2=Object.entries(resume);
for(let entry of resumeEntries2){
    console.log(entry[0], ':', entry[1]);
}

//for ...each loop

let resumeEntries1=Object.entries(resume);
resumeEntries1.forEach(entry=>{
    console.log(entry[0], ':', entry[1]);
})
