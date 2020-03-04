class Bullet {
    constructor(start_x, start_y, start_z, dx, dy, dz, bullet_damage, effect) {
        this.x = start_x;
        this.y = start_y;
        this.z = start_z;
        this.dx = dx;
        this.dy = dy;
        this.dz = dz;
        this.damage = bullet_damage;
        this.effect = effect;
    }
}