var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    username: String,
    password: String, //hash created from password
  //  email: String,
    created_at: {type: Date, default: Date.now}
});

var jobSchema = new mongoose.Schema({
	title: String,
	description: String,
	duration: String,
	b_start: String,
	b_final: String,
	diff_level: String,
	job_put_up_by: String,
	job_taken_by:String,
	created_at:  {type: Date, default: Date.now}
});

//declare model called user which has user schema
mongoose.model("User",userSchema);
mongoose.model("jobPost",jobSchema);