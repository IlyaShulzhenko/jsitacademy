"use strict";

class Model {
    constructor(h, m, s) {
        this.view = null;
        this.hours = h;
        this.minutes = m;
        this.seconds = s;
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
        if (this.seconds > 59) {
            this.seconds = 0;
            this.minutes++;

            if (this.minutes > 59) {
                this.minutes = 0;
                this.hours++;

                if (this.hours > 23) {
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
