package com.mygdx.game.model.weapon

import com.mygdx.game.model.projectile.ProjectileType
import com.mygdx.game.settings.BOUNCER_BULLETS_IN_CHAMBER
import com.mygdx.game.settings.BOUNCER_RELOAD_TIME

class Bouncer : Weapon(BOUNCER_RELOAD_TIME, BOUNCER_BULLETS_IN_CHAMBER, ProjectileType.BOUNCER)