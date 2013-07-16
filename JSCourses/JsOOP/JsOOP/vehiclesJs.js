var spinDirection = Object.freeze({
    CLOCKWISE: 0,
    COUNTERCLOCKWISE: 1
});

var afterburnerSwitch = Object.freeze({
    OFF: 0,
    ON: 1
});

Function.prototype.inherits = function (parentClassOrObject) {
    if (parentClassOrObject.constructor == Function) {
        //Normal Inheritance 
        this.prototype = new parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject.prototype;
    }
    else {
        //Pure Virtual Inheritance 
        this.prototype = parentClassOrObject;
        this.prototype.constructor = this;
        this.prototype.parent = parentClassOrObject;
    }
    return this;
}

function propultionUnits() {
};

propultionUnits.prototype.getAccelertaion = function () {
    throw new Error('Function not implemented for propultionUnits.');
};

function Wheel(radius) {
    this.radius = radius;
    this.getRadius = function getWheelRadius() {
        return this.radius;
    };
};

Wheel.inherits(propultionUnits);

Wheel.prototype.getAccelertaion = function () {
    return parseInt(2 * Math.PI * this.getRadius());
};

function propellingNozzles(power, afterburnerSwitch) {
    this.power = power;
    this.afterburnerSwitch = afterburnerSwitch;
};

propellingNozzles.inherits(propultionUnits);

propellingNozzles.prototype.getAccelertaion = function () {
    if (this.afterburnerSwitch === afterburnerSwitch.ON) {
        return (2 * this.power);
    }
    else {
        return this.power;
    }
};

function propeller(finsNumber, spinDirection) {
    this.numberOfFins = finsNumber;
    this.getFinsNumber = function getPropellerFinsNumber() {
        return this.numberOfFins;
    };
    this.spinDirection = spinDirection;
};

propeller.inherits(propultionUnits);

propeller.prototype.getAcceleration = function () {
    if (this.spinDirection === spinDirection.CLOCKWISE) {
        return this.getFinsNumber();
    } else {
        return -this.getFinsNumber;
    }
};


function Vehicles(speed, propulsionUnits) {
    this.speed = 0;
    this.propulsionUnits = propulsionUnits;
    this.getSpeed = function getVehicleSpeed() {
        return this.speed;
    };
    this.setSpeed = function setVehicleSpeed(speedToAdd) {
        this.speed = speedToAdd;
    };
};

Vehicles.prototype.accelerate = function () {
    var propUnitsLen = this.propulsionUnits.length;
    for (var i = 0; i < propUnitsLen; i++) {
        this.speed += this.propulsionUnits[i].getAcceleration();
    }
};

function LandVehicle(speed, wheels) {
    Vehicle.apply(this, arguments);
};

LandVehicle.inherits(Vehicles);

function AirVehicle(speed, propellingNozzles) {
    Vehicles.apply(this, arguments);
};

AirVehicle.inherits(Vehicles);

AirVehicle.prototype.switchAfterburners = function (afterburnerSwitch) {
    var len = this.propulsionUnits.length;
    for (var i = 0; i < len; i++) {
        if (this.propulsionUnits[i] instanceof propellingNozzles) {
            this.propulsionUnits[i].afterburnerSwitch = afterburnerSwitch;
        }
    }
};

function WaterVehicle(speed, propellers) {
    Vehicles.apply(this, arguments);
};

WaterVehicle.inherits(Vehicles);

WaterVehicle.prototype.setPropellerSpinDirection = function (spinDirection) {
    for (var i = 0; i < this.propulsionUnits.length; i++) {
        if (this.propulsionUnits[i] instanceof propeller) {
            this.propulsionUnits.spinDirection = spinDirection;
        }
    }
};
