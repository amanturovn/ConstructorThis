class Retaurant {
    constructor(titleRetaurant, cuisineType, served = 0) {
        this.titleRetaurant = titleRetaurant;
        this.cuisineType = cuisineType;
        this.served = served;
    }

    call() {
        document.write(` Retaurant : ${this.titleRetaurant}.  <br> Cuisine type : ${this.cuisineType}. <br>`);
    }

    workingMode() {
        let data = new Date();
        let timeOpen = data.getHours();

        if (timeOpen >= 22) {
            document.write(`Sorry, restaurant is closed. <br> Open from 9:00 to 22:00`);
        }
        else if (timeOpen <= 9) {
            document.write(`Sorry, restaurant is closed. <br> Open from 9:00 to 22:00 <br>`);
        }
        else {
            document.write("Restaurant open. <br> Open from 9:00 to 22:00 <br>");
        }
    }

    serve() {
        this.served++;
    }
    setServed(number) {
        this.served = this.served + number;
    }
    showTotalServed() {
        document.write("Visitors : " + this.served + "<br>");
    }
}

let retaurants = new Retaurant("Alatoo", "kyrgyz");
retaurants.call();
retaurants.workingMode();
retaurants.serve();
retaurants.serve();
retaurants.setServed(12);
retaurants.showTotalServed();


document.write("=====================<br>")


class Cars {
    constructor(brand, year, power, color) {
        this.brand = brand;
        this.year = year;
        this.power = power;
        this.color = color;
    }

    characteristic() {
        document.write(`Марка авто : ${this.brand} <br> год выпуска: ${this.year} <br> мощность двигателя : ${this.power} <br>  цвет машины : ${this.color} <br>`);

    }
}

let cars = new Cars("Honda", "2002", "2.4", "black");
cars.characteristic();


document.write("===================== <br>")

class ElectroCars extends Cars {
    constructor(brand, year, power, color, battery) {
        super(brand, year, power, color);
        this.battery = battery;
    }
    promote() {
        document.write(`Powerful ${this.brand} cars on salе`);
    }
}

let electroCars = new ElectroCars("Tesla", "2020", "3", "yellow", "2000wl");
electroCars.characteristic();
electroCars.promote();