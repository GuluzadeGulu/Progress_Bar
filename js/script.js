function setTimeForProgressBar (time) {
    const progressElement = document.getElementById('progress-bar');
    let start = 0;
    time = time * 1000 / 100;

    const interval = setInterval(() => {
        if (start > 100){
            clearInterval(interval)
            document.getElementById('text').style.display = 'block';
        }
        else{
            progressElement.value = start;
            start++;
        }
    }, time)    
}

setTimeForProgressBar(10)