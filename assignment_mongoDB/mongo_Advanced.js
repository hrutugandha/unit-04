// find all movies which are equal to movie_name
db.movies.find({movie_name:{$eq:"Hawking"}}).pretty()

//find all movies which are not equal to movie_name
db.movies.find({movie_name:{$ne:"Hawking"}}).pretty()

//find all movies greater than and greater than equal to a budget
db.movies.find({"budget":{$gte:10000}}).pretty()

//find all movies less than and less than equal to a budget
db.movies.find({"budget":{$lte:10000}}).pretty()

//find all movies that are produced after 2000 with budget greater than 10000
db.movies.find({$and:[{"production_year":{$gte:"2000"}},{"budget":{$gte:10000}}]}).pretty()

//find all movies that are produced after 2000 or budget greater than 10000
db.movies.find({$or:[{"production_year":{$gte:"2000"}},{"budget":{$gte:10000}}]}).pretty()

//find all movies that are neither produced after 2000 nor with budget greater than 10000.
db.movies.find({$nor:[{"production_year":{$gte:"2000"}},{"budget":{$gte:10000}}]}).pretty()

//find all movies that are not produced in 2000 or they do not have budget of 10000
db.movies.find({$nor:[{"production_year":"2000"},{"budget":10000}]}).pretty()

//find all movies that were produced from 2000 to 2010.
db.movies.find({"production_year":{$in:[2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010]}}).pretty()

//Sort all movies descending based on the production year and if the year is same then alphabetically for their movie_names
db.movies.find({"budget":{$eq:10000}}).sort({"movie_name":1}).pretty()

//in query 10 skip the first 10 entries and fetch the next 5
db.movies.find({"budget":{$eq:10000}}).sort({"movie_name":1}).skip(10).limit(5).pretty()


