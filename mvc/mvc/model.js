"use strict";

class Model {
    constructor(timeZone) {
        this.view = null;
        this.date = new Date();
        this.date.setTime(this.date.getTime() + (this.date.getTimezoneOffset() / 60) * 60 * 60 * 1000 );
        this.date.setTime(this.date.getTime() + timeZone * 60 * 60 * 1000 );

        this.hours = this.date.getHours();
        this.minutes = this.date.getMinutes();
        this.seconds = this.date.getSeconds();
        this.timer = null;
    }

    set View(view) {
        this.view = view;
    }

    updateView() {
        if (this.view) {
            this.view.update();
        }
    }

    update() {
        if (this.seconds === 60) {
            this.seconds = 0;
            this.minutes++;

            if (this.minutes === 60) {
                this.minutes = 0;
                this.hours++;

                if (this.hours === 60) {
                    this.hours = 0;
                }
            } else {
                this.minutes++;
            }
        } else {
            this.seconds++;
        }

        this.updateView();
    };

    startClock() {
        this.timer = setInterval(() => {
            this.update();
        }, 1000);
    };

    stopClock() {
        clearInterval(this.timer);
        this.timer = null;
    };
    
}
