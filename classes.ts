class Vehicle {
    constructor(public color: string) {}
    protected honk(): void {
        console.log('beep')
    }
}

const vehicle = new Vehicle('orange')
// Vehicle is the "super class" or the "parent class"
class Car extends Vehicle {
    constructor(public wheels: number, color: string) {
        super(color) //reference to the constructor method in the parent
    }
    private drive(): void {
        console.log('vroom')
    }

    startDrivingProcess(): void {
        this.drive()
        this.honk()
    }
}

// const vehicle = new Vehicle()
const car1 = new Car(4,'red')

// car1.startDrivingProcess()