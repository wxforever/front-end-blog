	//引入模块
	var http=require('http');

	var url=require('url');

	var fs=require('fs');

	var path=require('path');

	var mime=require('./node/mime').types;

	var config=require('./node/config');

	var zlib = require("zlib");

	var utils = require('./node/utils');

	//创建服务器
	var server=http.createServer(function(request,response){

		var pathname=url.parse(request.url).pathname;
		//目录路径自动跳到index.html
		if(pathname.slice(-1)==='/'){

			pathname=pathname+config.Welcome.file;
		}
		var relativePath='.'+pathname;

		var realPath=path.resolve(relativePath);

		
		
		fs.stat(realPath,function(err,stats){
			//路径不存在
			if(err){

				 response.writeHead(404,{'content-Type':'text/plain'});

				 response.write("THis request URL "+pathname+"  was not found on this server.");
               	
               	

				 response.end();

			}else{


				if(stats.isDirectory()){//路径是目录

					realPath=path.join(realPath,'/',config.Welcome.file);
				}else{

				

				
					
					//设置文件修改时间
					var lastModified=stats.mtime.toUTCString();

					var ifModifiedSince='If-Modified-Since'.toLowerCase();

					response.setHeader('Last-Modified',lastModified);
					//设置文档类型
					var ext=path.extname(realPath);

					ext=ext?ext.slice(1):'unkown';


					var contenType=mime[ext]||"text/plain";
					
					response.setHeader('content-Type',contenType);
				
					//设置过期时间,缓存控制
					if(ext.match(config.Expires.fileMatch)){
					 
					var expires=new Date();

					expires.setTime(expires.getTime()+config.Expires.maxAge*1000);

					response.setHeader('Expires',expires.toUTCString());
                    
					response.setHeader('Cache-Control',"max-age="+config.Expires.maxAge);
				     
				    
					}

					
					//查看文件是否修改过
					

					if(request.headers[ifModifiedSince]	&& lastModified==request.headers[ifModifiedSince]){

						response.writeHead(304,"Not Modified");

						

						response.end();

					}else{

						var compressHandle = function(raw,statusCode,reasonPhrase){

							var stream = raw;

							var acceptEncoding = request.headers['accept-encoding']||"";

							var matched = ext.match(config.Compress.match);

							if (matched && acceptEncoding.match(/gzip/)) {

								response.setHeader('Content-Encoding','gzip');

								stream = raw.pipe(zlib.createGzip());


							}else if (matched && acceptEncoding.match(/deflate/)) {

								response.setHeader("Content-Encoding","deflate");

								stream = raw.pipe(zlib.createGzip());

							}

							response.writeHead(statusCode,reasonPhrase);

							stream.pipe(response);

						}

						if (request.headers['range']) {
							console.log(request.headers['range']);
							var range = utils.parseRange(request.headers['range'],stats.size);

							if (range) {

								response.setHeader("Content-Range","bytes "+range.start+"-"+range.end+"/"+stats.size);

								response.setHeader("Content-Lenth",(range.end-range.start+1));

								var raw=fs.createReadStream(realPath,{"start":range.start,"end":range.end})

								compressHandle(raw,206,'Partial Content');

							} else {

								response.removeHeader("Content-Length");

								response.writeHead(416,"request Range Not Satisfiable");

								response.end();
							}
						}	else {

							var raw = fs.createReadStream(realPath);

							compressHandle(raw,200,"Ok");


						}

					/*	var raw=fs.createReadStream(realPath);

						var acceptEncoding=request.headers['accept-encoding']||'';

						var matched=ext.match(config.Compress.match);
						

						if(matched && acceptEncoding.match(/gzip/)){
							
							response.writeHead(200,'Ok',{'Content-Encoding':'gzip'});

							raw.pipe(zlib.createGzip()).pipe(response);

						}else if(matched &&acceptEncoding.match(/deflate/) ){
							
							response.writeHead(200,'Ok',{'Content-Encoding':'deflate'})

							raw.pipe(zlib.createDeflate()).pipe(response);
						}else{
							
							response.writeHead(200,'Ok');

							raw.pipe(response);
						}*/

					}

				}




			
			}
		})
	})

	server.listen(8888)


