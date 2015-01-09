module.exports = function(grunt) {
	grunt.initConfig({
		pkg : grunt.file.readJSON('package.json'),
		uglify : {
			point_ex : {
				src : ['src/Point-ex.js'],
				dest : 'lib/point-ex-<%= pkg.version %>.min.js'
			}
		},
		copy : {
			point_ex : {
				files : [{expand:true, cwd:'lib/', src:'point-ex-<%= pkg.version %>.min.js', dest:'examples/js/'}]
			}
		},
		watch : {
			point_ex : {
				files : ['src/Point-ex.js'],
				tasks : ['point_ex']
			}
		},
		clean : {
			point_ex : {
				src : ['lib/point-ex*.js', 'examples/js/point-ex*.js']
			}
		},
		replace : {
			easeljs : {
				src : ['examples/*.html'],
				overwrite : true,
				replacements : [{
					from : /easeljs-.+min\.js/,
					to : 'easeljs-0.8.0.min.js'
				}]
			},
			point_ex : {
				src : ['examples/*.html'],
				overwrite : true,
				replacements : [{
					from : /js\/point-ex-.+min\.js/,
					to : 'js/point-ex-0.8.0.min.js'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-text-replace');

	grunt.registerTask('point_ex', ['clean:point_ex', 'uglify:point_ex', 'copy:point_ex']);

};