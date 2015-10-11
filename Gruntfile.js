module.exports =  function(grunt) {
	grunt.loadNpmTasks('grunt-critical');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	//grunt.loadNpmTasks('grunt-sass');
	//grunt.loadNpmTasks('grunt-contrib-concat');
//require('load-grunt-tasks')(grunt);

//var config = grunt.file.readYAML('Gruntconfig.yml');

grunt.initConfig({
	/* sass: {
		dist: {
			src: config.scssDir+'style.scss',
			dest: config.cssDir+'style.css',
		}
	},
	concat: {
		dist:{
			src: config.jsSrcDir+'*.js',
			dest: config.jsConcatDir+'app.js',
		}
	},*/
	/*jshint: {
		options: {
			"eqeqeq":true
		},
		all:[
			'Gruntfile.js',
			config.jsSrcDir+".js"
		]
	}, */
/*uglify: {
    my_target: {
      files: {
        'dist/perfmatters.min.js': ['src/input1.js', 'src/input2.js']
      }
    }
  }, */
	critical: {
    test: {
        options: {
            base: '/',
            css: [
                'src/css/style.css',
            ],
            width: 320,
            height: 70
        },
        src: 'src/index.html',
        dest: 'dist/index.html'
    }
}

	// watch: {
	//	sass:{
	//		files: config.scssDir+'**/*.scss',
	//		tasks: ['sass']
	//	}
	//}
});

grunt.registerTask('default',[
	//'jshint',
	'grunt-critical'
	]);
};