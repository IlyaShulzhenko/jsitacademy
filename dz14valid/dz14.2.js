let formDef1 = [
    { label: 'Название сайта:', kind: 'longtext', name: 'sitename' },
    { label: 'URL сайта:', kind: 'longtext', name: 'siteurl' },
    { label: 'Посетителей в сутки:', kind: 'number', name: 'visitors' },
    { label: "E-mail для связи:", kind: "shorttext", name: "email" },
    {
      label: 'Рубрика каталога:',
      kind: 'kombo',
      name: 'division',
      variants: [
        { text: 'здоровье', value: 1 },
        { text: 'домашний уют', value: 2 },
        { text: 'бытовая техника', value: 3 }
      ]
    },
    {
      label: 'Размещение:',
      kind: 'radio',
      name: 'payment',
      variants: [
        { text: 'бесплатное', value: 1 },
        { text: 'платное', value: 2 },
        { text: 'VIP', value: 3 }
      ]
    },
    { label: 'Разрешить отзывы:', kind: 'check', name: 'votes' },
    { label: 'Описание сайта:', kind: 'memo', name: 'description' },
    { label: 'Опубликовать:', kind: 'submit' }
  ];

  let formDef2 = [
    { label: 'Фамилия:', kind: 'longtext', name: 'lastname' },
    { label: 'Имя:', kind: 'longtext', name: 'firstname' },
    { label: 'Отчество:', kind: 'longtext', name: 'secondname' },
    { label: 'Возраст:', kind: 'number', name: 'age' },
    { label: 'Зарегистрироваться:', kind: 'submit' }
  ];

  let form1 = document.createElement('form');
  form1.setAttribute('action', 'http://fe.it-academy.by/TestForm.php');

  let form2 = document.createElement('form');
  form2.setAttribute('action', 'http://fe.it-academy.by/TestForm.php');

  document.body.appendChild(render(form1, formDef1));
  document.body.appendChild(render(form2, formDef2));

  function render(parentElment, elementObject) {
        let output = document.createElement('div');

        elementObject.forEach(element => {
          let newElement;

          if (element.kind === 'longtext' || element.kind === 'shorttext') {
              const input = renderInput('text', element);

                newElement = renderLabel(element.name, element.label);
                newElement.appendChild(input);
          } else if (element.kind === 'number') {
                const input = renderInput('number', element);

              	newElement = renderLabel(element.name, element.label);
                newElement.appendChild(input);
          } else if (element.kind === 'kombo') {
                newElement = renderSelect(element);
          } else if (element.kind === 'radio') {
                newElement = renderRadio(element);
          } else if (element.kind === 'check') {
              	newElement = renderCheckobox(element);
          } else if (element.kind === 'memo') {
              	newElement = renderTextArea(element);
          } else if (element.kind === 'submit') {
              	newElement = renderSubmit(element);
          }

          parentElment.appendChild(newElement);
        });

        return output.appendChild(parentElment);
  }

  function renderLabel(parentElement, text) {
        const label = document.createElement('label');

        label.textContent = text;

        if (parentElement) {
          label.setAttribute('for', parentElement);
        }

        return label;
  }

  function renderInput(type, element) {
      let input = document.createElement('input');

        input.setAttribute('type', type);
      	input.setAttribute('name', element.name);

      if (element.kind === 'shorttext') {
      	input.setAttribute('maxlength', 30);
      }

      return input;
  }

  function renderSelect(element) {
      const output = document.createElement('div');
      const select = document.createElement('select');
      const variants = element.variants;
      const label = document.createElement('label');

      label.textContent = element.label;
      label.appendChild(select);
      select.setAttribute('name', element.name)
      output.textContent = element.designation;

        for (let i = 0; i < variants.length; i++) {
          const option = document.createElement('option');

          option.setAttribute('value', variants[i].value);
          option.textContent = variants[i].text;

          select.appendChild(option);
        }

        return output.appendChild(label);
  }

  function renderRadio(element) {
      const output = document.createElement('div');
      output.textContent = element.label;

      for (let i = 0; i < element.variants.length; i++) {
          const labelElement = renderLabel(element.variants[i].value,	element.variants[i].text);
          const input = renderInput('radio', element.name);

          input.checked = true;
          input.id = element.variants[i].value;
          input.setAttribute('name', 'placement');
          output.appendChild(input);
          output.appendChild(labelElement);
      }

      return output;
  }

  function renderCheckobox(element) {
      const labelElement = renderLabel(null, element.label);
      const input = renderInput('checkbox', element.name);

      labelElement.appendChild(input);


      return labelElement;
  }

  function renderTextArea(elementObject) {
        let output = document.createElement('div');
        const label = renderLabel(elementObject.name, elementObject.label);
      	const textArea = document.createElement('textArea');

        textArea.setAttribute('name', elementObject.name);
        output.appendChild(label);
      	output.appendChild(textArea);

        return output;
  }

  function renderSubmit(elementObject) {
      let submit = document.createElement('button');

      submit.setAttribute('type', 'submit');
      submit.textContent = elementObject.label;

      return submit;
  }

  const inputTexts = document.querySelectorAll('input[type = "text"]');
  const inputNumbers = document.querySelectorAll('input[type = "number"]');
  const inputRadios = document.querySelector('input[type = "radio"]');
  const checkboxs = document.querySelectorAll('input[type = "checkbox"]');
  const selects = document.querySelector('select');
  const textareas = document.querySelector('textarea');

  let array = [...inputTexts, ...inputNumbers, inputRadios, ...checkboxs, selects,textareas];

  array.forEach(item => {
    item.addEventListener('blur', () => {

        validate(item);
    });
 });

document.addEventListener('submit', function (event){
	event.preventDefault();

	for (let i = 0; i < array.length; i++) {

        	validate(array[i]);
    }
});


function validate(item){
    if(item.value ==='' || this.checked){
        setAside(item);
        const errorText = document.createElement('div');
        errorText.textContent = 'Введите верное значение';
        errorText.className = 'error';
        item.parentElement.appendChild(errorText);
    }else{
        if (item.nextElementSibling) {
            if (item.nextElementSibling.classList.contains('error')) {
                removeErrors();
            }
        }

        addCaption(item);
    }
}

function removeErrors(){
	let errors = document.getElementsByClassName('error');

	for(let i=0; i<errors.length; i++){
    	errors[i].remove();
	}
}

function setAside(input) {
    input.style.borderColor = 'red';

}

function addCaption(input) {
    input.style.borderColor = 'green';
}

