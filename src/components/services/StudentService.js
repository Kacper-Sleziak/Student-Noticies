
// Get all students from json file
export function getStudents(){
    return(
        fetch('data.json',{method: "get"})
        .then(response => response.json())
        .then(json => json.students)
    )
}

export function addStudent(student) {
    student = JSON.stringify(student)
    
}