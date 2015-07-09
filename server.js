var express = require('express');
var bodyParser = require('body-parser');
var _ = require('underscore');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text({type: 'text/plain'}));

app.use(express.static('public'));
app.use(require('connect-livereload')());

app.get('/', function (request, response) {
    response.sendfile('public/index.html');
});

app.get('/api/sample', function (request, response) {
    response.send({ name: "Ravi" });
});

var achievements = [
    {
        title: 'Received Microsoft MVP Award',
        type: 'major',
        from:'Microsoft'
    },
    {
        title: 'Approved as SitePoint author',
        type: 'major',
        from:'SitePoint'
    },
    {
        title: 'Approved as DotnetCurry author',
        type: 'major',
        from:'DotnetCurry'
    },
    {
        title: 'Mention on ASP.NET',
        type: 'medium',
        from:'asp.net'
    },
    {
        title: 'First article published on SitePoint',
        type: 'minor',
        from:'SitePoint'
    },
    {
        title: 'Got a side project',
        type: 'minor',
        from:'Self'
    },
    {
        title: 'Boss patted me for my work',
        type: 'minor',
        from:'Boss'
    }
];

app.get('/api/achievements/:type', function (request, response) {
    response.send(_.filter(achievements, function (a) {
        return a.type === request.params.type;
    }));
});

app.get('/api/achievements', function (request, response) {
    response.send(achievements);
});

app.post('/api/achievements', function(request, response){
    achievements.push(JSON.parse(request.body));
    response.send(achievements);
});

app.listen(8000, function () {
    console.log('Express server started!!!');
});
