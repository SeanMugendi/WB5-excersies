// Define the academyMembers array
let academyMembers = [
    {
      memID: 101,
      name: "Bob Brown",
      films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
      memID: 142,
      name: "Sallie Smith",
      films: ["A Good Day", "A Better Day"]
    },
    {
      memID: 187,
      name: "Fred Flanders",
      films: ["Who is Fred?", "Where is Fred?", "What is Fred?", "Why Fred?"]
    },
    {
      memID: 203,
      name: "Bobbie Boots",
      films: ["Walking Boots", "Hiking Boots", "Cowboy Boots"]
    }
  ];
  
  // Accessing and printing the members' information
  for (let i = 0; i < academyMembers.length; i++) {
    console.log("Member ID:", academyMembers[i].memID);
    console.log("Name:", academyMembers[i].name);
    console.log("Films:", academyMembers[i].films.join(", "));
    console.log("------------------------");
  }
  