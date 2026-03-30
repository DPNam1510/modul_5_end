
const footballList = [
    { id: 1, code: "CT01", name: "Messi", dob: "1987-06-24", value: 50, position: "Forward"},
    { id: 2, code: "CT02", name: "Ronaldo", dob: "1988-06-24", value: 60, position: "Forward"},
    { id: 3, code: "CT03", name: "Reus", dob: "1989-06-24", value: 70, position: "Forward"},
    { id: 4, code: "CT04", name: "Kross", dob: "1980-06-24", value: 80, position: "Forward"},
]
export function getAll() {
    return footballList
}
export function findById(id) {
    return footballList.find(e => e.id === id)
}
export function addFootball(football) {
    for (let i = 1; i < footballList.length; i++) {
        if (footballList[i].id === football.id) {
            return false;
        }
    }
    footballList.push(football);
    return true;
}
export function deleteFootball(id) {
    for (let i = 1; i < footballList.length; i++) {
        if (footballList[i].id === id) {
            footballList.splice(i, 1);
            break;
        }
    }
}