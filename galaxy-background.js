// Galaxy background for React (Three.js)
import * as THREE from 'three';

// tooltipRef es opcional, si se pasa, se usa para mostrar info interactiva
export function startGalaxy(canvas, projectParticles = [], tooltipRef, onProjectHover) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000, 1);

  // Galaxy parameters
  const parameters = {
    count: 20000,
    size: 0.01,
    radius: 5,
    branches: 5,
    spin: 1,
    randomness: 0.2,
    insideColor: '#ff6030',
    outsideColor: '#1b3984'
  };

  // Raycaster para hover interactivo
  const raycaster = new THREE.Raycaster();
  const mouse = new THREE.Vector2();
  let hoveredProject = null;

  // Generate galaxy points
  let geometry = null;
  let material = null;
  let points = null;
  let projectObjects = [];

  function generateGalaxy() {
    if (points !== null) {
      geometry.dispose();
      material.dispose();
      scene.remove(points);
      projectObjects.forEach(obj => scene.remove(obj));
      projectObjects = [];
    }
    geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(parameters.count * 3);
    const colors = new Float32Array(parameters.count * 3);
    const colorInside = new THREE.Color(parameters.insideColor);
    const colorOutside = new THREE.Color(parameters.outsideColor);
    for (let i = 0; i < parameters.count; i++) {
      const radius = Math.random() * parameters.radius;
      const branchAngle = ((i % parameters.branches) / parameters.branches) * Math.PI * 2;
      const spinAngle = radius * parameters.spin;
      const randomX = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomY = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const randomZ = Math.pow(Math.random(), 3) * (Math.random() < 0.5 ? 1 : -1) * parameters.randomness * radius;
      const i3 = i * 3;
      positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
      positions[i3 + 1] = randomY;
      positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;
      const mixedColor = colorInside.clone();
      mixedColor.lerp(colorOutside, radius / parameters.radius);
      colors[i3] = mixedColor.r;
      colors[i3 + 1] = mixedColor.g;
      colors[i3 + 2] = mixedColor.b;
    }
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    material = new THREE.PointsMaterial({
      size: parameters.size,
      sizeAttenuation: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      vertexColors: true
    });
    points = new THREE.Points(geometry, material);
    scene.add(points);
    // Add project particles as larger spheres
    projectParticles.forEach((proj, idx) => {
      const sphere = new THREE.Mesh(
        new THREE.SphereGeometry(0.13, 32, 32),
        new THREE.MeshBasicMaterial({ color: proj.color || '#fff' })
      );
      // Distribute project spheres in the galaxy arms
      const angle = ((idx % parameters.branches) / parameters.branches) * Math.PI * 2 + idx;
      const r = parameters.radius * 0.7 + idx * 0.2;
      sphere.position.set(
        Math.cos(angle) * r,
        Math.sin(angle * 2) * 0.5,
        Math.sin(angle) * r
      );
      sphere.userData = { ...proj };
      scene.add(sphere);
      projectObjects.push(sphere);
    });
  }

  generateGalaxy();

  // Animation
  // Interactividad: hover sobre esferas de proyectos
  function animate() {
    requestAnimationFrame(animate);
    points.rotation.y += 0.0005;
    projectObjects.forEach(obj => (obj.rotation.y += 0.002));

    if (tooltipRef && tooltipRef.current) {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(projectObjects);
      if (intersects.length > 0) {
        const obj = intersects[0].object;
        if (hoveredProject !== obj) {
          hoveredProject = obj;
          tooltipRef.current.innerHTML = `<strong>${obj.userData.name}</strong><br>${obj.userData.description || ''}`;
          if (typeof onProjectHover === 'function') {
            onProjectHover(obj.userData);
          }
        }
        tooltipRef.current.style.opacity = 1;
        tooltipRef.current.style.left = `${lastMouse.x}px`;
        tooltipRef.current.style.top = `${lastMouse.y}px`;
      } else {
        tooltipRef.current.style.opacity = 0;
        if (hoveredProject !== null) {
          hoveredProject = null;
          if (typeof onProjectHover === 'function') {
            onProjectHover(null);
          }
        }
      }
    }
    renderer.render(scene, camera);
  }
  animate();

  // Mouse tracking para tooltip
  let lastMouse = { x: 0, y: 0 };
  function onMouseMove(event) {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    lastMouse.x = event.clientX;
    lastMouse.y = event.clientY;
  }
  window.addEventListener('mousemove', onMouseMove);

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  // Limpieza de listeners si React desmonta
  return () => {
    window.removeEventListener('mousemove', onMouseMove);
  };
}
