const API_URL =
"";

async function registerStudent(){

const student = {

studentId:
document.getElementById("studentId").value,

name:
document.getElementById("name").value,

course:
document.getElementById("course").value,

email:
document.getElementById("email").value

};

const response =
await fetch(`${API_URL}/students`,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(student)

});

const data =
await response.json();

document.getElementById("message").innerText =
data.message;

}

async function viewStudents() {

    try {

        const response = await fetch(`${API_URL}/students`);

        const data = await response.json();

        console.log("API Response:", data);

        if (!Array.isArray(data)) {
            alert("API Error: " + JSON.stringify(data));
            return;
        }

        let rows = "";

        data.forEach(student => {

            rows += `
            <tr>
                <td>${student.studentId}</td>
                <td>${student.name}</td>
                <td>${student.course}</td>
                <td>${student.email}</td>
            </tr>
            `;
        });

        document.getElementById("studentTable").innerHTML = rows;

    } catch (error) {
        console.error(error);
        alert(error);
    }
}