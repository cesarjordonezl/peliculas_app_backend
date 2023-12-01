const Movie = require('./Movie');
const Actor = require('./Actor');
const Genre = require('./Genre');
const Director = require('./Director');

Actor.belongsToMany(Genre, { through: "ActorsGenres" });
Genre.belongsToMany(Actor, { through: "ActorsGenres" });


Actor.hasMany(Movie);
Movie.belongsTo(Actor);


Movie.hasMany(Director);
Director.belongsTo(movie);


//Director.belongsToMany(Actor, { through: "DirectorsActors" });
//Actor.belongsToMany(Director, { through: "DirectorsActors" });


//Director.belongsToMany(Genre, { through: "DirectorsGenres" });
//Genre.belongsToMany(Director, { through: "DirectorsGenres" });