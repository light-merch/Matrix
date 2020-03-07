const loadTextures = function (path, is_matrix) {
    let material;
    if (is_matrix) {
        material = new THREE.MeshBasicMaterial({color: 0x00ff00, wireframe: true});
    } else {
        material = [
            new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(path), side: THREE.DoubleSide}), // RIGHT SIDE
            new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(path), side: THREE.DoubleSide}), // LEFT SIDE
            new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(path), side: THREE.DoubleSide}), // TOP SIDE
            new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(path), side: THREE.DoubleSide}), // BOTTOM SIDE
            new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(path), side: THREE.DoubleSide}), // FRONT SIDE
            new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load(path), side: THREE.DoubleSide})  // BACK SIDE
        ];
    }
    return material;
};


const FizzyText = function () {
    this.message = 'dat.gui';
    this.light = 0.5;
    this.matrix_style = false;
    this.explode = function () {
    };
};


window.onload = function() {
    /*let loader = new THREE.GLTFLoader();

    var dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath( '/examples/jsm/libs/draco/' );
    loader.setDRACOLoader( dracoLoader );

    loader.load('models/tokyo.glb', function (gltf) {
        scene.add(gltf.scene);
    }, undefined, function (error) {
        console.error(error);
    });*/

    const text = new FizzyText();
    const gui = new dat.GUI();
    gui.add(text, 'message');
    control = gui.add(text, 'light', 0, 1);
    matrix = gui.add(text, 'matrix_style');
    gui.add(text, 'explode');

    control.onChange(function(value){
        //
    });

    matrix.onChange(function(value){
        while(scene.children.length > 0){
            scene.remove(scene.children[0]);
        }

        IS_MATRIX = !!value;
        add_textures(IS_MATRIX);
    });
};