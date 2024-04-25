function trangleCalculate(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBase = parseFloat(triangleBaseInput.value);
    const triangleHeightInput = document.getElementById('trangle-hight');
    const triangleHeight = parseFloat(triangleHeightInput.value);
    const triangleArea = 0.5*triangleBase*triangleHeight;

    const area = document.getElementById('area');
    area.innerText = triangleArea;
}

function rectangleCalculate() {
    const rectangleWidthInput = document.getElementById('rectangle-width');
    const rectangleWidth = parseFloat(rectangleWidthInput.value);  
    const rectangleLenghtInput = document.getElementById('rectangle-lenght');
    const rectangleLenght = parseFloat(rectangleLenghtInput.value);
    const rectangleArea = rectangleWidth*rectangleLenght;
    console.log(rectangleArea)
    const area = document.getElementById('rectangle-area');
    area.innerText = rectangleArea;
}