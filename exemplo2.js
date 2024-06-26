// Configuração
const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    // Altere apenas o código abaixo desta linha
    for(let i = 0; i < contacts.length; i++) {
      if(name === contacts[i].firstName) {
        if(contacts[i].hasOwnProperty(prop)) {
            return contacts[i][prop]
        } else {
            return "No such property"
        }
      } 
    }
    return "No such contact"
    // Altere apenas o código acima desta linha
  }
  
  console.log(lookUpProfile("Kristian", "lastName"));
  console.log(lookUpProfile("Harry", "likes"));