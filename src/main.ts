import 'aframe';
import 'aframe-event-set-component';
import './application';
import './events/thumbstick';
import 'aframe-extras';

document.body.innerHTML = `<a-scene id="scene" start="">
<a-entity hand-controls="left"></a-entity>
<a-entity hand-controls="right"></a-entity>
<a-box position="-1 0.5 -3" rotation="0 45 0" color="#4CC3D9"></a-box>
<a-sphere position="0 1.25 -5" radius="1.25" color="#EF2D5E"></a-sphere>
<a-cylinder position="1 0.75 -3" radius="0.5" height="1.5" color="#FFC65D"
event-set__enter="_event: mouseenter; color: #8FF7FF"
event-set__leave="_event: mouseleave; color: #4CC3D9"></a-cylinder>
<a-plane position="0 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
<a-plane position="4 0 -4" rotation="-90 0 0" width="4" height="4" color="#EF2D5E"></a-plane>
<a-plane position="8 0 -4" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
<a-plane position="12 0 -4" rotation="-90 0 0" width="4" height="4" color="#EF2D5E"></a-plane>
<a-plane position="0 0 0" rotation="-90 0 0" width="4" height="4" color="#EF2D5E"></a-plane>
<a-plane position="4 0 0" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
<a-plane position="8 0 0" rotation="-90 0 0" width="4" height="4" color="#EF2D5E"></a-plane>
<a-plane position="12 0 0" rotation="-90 0 0" width="4" height="4" color="#7BC8A4"></a-plane>
<a-sky color="#ECECEC"></a-sky>
<a-entity movement-controls="fly: false">
<a-entity camera position="0 1.6 0" look-controls>
<a-cursor></a-cursor></a-entity>
</a-entity>
</a-scene>`;