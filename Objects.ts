type Person = {
  name: string;
  age: number;
};

function groupByAge(people: Person[]): Record<number, string[]> {
  const ageGroups: Record<number, string[]> = {};
  people.forEach((person) => {
    const { name, age } = person;
    if (ageGroups[age]) {
      ageGroups[age].push(name);
    } else {
      ageGroups[age] = [name];
    }
  });
  return ageGroups;
}
const people: Person[] = [
  { name: "Zarina", age: 21 },
  { name: "Ayesha", age: 21 },
  { name: "Umaima", age: 20 },
];
console.log(groupByAge(people));
