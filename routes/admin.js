var admin = {
    getStats: function (req, res) {
        var stats = data; // Spoof a AD call
        res.json(stats);
    }
};

var data = [{
    id: '1'
}];

module.exports = admin;