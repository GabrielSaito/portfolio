import { Component, ElementRef, NgZone, OnInit, OnDestroy } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-canvas-box-component',
  template: '<div></div>',
  styleUrls: ['./canvas-box-component.component.scss']
})
export class CanvasBoxComponentComponent implements OnInit, OnDestroy {
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private cube!: THREE.Mesh;
  private controls!: OrbitControls;

  constructor(private ngZone: NgZone, private elementRef: ElementRef) {}

  glitch: boolean= true;

  ngOnInit() {


     setTimeout(() => {
      this.initThree();
      this.createBackground();
      this.createCube();
      this.createLights(); // Adicionando mais luzes
      this.createControls();
          this.glitch = true;

      this.animate();
     }, 100); // Tempo de simulação (3 segundos)



  }

  ngOnDestroy() {
    // Limpar recursos, se necessário
  }

  private initThree() {
    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.elementRef.nativeElement.querySelector('div').appendChild(this.renderer.domElement);
  }

  private createBackground() {
    const planeGeometry = new THREE.PlaneGeometry(100, 100);
  
    // Carregar a textura
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('../../assets/sky.jpg');
  
    // Configurar o material com a textura
    const planeMaterial = new THREE.MeshBasicMaterial({ map: texture });
  
    // Criar o plano com o material que contém a textura
    const backgroundPlane = new THREE.Mesh(planeGeometry, planeMaterial);
    backgroundPlane.position.z = -10;
  
    // Adicionar o plano à cena
    this.scene.add(backgroundPlane);
  }
  

  private createCube() {
    const geometry = new THREE.BoxGeometry();
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('../../assets/sky.jpg');

    const material = new THREE.MeshPhongMaterial({
      map: texture,
      color: 0xffffff,
      specular: 0xffffff,
      shininess: 50
    });

    this.cube = new THREE.Mesh(geometry, material);
    this.scene.add(this.cube);
    this.camera.position.z = 1;
  }

  private createLights() {
    // Adicionando luz ambiente
    const ambientLight = new THREE.AmbientLight(0x00ff00, 0.8);
    this.scene.add(ambientLight);

    // Adicionando luz direcional principal
    const directionalLight1 = new THREE.DirectionalLight(0x00ff00, 0.5);
    directionalLight1.position.set(5, 3, 5);
    this.scene.add(directionalLight1);

    // Adicionando luz direcional secundária
    const directionalLight2 = new THREE.DirectionalLight(0x00ff00, 0.3);
    directionalLight2.position.set(-5, -3, -5);
    this.scene.add(directionalLight2);
  }

  private createControls() {
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.25;
    this.controls.screenSpacePanning = false;
    this.controls.maxPolarAngle = Math.PI / 2;
  }

  private animate() {
    this.ngZone.runOutsideAngular(() => {
      const animateFn = () => {
        this.render();
        this.controls.update();
        requestAnimationFrame(animateFn);
      };

      animateFn();
    });
  }

  private render() {
    this.cube.rotation.x += 0.01;
    this.cube.rotation.y += 0.01;
    this.cube.rotation.z += 0.01;

    this.renderer.render(this.scene, this.camera);
  }
}
