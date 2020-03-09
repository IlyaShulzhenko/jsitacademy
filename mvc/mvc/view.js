"use strict";

class View {
    constructor(model, clock) {
        this.model = model;
        this.clock = clock;
        this.canvas = document.createElement('canvas')
        clock.appendChild(this.canvas);
    }

    set Model(model) {
        this.model = model;
    }

    update() {  
        
        
        let hours = this.model.hours;
        let minutes = this.model.minutes;
        let seconds = this.model.seconds;
        this.drawClock(h, m, s)
	this.svgRun()
    }


    drawClock(h, m, s) {
        
        const clockCanvas = this.canvas;
        clockCanvas.width=600;
        clockCanvas.height=600;
        const context = clockCanvas.getContext('2d');
        const width = parseFloat(clockCanvas.getAttribute('width'));
        const height = parseFloat(clockCanvas.getAttribute('height'));
        const widthHalf = width / 2;
        const heightHalf = height / 2;
        const bias = 30;
        const radiusClock = widthHalf;
        const radiusNumber = 0.8 * radiusClock;
	
        context.beginPath();
        context.arc(300, 300, 300, 0, 2*Math.PI);
        context.fillStyle = 'yellow';
        context.fill();
    
        for (let i = 1; i <= 12; i++) {
    
            const biasRad = (bias * i * (2 * Math.PI)) / 360;
            const centerCircleX = radiusClock + radiusNumber * Math.sin(biasRad);
            const centerCircleY = radiusClock - radiusNumber * Math.cos(biasRad);
            
            context.beginPath();
            context.arc(centerCircleX, centerCircleY, 40, 0, 2 * Math.PI);
            context.fillStyle = 'green';
            context.fill();
    
            context.fillStyle = 'black';
            context.textAlign = 'center';
            context.textBaseline = 'middle';
            context.font = 'normal bold 2rem Time New Roman';
            context.fillText(i, centerCircleX, centerCircleY); 
    
            const time = `${h} : ${m} : ${s}`;
            context.fillStyle = 'black';
            context.font = 'normal 2rem Time New Roman';
            context.fillText(time, 300, 200);
    
            const seconds = s * 6 - 90;
            const minutes = m * 6 - 90;
            const hours = (h + m / 60 + s * 3600) * 30 - 90;
    
            let secondsRadian = seconds * 2 * Math.PI / 360,
                minutesRadian = minutes * 2 * Math.PI / 360,
                hoursRadian = hours * 2 * Math.PI / 360;
    
            let secondLength = 250,
                minuteLength = 210,
                hourLength = 170;
    
            let secondX = radiusClock + secondLength * Math.cos(secondsRadian),
            secondY = radiusClock + secondLength * Math.sin(secondsRadian);
    
            context.beginPath();
            context.strokeStyle = 'white';
            context.lineWidth = 4;
            context.lineCap = 'round';
            context.moveTo(300, 300);
            context.lineTo(secondX, secondY);
            context.stroke();
    
            let minuteX = radiusClock + minuteLength * Math.cos(minutesRadian),
                minuteY = radiusClock + minuteLength * Math.sin(minutesRadian);
    
            context.beginPath();
            context.strokeStyle = 'red';
            context.lineWidth = 4;
            context.lineCap = 'round';
            context.moveTo(300, 300);
            context.lineTo(minuteX, minuteY);
            context.stroke();
    
            let hourX = radiusClock + hourLength * Math.cos(hoursRadian),
                hourY = radiusClock + hourLength * Math.sin(hoursRadian);
    
            context.beginPath();
            context.strokeStyle = 'black';
            context.lineWidth = 4;
            context.lineCap = 'round';
            context.moveTo(300, 300);
            context.lineTo(hourX, hourY);
            context.stroke();
        }   

    }
    svgClock(){
        const clockSvg = document.getElementById('svg');
        
        const xmls = 'http://www.w3.org/2000/svg';
        const width = parseFloat(clockSvg.getAttributeNS(null, 'width'));
        const height = parseFloat(clockSvg.getAttributeNS(null, 'height'));
        const radiusClock = width / 2;
        const radiusNumber = 0.75 * radiusClock;
        
        let widthHalf = width / 2;
        let heightHalf = height / 2;
        
        
        
            let clockStyle = document.createElementNS(xmls, 'circle');
        
            clockStyle.setAttributeNS(null, 'cx', widthHalf);
            clockStyle.setAttributeNS(null, 'cy', heightHalf);
            clockStyle.setAttributeNS(null, 'r', widthHalf);
            clockStyle.setAttributeNS(null, 'fill', 'yellow');
            clockStyle.setAttributeNS(null, 'stroke', 'none');
        
            clockSvg.appendChild(clockStyle);
        
        
        
            
            const bias = 30; 
        
            for (let i = 1; i <= 12; i++) {
        
                let hourCircle = document.createElementNS(xmls, 'circle');
                clockSvg.appendChild(hourCircle);
        
                let biasRadian = (bias * i * Math.PI) / 180;
        
                let hourCenterX = radiusClock + radiusNumber * Math.sin(biasRadian);
                let hourCenterY = radiusClock - radiusNumber * Math.cos(biasRadian);
        
                hourCircle.setAttributeNS(null, 'cx', hourCenterX);
                hourCircle.setAttributeNS(null, 'cy', hourCenterY);
                hourCircle.setAttributeNS(null, 'r', 35);
                hourCircle.setAttributeNS(null, 'fill', 'green');
                hourCircle.setAttributeNS(null, 'stroke', 'none');
        
                let text = document.createElementNS(xmls, 'text');
                clockSvg.appendChild(text);
                text.textContent = i;
               
                text.setAttributeNS(null, 'x', hourCenterX);
                text.setAttributeNS(null, 'y', hourCenterY + 13);
                text.style.width = '90';
                text.style.height = '90';
                text.style.fontSize = '40';
                text.style.fontWeight = 'bold';
                text.style.textAnchor = 'middle';
	    	svgRun()
            }
        
        
        
        
            arrowHour = document.createElementNS(xmls, 'line');
        
            arrowHour.setAttributeNS(null, 'x1', widthHalf);
            arrowHour.setAttributeNS(null, 'x2', widthHalf);
            arrowHour.setAttributeNS(null, 'y1', widthHalf);
            arrowHour.setAttributeNS(null, 'y2', 100);
            arrowHour.setAttributeNS(null, 'stroke', 'black');
            arrowHour.setAttributeNS(null, 'stroke-linecap', 'round');
            arrowHour.setAttributeNS(null, 'stroke-width', 6);
            arrowHour.setAttributeNS(null, 'id', 'hours');
        
            clockSvg.appendChild(arrowHour);
        
            arrowMinute = document.createElementNS(xmls, 'line');
         
            arrowMinute.setAttributeNS(null, 'x1', widthHalf);
            arrowMinute.setAttributeNS(null, 'x2', widthHalf);
            arrowMinute.setAttributeNS(null, 'y1', widthHalf);
            arrowMinute.setAttributeNS(null, 'y2', 60);
            arrowMinute.setAttributeNS(null, 'stroke', 'red');
            arrowMinute.setAttributeNS(null, 'stroke-linecap', 'round');
            arrowMinute.setAttributeNS(null, 'stroke-width', 4);
            arrowMinute.setAttributeNS(null, 'id', 'minutes');
         
            clockSvg.appendChild(arrowMinute);
        
            arrowSecond = document.createElementNS(xmls, 'line');
            
            arrowSecond.setAttributeNS(null, 'x1', widthHalf);
            arrowSecond.setAttributeNS(null, 'x2', widthHalf);
            arrowSecond.setAttributeNS(null, 'y1', widthHalf);
            arrowSecond.setAttributeNS(null, 'y2', 40);
            arrowSecond.setAttributeNS(null, 'stroke', 'white');
            arrowSecond.setAttributeNS(null, 'stroke-linecap', 'round');
            arrowSecond.setAttributeNS(null, 'stroke-width', 2);
            arrowSecond.setAttributeNS(null, 'id', 'seconds');
            
            clockSvg.appendChild(arrowSecond);
        
        
        const digitalСlock = document.createElementNS(xmls, 'text');
        clockSvg.appendChild(digitalСlock);
        
        digitalСlock.setAttributeNS(null, 'x', 300);
        digitalСlock.setAttributeNS(null, 'y', 200);
        digitalСlock.setAttributeNS(null, 'id', 'digital-clock');
        digitalСlock.style.fontSize = '2rem';
        digitalСlock.style.fontWeight = 'bold';
        digitalСlock.style.textAnchor = 'middle';
    }
	svgRun(){    
                   
            let seconds = s * 6;
            let minutes = m * 6;
            let hours = (h + m / 60 + s * 3600) * 30;
    
            let hoursStyle = document.getElementById('hours');
            let minutesStyle = document.getElementById('minutes');
            let secondsStyle = document.getElementById('seconds');
            
            secondsStyle.setAttributeNS(null, 'transform', 'rotate(' + seconds + ' 300 300)');
            minutesStyle.setAttributeNS(null, 'transform', 'rotate(' + minutes + ' 300 300)');
            hoursStyle.setAttributeNS(null, 'transform', 'rotate(' + hours + ' 300 300)');
            
            
               
                const digitalHours = (h < 10) ? ('0' + h) : (h);
                const digitalMinutes = (m < 10) ? ('0' + m) : (m);
                const digitalSeconds = (s < 10) ? ('0' + s) : (s);
    
                document.getElementById("digital-clock").textContent = `${digitalHours} : ${digitalMinutes} : ${digitalSeconds}`;
        }    
   }
       
     
        
    
      
