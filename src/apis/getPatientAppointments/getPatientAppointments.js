import axios from "axios";
import instance from "../../lib/instance/instance";

const getPatientAppointments = (patientID) =>
  instance
    .get("/management/appointments/search?patientId=" + patientID)
    .then((response) => console.log(response.data));

export default getPatientAppointments;
