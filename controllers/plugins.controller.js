var plugins = {
    getList: function (req, res) {
        var list = data; // Spoof a DB call
        res.json(list);
    }
};

var data = [{
    id: '1'
}];

module.exports = plugins;