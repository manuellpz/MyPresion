const calcularPresion = () => {
	let sistolica = parseInt(document.querySelector('#txtSistolica').value);
  let diastolica = parseInt(document.querySelector('#txtDiastolica').value);
  let status = document.querySelector('#status');
  
  if(sistolica >= 180 || diastolica >= 120){
    setAlert("¡Crisis Hipertensiva!",'Emergencia Médica','info','brown')
    // status.className = '';
    // status.className = 'crisis_hipertensiva';
    // status.innerHTML = 'Status: ¡Crisis Hipertensiva! (Emergencia Médica)';
  }else if((sistolica >= 140) || (diastolica >= 90)){
    setAlert("Alta - Hipertenso Grado II",'Recomendacion: Cambios de estilo de vida, 2 diferentes tipos de medicamentos con control mensual hasta que la presión esté controlada','info','red')
    // status.className = '';
    // status.className = 'hipertenso_g2';
    // status.innerHTML = 'Status: Hipertenso Grado 2';
  }else if((sistolica >= 130 && sistolica <= 139) || (diastolica > 80 && diastolica <= 89)){
    setAlert("Alta - Hipertenso Grado I",'Recomendacion: Cambios de estilo de vida, medicación con control mensual hasta que la presión esté controlada','info','darkorange')
    // status.className = '';
    // status.className = 'hipertenso_g1';
    // status.innerHTML = 'Status: Hipertenso Grado 1';
  }else if((sistolica > 120 && sistolica <= 129) || (diastolica <= 80)){
    setAlert("Elevada",'Recomendacion: Cambios de estilo de vida y reevaluacion en 3-6 meses','info','yellow')
    // status.className = '';
    // status.className = 'alta';
    // status.innerHTML = 'Status: Alta';
  }else if((sistolica >= 80 && sistolica <= 120) && (diastolica >= 60 && diastolica <= 80)){
    setAlert("Presion Normal",'Recomendacion: Seguir un estilo de vida saludable y realizar un chequeo cada año','info','green')
    // status.className = '';
    // status.className = 'normal';
    // status.innerHTML = 'Status: Normal';
  }else if(sistolica < 80 || diastolica < 60){
    setAlert("Hipotension",'Recomendacion: Ingerir Azúcar','info','steelblue')
  	// status.className = '';
  	// status.className = 'hipotenso';
  	// status.innerHTML = 'Status: ¡Hipotension!';
  }
  
};