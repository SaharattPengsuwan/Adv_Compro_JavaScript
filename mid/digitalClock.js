function digitalClock(time) {
    const H = Math.floor(time / 3600)
    const H_1 = time % 60
    const m = Math.floor((time % 3600) / 60)
    const s = Math.floor(H_1 % 60)
    console.log(H);
    console.log(m);
    console.log(s);
}

digitalClock(5025)