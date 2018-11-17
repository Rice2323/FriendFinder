var friendsInfo = require("../data/friends");

module.exports = function(app){
    app.get("/api/friends", function(req, res){
        res.json(friendsInfo);
    });

    app.post("/api/friends", function(req, res){
        if (friendsInfo.length > 0){
            friendsInfo.push(req.body);
        res.json(true);
        }

        else {
            friendsInfo.push(req.body);
            res.json(false);
    }
    
    });
};