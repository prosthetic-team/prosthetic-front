// src/assets/mocks/PatientListMock.js
import patient1 from '@/assets/images/patient1.jpg';
import patient2 from '@/assets/images/patient1.jpg';
import patient3 from '@/assets/images/patient1.jpg';
import patient4 from '@/assets/images/patient1.jpg';
import patient5 from '@/assets/images/patient1.jpg';

export const patientListMock = [
    {
        "id": 1,
        "imageUrl": patient1,
        "patientName": "Luis Fernández",
        "description": "Paciente con parálisis cerebral infantil.",
        "goalCompletness": 95,
        "active": true,
        "sensorStatus": "moviendo",
        "sensorLastUpdate": "2024-11-14 22:22:00"
    },
    {
        "id": 2,
        "imageUrl": patient2,
        "patientName": "Ana Gómez",
        "description": "Paciente con parálisis cerebral infantil.",
        "goalCompletness": 20,
        "active": true,
        "sensorStatus": "quieto",  // Estado del sensor
        "sensorLastUpdate": "2024-11-14 12:10:00"  // Fecha de última actualización del sensor
    },
    {
        "id": 3,
        "imageUrl": patient3,
        "patientName": "Carlos Ruiz",
        "description": "Paciente accidentado con dificultades motoras.",
        "goalCompletness": 100,
        "active": true,
        "sensorStatus": "moviendo",  // Estado del sensor
        "sensorLastUpdate": "2024-11-14 12:05:00"  // Fecha de última actualización del sensor
    },
    {
        "id": 4,
        "imageUrl": patient4,
        "patientName": "Ana García",
        "description": "Paciente con distrofia muscular.",
        "goalCompletness": 100,
        "active": false,
        "sensorStatus": "quieto",  // Estado del sensor
        "sensorLastUpdate": "2024-11-14 12:00:00"  // Fecha de última actualización del sensor
    },
    {
        "id": 5,
        "imageUrl": patient5,
        "patientName": "Luis Fernández",
        "description": "Paciente con parálisis cerebral infantil.",
        "goalCompletness": 20,
        "active": true,
        "sensorStatus": "moviendo",  // Estado del sensor
        "sensorLastUpdate": "2024-11-14 12:00:00"  // Fecha de última actualización del sensor
    }
];