export const getPlacePredictions = async (val) => {
  return new Promise((resolve, reject) => {
    const service = new google.maps.places.AutocompleteService();
    service.getPlacePredictions(
      {
        input: val,
        types: ["address"],
        componentRestrictions: { country: "MX" },
      },
      (predictions, status) => {
        console.log(`output->`, predictions, "status ->", status);
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          const formattedPredictions = predictions.map((p) => ({
            label: p.description,
            value: p.place_id,
            place_id: p.place_id,
          }));
          formattedPredictions.forEach((item) => {
            // console.log(`output-item`, item);
            console.log(`description`, item.label, item.place_id);
          });
          resolve(formattedPredictions);
        } else {
          reject(new Error("Failed to fetch predictions"));
        }
      }
    );
  });
};
