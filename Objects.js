function groupByAge(people) {
    var ageGroups = {};
    people.forEach(function (person) {
        var name = person.name, age = person.age;
        if (ageGroups[age]) {
            ageGroups[age].push(name);
        }
        else {
            ageGroups[age] = [name];
        }
    });
    return ageGroups;
}
var people = [
    { name: "Zarina", age: 21 },
    { name: "Ayesha", age: 21 },
    { name: "Umaima", age: 20 },
];
console.log(groupByAge(people));
