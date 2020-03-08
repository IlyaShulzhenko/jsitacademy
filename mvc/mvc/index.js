const containerElemLocal = document.getElementById('clock');

const model = new Model(-3);
const model1 = new Model(-2);
const view = new View(model, containerElemLocal);
const view1 = new View(model1, containerElemLocal);
const controller = new Controller(model, containerElemLocal);
const controller1 = new Controller(model1, containerElemLocal);

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
