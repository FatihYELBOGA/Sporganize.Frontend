import MyAppointmentsCard from "./MyAppointmentCard"
import Layout from "../Sidebar/Layout"

function MyAppointments () {
  const testAppointment = {
    title: "Looking for goalkeeper",
    desc: "I am looking for a proffessional goalkeeper for tonights school tournament match",
    user: {
      username: "altunayosman",
      email: "osmanaltunay@sporganize.com",
      phone: "123 456 78 90",
      gender: "MALE"
    },
    branch: "Football",
    reason: "FOR PLAYING",
    location: {
      street: "06",
      district: "Sincan",
      province: "Ankara"
    },
    acceptedUsers: [
      {
        username: "yelboğafatih",
        email: "fatihyelboğa@sporganize.com",
        phone: "123 456 78 09",
        gender: "MALE"
      },
    ]
  }

  return (
    <Layout>
        <MyAppointmentsCard appointment={testAppointment} />
    </Layout>
   
  )
}

export default MyAppointments