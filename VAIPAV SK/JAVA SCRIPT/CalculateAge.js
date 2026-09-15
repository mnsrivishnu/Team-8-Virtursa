function calculateAge(dob) {
    const birthDate = new Date(dob);
    const now = new Date();

    let age = now.getFullYear() - birthDate.getFullYear();

    const monthDiff = now.getMonth() - birthDate.getMonth();
    const dayDiff = now.getDate() - birthDate.getDate();

    
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    return age;
}

const dob = prompt("Enter your date of birth (YYYY-MM-DD):");
const age = calculateAge(dob);

if (age >= 0) {
    alert(`Your age is: ${age}`);
} else {
    alert("That doesn't look like a valid date of birth.");
}