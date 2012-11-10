#!/usr/bin/env nodejs

var fs = require('fs');
var path = require('path');
var md = require("node-markdown").Markdown;

//god, where are we? At the very least, I expect to be one level down from the project dir
var basePath = path.resolve( path.dirname(require.main.filename), "../");
//Where are the markdown files?
var watchDir = path.normalize( basePath + "/public/articles");

console.info( "\u001b[1;34m" + "humphreybc.com flat file generator." + "\u001b[0m");

//What are we doing? just one compile or watching?
if ( process.argv[2] == "compile" ) {
	generateBlog();
} else if ( process.argv[2] == "watch" || process.argv[2] === undefined )  {
	console.log("Watching for changes" + watchDir);
	//seems to fire twice,dumb thing
	fs.watch(watchDir, function(event,filename){
		console.info( "'" + filename + "' changed");
		generateBlog();
	});
} else {
	console.log("Avaible arguments: compile / watch");
	process.exit(1);
}

//
function generateBlog(){
	fs.readdir(watchDir,function(err, files){
		var html = ""; //i'm classic

		//sort files based on time
		//thx: http://stackoverflow.com/questions/10559685/
		files = files.map(function(v) { 
                  return { name:v,
                           time:fs.statSync(watchDir+ '/' + v).mtime.getTime()
                         }; 
               })
               .sort(function(a, b) { return a.time - b.time; })
               .map(function(v) { return v.name; });


		//loop over all files found in the watchDir
		for (var i = files.length - 1; i >= 0; i--) {
			console.info( "\u001b[1;32m" + "\t* Parsing " + files[i] + "\u001b[0m" );

			var blogPost = post( files[i] );
			var extLess = files[i].substring(0, files[i].lastIndexOf('.') ); //for titles and shuch .md is not needed

			//add a linebreak between blog posts
			html += blogPost + "<br />";
			//write the signle blog post to a html file
			fs.writeFile( basePath + "/app/assets/blog/" + extLess +".html"
				, theme( blogPost ), "utf-8", function(err){ if (err) console.error("Write error: ", err );  }  );
		};
		//write the signle blog page
		fs.writeFile( basePath +  "/app/assets/blog.html"
			, theme ( html ) , "utf-8", function(err){ if (err) console.error("Write error: ", err );  });

		console.log("Done generating\n" );
	});
}

//generate a signle blog post from markdown to html and add any extra needed html.
function post ( filename ){
	var extLess = filename.replace('+', '/').substring(0, filename.lastIndexOf('.') );
	var stats 	= fs.lstatSync( watchDir + "/" + filename );

	//title
	var out =  "<a href='/blog/"+ extLess +".html' /><h2>"+extLess+"</h2></a>";
	//meta
	out += "\n<div class='article-meta'> \
				<div class='article-date'> \
					<p>"+ stats.ctime +"</p>";
	if ( stats.ctime != stats.mtime) out+= "<span class='modified'>"+"</span>";
	out +=		"</div> \
			</div>";
	//blog post it self
	out +=	md( fs.readFileSync(watchDir + "/" + filename, "utf-8") );
	return out;
}

function theme( data ){
	var theme = fs.readFileSync( basePath + "/app/assets/theme.html" , "utf-8");
	return theme.replace("{DATA}", data);
}