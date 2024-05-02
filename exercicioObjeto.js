const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  // Altere apenas o código abaixo desta linha
  function updateRecords(records, id, prop, value) {
    // Cria uma cópia do objeto records para não modificar o original
    const updatedRecords = { ...records };
  
    // Verifica se value é uma string vazia e remove a propriedade prop, se aplicável
    if (value === "") {
      delete updatedRecords[id][prop];
    } else if (prop !== "tracks") {
      // Atualiza a propriedade prop com o valor value, se não for "tracks"
      updatedRecords[id][prop] = value;
    } else {
      // Se prop for "tracks"
      if (!updatedRecords[id].hasOwnProperty("tracks")) {
        // Cria um novo array de tracks e adiciona value a ele
        updatedRecords[id]["tracks"] = [value];
      } else {
        // Adiciona value ao final do array existente de tracks
        updatedRecords[id]["tracks"].push(value);
      }
    }
  
    return updatedRecords;
  }
  
  console.log(updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love'));