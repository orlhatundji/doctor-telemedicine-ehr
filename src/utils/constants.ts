export enum ROLE {
  ADMIN = "ADMIN",
  DOCTOR = "DOCTOR",
  PATIENT = "PATIENT",
  HOSPITAL = "HOSPITAL",
}

export const familyConditions = [
  { value: "hypertension", label: "Hypertension" },
  { value: "diabetes", label: "Diabetes" },
  { value: "cancer", label: "Cancer" },
  { value: "asthma", label: "Asthma" },
  { value: "sickle cell", label: "Sickle Cell" },
];

export const allergies = [
  { value: "lactose intolerant", label: "Lactose Intolerant" },
  { value: "peanuts", label: "Peanuts" },
  { value: "dust", label: "Dust" },
  { value: "mold", label: "Mold" },
  { value: "pet dander", label: "Pet Dander" },
];

export const pastMedicalConditions = [
  { value: "malarial", label: "Malaria" },
  { value: "typhoid", label: "Typhoid" },
  { value: "tuberculosis", label: "Tuberculosis" },
  { value: "hepatitis", label: "Hepatitis" },
  { value: "surgery", label: "Surgery" },
];

export const currentMedications = [
  { value: "paracetamol", label: "Paracetamol" },
  { value: "amoxicillin", label: "Amoxicillin" },
  { value: "ibuprofen", label: "Ibuprofen" },
  { value: "aspirin", label: "Aspirin" },
  { value: "tramadol", label: "Tramadol" },
];

export const vaccinationHistory = [
  { value: "yellow fever", label: "Yellow Fever" },
  { value: "hepatitis b", label: "Hepatitis B" },
  { value: "polio", label: "Polio" },
  { value: "tetanus", label: "Tetanus" },
];

export const surgicalHistory = [
  { value: "appendectomy", label: "Appendectomy" },
  { value: "hernia repair", label: "Hernia repair" },
  { value: "cesarean section", label: "Cesarean section" },
];

export const socialHistory = [
  { value: "smoking", label: "Smoking" },
  { value: "alcohol", label: "Alcohol" },
  { value: "drug abuse", label: "Drug abuse" },
];