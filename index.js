const canvasPlot = document.getElementById('canvas_plot');
const ctx = canvasPlot.getContext('2d')

const scaleX = 30;
const scaleY = 30;
const shiftNumberNames = 5;
const shiftAxisNames = 20;

const canvasPlotWidth    = (canvasPlot.clientWidth);  
const canvasPlotHeight   = (canvasPlot.clientHeight);  

const xAxis = Math.round(canvasPlotWidth / scaleX / 2) * scaleX;
const yAxis = Math.round(canvasPlotHeight / scaleY / 2) * scaleY;

ctx.fonf = `${Math.round(scaleX / 2)}px Arial`;
ctx.textAlign = 'left';
ctx.textBaseline = 'top'


//Рисуем сетку
ctx.beginPath();
ctx.strokeStyle = '#f5f0e8';

for (let i = 0; i <= canvasPlotWidth; i = i+scaleX) {
    ctx.moveTo(i, 0);
    ctx.lineTo(i, canvasPlotHeight);

    ctx.fillText((i - xAxis) / scaleX, i + shiftNumberNames, yAxis + shiftNumberNames);
}

for (let i = 0; i <= canvasPlotHeight; i = i+scaleY) {
    ctx.moveTo(0, i);
    ctx.lineTo(canvasPlotWidth, i);

    ctx.fillText((yAxis - i) / scaleY, xAxis + shiftNumberNames, i + shiftNumberNames);
}

ctx.stroke();
ctx.closePath();

//Рисуем главные оси

ctx.beginPath();
ctx.strokeStyle = '#000000';
ctx.moveTo(xAxis, 0);
ctx.lineTo(xAxis, canvasPlotHeight);
ctx.fillText('y', xAxis - shiftAxisNames, 0 + shiftAxisNames);

ctx.moveTo(0, yAxis);
ctx.lineTo(canvasPlotWidth, yAxis);
ctx.fillText('x', canvasPlotWidth - shiftAxisNames, yAxis - shiftAxisNames)

ctx.stroke();
ctx.closePath();

//Рисуем график
// y = x^2
ctx.fillStyle = '#ff0000';
for (let i = 0; i <= canvasPlotWidth; i++) {
    const x = (i - xAxis) / scaleX;
    const y = Math.pow(x, 2);
    ctx.fillRect(x * scaleX + xAxis, yAxis - scaleY * y, 4, 4);
}
