const { yearSortFun, titleSortFun } = require("./index");

let moviesArr = [
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

let yeasSorted = [
  {
    title: "Harry Potter and the Prisoner of a Azkaban",
    year: 2004,
    genres: ["Family", "Mystery", "Fantasy", "Adventure"],
  },
  {
    title: "A Clockwork Orange",
    year: 2006,
    genres: ["Comedy", "Fantasy", "Family"],
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    year: 2007,
    genres: ["Action", "Family", "Mystery", "Fantasy", "Adventure"],
  },
  {
    title: "The Flash",
    year: 2022,
    genres: ["Action", "science-fiction ", "fantasy", "adventure"],
  },
  { title: "Elio", year: 2023, genres: ["Animation"] },
  {
    title: "An Elemental",
    year: 2023,
    genres: ["Animation", "Comedy", "Fantasy", "Kids", "Family"],
  },
];

let titleSorted = [
  {
    title: "Clockwork Orange",
    year: 2006,
    genres: ["Comedy", "Fantasy", "Family"],
  },
  {
    title: "Elemental",
    year: 2023,
    genres: ["Animation", "Comedy", "Fantasy", "Kids", "Family"],
  },
  { title: "Elio", year: 2023, genres: ["Animation"] },
  {
    title: "Flash",
    year: 2022,
    genres: ["Action", "science-fiction ", "fantasy", "adventure"],
  },
  {
    title: "Harry Potter and the Order of the Phoenix",
    year: 2007,
    genres: ["Action", "Family", "Mystery", "Fantasy", "Adventure"],
  },
  {
    title: "Harry Potter and the Prisoner of a Azkaban",
    year: 2004,
    genres: ["Family", "Mystery", "Fantasy", "Adventure"],
  },
];

describe("Sorting Comparisons", () => {
  it("sorted array by most recent year first", () => {
    expect(yearSortFun(moviesArr)).toEqual(yeasSorted);
  });

  it("sorted array by alphabetical by title", () => {
    expect(titleSortFun(moviesArr)).toEqual(titleSorted);
  });
});
