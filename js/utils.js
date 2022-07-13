const setAlert = (title,message,icon,iconColor='') => {
	Swal.fire({
      title:title,
      html:`<h4>${message}</h4>`,
      icon:icon,
      iconColor:iconColor,
      confirmButtonText:'Aceptar'  
    })
}