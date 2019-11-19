const constants = require('../settings/constants');
const Weapon = require('./Weapon');
const ProjectileType = require('./ProjectileType');

class Bouncer extends Weapon {
    constructor() {
        super(constants.BOUNCER_RELOAD_TIME, constants.BOUNCER_BULLETS_IN_CHAMBER,
            constants.BOUNCER_MAGAZINE_RELOAD_TIME, ProjectileType.BOUNCER)
    }
}

module.exports = Bouncer;