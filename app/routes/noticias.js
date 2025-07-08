
export default function (app) {
    
    var connection = app.config.dbConnection();
    
    app.get('/noticias', function (req, res) {

        connection.query( 'select * from noticias', function( error, result ){

            res.render('noticias/noticias', {noticias : result});
            
        });
    });
    
};