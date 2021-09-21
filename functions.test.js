const { test, expect } = require("@jest/globals")

const { returnTwo, greeting, add, multipy, divide, subtract } = require("./functions")

test("Should return 2", () => {
    expect(returnTwo()).toEqual(2)
})

test("Should expect to greet people by their name", () => {
    expect(greeting('James')).toEqual("Hello, James")
    expect(greeting('Jill')).toEqual("Hello, Jill")
})


describe("Math functions", () => {

    test("Should add two numbers together", () => {
    expect(add(1, 2)).toEqual(3)
    expect(add(5, 9)).toEqual(14)
})

test("Should multiply two numbers together", () => {
    expect(multipy(2, 2)).toEqual(4)
    expect(multipy(5, 9)).toEqual(45)
})

test("Should divide two numbers together", () => {
    expect(divide(6, 2)).toEqual(3)
    expect(divide(28, 2)).toEqual(14)
})

test("Should subtract two numbers together", () => {
    expect(subtract(5, 2)).toEqual(3)
    expect(subtract(23, 9)).toEqual(14)
})

})
