const date = new Date();
const h = date.getHours();
const m = date.getMinutes();
const s = date.getSeconds();
const containerElemLocal = document.getElementById('clock');

const model = new Model(h,m,s);
const view = new View(model, containerElemLocal);
const controller = new Controller(model, containerElemLocal);

model.View = view;
controller.Model = model;
model.updateView();

const containerElemUTC = document.getElementById('clockUTC');

const dateUTC = new Date();
const UTCh = dateUTC.getUTCHours();
const UTCm = dateUTC.getUTCMinutes();
const UTCs = dateUTC.getUTCSeconds();

const modelUTC = new Model(UTCh,UTCm,UTCs);
const viewUTC = new View(modelUTC, containerElemUTC);
const controllerUTC = new Controller(modelUTC, containerElemUTC);

modelUTC.View = viewUTC;
viewUTC.Model = modelUTC;
controllerUTC.Model = modelUTC;
modelUTC.updateView();
