import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'

export default class Game {
  static VIEW_X = 512
  static VIEW_Y = 288
  static VIEW_RATIO_X = 16
  static VIEW_RATIO_Y = 9

  scene
  camera
  renderer

  // TODO: Switch from loop to loop
  loop = null

  /** This initializes the Game. The `animate` function must be called to start rendering. */
  constructor () {
    // Create a new base scene
    this.scene = new Scene()

    // Create the frame and set the size accordingly
    this.camera = new PerspectiveCamera(90, Game.VIEW_RATIO_X / Game.VIEW_RATIO_Y, 0.1, 1000)

    // Create a new renderer and calculate the proper size to make it
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    this.renderer = new WebGLRenderer({ antialias: false })
    this.renderer.setPixelRatio(Game.VIEW_Y / h)
    this.renderer.setSize(h / Game.VIEW_RATIO_Y * Game.VIEW_RATIO_X, h)
    document.body.appendChild(this.renderer.domElement)
  }

  /** Play the game. */
  statePlay () {
    // TODO Handle playing.
  }

  /** Pause the game. */
  statePause () {
    // TODO Handle pausing.
  }
}
