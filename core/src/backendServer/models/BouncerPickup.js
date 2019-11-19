const Pickup = require('./Pickup');
const constants = require('../settings/constants');
const ProjectileType = require('./ProjectileType');

class BouncerPickup extends Pickup {
    constructor(x, y, id, ammunition = constants.BOUNCER_BULLETS_IN_CHAMBER) {
        super(x, y, constants.BOUNCER_SPRITE_WIDTH, constants.BOUNCER_SPRITE_HEIGHT, ProjectileType.BOUNCER,
            id, ammunition)
    }
}

module.exports = BouncerPickup;