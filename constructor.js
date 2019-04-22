// Write a Particle constructor function

// The constructor takes startX and startY parameters
// Particle will have a property of x that defaults to the value of the argument startX
// Particle will have a property of ythat defaults to the value of the argument startY
// Particle will have a property of velocity that defaults to {x: 0, y: 0}
// Create an empty array named particles
// Write loop to create 100 particles
// x values will be assigned from 0-99
// y will be random from 0 to 500 (Math.random()*500)


class Particle {
    constructor(startX, startY) {
        this.x = startX;
        this.y = startY;
        this.velocity = {x: 0, y: 0};
    }

    getX() {
        return this.x;
    }
    getY() {
        return this.y;
    }
}

const particles = [];
for(let i = 0; i < 100; i++) {
    particles.push(new Particle(i, (Math.random()*500).toFixed(5)));
    console.log(particles[i].getX(), particles[i].getY());
}