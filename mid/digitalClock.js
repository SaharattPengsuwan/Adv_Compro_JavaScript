function digitalClock(time) {
    const H = Math.floor(time / 3600)
    const m = Math.floor((time % 3600) / 60)
    const m = Math.floor((time % 3600) / 60)
    console.log(H);
    console.log(m);
}

digitalClock(5025)