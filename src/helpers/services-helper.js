export const getSelectedServicesFromState = (services, identifications) => {
 let length = identifications.length;
 let selectedServices = [];

 for (let i = 0; i < length; i++) {
   services.map(service => {
     if (service.id === identifications[i]) selectedServices.push(service);
   })
 }
 
 return selectedServices;
}

export const getSelectedServicesTotalSum = services => {
  const length = services.length;
  let totalSum = 0;

  for (let i = 0; i < length; i++) {
    totalSum = totalSum + services[i].price;
  }

  return totalSum;
}; // TODO: refactor this shit and make it right
