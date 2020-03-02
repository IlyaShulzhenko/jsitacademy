(function(){
    const clockSvg = document.getElementById('svg');
    console.log(clockSvg);
    const xmls = 'http://www.w3.org/2000/svg';
    const width = parseFloat(clockSvg.getAttributeNS(null, 'width'));
    const height = parseFloat(clockSvg.getAttributeNS(null, 'height'));
    const radiusClock = width / 2;
    const radiusNumber = 0.75 * radiusClock;

    let widthHalf = width / 2;
    let heightHalf = height / 2;

    function drawClock(clock) {

        let clockStyle = document.createElementNS(xmls, 'circle');

        clockStyle.setAttributeNS(null, 'cx', widthHalf);
        clockStyle.setAttributeNS(null, 'cy', heightHalf);
        clockStyle.setAttributeNS(null, 'r', widthHalf);
        clockStyle.setAttributeNS(null, 'fill', 'yellow');
        clockStyle.setAttributeNS(null, 'stroke', 'none');

        clockSvg.appendChild(clockStyle);
    }
    drawClock();

    function drawHours(hour, hourValue) {
    
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
        }
    }
    drawHours();

    function drawArrows(arrowHour, arrowMinute, arrowSecond) {

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
    }
    drawArrows();

    const digitalСlock = document.createElementNS(xmls, 'text');
    clockSvg.appendChild(digitalСlock);

    digitalСlock.setAttributeNS(null, 'x', 300);
    digitalСlock.setAttributeNS(null, 'y', 200);
    digitalСlock.setAttributeNS(null, 'id', 'digital-clock');
    digitalСlock.style.fontSize = '2rem';
    digitalСlock.style.fontWeight = 'bold';
    digitalСlock.style.textAnchor = 'middle';

    window.onload = function operation() {

        setInterval(moveArrows, 1000);

        function moveArrows() {

            const movement = new Date();
            let seconds = movement.getSeconds() * 6;
            let minutes = movement.getMinutes() * 6;
            let hours = (movement.getHours() + movement.getMinutes() / 60 + movement.getSeconds() * 3600) * 30;

            let hoursStyle = document.getElementById('hours');
            let minutesStyle = document.getElementById('minutes');
            let secondsStyle = document.getElementById('seconds');
        
            secondsStyle.setAttributeNS(null, 'transform', 'rotate(' + seconds + ' 300 300)');
            minutesStyle.setAttributeNS(null, 'transform', 'rotate(' + minutes + ' 300 300)');
            hoursStyle.setAttributeNS(null, 'transform', 'rotate(' + hours + ' 300 300)');
        
            function displayTime(set) {
           
                const digitalHours = (movement.getHours() < 10) ? ('0' + movement.getHours()) : (movement.getHours());
                const digitalMinutes = (movement.getMinutes() < 10) ? ('0' + movement.getMinutes()) : (movement.getMinutes());
                const digitalSeconds = (movement.getSeconds() < 10) ? ('0' + movement.getSeconds()) : (movement.getSeconds());

                document.getElementById("digital-clock").textContent = `${digitalHours} : ${digitalMinutes} : ${digitalSeconds}`;
            }
            displayTime();
        }
    }
    }());
