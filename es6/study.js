let courses = [
    { id: 1, title: "ReactJS Tutorial", rating: 4.2 },
    { id: 2, title: "Angular Tutorial", rating: 2.5 },
    { id: 3, title: "VueJS Tutorial", rating: 3.8 },
    { id: 4, title: "Java Tutorial", rating: 4 },
    { id: 5, title: "JavaScript Tutorial", rating: 3.5 },
];
// rating >=4
console.log("Courses rating >=4");
const highCourses = courses.filter(c => c.rating >= 4);
highCourses.forEach(c => console.log(c) );

// rating <4 and format
console.log("Courses rating <4");
const lowCourses = courses.filter(c => c.rating < 4)
    .map(c => `${c.id} - ${c.title} - ${c.rating}`);
lowCourses.forEach(c => console.log(c) );

// gộp mảng
let addedCourses = [
    { id: 6, title: "PHP Tutorial", rating: 3 },
    { id: 7, title: "C# Tutorial", rating: 2 },
    { id: 8, title: "Docker Tutorial", rating: 3.8 }
];
const allCourses = [...courses,...addedCourses];
console.log("All Courser");
console.log(allCourses);