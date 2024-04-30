document.addEventListener("DOMContentLoaded", function() {
    var provincesList = document.getElementById("provinces-list");
  
    // Hacer una solicitud a la API para obtener el arreglo de provincias
    fetch("https://www.el-tiempo.net/api/json/v2/provincias")
      .then(response => response.json())
      .then(data => {
        // Una vez que se obtienen los datos, asignarlos a la variable provincias
        var provincias = data.provincias;
  
        // Verificar si se encontró el elemento
        if (provincesList) {
          // Iterar sobre las provincias y crear una tarjeta para cada una
          provincias.forEach(function(provincia) {
            var card = document.createElement("div");
            card.classList.add("col-md-4", "mb-4"); // Bootstrap: Crea columnas de 3 en filas
  
            var cardContent = `
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">${provincia.NOMBRE_PROVINCIA}</h5>
                  <p class="card-text">${provincia.COMUNIDAD_CIUDAD_AUTONOMA}</p>
                </div>
              </div>
            `;
  
            card.innerHTML = cardContent;
            provincesList.appendChild(card);
          });
        } else {
          console.error("No se encontró el elemento con id 'provinces-list'");
        }
      })
      .catch(error => {
        console.error("Error al obtener los datos de la API:", error);
      });
  });
  