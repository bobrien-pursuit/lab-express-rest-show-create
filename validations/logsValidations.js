const checkForKeys = (req, res, next) => {

    req.body ? 
    req.body.hasOwnProperty('captainName') ?
    req.body.hasOwnProperty('title') ?
    req.body.hasOwnProperty('post') ?
    req.body.hasOwnProperty('mistakesWereMadeToday') ?
    req.body.hasOwnProperty('daysSinceLastCrisis') ? next() : res.json({error: `\n\nData must be properly formatted:\ncaptainName: <string>\ntitle: <string>\npost: <string>\nmistakesWereMadeToday: <boolean>\ndaysSinceLastCrisis: <number>`})
}

module.exports = { checkForKeys };