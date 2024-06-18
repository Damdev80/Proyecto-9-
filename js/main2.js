function Form_pesoIdeal(){
    const sexoxd = document.getElementById("sexoxd").value;
    const edadxd = document.getElementById("edadxd").value;
    const pesoxd = document.getElementById("pesoxd").value;
    const estaturaxd = document.getElementById("estaturaxd").value;
    const imc = (pesoxd / (estaturaxd * estaturaxd))*10000;
    let pesoxdIdeal, pesoxdAperder;

    if (sexoxd == "Hombrexd") {
        if (imc < 18.5) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 4)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-warning' role='alert'>
            Tu edad es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estatura es de ${estaturaxd} <br>
            Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Bajo peso</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
            
        </div>`
        } else if (imc >= 18.5 && imc <= 24.9) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 4)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-success' role='alert'>
                Tu edad es ${edadxd} <br>
                Eres un ${sexoxd} <br>
                Tu estatura es de ${estaturaxd} <br>
                Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">normal</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
                
            </div>`
        } else if (imc >= 25 && imc <= 29.9) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 4)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-warning' role='alert'>
            Tu edad es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estatura es de ${estaturaxd} <br>
            Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">sobre peso</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
        </div>`
        } else if (imc >= 30 && imc <= 34.9) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 4)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-danger ' role='alert'>
            Tu edad es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estatura es de ${estaturaxd} <br>
            Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad I</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
        </div>`
        } else if (imc >= 35 && imc <= 39.9) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 4)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-danger ' role='alert'>
            Tu edad es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estatura es de ${estaturaxd} <br>
            Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad II</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
        </div>`
        } else if (imc >= 40 && imc <= 49.9) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 4)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-danger ' role='alert'>
            Tu edad es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estatura es de ${estaturaxd} <br>
            Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad III</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
        </div>`
        } else if (imc >= 50) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 4)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-danger ' role='alert'>
            Tu edadxd es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estatura es de ${estaturaxd} <br>
            Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad 1</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
        </div>`
        } else {
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-light' role='alert'>Error</div>`
        }
    } else if (sexoxd === "Mujerxd") {
        if (imc < 18.5) {
            pesoxdIdeal = estaturaxd - 100 - (estaturaxd - 150) / 2
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-warning' role='alert'>
            Tu edad es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estatura es de ${estaturaxd} <br>
            Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Bajo peso</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
            
        </div>`
        } else if (imc >= 18.5 && imc <= 24.9) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 2)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-success' role='alert'>
                Tu edad es ${edadxd} <br>
                Eres un ${sexoxd} <br>
                Tu estatura es de ${estaturaxd} <br>
                Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Normal</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
                
            </div>`
        } else if (imc >= 25 && imc <= 29.9) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 2)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-warning ' role='alert'>
            Tu edad es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estatura es de ${estaturaxd} <br>
            Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Sobre peso</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
            
        </div>`
        } else if (imc >= 30 && imc <= 34.9) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 2)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-danger ' role='alert'>
            Tu edad es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estatura es de ${estaturaxd} <br>
            Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad I</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
        </div>`
        } else if (imc >= 35 && imc <= 39.9) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 2)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-danger ' role='alert'>
            Tu edad es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estaturaxd es de ${estaturaxd} <br>
            Tu pesoxd atual es de ${pesoxd} <br>
            Tu pesoxd ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad II</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
        </div>`
        } else if (imc >= 40 && imc <= 49.9) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 2)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-danger ' role='alert'>
            Tu edad es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estatura es de ${estaturaxd} <br>
            Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad III</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
        </div>`
        } else if (imc >= 50) {
            pesoxdIdeal = estaturaxd - 100 - ((estaturaxd - 150) / 2)
            pesoxdAperder = pesoxdIdeal - pesoxd;
            Math.abs(pesoxdAperder)
            document.getElementById("resultadoxd").innerHTML =
                `<div class='alert alert-danger ' role='alert'>
            Tu edad es ${edadxd} <br>
            Eres un ${sexoxd} <br>
            Tu estatura es de ${estaturaxd} <br>
            Tu peso atual es de ${pesoxd} <br>
            Tu peso ideal es de <span class="badge text-bg-primary">${pesoxdIdeal}</span> <br>
            Tu imc es: <span class="badge text-bg-primary">Obesidad IV</span> <br>
            Deberias perder <span class="badge text-bg-warning">${pesoxdAperder} Kg</span> <br>
        </div>`
        } else {
            document.getElementById("resultadoxd").innerHTML = `<div class='alert alert-danger' role='alert'><strong>Error: Los campos no están debidamente llenados. Recuerde que solo se aceptan los valores de Masculino (M) y Femenino (F)</strong></div>`
        }
    }
}

