const employees = [
  {
    name: "Atticus",
    employeeNumber: "2405",
    annualSalary: "47000",
    reviewRating: 3
  },
  {
    name: "Jem",
    employeeNumber: "62347",
    annualSalary: "63500",
    reviewRating: 4
  },
  {
    name: "Scout",
    employeeNumber: "6243",
    annualSalary: "74750",
    reviewRating: 5
  },
  {
    name: "Robert",
    employeeNumber: "26835",
    annualSalary: "66000",
    reviewRating: 1
  },
  {
    name: "Mayella",
    employeeNumber: "89068",
    annualSalary: "35000",
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// Take small steps! Don't write a for loop and two functions that do all of the calculations right away.
// This problem is massive! Break the problem down. Use the debugger.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log(employees);

for (let i = 0; i < employees.length; i += 1) {
  console.log(employees[i]);
}

// function bonusCalculator(empInfo) {
//   let newObject = {
//     name: empInfo.name,
//     bonusPercentage
//   };

//   return newObject;
// }

function bonusPercentage() {
  for (let i = 0; i < employees.length; i += 1) {
    const bonusEmployees = [];

    // create new object
    const bonusObject = {
      name: employees[i].name,
      bonusPercentage: "",
      totalCompensation: "",
      totalBonus: ""
    };
    // call to function to create object
    // newEmployeeBonusObjectMachine(employees[i]);

    // bonusCalculator(employees[i]);
    let baseBonus = calculateBaseBonusPercentage(employees[i]);
    console.log("baseBonus", baseBonus);

    // baseBonus = adjustBonus(employees[i], baseBonus);
    // push new object into new bonus array

    console.log(employees);
    bonusEmployees.push(bonusObject);
  }
  return;
}

function calculateBaseBonusPercentage(employee) {
  let ratingPercentage = 0;
  let yearsAtJobBonus = 0;

  if (employee.reviewRating <= 2) {
    ratingPercentage = 0;
    // yearsAtJobBonus = 0.05;
    // let percentageEarned = ratingPercentage + yearsAtJobBonus;
    // return percentageEarned;
    // } else if (employee.reviewRating === 3) {
    //   ratingPercentage = 0.04;
    // } else if (employee.reviewRating === 4) {
    //   ratingPercentage = 0.06;
    // } else if (employee.reviewRating === 5) {
    //   ratingPercentage = 0.1;
    // }
  }

  // the next check
  if (employee.employeeNumber.length == 4) {
    ratingPercentage = ratingPercentage + 0.05;
  }
  return ratingPercentage;
}

console.log(bonusPercentage());
