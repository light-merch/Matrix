class Bullet {
    constructor(px, py, pz, dx, dy, dz, ax, ay, az, damage, effect, shape) {
        this.pos_x = px;
        this.pos_y = py;
        this.pos_z = pz;
        this.delta_x = dx;
        this.delta_y = dy;
        this.delta_z = dz;
        this.damage = damage;
        this.effect = effect;
        this.body = shape;
        this.body.position.set(this.pos_x, this.pos_y, this.pos_z);
    }
    update(){
        this.pos_x += this.delta_x;
        this.pos_y += this.delta_y;
        this.pos_z += this.delta_z;
        this.body.position.set(this.pos_x, this.pos_y, this.pos_z);
    }
}

class Car {
    constructor(px, py, pz, dx, dy, dz, ax, ay, az, l, w, effect, shape) {
        this.pos_x = px;
        this.pos_y = py;
        this.pos_z = pz;
        this.delta_x = dx;
        this.delta_y = dy;
        this.delta_z = dz;
        this.effect = effect;
        this.body = shape;
        this.body.position.set(this.pos_x, this.pos_y, this.pos_z);
        this.lights = l;
        this.weapon = w;
    }
    update(){
        this.pos_x += this.delta_x;
        this.pos_y += this.delta_y;
        this.pos_z += this.delta_z;
        this.body.position.set(this.pos_x, this.pos_y, this.pos_z);
    }
}