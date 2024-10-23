export const getPlacePredictions = (val) => {
  return new Promise((resolve, reject) => {
    // Crear el servicio de autocompletado de Google Maps
    const service = new google.maps.places.AutocompleteService();

    // Solicitar predicciones basadas en el input del usuario
    service.getPlacePredictions(
      {
        input: val,
        types: ["address"],
        componentRestrictions: { country: "MX" },
      },
      (predictions, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const formattedPredictions = predictions.map((p) => ({
            label: p.description,
            value: p.place_id,
            place_id: p.place_id,
          }));

          resolve(formattedPredictions);
        } else {
          reject(new Error("Failed to fetch predictions"));
        }
      }
    );
  });
};
