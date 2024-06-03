let digits = [];
    for (let i = 0; i < 10; i++) {
        digits[i] = new Image();
        digits[i].src = './digits/' + i + '.jpg';
    }
    function displayTime() {
        let now = new Date();
        let time = [];

        let hrs = now.getHours();
        hrs = (hrs < 10 ? '0' : '') + hrs;
        time[0] = hrs.charAt(0);
        time[1] = hrs.charAt(1);

        let mins = now.getMinutes();
        mins = (mins < 10 ? '0' : '') + mins;
        time[2] = mins.charAt(0);
        time[3] = mins.charAt(1);

        let secs = now.getSeconds();
        secs = (secs < 10 ? '0' : '') + secs;
        time[4] = secs.charAt(0);
        time[5] = secs.charAt(1);

        for (let i = 0; i < time.length; i++) {
            let digit = document.getElementById('d' + i);
            digit.src = digits[time[i]].src;
            digit.alt = time[i];
        }
    }
    window.onload = (function() {
        displayTime();
        setInterval(displayTime, 1000);
    });