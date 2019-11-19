package com.mygdx.game.model.projectile

import com.badlogic.gdx.graphics.Texture
import com.mygdx.game.settings.BOUNCER_BULLET_SPEED
import com.mygdx.game.settings.BOUNCER_PROJECTILE_WIDTH

class BouncerProjectile(
        x: Float = 0f,
        y: Float = 0f,
        xSpeed: Float = 0f,
        ySpeed: Float = 0f,
        texture: Texture) : Projectile(
        x,
        y,
        xSpeed,
        ySpeed,
        texture,
        BOUNCER_PROJECTILE_WIDTH / 2,
        BOUNCER_BULLET_SPEED)