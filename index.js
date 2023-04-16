const circle = document.getElementById('circleID')

function paint( color ) {
    circle.style = `background-color: ${ color }`;
}

function randomPaint() {
    const randomNumber = Math.floor( ( Math.random() * 16777215 ) ).toString( 16 );
    circle.style = `background-color: #${ randomNumber }`;
}