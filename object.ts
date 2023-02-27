interface Organization {
    name: string;
    members: string[]
}

interface Person {
    name: string;
    haircolor: string;
    age: number;
    org: Organization
}

const mika: Person = {
    name: "Mika",
    haircolor: "pink",
    age: 23,
    org: {
        name: "swr",
        members: ["Red", "Jean"]
    }
}

console.log(mika);
