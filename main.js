const { Howl, Howler } = require('howler')

const sound = new Howl({
    src: ['/audio/Lm.mp3']
})

sound.play()