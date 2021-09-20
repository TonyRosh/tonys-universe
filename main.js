import './style.css';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as THREE from 'three';

  /////////////////////////
  // INITIAL 3JS SET UP //
  ///////////////////////



  // SCENE/CAMERA/RENDER

  let scene = new THREE.Scene();
  
  let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

  camera.position.setZ(0);
  camera.position.setX(0);
  camera.position.setY(0);

  let renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector("#bg")
  });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;



  // BACKGROUND

  const spaceTexture = new THREE.TextureLoader().load("https://i.imgur.com/NfvOd44.jpg");
  scene.background = spaceTexture;



  // CONTROLS 

  const controls = new OrbitControls( camera, renderer.domElement );

    controls.maxDistance = 226.5;
    controls.enablePan = false;
    controls.enableDamping = true;
    controls.dampingFactor = .03;
    controls.touches = {
      ONE: THREE.TOUCH.ROTATE,
      TWO: THREE.TOUCH.DOLLY_PAN
    }

    controls.update();



  // LIGHTING

  const pointLight = new THREE.PointLight(0xffffff);
  pointLight.position.set(5, 5, 5);

  const ambientLight = new THREE.AmbientLight(0xf1f1f1);

  scene.add(pointLight, ambientLight);



  ///////////////////////////
  // SET UP STATIC SHAPES //
  /////////////////////////



  // YELLOW STARS

  function addStarYellow() {

    const geometry = new THREE.SphereGeometry(0.075, 0.5, 0.5);
    const material = new THREE.MeshStandardMaterial({ color: 0xffd729 });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(350));
    star.position.set(x, y, z);

    scene.add(star);

    star.callback = function() {}

  }

  Array(1000).fill().forEach(addStarYellow);



  //WHITE STARS

  function addStarWhite() {

    const geometry = new THREE.SphereGeometry(0.075, 0.5, 0.5);
    const material = new THREE.MeshStandardMaterial({ color: 0xf5f5f5 });
    const star = new THREE.Mesh(geometry, material);

    const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(350));
    star.position.set(x, y, z);

    scene.add(star);

    star.callback = function() {}

  }

  Array(1000).fill().forEach(addStarWhite);



  // DIAMONDS

  function diamond() {

    let geometry = new THREE.OctahedronGeometry(1.5, 0);
    let material = new THREE.MeshBasicMaterial({ color: 0xbb880f });
    let diamonds = new THREE.Mesh(geometry, material);

    let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(390));
    diamonds.position.set(x, y, z);


    scene.add(diamonds);

    diamonds.callback = function() {}

  }

  Array(10).fill().forEach(diamond);



  // PYRAMIDS

  function pyramid() {

    let geometry = new THREE.TetrahedronGeometry(2.5, 0);
    let material = new THREE.MeshBasicMaterial({ color: 0xbb9948 });
    let pyramids = new THREE.Mesh(geometry, material);

    let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(390));
    pyramids.position.set(x, y, z);

    scene.add(pyramids);

    pyramids.callback = function() {}

  }

  Array(10).fill().forEach(pyramid);



  // HEARTS

  function whiteHeart() {

    const a = 0, b = 0;

    const heartShape = new THREE.Shape();

    heartShape.moveTo( a + -2.5, b + -2.5 );
    heartShape.bezierCurveTo( a + -2.5, b + -2.5, a + -2, b, a, b );
    heartShape.bezierCurveTo( a - -3, b, a - -3, b + -3.5,a - -3, b + -3.5 );
    heartShape.bezierCurveTo( a - -3, b + -5.5, a - -1.5, b + -7.7, a + -2.5, b + -9.5 );
    heartShape.bezierCurveTo( a + -6, b + -7.7, a + -8, b + -5.5, a + -8, b + -3.5 );
    heartShape.bezierCurveTo( a + -8, b + -3.5, a + -8, b, a + -5, b );
    heartShape.bezierCurveTo( a + -3.5, b, a + -2.5, b + -2.5, a + -2.5, b + -2.5 );

    const geometry = new THREE.ShapeGeometry( heartShape );
    const material = new THREE.MeshBasicMaterial( { color: 0xe8ded1 } );
    const heart = new THREE.Mesh( geometry, material ) ;

    let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(500));
    heart.position.set(x, y, z);

    scene.add( heart );

    heart.callback = function() {}

  }
  
  Array(10).fill().forEach(whiteHeart);



  /////////////////////////////
  // SET UP ANIMATED SHAPES //
  ///////////////////////////



  //PICTURE CUBES AND UFOS

  function box() {

    // PICTURE CUBES

    let randomPicture = () => {
      let picturesArray = ['https://i.imgur.com/HoCPcs3.jpg', 'https://i.imgur.com/qqw2RMP.jpg', 'https://i.imgur.com/bHVpOJJ.png', 'https://i.imgur.com/B8ghWwB.png', 'https://i.imgur.com/GR4gAn1.png', 'https://i.imgur.com/SYzLz4I.png', 'https://i.imgur.com/10nCGHC.png', 'https://i.imgur.com/KnhScDN.png', 'https://i.imgur.com/uUQbDed.png', 'https://i.imgur.com/gFSNReh.png', 'https://i.imgur.com/lOnHUiY.jpg', 'https://i.imgur.com/CnKFVbx.png', 'https://i.imgur.com/laWg0PR.png', 'https://i.imgur.com/bmjglz0.png', 'https://i.imgur.com/uM8qIQd.png', 'https://i.imgur.com/Zh7Vq4C.png', 'https://i.imgur.com/op7YiDU.jpg', 'https://i.imgur.com/89BgiRx.jpg', 'https://i.imgur.com/VkFE7DW.jpg', 'https://i.imgur.com/KzNF8BQ.jpg', 'https://i.imgur.com/iNJ3dkP.jpg', 'https://i.imgur.com/ZazbtLr.png', 'https://i.imgur.com/y4zFvs3.jpg', 'https://i.imgur.com/M3XUWe2.jpg', 'https://i.imgur.com/HxikqTB.jpg', 'https://i.imgur.com/kUfbR3Z.jpg', 'https://i.imgur.com/AdvEOav.jpg', 'https://i.imgur.com/MbkPmiS.jpg', 'https://i.imgur.com/vUqeF7o.jpg', 'https://i.imgur.com/6Z9ZXc2.jpg', 'https://i.imgur.com/Eg4FsjV.jpg', 'https://i.imgur.com/gkUXeIX.jpg', 'https://i.imgur.com/NamrJJL.jpg', 'https://i.imgur.com/Scd2Ti1.jpg', 'https://i.imgur.com/w1qdXCp.jpg', 'https://i.imgur.com/4Ks9BBx.jpg', 'https://i.imgur.com/GgLKP2t.jpg', 'https://i.imgur.com/5aEKXM2.jpg', 'https://i.imgur.com/Yo4Gmc9.jpg', 'https://i.imgur.com/yenVsxW.jpg', 'https://i.imgur.com/ez3u7ex.jpg', 'https://i.imgur.com/wkZeD6a.jpg', 'https://i.imgur.com/FcEaStg.png', 'https://i.imgur.com/m9WthAG.png', 'https://i.imgur.com/jNKQXiX.png', 'https://i.imgur.com/Dl7aVTc.jpg', 'https://i.imgur.com/fFcRIvv.png', 'https://i.imgur.com/1rzhH1I.png', 'https://i.imgur.com/NXrFmTD.png', 'https://i.imgur.com/KbCjL94.png', 'https://i.imgur.com/jKgnXGC.png', 'https://i.imgur.com/R1thJbU.png', 'https://i.imgur.com/oxsw7D0.png', 'https://i.imgur.com/zzieKec.jpg', 'https://i.imgur.com/DjiUPn1.jpg', 'https://i.imgur.com/AcJN0vN.jpg', 'https://i.imgur.com/iILk5HC.jpg', 'https://i.imgur.com/8jSU8AT.jpg', 'https://i.imgur.com/8gdA2iz.jpg', 'https://i.imgur.com/YqYi3lm.jpg', 'https://i.imgur.com/Haibb8N.jpg', 'https://i.imgur.com/3xExYnT.jpg', 'https://i.imgur.com/kUVNwdT.jpg', 'https://i.imgur.com/47dVmlu.jpg', 'https://i.imgur.com/ssqqIta.jpg', 'https://i.imgur.com/Ha03TIS.jpg', 'https://i.imgur.com/nECWzpe.jpg', 'https://i.imgur.com/Em6hCL8.jpg', 'https://i.imgur.com/3dghcwr.jpg', 'https://i.imgur.com/Wgit6EE.jpg', 'https://i.imgur.com/uwRInuh.jpg', 'https://i.imgur.com/gHkLcJR.jpg', 'https://i.imgur.com/RLv5U8D.jpg', 'https://i.imgur.com/riSicyA.jpg', 'https://i.imgur.com/Oo6Lapt.jpg', 'https://i.imgur.com/yhkwzVz.jpg', 'https://i.imgur.com/rgTOQCI.jpg', 'https://i.imgur.com/MLUR4QH.jpg', 'https://i.imgur.com/CL20bbx.jpg', 'https://i.imgur.com/AXkb1Hr.jpg', 'https://i.imgur.com/R1WWNOQ.png', 'https://i.imgur.com/pnqv1MG.jpg', 'https://i.imgur.com/xevJVYT.jpg', 'https://i.imgur.com/CeHUkNY.jpg', 'https://i.imgur.com/dDPKlkW.jpg', 'https://i.imgur.com/cpxBOgd.jpg', 'https://i.imgur.com/tT1rHcz.jpg', 'https://i.imgur.com/va62Tv7.jpg', 'https://i.imgur.com/HMjXSdo.jpg', 'https://i.imgur.com/0vNAGpX.jpg', 'https://i.imgur.com/qGB3lLM.jpg', 'https://i.imgur.com/UW6A8w6.jpg', 'https://i.imgur.com/D8fL7HP.jpg', 'https://i.imgur.com/OMYk5bF.jpg', 'https://i.imgur.com/FTXQReR.jpg', 'https://i.imgur.com/WeqTlZp.jpg', 'https://i.imgur.com/9PVLuOu.jpg', 'https://i.imgur.com/cZPvAzt.jpg', 'https://i.imgur.com/Jr21qJu.jpg', 'https://i.imgur.com/kObKcxS.jpg', 'https://i.imgur.com/joPD2bc.jpg', 'https://i.imgur.com/xTjejHs.png', 'https://i.imgur.com/BGxJJDa.png', 'https://i.imgur.com/ZnTSD8f.png', 'https://i.imgur.com/FbSBGfp.png', 'https://i.imgur.com/pLidDHj.png', 'https://i.imgur.com/tj3ba33.png', 'https://i.imgur.com/LcL3Tb8.png', 'https://i.imgur.com/aXpuhMP.png', 'https://i.imgur.com/1pjk1HS.png', 'https://i.imgur.com/CSe79bO.png', 'https://i.imgur.com/D4BWVxd.png', 'https://i.imgur.com/PCyESXj.png', 'https://i.imgur.com/OMtTKMl.png', 'https://i.imgur.com/BoHR1Dh.png', 'https://i.imgur.com/8bBWBM1.png', 'https://i.imgur.com/Ae7FeXa.png', 'https://i.imgur.com/Q27JAwq.png', 'https://i.imgur.com/mkypv2A.png', 'https://i.imgur.com/nBCTRg9.png', 'https://i.imgur.com/cRU3oat.png', 'https://i.imgur.com/y66tEwv.png', 'https://i.imgur.com/cZ8JXwy.png']
      let randomPicture = Math.floor(Math.random() * picturesArray.length);
      return picturesArray[randomPicture];
    }

    const loader = new THREE.TextureLoader();

    let geometry = new THREE.BoxGeometry(10, 10, 10);
    let material = [
      new THREE.MeshBasicMaterial({map: loader.load(randomPicture())}),
      new THREE.MeshBasicMaterial({map: loader.load(randomPicture())}),
      new THREE.MeshBasicMaterial({map: loader.load(randomPicture())}),
      new THREE.MeshBasicMaterial({map: loader.load(randomPicture())}),
      new THREE.MeshBasicMaterial({map: loader.load(randomPicture())}),
      new THREE.MeshBasicMaterial({map: loader.load(randomPicture())})
    ];
    let boxes = new THREE.Mesh(geometry, material);

    let [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(250));
    boxes.position.set(x, y, z);

    scene.add( boxes );

    boxes.callback = function() {}



    // UFOS

    const ufoTexture = new THREE.TextureLoader().load("https://i.imgur.com/PsyG6xg.jpg");

    let points = [];
    for (let i = 0; i < 10; i++) {
      points.push(new THREE.Vector2(Math.sin(i * 0.4) * 5 + 2.5, (i - 2.5) * .33));
    }
    
    let ufoGeometry = new THREE.LatheGeometry(points);
    let ufoMaterial = new THREE.MeshPhongMaterial({ map: ufoTexture });
    let ufos = new THREE.Mesh(ufoGeometry, ufoMaterial);

    let ufoPositionX = boxes.position.x 
    let ufoPositionY = boxes.position.y + 11
    let ufoPositionxZ = boxes.position.z
    
    ufos.position.set(ufoPositionX, ufoPositionY, ufoPositionxZ);

    scene.add(ufos);

    ufos.callback = function() {}



    // ROTATION FOR CUBES AND UFOS

    function rotate() {
      
      requestAnimationFrame( rotate );

      let numbersArray = [0.01, 0.009, 0.008, 0.007, 0.006, 0.005, 0.004, 0.003, 0.002, 0.001];

      let random = Math.floor(Math.random() * numbersArray.length);
      let randomNumberX = numbersArray[random];
      let randomNumberY = numbersArray[random];
      let randomNumberZ = numbersArray[random];
      
      boxes.rotation.x +=  randomNumberX
      boxes.rotation.y +=  randomNumberY
      boxes.rotation.z +=  randomNumberZ

      ufos.rotation.y += 0.1;

    }

    rotate();



    // SPOT LIGHT FOR GREEN UNDERGLOW ON UFOS

    const spotLight = new THREE.SpotLight( 0x00ff00 );

    spotLight.position.set( boxes.position.x, boxes.position.y, boxes.position.z );

    spotLight.target = ufos;

    spotLight.power = 1.5;

    scene.add( spotLight );
    
  }

  Array(20).fill().forEach(box);



  //////////////////////////////
  // SET UP CLICKABLE SHAPES //
  ////////////////////////////



  const linkCubeTexture = new THREE.TextureLoader().load('https://i.imgur.com/RWn66Lw.jpg');

  function aboutMeLink() {
    window.location = "https://tonyroscioli.com/about";
  }



  // FIRST LINK CUBE

  const firstLinkCube = new THREE.Mesh(
    new THREE.BoxGeometry(4.2, 4.2, 4.2),
    new THREE.MeshBasicMaterial({ map: linkCubeTexture })
  );

  firstLinkCube.name = 'about_me';
  firstLinkCube.callback = function() {aboutMeLink();}

  firstLinkCube.position.z = 158;
  firstLinkCube.position.x = 3.3;
  firstLinkCube.position.y = 3.3;

  scene.add(firstLinkCube);



  // CENTER LINK CUBE

  const centerLinkCube = new THREE.Mesh(
    new THREE.BoxGeometry(4.2, 4.2, 4.2),
    new THREE.MeshBasicMaterial({ map: linkCubeTexture })
  );
  
  centerLinkCube.callback = function() {aboutMeLink();}

  centerLinkCube.position.z = 0;
  centerLinkCube.position.x = 0;
  centerLinkCube.position.y = 0;

  scene.add(centerLinkCube);



  ////////////////////
  // FUNCTIONALITY //
  //////////////////



  // CLICK FUNCTION

  window.addEventListener('click', onDocumentMouseDown, false);

  let raycaster = new THREE.Raycaster();
  let mouse = new THREE.Vector2();

  function onDocumentMouseDown( event ) {

    event.preventDefault();

    mouse.x = ( event.clientX / renderer.domElement.clientWidth ) * 2 - 1;
    mouse.y = - ( event.clientY / renderer.domElement.clientHeight ) * 2 + 1;

    raycaster.setFromCamera( mouse, camera );

    let intersects = raycaster.intersectObjects( scene.children );

    if ( intersects.length > 0 ) {
      intersects[0].object.callback();

  }}



  // ANIMATION

  let animate = function () {

    requestAnimationFrame(animate);

    firstLinkCube.rotation.y += 0.005;
    centerLinkCube.rotation.y += 0.005;

    renderer.render(scene, camera);

    controls.update();

  };

  animate();



  // ON SCROLL CAMERA MOVEMENT

  function moveCamera() {

    const top = document.body.getBoundingClientRect().top;

    camera.position.z = top * -0.01;
    camera.position.x = top * -0.0002;
    camera.position.y = top * -0.0002;

  }

  window.onscroll = moveCamera;

  moveCamera();



  // AUTO SCROLL ON PAGE LOAD

  function autoScroll() {

    let element = document.querySelector(".home")
    element.scrollIntoView({behavior: "smooth", block: "end", inline: "end"});

  }

  autoScroll();


