input.onGesture(Gesture.Shake, function () {
    if (OnOff == 0) {
        OnOff = 1
        led.plot(0, 0)
    } else {
        OnOff = 0
        led.unplot(0, 0)
    }
    radio.sendValue("O", OnOff)
})
let Knapp_B = 0
let Knapp_A = 0
let Pitch = 0
let OnOff = 0
radio.setGroup(1)
basic.forever(function () {
    if (OnOff == 1) {
        Pitch = input.rotation(Rotation.Pitch)
        led.plot(2, (45 + Pitch) / 22.5)
        if (input.buttonIsPressed(Button.A)) {
            Knapp_A = 1
            led.plot(0, 2)
        } else {
            Knapp_A = 0
            led.unplot(0, 2)
        }
        if (input.buttonIsPressed(Button.B)) {
            Knapp_B = 1
            led.plot(4, 2)
        } else {
            Knapp_B = 0
            led.unplot(4, 2)
        }
        radio.sendValue("P", Pitch)
        radio.sendValue("A", Knapp_A)
        radio.sendValue("B", Knapp_B)
        led.unplot(2, (45 + Pitch) / 22.5)
    }
})
