namespace SpriteKind {
    export const Tower = SpriteKind.create()
    export const Line = SpriteKind.create()
    export const Tongue = SpriteKind.create()
    export const RetractingTongue = SpriteKind.create()
    export const Mouth = SpriteKind.create()
    export const Timer = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
. . . . . . . . . . . . . . . . 
. 5 5 5 5 5 . . . . . 6 6 6 . . 
5 5 5 5 5 5 5 . . . . 6 6 6 . . 
5 5 5 5 5 5 5 3 3 3 3 6 6 6 . . 
5 5 5 5 5 5 5 3 3 3 3 3 . . . . 
5 5 5 5 5 5 5 3 3 3 3 3 . . . . 
5 5 5 5 5 5 5 3 3 3 3 3 . . . . 
. 5 5 5 5 5 . 3 3 3 3 3 . . . . 
. 9 9 9 9 9 . . . 8 8 8 8 8 . . 
9 9 9 9 9 9 9 . 8 8 8 8 8 8 8 . 
9 9 9 9 9 9 9 . 8 8 8 8 8 8 8 . 
9 9 9 9 9 9 9 . 8 8 8 8 8 8 8 . 
9 9 9 9 9 9 9 . 8 8 8 8 8 8 8 . 
9 9 9 9 9 9 9 . 8 8 8 8 8 8 8 . 
. 9 9 9 9 9 . . . 8 8 8 8 8 . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . e . . . e e . . . . . 
. 7 2 . . e . . . . e e . . . . 
. 7 7 e e e . . . . . e . . . . 
. . 7 e . . . . . . . e e e . . 
. . e . e e . . . e e e e e . . 
. e e . . e e e e e . . . . . . 
. e . . . e e c e e e . . . . . 
. . . . . e c e e c e . . e e . 
. e e . . e e e e e e e e e . . 
e e . e . e e e e e e . . . . . 
. . . . . e e e c e e . . . . . 
. . . . e e e e e e e e e . . . 
. . . e . . . a . . e . e e . . 
. . . . e . a a a a e . . e e . 
. . e e e . . . . . . . . . e . 
. . e . . e . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile3 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . e e e . . . . . . 
. . . . . e e e e e e . . . . . 
. . . . e e f f e e e e . . . . 
. . . e e e f f e f f f e . . . 
. . e e e e e e e f f f e . . . 
. . e e f f f e e f f f e . . . 
. . e e f f f e e e e e e . . . 
. . e e f f f e e e e e e . . . 
. e e e e e e e f f e e e . . . 
. e e e e e e e f e e e e e . . 
e e f f f e e e e e f f f e e e 
e e f f f e f f f e f f f e f f 
e e f f f e f f f e f f f e e f 
e e e e e e f f f e e e e e e e 
`
    //% blockIdentity=images._tile
    export const tile4 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. . 8 . . . . . . . . . . 8 . . 
. . 8 . . . . . . . . . . 8 . . 
. . 8 . . 8 . . . . 8 . . 8 . . 
. . 8 . . . 8 . . 8 . . . 8 . . 
. . 8 . . . . 8 8 . . . . 8 . . 
. . 8 . . . . 8 8 . . . . 8 . . 
. . 8 . . . 8 . . 8 . . . 8 . . 
. . 8 . . 8 . . . . 8 . . 8 . . 
. . 8 . . . . . . . . . . 8 . . 
. . 8 . . . . . . . . . . 8 . . 
. . 8 8 8 8 8 8 8 8 8 8 8 8 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile5 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 7 7 7 . . . 
. . . . 7 7 7 . . 7 7 7 7 7 . . 
. . . 7 7 7 7 . 7 7 7 7 7 7 . . 
. . . 7 7 7 7 . 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 . 7 7 7 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 7 7 7 7 7 3 7 7 7 . . . 
. . 7 7 7 7 3 7 3 7 7 7 7 . . . 
. . 7 7 7 7 7 3 3 7 7 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 . . . . 
. . . 7 7 7 7 7 7 7 7 7 . . . . 
. . . . 7 7 7 7 7 7 . . . . . . 
. . . . . 7 7 7 7 7 . . . . . . 
. . . . 7 7 . . . . . . . . . . 
`
}
sprites.onCreated(SpriteKind.Tower, function (sprite) {
    timer(2000, "tower", sprite)
})
sprites.onDestroyed(SpriteKind.Timer, function (sprite) {
    if (sprites.readDataString(sprite, "key") == "tower") {
        frog = sprites.readDataSprite(sprite, "data")
        timer(2000, "tower", frog)
        towerAttack(frog)
    }
})
sprites.onDestroyed(SpriteKind.RetractingTongue, function (sprite) {
    sprites.readDataSprite(sprite, "line").destroy()
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Tongue, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.setKind(SpriteKind.RetractingTongue)
    otherSprite.setFlag(SpriteFlag.DestroyOnWall, false)
    otherSprite.setFlag(SpriteFlag.Ghost, true)
    otherSprite.setImage(img`
. . f f . . . . . . . . . . . . 
. f 5 f f . . . f . f . . . . . 
f f 5 5 f f . f 1 1 . f . . . . 
f 5 5 f f f f . 1 f f . . . . . 
. f f f 5 5 5 f . f 1 1 f . . . 
. . . f 5 2 2 2 2 2 1 1 . . . . 
. . . f 5 2 2 2 2 2 . f f . . . 
. . . f f 2 2 2 2 2 f . . . . . 
. . . . f 2 2 2 2 2 f f . . . . 
. . . . . 2 2 2 2 2 5 f f . . . 
. . . . . 2 2 2 2 2 5 f f . . . 
. . . . . . 2 2 2 2 5 f f . . . 
. . . . . . . . . f f f f . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . f . . . . 
`)
    otherSprite.follow(sprites.readDataSprite(sprites.readDataSprite(otherSprite, "source"), "mouth"), 200)
    info.changeScoreBy(1)
})
function getNearestEnemy (tower: Sprite) {
    minDist2 = 999999
    for (let value of sprites.allOfKind(SpriteKind.Enemy)) {
        if (!(sprites.readDataBoolean(value, "targeted"))) {
            distanceBetweenSquared(value, tower)
            if (dist2 < minDist2) {
                nearestEnemy = value
                minDist2 = dist2
            }
        }
    }
    minDist = Math.sqrt(minDist2)
}
function cloneSprite (sprite: Sprite) {
    newSprite = sprites.create(sprite.image, sprite.kind())
    newSprite.x = sprite.x
    newSprite.y = sprite.y
}
function buildTower () {
    if (5 <= info.score()) {
        frog = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 4 8 4 8 . . . . . . . . . . 
. f 1 4 4 4 8 4 8 . . . . . . . 
4 1 1 4 4 4 4 4 4 4 8 . . . . . 
4 4 4 4 4 4 4 4 4 4 4 8 . . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 8 4 . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
. . . 4 4 4 4 4 4 4 4 4 4 4 . . 
. . . . 4 4 4 4 4 4 4 4 4 4 . . 
. . . . . 4 8 4 8 8 8 4 4 4 8 8 
. . . 8 8 4 8 8 8 8 8 8 8 4 4 4 
. . 8 4 8 8 8 8 8 8 8 8 8 4 . . 
. . 4 8 8 8 8 8 8 4 4 4 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Tower)
        tiles.placeOnTile(frog, buildLocation)
        info.changeScoreBy(-5)
        frogMouth = sprites.create(image.create(1, 1), SpriteKind.Mouth)
        sprites.setDataSprite(frog, "mouth", frogMouth)
        frogMouth.setPosition(frog.left + 1, frog.top + 7)
    }
}
function lineBetween (s1: Sprite, s2: Sprite, color: number, width: number) {
    lineSprite = sprites.create(image.create(scene.screenWidth(), scene.screenHeight()), SpriteKind.Line)
    lineSprite.setFlag(SpriteFlag.RelativeToCamera, true)
    lineSprite.setFlag(SpriteFlag.Ghost, true)
    lineSprite.left = 0
    lineSprite.top = 0
    sprites.setDataSprite(lineSprite, "source", s1)
    sprites.setDataSprite(lineSprite, "target", s2)
    sprites.setDataNumber(lineSprite, "color", color)
}
function timer (duration: number, key: string, data: Sprite) {
    timerSprite = sprites.create(image.create(0, 0), SpriteKind.Timer)
    timerSprite.setFlag(SpriteFlag.Ghost, true)
    timerSprite.setFlag(SpriteFlag.Invisible, true)
    timerSprite.lifespan = duration
    sprites.setDataString(timerSprite, "key", key)
    sprites.setDataSprite(timerSprite, "data", data)
}
function distanceBetweenSquared (s1: Sprite, s2: Sprite) {
    dist2 = (s1.x - s2.x) ** 2 + (s1.y - s2.y) ** 2
}
function shootIntoOpen (frog: Sprite) {
    tongueTip = sprites.createProjectileFromSprite(img`
. . . 8 9 . . . 
. . 9 1 1 9 . . 
. . 1 1 4 . . . 
. . . 9 9 . . . 
`, frog, 1, 1)
    if (frog.tileKindAt(TileDirection.Top, myTiles.tile0)) {
        tongueTip.vy = -50
    } else if (frog.tileKindAt(TileDirection.Right, myTiles.tile0)) {
        tongueTip.vx = 50
    } else if (frog.tileKindAt(TileDirection.Bottom, myTiles.tile0)) {
        tongueTip.vy = 50
    } else if (frog.tileKindAt(TileDirection.Left, myTiles.tile0)) {
        tongueTip.vx = -50
    }
}
function towerAttack (tower: Sprite) {
    getNearestEnemy(tower)
    if (minDist < 64) {
        sprites.setDataBoolean(nearestEnemy, "targeted", true)
        tongueTip = sprites.create(img`
. . . 2 2 . . . 
. . 2 2 2 2 . . 
. . 2 2 2 2 . . 
. . . 2 2 . . . 
`, SpriteKind.Tongue)
        tongueTip.x = tower.x
        tongueTip.y = tower.y
        tongueTip.follow(nearestEnemy, 100)
        sprites.setDataSprite(tongueTip, "source", tower)
        tongueTip.setFlag(SpriteFlag.AutoDestroy, false)
        tongueTip.setFlag(SpriteFlag.DestroyOnWall, false)
        lineBetween(sprites.readDataSprite(tower, "mouth"), tongueTip, 2, 1)
        tower.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 4 8 4 8 . . . . . . . . . . 
. f 1 4 4 4 8 4 8 . . . . . . . 
4 1 1 4 4 4 4 4 4 4 8 . . . . . 
4 4 4 4 4 4 4 4 4 4 4 8 . . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 8 4 . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
. . . 4 4 4 4 4 4 4 4 4 4 4 . . 
. . . . 4 4 4 4 4 4 4 4 4 4 . . 
. . . . . 4 8 4 8 8 8 4 4 4 8 8 
. . . 8 8 4 8 8 8 8 8 8 8 4 4 4 
. . 8 4 8 8 8 8 8 8 8 8 8 4 . . 
. . 4 8 8 8 8 8 8 4 4 4 . . . . 
. . . . . . . . . . . . . . . . 
`)
        sprites.setDataSprite(tongueTip, "line", lineSprite)
        if (0 < nearestEnemy.x - tongueTip.x) {
            tower.image.flipX()
            sprites.readDataSprite(tower, "mouth").x = tower.right - 1
        }
    }
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (canBuild) {
        buildTower()
    }
})
sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    sprite.z = -100
})
scene.onOverlapTile(SpriteKind.Enemy, myTiles.tile1, function (sprite, location) {
    game.over(false)
})
sprites.onDestroyed(SpriteKind.Tower, function (sprite) {
    cloneSprite(sprite)
})
function updateLine (lineSprite: Sprite) {
    source = sprites.readDataSprite(lineSprite, "source")
    destination = sprites.readDataSprite(lineSprite, "target")
    if (source.z == -100 || destination.z == -100) {
        lineSprite.destroy()
    } else {
        lineSprite.image.fill(0)
        lineSprite.image.drawLine(source.x - scene.cameraLeft(), source.y - scene.cameraTop(), destination.x - scene.cameraLeft(), destination.y - scene.cameraTop(), sprites.readDataNumber(lineSprite, "color"))
    }
}
sprites.onDestroyed(SpriteKind.Tongue, function (sprite) {
    sprites.readDataSprite(sprite, "line").destroy()
})
function launchAt (projectile: Sprite, target: Sprite, speed: number) {
    x = target.x - projectile.x
    y = target.y - projectile.y
    distanceBetweenSquared(target, projectile)
    dist = Math.sqrt(dist2)
    x = x / dist
    y = y / dist
    x = x * speed
    y = y * speed
    projectile.vx = x
    projectile.vy = y
}
let wasp: Sprite = null
let dist = 0
let y = 0
let x = 0
let destination: Sprite = null
let source: Sprite = null
let canBuild = false
let tongueTip: Sprite = null
let timerSprite: Sprite = null
let lineSprite: Sprite = null
let frogMouth: Sprite = null
let buildLocation: tiles.Location = null
let newSprite: Sprite = null
let minDist = 0
let nearestEnemy: Sprite = null
let dist2 = 0
let minDist2 = 0
let frog: Sprite = null
scene.setBackgroundColor(6)
tiles.setTilemap(tiles.createTilemap(
            hex`1000100006060606060606060606060606060606060500000000000006060000000000060600000000060000090600000007000606000000000600000906000000000006060606060606000009060600000000060600000000000000060606000000000606000000000000000606000000000006060600000606060606060000000000060609000006060606060600000000000606090000060606060606060606000006060900000606060606060606060000060609000006060606060606060600000606060000000609090906090906000006060000000000000000000000000000060600000000000000000000000000000606060606060606060606060606060606`,
            img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . 2 2 . . . . . 2 
2 . . . . 2 . . 2 2 . . . . . 2 
2 . . . . 2 . . 2 2 . . . . . 2 
2 2 2 2 2 2 . . 2 2 2 . . . . 2 
2 . . . . . . . 2 2 2 . . . . 2 
2 . . . . . . . 2 2 . . . . . 2 
2 2 . . 2 2 2 2 2 2 . . . . . 2 
2 2 . . 2 2 2 2 2 2 . . . . . 2 
2 2 . . 2 2 2 2 2 2 2 2 2 . . 2 
2 2 . . 2 2 2 2 2 2 2 2 2 . . 2 
2 2 . . 2 2 2 2 2 2 2 2 2 . . 2 
2 2 . . . 2 2 2 2 2 2 2 2 . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,sprites.castle.tilePath1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles24,sprites.builtin.forestTiles8,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4,myTiles.tile5],
            TileScale.Sixteen
        ))
let cursor = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(cursor)
cursor.setFlag(SpriteFlag.Ghost, true)
scene.cameraFollowSprite(cursor)
let baseLocation = tiles.getTilesByType(myTiles.tile1)[0]
let spawnerLocation = tiles.getTilesByType(myTiles.tile3)[0]
let path = scene.aStar(spawnerLocation, baseLocation)
info.setScore(20)
game.onUpdate(function () {
    if (cursor.tileKindAt(TileDirection.Center, myTiles.tile5)) {
        canBuild = true
        cursor.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 4 8 4 8 . . . . . . . . . . 
. f 1 4 4 4 8 4 8 . . . . . . . 
4 1 1 4 4 4 4 4 4 4 8 . . . . . 
4 4 4 4 4 4 4 4 4 4 4 8 . . . . 
. 4 4 4 4 4 4 4 4 4 4 4 4 8 4 . 
. 4 4 4 4 4 4 4 4 4 4 4 4 4 4 . 
. . . 4 4 4 4 4 4 4 4 4 4 4 . . 
. . . . 4 4 4 4 4 4 4 4 4 4 . . 
. . . . . 4 8 4 8 8 8 4 4 4 8 8 
. . . 8 8 4 8 8 8 8 8 8 8 4 4 4 
. . 8 4 8 8 8 8 8 8 8 8 8 4 . . 
. . 4 8 8 8 8 8 8 4 4 4 . . . . 
. . . . . . . . . . . . . . . . 
`)
        buildLocation = tilemap.locationOfSprite(cursor)
    } else {
        cursor.setImage(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 . . . . . . . . 8 . . . 
. . . 8 8 8 8 8 8 8 8 8 8 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`)
        canBuild = false
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.RetractingTongue)) {
        frogMouth = sprites.readDataSprite(sprites.readDataSprite(value, "source"), "mouth")
        distanceBetweenSquared(value, frogMouth)
        if (dist2 < 4) {
            value.destroy()
        }
    }
})
game.onUpdate(function () {
    for (let value of sprites.allOfKind(SpriteKind.Line)) {
        updateLine(value)
    }
})
game.onUpdateInterval(500, function () {
    wasp = sprites.create(img`
. . f f . . . . . . . . . . . . 
. f 5 f f . . . f . f . . . . . 
f f 5 5 f f . f 1 1 . f . . . . 
f 5 5 f f f f . 1 f f . . . . . 
. f f f 5 5 5 f . f 1 1 f . . . 
. . . f 5 5 f 5 f f 1 1 . . . . 
. . . f 5 f 5 5 5 f . f f . . . 
. . . f f 5 5 5 f 5 f . . . . . 
. . . . f 5 5 f 5 5 f f . . . . 
. . . . . f f f 5 f 5 f f . . . 
. . . . . . f f 5 f 5 f f . . . 
. . . . . . . . f f 5 f f . . . 
. . . . . . . . . f f f f . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . . f . . . 
. . . . . . . . . . . f . . . . 
`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(wasp, myTiles.tile3)
    wasp.setVelocity(-10, 50)
    scene.followPath(wasp, path)
})
