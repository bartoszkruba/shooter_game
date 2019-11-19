package com.mygdx.game.model.pickup

import com.badlogic.gdx.graphics.Texture
import com.mygdx.game.settings.BOUNCER_SPRITE_HEIGHT
import com.mygdx.game.settings.BOUNCER_SPRITE_WIDTH

class BouncerPickup(
        x: Float = 0f,
        y: Float = 0f,
        texture: Texture) : Pickup(
        x,
        y,
        BOUNCER_SPRITE_WIDTH,
        BOUNCER_SPRITE_HEIGHT,
        texture
)