export interface tripOptions {
  type: string; // Tipo do frete -> Fracionado ou Dedicado
  locationStart: locationDetail; // Dados da saída
  locationEnd: [ locationDetail ]; // Dados das múltiplas chegadas
  companyName: string;
  cargoWeigth: string;
  // driverCurrentLocation: geopoint;
  status: tripStatus; // Status da viagem
}

export interface locationDetail {
  address: string;
  // location: geopoint;
  // dateTime: datetime;
}

enum tripStatus {
  NOT_STARTED,
  IN_COURSE,
  COMPLETED
}
