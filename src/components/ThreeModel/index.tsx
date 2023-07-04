/* eslint-disable consistent-return */
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ThreeSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<THREE.Mesh>();

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    const container = containerRef.current;

    if (!container) return;

    const scene = new THREE.Scene();

    // Create a sphere
    const geometry = new THREE.SphereGeometry(5, 64, 64);
    const material = new THREE.MeshStandardMaterial({ color: '#00fff' });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    sphereRef.current = mesh;

    // Add lighting
    const pointLight = new THREE.PointLight(0xfffff, 1, 100);
    pointLight.position.set(0, 10, 10);
    scene.add(pointLight);

    // Add camera
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      100
    );
    camera.position.z = 20;

    // Add renderer
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Add controlls
    const controls = new OrbitControls(camera, container);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    // controls.autoRotateSpeed = 0.5;

    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    // scene.add(ambientLight);

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event;
      const { left, top, width, height } = container.getBoundingClientRect();

      mouseX = ((clientX - left) / width) * 2 - 1;
      mouseY = (-(clientY - top) / height) * 2 + 1;
    };

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the sphere based on mouse movement
      if (sphereRef.current) {
        sphereRef.current.rotation.x = mouseY;
        sphereRef.current.rotation.y = mouseX;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const { clientWidth, clientHeight } = container;
      // update camera
      camera.aspect = clientWidth / clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(clientWidth, clientHeight);
    };

    window.addEventListener('resize', handleResize);
    const loop = () => {
      controls.update();
      renderer.render(scene, camera);
      window.requestAnimationFrame(loop);
    };
    loop();
    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('resize', handleResize);
      container.removeEventListener('mousemove', handleMouseMove);

      // Cleanup the scene and renderer
      container.removeChild(renderer.domElement);
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return (
    <div
      className="w-full top-0 left-0 z-50 m-0 flex h-screen justify-center items-center"
      ref={containerRef}
    />
  );
}

export default ThreeSphere;
