function drawTriangle(size) {
    for (let i = 1; i <= size; i++) {
        let stars = "";
        for (let j = 1; j <= i; j++) {

            stars = stars + "*";
        }
        console.log(stars);
    }
}

drawTriangle(5);