// Define the vehicles array
let vehicles = [
    {
      color: "Silver",
      type: "Minivan",
      registrationState: "CA",
      licenseNo: "ABC-101",
      registrationExpires: new Date("3-10-2022"),
      capacity: 7
    },
    {
      color: "Red",
      type: "Pickup Truck",
      registrationState: "TX",
      licenseNo: "A1D-2NC",
      registrationExpires: new Date("12-30-2022"),
      capacity: 3
    },
    {
      color: "White",
      type: "Pickup Truck",
      registrationState: "TX",
      licenseNo: "A22-X00",
      registrationExpires: new Date("9-31-2023"),
      capacity: 6
    },
    {
      color: "Red",
      type: "Car",
      registrationState: "CA",
      licenseNo: "ABC-222",
      registrationExpires: new Date("12-10-2022"),
      capacity: 5
    },
    {
      color: "Black",
      type: "SUV",
      registrationState: "CA",
      licenseNo: "EEE-222",
      registrationExpires: new Date("12-10-2021"),
      capacity: 7
    },
    {
      color: "Red",
      type: "SUV",
      registrationState: "TX",
      licenseNo: "222-101",
      registrationExpires: new Date("1-31-2023"),
      capacity: 5
    },
    {
      color: "White",
      type: "Pickup Truck",
      registrationState: "TX",
      licenseNo: "CAC-7YT",
      registrationExpires: new Date("3-31-2023"),
      capacity: 5
    },
    {
      color: "White",
      type: "Pickup Truck",
      registrationState: "CA",
      licenseNo: "123-ABC",
      registrationExpires: new Date("3-31-2023"),
      capacity: 5
    }
  ];
  
  // Accessing and printing the vehicle information
  for (let i = 0; i < vehicles.length; i++) {
    console.log("Vehicle " + (i + 1));
    console.log("Color: " + vehicles[i].color);
    console.log("Type: " + vehicles[i].type);
    console.log("Registration State: " + vehicles[i].registrationState);
    console.log("License No: " + vehicles[i].licenseNo);
    console.log("Registration Expires: " + vehicles[i].registrationExpires.toDateString());
    console.log("Capacity: " + vehicles[i].capacity);
    console.log("------------------------");
  }
  