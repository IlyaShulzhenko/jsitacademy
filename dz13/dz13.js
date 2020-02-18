llet formDef1= [
    {label: 'Название сайта:' ,kind:'longtext', name:'sitename'},
    {label: 'URL сайта:' ,kind:'longtext', name:'siteurl'},
    {label: 'Посетителей в сутки:' ,kind:'number', name:'visitors'},
    {label: 'E-mail для связи:' ,kind:'shorttext', name:'email'},
    {label: 'Рубрика каталога:' ,kind:'kombo', name:'division',
    variants:[{text:'здоровье', value:1}, {text:'домашний уют', value:2}, {text:'бытовая техника', value:3}]},
    {label: 'Размещение:' ,kind:'radio', name:'payment',
    variants: [{text:'бесплатное', value:1}, {text:'платное', value:2}, {text:'VIP', value:3}]},
    {label: 'Разрешить отзывы:', kind:'check', name:'votes'},
    {label: 'Описание сайта:' ,kind:'memo', name:'description'},
    {label: 'Опубликовать:' ,kind:'submit'},
];

let formDef2=
[
    {label: 'Фамилия:', kind:'longtext', name:'lastname'},
    {label: 'Имя:', kind:'longtext', name:'firstname'},
    {label: 'Отчество:', kind:'longtext', name:'secondname'},
    {label: 'Возраст:', kind:'number', name:'age'},
    {label: 'Зарегистрироваться:', kind:'submit'},
];

let form1 = document.createElement('form');
form1.setAttribute('action', 'http://fe.it-academy.by/TestForm.php');

let form2 = document.createElement('form');
form2.setAttribute('action', 'http://fe.it-academy.by/TestForm.php');

document.body.appendChild(render(form1, formDef1));
document.body.appendChild(render(form2, formDef2));

function render(parentElment, elementObject) {
    let output = document.createElement('div');

    elementObject.forEach((element) => {
        
        if (element.kind === 'longtext' || element.kind === 'shorttext'){
            let inputRender = document.createElement('div');

            if (element.kind === 'longtext'){
                inputRender = renderInput('text', element.name);               
            } else {
                inputRender = renderInput('text', element.name);  
            }

            const label = renderLabel(element.name, element.label);
        
            label.appendChild(inputRender);
            parentElment.appendChild(label);
        } else if (element.kind === 'number') {
            const inputRender = renderInput('number', element.name);
            const label = renderLabel(element.name, element.label);
            
            label.appendChild(inputRender);
            parentElment.appendChild(label);
        } else if (element.kind === 'radio') {
            let radioButtons = document.createElement('div');
            radioButtons = renderRadio(element.kind, element.label, element.name, element.variants);
    
            parentElment.appendChild(radioButtons);
        } else if (element.kind === 'check') {
            let checkbox = document.createElement('div');
            checkbox = renderCheckobox(element.kind, element.label, element.name, element.variants);

            parentElment.appendChild(checkbox);
        } else if (element.kind === 'memo') {
            let memo = document.createElement('div');
            memo = renderTextArea(element);

            parentElment.appendChild(memo);
        } else if (element.kind === 'submit') {
            let submit = document.createElement('div');
            submit = renderSubmit(element);

            parentElment.appendChild(submit);
        }
    });

    return output.appendChild(parentElment);
}


function renderLabel(parentElement, text) {
    const label = document.createElement('label');
    
    label.setAttribute('for', parentElement);
    label.innerText = text;
    
    return label;
}

function renderInput (type, name) {
    let input = document.createElement('input');
    input.setAttribute('type', type);

    if (name === 'email') {
        input.setAttribute('maxlength', 30);
    }

    input.setAttribute('name', name);

    return input;
}

function renderSelect(name, variants){
    let select = document.createElement('select');
    select.setAttribute('name', name);

    for (let i=0; i<variants.length; i++){
        let option = document.createElement('option');
        option.setAttribute('value', variants[i].value);
        option.innerText = variants[i].text;
        select.appendChild(option);
    }

    return select;
}

function renderRadio (name, label, name, variantsRadio){
    let output = document.createElement('div');
    output.innerText = label;
    for (let i=0; i<variantsRadio.length; i++){
    
        let labelElement = renderLabel(variantsRadio[i].value, variantsRadio[i].text);
        let input = renderInput('radio', name);

        input.id = variantsRadio[i].value;
        output.appendChild(input);
        output.appendChild(labelElement);
    };

    return output;
}

function renderCheckobox(name, label, name){
    let labelElement = renderLabel(name, label);
    let input = renderInput('checkbox', name);
    
    input.id = name;
    labelElement.appendChild(input);
    
    return labelElement;
}

function renderTextArea(elementObject) {
    let output = document.createElement('div');
    const label = renderLabel(elementObject.name, elementObject.label);
    const textArea = document.createElement('textArea');

    textArea.setAttribute('name',elementObject.name);
    output.appendChild(label);
    output.appendChild(textArea);

    return output;
}

function renderSubmit(elementObject) {
    const submit = document.createElement('input');
    submit.setAttribute('type','submit');
    submit.innerText = elementObject.label;

    return submit;
    
}
