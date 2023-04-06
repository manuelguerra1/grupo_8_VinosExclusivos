const db = require('../database/models');
const sequelize = db.sequelize;
const {Op} = require('sequelize');

const Movies = db.Movie;

const moviesController = {
    // list:(req, res) => {
    //     Movies.findAll()
    //     .then(movies => {
    //         res.render('MoviesList', {movies})
    //     })
    // },
    list: async (req, res) => {
        try {
            const movies = await Movies.findAll();
            res.render('MoviesList', {movies})
        } catch (error) {
            res.send(error)
        }
       
    },

    detail: async (req, res) => {
        const movie = await Movies.findByPk(req.params.id)        
        res.render('moviesDetail', {movie})
        
    },
    new: async (req, res) => {
        const movies = await Movies.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        });
        res.render('newestMovies', {movies});
    },
    recomended: async (req, res) => {
        const movies = await Movies.findAll({
            where: {
                rating:{[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
        res.render('recommendedMovies.ejs', {movies});
    }
}

module.exports = moviesController;