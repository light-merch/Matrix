class Bullet {
    constructor(start_x, start_y, start_z, dx, dy, dz, damage, effect, shape) {
        this.x = start_x;
        this.y = start_y;
        this.z = start_z;
        this.dx = dx;
        this.dy = dy;
        this.dz = dz;
        this.damage = damage;
        this.effect = effect;
        this.body = shape;
        this.body.position.set(this.x, this.y, this.z);
    }
    update(){
        this.x += this.dx;
        this.y += this.dy;
        this.z += this.dz;
        this.body.position.set(this.x, this.y, this.z);
    }
}