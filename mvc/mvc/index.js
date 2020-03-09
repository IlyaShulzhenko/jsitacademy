const containerElemLocal = document.getElementById('clock');

const model = new Model(-3);
const view = new View(model, containerElemLocal);
const controller = new Controller(model, containerElemLocal);


model.View = view;
controller.Model = model;
model.updateView();

const containerElemUTC = document.getElementById('clockUTC');

const modelUTC = new Model(3);
const viewUTC = new View(modelUTC, containerElemUTC);
const controllerUTC = new Controller(modelUTC, containerElemUTC);

modelUTC.View = viewUTC;
viewUTC.Model = modelUTC;
controllerUTC.Model = modelUTC;
modelUTC.updateView();
