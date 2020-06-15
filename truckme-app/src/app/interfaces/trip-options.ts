import * as firebase from 'firebase';

export interface tripOptions {
  type?: string; // Tipo do frete -> Fracionado ou Dedicado
  locationStart: locationDetail; // Dados da saída
  locationEnd: locationDetail ;
  // locationEnd: [ locationDetail ]; // Dados das múltiplas chegadas
  companyName: string;
  cargoWeigth?: string;
  description: string;
  driverCurrentLocation: coords;
  status?: tripStatus; // Status da viagem
}

export interface locationDetail {
  address: string;
  location?: coords;
  dateTime?: string;
}

export interface coords {
  latitude: string;
  longitude: string
}

enum tripStatus {
  NOT_STARTED,
  IN_COURSE,
  COMPLETED
}
