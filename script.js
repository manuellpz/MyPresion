const calcularPresion = () => {
	let sistolica = parseInt(document.querySelector('#txtSistolica').value);
  let diastolica = parseInt(document.querySelector('#txtDiastolica').value);
  let status = document.querySelector('#status');
  
  if(sistolica > 180 || diastolica > 110){
    status.className = '';
    status.className = 'crisis_hipertensiva';
    status.innerHTML = 'Status: ¡Crisis Hipertensiva! (Emergencia Médica)';
  }else if((sistolica >= 160 && sistolica <= 180) || (diastolica >= 100 && diastolica <= 110)){
    status.className = '';
    status.className = 'hipertenso_g2';
    status.innerHTML = 'Status: Hipertenso Grado 2';
  }else if((sistolica >= 140 && sistolica <= 159) || (diastolica>=90 && diastolica <= 99)){
    status.className = '';
    status.className = 'hipertenso_g1';
    status.innerHTML = 'Status: Hipertenso Grado 1';
  }else if((sistolica > 120 && sistolica <= 139) || (diastolica>80 && diastolica <= 89)){
    status.className = '';
    status.className = 'alta';
    status.innerHTML = 'Status: Alta';
  }else if((sistolica >= 80 && sistolica <= 120) && (diastolica >= 60 && diastolica <= 80)){
    status.className = '';
    status.className = 'normal';
    status.innerHTML = 'Status: Normal';
  }else if(sistolica < 80 || diastolica < 60){
  	status.className = '';
  	status.className = 'hipotenso';
  	status.innerHTML = 'Status: ¡Hipotension!';
  }
  
  
  
  
  
};