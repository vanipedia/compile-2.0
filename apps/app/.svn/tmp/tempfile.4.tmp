// java -jar jmvc\rhino\js.jar -e load('apps/app/compress.js')

MVCOptions = {
    onload: false,
    compress_callback: function(total){
        var compressed = MVCOptions.collect_and_compress(total);
        MVCOptions.save('apps/app/production.js', compressed);
        print("Compressed to 'apps/app/production.js'.");
        var app = new MVCObject.DApplication(total, "app");
        app.generate();
        print("Generated docs.");
    },
    env : "compress"
}
load('jmvc/rhino/htmlparser.js');
load('jmvc/rhino/env.js');
load('jmvc/rhino/helpers.js');
load('jmvc/rhino/doc.js');
window.location = 'apps/app/index.html';
