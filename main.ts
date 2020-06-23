input.onPinPressed(TouchPin.P0, function () {
    蛇頭.turn(Direction.Left, 90)
    if (Direction2 == 0) {
        Direction2 = 3
    } else {
        Direction2 += -1
    }
    if (Direction2 == 0) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
    } else if (Direction2 == 1) {
        music.playTone(587, music.beat(BeatFraction.Eighth))
    } else if (Direction2 == 2) {
        music.playTone(659, music.beat(BeatFraction.Eighth))
    } else {
        music.playTone(698, music.beat(BeatFraction.Eighth))
    }
})
input.onButtonPressed(Button.A, function () {
    蛇頭.turn(Direction.Left, 90)
    if (Direction2 == 0) {
        Direction2 = 3
    } else {
        Direction2 += -1
    }
    if (Direction2 == 0) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
    } else if (Direction2 == 1) {
        music.playTone(587, music.beat(BeatFraction.Eighth))
    } else if (Direction2 == 2) {
        music.playTone(659, music.beat(BeatFraction.Eighth))
    } else {
        music.playTone(698, music.beat(BeatFraction.Eighth))
    }
})
input.onButtonPressed(Button.B, function () {
    蛇頭.turn(Direction.Right, 90)
    if (Direction2 == 3) {
        Direction2 = 0
    } else {
        Direction2 += 1
    }
    if (Direction2 == 0) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
    } else if (Direction2 == 1) {
        music.playTone(587, music.beat(BeatFraction.Eighth))
    } else if (Direction2 == 2) {
        music.playTone(659, music.beat(BeatFraction.Eighth))
    } else {
        music.playTone(698, music.beat(BeatFraction.Eighth))
    }
})
input.onPinPressed(TouchPin.P1, function () {
    蛇頭.turn(Direction.Right, 90)
    if (Direction2 == 3) {
        Direction2 = 0
    } else {
        Direction2 += 1
    }
    if (Direction2 == 0) {
        music.playTone(523, music.beat(BeatFraction.Eighth))
    } else if (Direction2 == 1) {
        music.playTone(587, music.beat(BeatFraction.Eighth))
    } else if (Direction2 == 2) {
        music.playTone(659, music.beat(BeatFraction.Eighth))
    } else {
        music.playTone(698, music.beat(BeatFraction.Eighth))
    }
})
let i = 0
let 蛇身各節: game.LedSprite[] = []
let 蛇頭: game.LedSprite = null
let Direction2 = 0
Direction2 = 1
music.playMelody("C D E F G A B C5 ", 300)
蛇頭 = game.createSprite(1, 2)
let 水果 = game.createSprite(randint(0, 4), randint(0, 4))
水果.set(LedSpriteProperty.Blink, 100)
蛇頭.set(LedSpriteProperty.Direction, 90)
let 蛇X陣列 = [1]
let 蛇Y陣列 = [2]
let 蛇身長度 = 0
game.setScore(0)
basic.forever(function () {
    if (蛇頭.isTouching(水果)) {
        game.addScore(1)
        水果.set(LedSpriteProperty.X, randint(0, 4))
        水果.set(LedSpriteProperty.Y, randint(0, 4))
        if (game.score() % 2 == 0) {
            蛇X陣列.push(蛇X陣列[蛇身長度])
            蛇Y陣列.push(蛇Y陣列[蛇身長度])
            蛇身長度 += 1
            蛇身各節[蛇身長度] = game.createSprite(蛇X陣列[蛇身長度], 蛇Y陣列[蛇身長度])
        }
    }
})
basic.forever(function () {
    蛇頭.move(1)
    if (蛇X陣列[0] == 蛇頭.get(LedSpriteProperty.X) && 蛇Y陣列[0] == 蛇頭.get(LedSpriteProperty.Y)) {
        game.gameOver()
    }
    i = 蛇身長度
    for (let index = 0; index < 蛇身長度; index++) {
        if (蛇X陣列[i - 1] == 蛇頭.get(LedSpriteProperty.X) && 蛇Y陣列[i - 1] == 蛇頭.get(LedSpriteProperty.Y)) {
            game.gameOver()
        }
        蛇X陣列[i] = 蛇X陣列[i - 1]
        蛇Y陣列[i] = 蛇Y陣列[i - 1]
        蛇身各節[i].set(LedSpriteProperty.X, 蛇X陣列[i])
        蛇身各節[i].set(LedSpriteProperty.Y, 蛇Y陣列[i])
        i += -1
    }
    蛇X陣列[0] = 蛇頭.get(LedSpriteProperty.X)
    蛇Y陣列[0] = 蛇頭.get(LedSpriteProperty.Y)
    basic.pause(1000 - game.score() * 20)
})
