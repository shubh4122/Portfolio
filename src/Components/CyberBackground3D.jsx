import * as Three from "three";
import {useEffect, useRef} from "react";

/*
    3.js Concepts used:
    1. Scene
    2. Camera
    3. Fog - Interesting. We use an exponential fog. Visibility of near spaces is high. Farther becomes less visible. This happens exponentially with distance
        My use case: The scattering of particles - near less dense. Farther more dense.
    4. Renderer ofcc!
    5. Particles - their geometry, material
    6. Mesh
    7. CONTROLS - Mouse controls. Helps me move the fog of particles with my mouse cursor.
    8. Clock - ?
    9. Resizing logic for window resizes.
*/

/*
    Steps:
    1. Create the scene
    2. Create camera + Set camera position (z)
    3. Create Fog
    4. Create Renderer
    5, Create BufferGeometry - helps with creating a geometry with points all around
    6. Populate the positions of the points in a fixed JS array - Distribute randomly
    7. Set the positions in the geometry
    8. Create the material
    9. Create Mesh
    10. Setup Controls - Mouse controls
    11. Animation Loop
*/

const CyberBackground3D = () => {
    const mountRef = useRef(null); //Creates an empty box - Placeholder within which we will set our scene

    useEffect(() => {
        //Create Scene
        const scene = new Three.Scene();
        scene.background = new Three.Color(0x050505);
        scene.fog = new Three.FogExp2(0x050505, 0.002); //density tells how fast will the fog grow dense. For us, as we need the particles to be seen from afar, we would want that it grows dense slowly, hence we can see many particles together, hence lower value (close to 0)

        const camera = new Three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.z = 5;


        /*
            - alpha: true: Makes the background of the 3D scene transparent so you can see the HTML/CSS behind it.
            - antialias: true: Smooths out the jagged edges (like stair-steps) on 3D objects, making them look higher quality.
        */
        const renderer = new Three.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setPixelRatio(window.devicePixelRatio);//smoothens the pixelating for HIGH RES screens

        // Appends the 3js elements to the empty placeholder ref/box created (mountref)
        if (mountRef.current) {
            mountRef.current.appendChild(renderer.domElement);
        }

        // --- 2. CREATE PARTICLES (The "Dots") ---
        const geometry = new Three.BufferGeometry();
        const particlesCount = 2000;
        const posArray = new Float32Array(particlesCount * 3);

        for (let i = 0; i < particlesCount * 3; i++) {
            // Spread particles randomly in 3D space
            posArray[i] = (Math.random() - 0.5) * 15;
        }

        geometry.setAttribute('position', new Three.BufferAttribute(posArray, 3));

        // The Material - this controls the "Dot" look
        const material = new Three.PointsMaterial({
            size: 0.015, // Adjust size of dots
            color: 0xff3b3b, // The Fsociety Red accent
            transparent: true,
            opacity: 0.8,
        });

        const particlesMesh = new Three.Points(geometry, material);
        scene.add(particlesMesh);

        // --- 3. ANIMATION LOOP ---
        // Track mouse for subtle interaction
        let mouseX = 0;
        let mouseY = 0;

        const handleMouseMove = (event) => {
            mouseX = event.clientX / window.innerWidth - 0.5; // x/2x = 0.5 - 0.5 = 0 which is extreme left. right = 1
            mouseY = event.clientY / window.innerHeight - 0.5;
        };

        window.addEventListener('mousemove', handleMouseMove);

        const clock = new Three.Clock();
        let animationId;

        const animate = () => {
            animationId = requestAnimationFrame(animate);
            const elapsedTime = clock.getElapsedTime();

            // Rotate the entire cloud slowly
            particlesMesh.rotation.y = elapsedTime * 0.05;

            // React to mouse movement
            particlesMesh.rotation.x = mouseY * 0.5;
            particlesMesh.rotation.y += mouseX * 0.5;

            renderer.render(scene, camera);
        };

        animate();

        // --- 4. HANDLE RESIZE ---
        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };

        window.addEventListener('resize', handleResize);

    }, []); //deps empty means it will run when the website loads

    return (
        <div ref={mountRef} className=""/>
    );
};

export default CyberBackground3D;