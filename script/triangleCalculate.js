function trangleCalcuate(){
    const triangleBaseInput = document.getElementById('triangle-base');
    const triangleBase = parseFloat(triangleBaseInput.value);
    const triangleHeightInput = document.getElementById('trangle-hight');
    const triangleHeight = parseFloat(triangleHeightInput.value);
    const triangleArea = 0.5*triangleBase*triangleHeight;

    const area = document.getElementById('area');
    area.innerText = triangleArea;
}