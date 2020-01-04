const { Howl, Howler } = require('howler')

const sound = new Howl({
    src: ['/audio/Lm.mp3'],
    //autoplay: true,
    // sprite: {
    //     blast: [0, 3000],
    //     laser: [4000, 1000],
    //     winner: [6000, 5000]
    //}
})

sound.play()