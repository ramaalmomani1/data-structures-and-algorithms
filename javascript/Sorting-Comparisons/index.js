let movieArr = [
  {
    title: "Elio",
    year: 2023,
    genres: ["Animation"],
  },
  {
    title: "The Flash",
    year: 2022,
    genres: ["Action", "science-fiction ", "fantasy", "adventure"],
  },
  {
    title: "Harry Potter and the Prisoner of a Azkaban",
    year: 2004,
    genres: ["Family", "Mystery", "Fantasy", "Adventure"],
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    year: 2007,
    genres: ["Action", "Family", "Mystery", "Fantasy", "Adventure"],
  },
  {
    title: "An Elemental",
    year: 2023,
    genres: ["Animation", "Comedy", "Fantasy", "Kids", "Family"],
  },
  {
    title: "A Clockwork Orange",
    year: 2006,
    genres: ["Comedy", "Fantasy", "Family"],
  },
];

function yearSortFun(movieArr) {
  movieArr.sort(function (a, b) {
    if (a.year === b.year) return 0;
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
  });
  return movieArr;
}
console.log(yearSortFun(movieArr));

function titleSortFun(movieArr) {
  let result = movieArr.map((e) => ({
    ...e,
    title: e.title.replace(/^(A|An|The)\s+/i, ""),
  }));
  let finalSorted = result.sort((a, b) => a.title.localeCompare(b.title));
  return finalSorted;
}
console.log(titleSortFun(movieArr));

module.exports = {
  yearSortFun,
  titleSortFun,
};
