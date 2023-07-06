/* eslint-disable consistent-return */
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

function ThreeSphere() {
  const containerRef = useRef<HTMLDivElement>(null);
  const sphereRef = useRef<THREE.Mesh>();

  useEffect(() => {
    const mouseX = 0;
    const mouseY = 0;

    const container = containerRef.current;

    if (!container) return;

    const scene = new THREE.Scene();

    // Create a sphere
    const geometry = new THREE.SphereGeometry(15, 32, 16);
    const material = new THREE.MeshStandardMaterial({
      color: '#00fff',
      wireframe: true,
    });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    sphereRef.current = mesh;

    // Add lighting
    // const pointLight = new THREE.PointLight(0x00fff, 2, 100);
    // pointLight.position.set(0, 10, 10);
    // scene.add(pointLight);

    // Add camera
    const camera = new THREE.PerspectiveCamera(
      50,
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
    // controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    // controls.autoRotateSpeed = 0.5;

    const ambientLight = new THREE.AmbientLight(0xfffff, 0.5);
    scene.add(ambientLight);

    // const handleMouseMove = (event: MouseEvent) => {
    //   const { clientX, clientY } = event;
    //   const { left, top, width, height } = container.getBoundingClientRect();

    //   mouseX = ((clientX - left) / width) * 2 - 1;
    //   mouseY = (-(clientY - top) / height) * 2 + 1;
    // };

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
    // container.addEventListener('mousemove', handleMouseMove);

    // add animation
    const tl = gsap.timeline({
      defaults: { duration: 1, delay: 0.5, ease: 'power3.inOut' },
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Play the animation when the element is in view
          tl.fromTo(mesh.scale, { x: 0, y: 0, z: 0 }, { x: 1, y: 1, z: 1 });
          tl.fromTo(
            '.feature-card',
            { opacity: 0, duration: 0.5 },
            { opacity: 1, stagger: 0.2 }
          );
          // Stop observing the element after playing the animation
          // observer.unobserve(entry.target);
        } else {
          tl.fromTo('.feature-card', { opacity: 1 }, { opacity: 0, delay: 0 });
        }
      });
    });
    const elem = document.getElementById('features');
    observer.observe(elem as Element);

    return () => {
      window.removeEventListener('resize', handleResize);
      // container.removeEventListener('mousemove', handleMouseMove);

      // Cleanup the scene and renderer
      // observer.disconnect();
      container.removeChild(renderer.domElement);
      scene.remove(mesh);
      geometry.dispose();
      material.dispose();
    };
  }, []);

  return <div className="w-full flex h-screen" ref={containerRef} />;
}

export default ThreeSphere;
