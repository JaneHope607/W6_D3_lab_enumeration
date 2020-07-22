const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.titleList = function() {
  const result = this.films.map((film) => {
    return film.title;
  });
  return result;
}


module.exports = Cinema;
