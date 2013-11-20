function loadData(moveFile, skelFile, callback) {
				// Read the movement
				d3.text(moveFile, function(unparsedData) {
					var data = d3.csv.parseRows(unparsedData);

					// put joints together
					f = data.map(function(d) {
						var joints = [];
						for ( i = 0; i < d.length; i += 3) {
							joints[i / 3] = {
								x : +d[i],
								y : +d[i + 1],
								z : +d[i + 2]
							};
						}

						return joints;
					});
					//console.log(frames);
					frames = f;

					
					// drawFigure();
				});

				//Read the skeleton
				d3.text(skelFile, function(unparsedData) {
					var data = d3.csv.parseRows(unparsedData);
					var cons = [];
					var count = 0;

					for ( i = 0; i < data.length; i++)
						for ( j = 0; j < data.length; j++) {
							if (data[i][j] == 1) {
								cons[count++] = {
									a : i,
									b : j
								};
							}

						}

					skel = cons;
					
					
					//console.log(frames);
					setTimeout(function() {callback(frames,skel);},200);
					
				});

			}