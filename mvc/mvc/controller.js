"use strict";

class Controller {
    constructor(model, clock) {
        this.model = model;
        this.buttonStart = clock.querySelector('.start');
        this.buttonStop = clock.querySelector('.stop');
        this.buttonStart.addEventListener('click', () => {
            this.startClock();
            this.buttonStart.disabled = true;
        });
        this.buttonStop.addEventListener('click', () => {
            this.stopClock();
            this.buttonStart.disabled = false;
        });
    }

    startClock () {
        this.model.startClock();
    };

    stopClock () {
        this.model.stopClock()
    }

}
