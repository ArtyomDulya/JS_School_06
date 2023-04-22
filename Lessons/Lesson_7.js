const person = {
    name: "Ivann",
    subname: "Petrov",
    age: 33,
    job: "QA Engineer",
    isAdmin: false
}
const person2 = {
    id: 02,
    personalInfo: {
        name: {
            first: "Jon",
            last: "Doy"
        },
        dob: "01/01/1990",
        "contactInfo": {
            phone: "+123456789",
            email: null,
            address: {
                city: "Boston",
                state: "M"
            }
        },
    },
    purchases: [null]
}
console.log(person2.personalInfo.dob)

