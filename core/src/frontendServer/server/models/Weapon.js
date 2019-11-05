class Weapon {

    constructor(reloadTime, bulletsInChamber) {
        this.reloadTime = reloadTime;
        this.lastShoot = 0;
        this.maxBulletsInChamber = bulletsInChamber;
        this.bulletsInChamber = bulletsInChamber
    }

    canShoot() {
        return new Date().getTime() - this.lastShoot > this.reloadTime & this.bulletsInChamber > 0
    }

    shoot() {
        if (this.canShoot()) {
            this.lastShoot = new Date().getTime();
            this.bulletsInChamber--;
            return true
        } else return false
    }

    reload() {
        this.bulletsInChamber = this.maxBulletsInChamber
    }
}

module.exports = Weapon;