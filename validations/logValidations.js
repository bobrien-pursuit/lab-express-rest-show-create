const checkForKeys = (req, res, next) => {

    if (req.body && req.body.hasOwnProperty(`captainName`) && req.body.hasOwnProperty(`title`) && req.body.hasOwnProperty(`post`) && req.body.hasOwnProperty(`mistakesWereMadeToday`) && req.body.hasOwnProperty('daysSinceLastCrisis'))
             next();
    else
        res.status(404).json({error: `\n\nData must be properly formatted\:\ncaptainName\: \<string\>\ntitle\: \<string\>\npost\: \<string\>\nmistakesWereMadeToday\: \<boolean\>\ndaysSinceLastCrisis\: \<number\>`})
}

module.exports = { checkForKeys };

