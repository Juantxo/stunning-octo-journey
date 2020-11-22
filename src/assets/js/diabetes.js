((window, c2) => {
    window["diabetes"] = {};
    window["diabetes"]["mode"] = "mode";

    let formForm = document.forms["diabetes_form"];
    let modalDiv = document.getElementById("modal_window");
    let submitButton = document.getElementById("submit_button");

    let closeModalSpan = document.getElementsByClassName("close")[0];
    let modal_header_span = document.getElementById("modal_header_span");
    let modal_body1_span = document.getElementById("modal_body1_span");
    let modal_body2_span = document.getElementById("modal_body2_span");
    let modal_footer_span = document.getElementById("modal_footer_span");


    let pathologiesModalSetup = {
        header: "Atención",
        content: "Esta patología no permite asegurar ningún riesgo.",
        action: "",
        footer: "NacionalRe"
    }

    let birthdayModalSetup = {
        header: "Atención",
        content: "La fecha seleccionada no puede ser mayor que la fecha actual.",
        action: "Por favor, escoga una fecha de nuevo",
        footer: "NacionalRe"
    }


    let genderVal = formForm.elements['gender'].value;
    let birthdayInput = formForm.elements['birthday'];
    let birthdayVal = formForm.elements['birthday'].value;

    let diabetesVal = formForm.elements['diabetes'].value;

    let diabetesYearsInput = formForm.elements['years_diabetes'];
    let diabetesYearsVal = formForm.elements['years_diabetes'].value;

    let weightInput = formForm.elements['weight'];
    let weightVal = formForm.elements['weight'].value;

    let heightInput = formForm.elements['height'];
    let heightVal = formForm.elements['height'].value;

    let body_massInput = formForm.elements['body_mass'];
    let body_massVal = formForm.elements['body_mass'].value;

    let cigarettesInput = formForm.elements['cigarettes'];
    let cigarettesVal = formForm.elements['cigarettes'].value;

    let cigarsInput = formForm.elements['cigars'];
    let cigarsVal = formForm.elements['cigars'].value;

    let pipesInput = formForm.elements['pipes'];
    let pipesVal = formForm.elements['pipes'].value;

    let winesInput = formForm.elements['wines'];
    let winesVal = formForm.elements['wines'].value;

    let beersInput = formForm.elements['beers'];
    let beersVal = formForm.elements['beers'].value;

    let spiritsInput = formForm.elements['spirits'];
    let spiritsVal = formForm.elements['spirits'].value;
    let insulinVal = formForm.elements['insulin'].value;
    let hemoglobinVal = formForm.elements['hemoglobin'].value;
    let cholesterolVal = formForm.elements['cholesterol'].value;

    // global results
    let _age = '';



    function drawModalWindowInnerHTML(message) {
        modal_header_span.innerHTML = message.header;
        modal_body1_span.innerHTML = message.action;
        modal_body2_span.innerHTML = message.content;
        modal_footer_span.innerHTML = message.footer;
        modalDiv.style.display = "block";
    }

    function openModalWindow(event, message) {
        event.stopPropagation();
        if (event.currentTarget.name === 'cbox') {
            if (event.currentTarget.checked) {
                let pathology = event.currentTarget.nextSibling.data;
                message['action'] = pathology + "."
                drawModalWindowInnerHTML(message);
            }
        }
        if (event.currentTarget.name === 'birthday') {
            drawModalWindowInnerHTML(message);
        }
    };

    // Event listeners
    // 0. Modal Window
    function initModalWindow() {
        closeModalSpan.onclick = function () {
            modalDiv.style.display = "none";
        }
    }
    function initPathologies() {
        // 1. Pathologies
        let pathologyCheckBoxes = document.getElementsByName('cbox');
        this.c2.addEventListenerList(pathologyCheckBoxes, "click", (e) => { openModalWindow(e, pathologiesModalSetup) });
    }
    function initBirthday() {
        // 2. Birthday and age
        birthdayInput.onchange = (e) => {
            let date = new Date(e.currentTarget.value);
            if (!this.c2.yearIsHigher(date)) {
                _age = this.c2.calculate_age(new Date(e.currentTarget.value))
                enableSubmitButton();
            }
            else {
                openModalWindow(e, birthdayModalSetup);
                e.currentTarget.value = "";
            }
        }
    }

    function enableSubmitButton() {
        // we are here --> add event listenert to fields --> only numbers --> enable send
        const fields = ["birthday", "years_diabetes", "weight", "height", "body_mass", "cigarettes", "cigars", "pipes", "wines", "beers", "spirits", "systolic", "diastolic"];
        let i, l = fields.length;
        let emptyFields = [];
        for (i = 0; i < l; i++) {
            let h = formForm[fields[i]];
            if (formForm[fields[i]].value === "") {
                emptyFields.push(fields[i]);
            }
        }
        return emptyFields.length > 0 ? submitButton.disabled = false : submitButton.disabled = true

    }

    // submit
    //formForm.onsubmit = function () {}

    let init = () => {
        initModalWindow();
        initPathologies();
        initBirthday();
    };

    init();



})(document, this.c2);


