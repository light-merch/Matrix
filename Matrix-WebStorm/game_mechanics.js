class Bullet {
    constructor(px, py, pz, dx, dy, dz, ax, ay, az, damage, effect, shape) {
        this.pos_x = px;
        this.pos_y = py;
        this.pos_z = pz;
        this.delta_x = dx;
        this.delta_y = dy;
        this.delta_z = dz;
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


class Player {
    constructor(pos, delta, angle, shape) {
        this.pos = pos;
        this.delta = delta;
        this.angle = angle; // in radians
        this.lights = false;

        this.body = shape;
        this.body.position.set(this.pos[0], this.pos[1], this.pos[2]);
    }

    update(backwards) {
        var dx = Math.cos(-1 * this.angle) * this.delta;
        var dy = Math.sin(-1 * this.angle) * this.delta;

        if (!backwards) {
            this.pos[0] += dx;
            this.pos[2] += dy;
            //this.pos[1] += this.delta; // future update physics
        } else {
            this.pos[0] -= dx;
            this.pos[2] -= dy;
            //this.pos[1] += this.delta; // future update physics
        }

        this.body.rotation.y = this.angle;
        this.body.position.set(this.pos[0], this.pos[1], this.pos[2]);

    }
}