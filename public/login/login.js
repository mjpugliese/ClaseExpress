// login.js

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("form");
  
    loginForm.addEventListener("submit", async (event) => {
      event.preventDefault(); // Evita el envío del formulario
  
      // Captura los valores de los campos de entrada
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;
  
      // Datos a enviar al backend
      const loginData = {
        usuario: email,
        contrasena: password,
      };
  console.log(loginData)
      try {
        // Enviar datos al backend con axios
        const response = await axios.post("http://localhost:3000/user/login", loginData);
        
        // Procesa la respuesta del backend
        if (response.status === 200) {
          alert("Inicio de sesión exitoso");
          // Redirige o realiza otra acción
        } else {
          alert("Error de autenticación");
        }
      } catch (error) {
        console.error("Error al iniciar sesión:", error);
        alert("Hubo un problema con el inicio de sesión");
      }
    });
  });
  