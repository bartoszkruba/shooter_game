const Projectile = require('./Projectile');
const ProjectileType = require('./ProjectileType');
const constants = require('../settings/constants');

class BouncerProjectile extends Projectile {
    constructor(x = 0, y = 0, xSpeed = 0, ySpeed = 0, id, agentId) {
        super(x, y, xSpeed, ySpeed, constants.BOUNCER_PROJECTILE_WIDTH / 2, ProjectileType.BOUNCER,
            constants.BOUNCER_BULLET_SPEED, constants.BOUNCER_PROJECTILE_DAMAGE, id, agentId)
    }
}

module.exports = BouncerProjectile;