// Task 1
const mediaFavorites = [
    ["The Stranger", "Book", "1942"],
    ["The End of Evangelion", "Movie", "1997"],
    ["Dune", "Book", "1965"],
    ["Snowpiercer", "Movie", "2013"],
    ["Lookback", "Movie", "2024"],
    ["Capital, Volumes", "Book", "1867"],
    ["Transformers: Dark of the Moon", "Movie", "2011"],
    ["The Matrix", "Movie", "1999"],
    ["It's a Wonderful Life", "Movie", "1946"]
  ];
  
  console.log(mediaFavorites);

  // Task 2
console.log(mediaFavorites[0][0], mediaFavorites[0][1], mediaFavorites[0][2]); 
console.log(mediaFavorites[1][0], mediaFavorites[1][1], mediaFavorites[1][2]); 
console.log(mediaFavorites[2][0], mediaFavorites[2][1], mediaFavorites[2][2]); 
console.log(mediaFavorites[3][0], mediaFavorites[3][1], mediaFavorites[3][2]); 
console.log(mediaFavorites[4][0], mediaFavorites[4][1], mediaFavorites[4][2]); 
console.log(mediaFavorites[5][0], mediaFavorites[5][1], mediaFavorites[5][2]); 
console.log(mediaFavorites[6][0], mediaFavorites[6][1], mediaFavorites[6][2]); 
console.log(mediaFavorites[7][0], mediaFavorites[7][1], mediaFavorites[7][2]); 
console.log(mediaFavorites[8][0], mediaFavorites[8][1], mediaFavorites[8][2]); 

// Task 3

for (let row = 0; row < mediaFavorites.length; row++) {
    for (let item = 0; item < mediaFavorites[row].length; item++) {
        console.log(mediaFavorites[row][item]);
    }
}

// Task 4

console.log("All media items:");
for (let row = 0; row < mediaFavorites.length; row++) {
    console.log(`Row ${row + 1}:`);
    for (let col = 0; col < mediaFavorites[row].length; col++) {
        console.log(mediaFavorites[row][col]);
    }
}