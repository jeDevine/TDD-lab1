const answer = require("./index.js")

describe("answer" , function(){
    test("starting with A", function(){
        expect(answer("APPLE")).toEqual("appleway");
    })
    test("starting with E", function(){
        expect(answer("EQUAL")).toEqual("equalway");
    })
    test("starting with I", function(){
        expect(answer("INDAGO")).toEqual("indagoway");
    })
    test("starting with O", function(){
        expect(answer("ORANGE")).toEqual("orangeway");
    })
    test("starting with U", function(){
        expect(answer("UNIFORM")).toEqual("uniformway");
    })
    test("change to lower case", function(){
        expect(answer("HELLO")).toEqual("ellohay");
    })
    test("starting with one const", function(){
        expect(answer("BANANA")).toEqual("ananabay");
    })
    test("starting with 2 consonant", function(){
        expect(answer("START")).toEqual("artstay");
    })
    test("starting with 3 consonant", function(){
        expect(answer("SCRAP")).toEqual("apscray");
    })
})