const express = require('express');
const {faker} = require('@faker-js/faker');
const app = express();
const port = 8001;

const createUser = () => {
    const userInfo = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.number(),
        email: faker.internet.email(),
        password: faker.internet.password(10),
        _id: faker.datatype.uuid()
    }
    return userInfo;
}

const createCompany = () => {
    const companyInfo = {
        name : faker.company.name(),
        address : {
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        },
        _id: faker.datatype.uuid()
    }
    return companyInfo;
}

app.get("/api/user/new", (req, res) => {
    res.json({
        status: "success",
        user: createUser() });
});

app.get("/api/company/new", (req, res) => {
    res.json({
        status: "success",
        company: createCompany() });
});

app.get("/api/user/company", (req, res) => {
    res.json({
        user: createUser(),
        company: createCompany(),
    });
});


app.listen(port, () => {
    console.log(`Listening on port: ${port}`)
})