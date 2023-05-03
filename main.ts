let variable5 = 0
let variable1 = 0
input.onButtonPressed(Button.A, function () {
    variable5 = 5
    basic.showNumber(variable5)
    variable1 = randint(0, 10)
    basic.showNumber(variable1)
    basic.showNumber(variable1 * variable5)
})
