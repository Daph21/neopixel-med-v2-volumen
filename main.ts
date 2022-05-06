let Styrke = 0
let strip = neopixel.create(DigitalPin.P1, 8, NeoPixelMode.RGB)
strip.clear()
strip.show()
basic.forever(function () {
    Styrke = pins.map(
    input.soundLevel(),
    0,
    100,
    0,
    8
    )
    Styrke = Math.round(Styrke)
    if (Styrke > 0) {
        for (let indeks = 0; indeks <= Styrke; indeks++) {
            strip.setPixelColor(indeks, neopixel.colors(NeoPixelColors.Blue))
            strip.show()
            basic.pause(30)
        }
        strip.clear()
        strip.show()
    }
})
