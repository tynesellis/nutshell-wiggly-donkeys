// //Author: Paul Ellis; Purpose: function that populates the dashboard

const taskDom = require("./tasks/taskDom")
const Database = JSON.parse(localStorage.getItem("Database"))//access the main database
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"))//access the user

const populateDOM = DOM => {
    Database.innerDB.forEach(el => {
        document.getElementById(el.id.value).innerHTML = el.inner.value;
    })
    taskDom()
}

module.exports = populateDOM
