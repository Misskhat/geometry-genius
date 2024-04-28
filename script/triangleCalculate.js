// reusable function start
function getInputElementById(inputValue){
    const getInput = document.getElementById(inputValue);
    const getInputValue = parseFloat(getInput.value);
    return getInputValue;
};
function setValueAsInnerText(setValue, area){
    const setValueFrom = document.getElementById(setValue);
    setValueFrom.innerText = area;   
}
// reusable function end
function trangleCalculate(){
    const triangleBaseInput = getInputElementById('triangle-base');
    const triangleHeightInput = getInputElementById('trangle-hight');
    const triangleArea = 0.5*triangleBaseInput*triangleHeightInput;
    setValueAsInnerText('trangle-area', triangleArea);
};
function rectangleCalculate() {
    const rectangleWidthInput = getInputElementById('rectangle-width');
    const rectangleLenghtInput = getInputElementById('rectangle-lenght');
    const rectangleArea = rectangleWidthInput*rectangleLenghtInput;
    setValueAsInnerText('rectangle-area', rectangleArea)
};
function parallelogramCalculate(){
    const parallelogramWidthInput = getInputElementById('parallelogram-width');
    const parallelogramHeightInput = getInputElementById('parallelogram-lenght')
    const parallelogramArea = parallelogramWidthInput * parallelogramHeightInput
    setValueAsInnerText('parallegogram-area', parallelogramArea)
};

function rhombusCalculate(){
    const rhombusd1 = getInputElementById('rhombus-d1');
    const rhombusd2 = getInputElementById('rhombus-d2');
    const rhombusArea = 0.5 * rhombusd1 * rhombusd2;
    setValueAsInnerText('rhombus-area', rhombusArea);
}

function pentagonCalculate(){
    const pentagonPInput = getInputElementById('pentagonP');
    const pentagonBInput = getInputElementById('pentagonB');
    const pentagonArea = pentagonPInput * pentagonBInput;
    setValueAsInnerText('pentagon-area', pentagonArea);
}

