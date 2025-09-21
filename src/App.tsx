// import React from 'react';
import { Canvas } from '@react-three/fiber';
import { ScrollControls, Scroll } from '@react-three/drei';
import Scene from './components/Scene';
import UI from './components/UI';

function App() {
  return (
    <div className="w-full h-screen relative">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%' }}
      >
        <ScrollControls pages={8} damping={0.1}>
          <Scene />
          <Scroll html>
            <UI />
          </Scroll>
        </ScrollControls>
      </Canvas>
    </div>
  );
}

export default App;