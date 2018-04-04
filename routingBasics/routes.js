var routes = {
    fruits: function(req,res){
        res.end("Welcome to the app page about fruits");
    },
    veg: function(req,res){
        res.end("Welcome to the app page about vegs");
    },
    dairy: function(req,res){
        res.end("Welcome to the app page about dairy");
    },
    meats: function(req,res){
        res.end("Welcome to the app page about meats");
    },
    grains: function(req,res){
        res.end("Welcome to the app page about grains");
    },

};

module.exports = routes;