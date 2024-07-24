window.onload = function () {
    const textarea = document.getElementById('text-area');
    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const animationSelect = document.getElementById('animation');
    const fontSizeSelect = document.getElementById('fontsize');
    const turboCheckbox = document.getElementById('turbo');
    let timer;
    let frames;
    let currentFrame = 0;
    let interval = 250;

    startButton.onclick = function () {
        frames = textarea.value.split("=====\n");
        currentFrame = 0;
        timer = setInterval(animate, interval);
        startButton.disabled = true;
        stopButton.disabled = false;
        animationSelect.disabled = true;
    };

    stopButton.onclick = function () {
        clearInterval(timer);
        textarea.value = frames.join("=====\n");
        startButton.disabled = false;
        stopButton.disabled = true;
        animationSelect.disabled = false;
    };

    animationSelect.onchange = function () {
        textarea.value = ANIMATIONS[animationSelect.value];
    };

    fontSizeSelect.onchange = function () {
        textarea.style.fontSize = fontSizeSelect.value;
    };

    turboCheckbox.onchange = function () {
        interval = turboCheckbox.checked ? 50 : 250;
        if (startButton.disabled) {
            clearInterval(timer);
            timer = setInterval(animate, interval);
        }
    };

    function animate() {
        textarea.value = frames[currentFrame];
        currentFrame = (currentFrame + 1) % frames.length;
    }
};
