import * as THREE from 'three'

import '@/misc/console'
import Game from '@/game'

const g = new Game()

let geom = new THREE.BoxGeometry(1, 1, 1)
let mat = new THREE.MeshBasicMaterial({ color: 0xffffff })
let cube = new THREE.Mesh(geom, mat)
g.scene.add(cube)
g.camera.position.z = 5

Game.animate(g, () => {
    cube.rotation.x += 0.1
    cube.rotation.y += 0.1
})

export default g
