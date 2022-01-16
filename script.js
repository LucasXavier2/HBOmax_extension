document.addEventListener('keydown', (event) => {
    let video = document.getElementsByTagName('video')[0]
    let keyName = event.key;
    let timeOffset = 5;

    if (video === undefined) {
        return;
    }

    if (keyName == 'ArrowLeft') {
        video.currentTime -= timeOffset;
    }
    else if (keyName == 'ArrowRight') {
        video.currentTime += timeOffset;
    }
    else if (keyName == 'ArrowUp') {
        video.volume = Math.min(video.volume + 0.1, 1.0)
    }
    else if (keyName == 'ArrowDown') {
        video.volume = Math.max(video.volume - 0.1, 0)
    }

});