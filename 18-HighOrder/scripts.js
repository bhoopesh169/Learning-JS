const coding = ["js", "ruby", "python", "cpp"]

coding.forEach( function (val) {
    console.log(val);
});

coding.forEach(element =>{
    console.log(element);
})

let arr = [
    {
        language: "hindi",
        speakers: 20
    },
    {
        langauage: "english",
        speakers: 100
    },
    {
        language: "Spanish",
        speakers: 1
    }
]

arr.forEach( element=>{
    console.log(element.language);
    console.log(`Language: ${element.language} speakers: ${element.speakers}`);
})