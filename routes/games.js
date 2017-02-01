let express=require('express');
let router = express.Router();

/*get games index page */

router.get('/', function(req,res,next){
	res.render('games/index')
});

module.exports=router;
