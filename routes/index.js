
/*
 * GET home page.
 */
var projNums = { 1: 3743193162503,
	2: 2701241327673,
	3: 2777253300576,
	4: 2728456050901,
	5: 7594238422393,
	6: 6780652144352,
	7: 2971223212735,
	8: 2971223212739,
	9: 2971223212741,
	10: 2971223212862,
	11: 5555932276245,
	12: 7610807110038,
	}

exports.index = function(req, res){
  res.render('index', { title: 'Asana Exporter', 
  	projects: 'I want dynamic list to display here.'});
};