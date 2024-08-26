const Mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        this.BMI = Math.round(this.BMI * 100) / 100;
        return this.BMI;
    }
}

const John = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / this.height ** 2;
        this.BMI = Math.round(this.BMI * 100) / 100;
        return this.BMI;
    }
}

if (Mark.calcBMI() > John.calcBMI()) {
    console.log(`${Mark.fullName}'s BMI (${Mark.BMI}) is higher than ${John.fullName}'s BMI (${John.BMI})`);
} else if (John.BMI > Mark.BMI) {
    console.log(`${John.fullName}'s BMI (${John.BMI}) is higher than ${Mark.fullName}'s BMI (${Mark.BMI})`);
} else {
    console.log(`Both ${Mark.fullName} and ${John.fullName} have the same BMI (${Mark.BMI})`);
}