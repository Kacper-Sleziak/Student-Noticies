const groups = [
    {
        id: 1, 
        subject: "PIW",
        topic: "Aplikacja w Reacie",
        tags:"Szandała", 
        description: "Poszukujemy grafika do grupy ",
        participants: ["Grzegorz Kowalski", "Maciek Nowak"]
    },

    {
        id: 2, 
        subject: "PIW",
        topic: "Aplikacja w Reacie",
        tags:"Szandała", 
        description: "Poszukujemy grafika do grupy ",
        participants: ["Grzegorz Kowalski", "Maciek Nowak"]
    },

]

const StudentService = {

    getGroups: () => {
        return groups;
    },

    addGroup: (group) => {
        groups.push(group);
    },

    addParticipant: (id, participant) => {

    }
}

export default StudentService;