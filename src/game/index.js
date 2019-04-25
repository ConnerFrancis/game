import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'

export default class Game {
  static VIEW_RATIO_X = 16
  static VIEW_RATIO_Y = 9

  scene
  camera
  renderer

  // Current loop, default state of playing
  loop = this.statePlay

  /** This initializes the Game. The `animate` function must be called to start rendering. */
  constructor () {
    // Create a new base scene
    this.scene = new Scene()

    // Create the frame and set the size accordingly
    this.camera = new PerspectiveCamera(90, Game.VIEW_RATIO_X / Game.VIEW_RATIO_Y, 0.1, 1000)

    // Create a new renderer and calculate the proper size to make it
    let s = this._calcViewSize()
    this.renderer = new WebGLRenderer()
    this.renderer.setSize(s[0], s[1])
    document.body.appendChild(this.renderer.domElement)

    console.log('money')
  }

  /**
   * Calculate the size to be used for the game port.
   *
   * @return {Number[]} Width and height.
   */
  _calcViewSize () {
    // Get the viewport height
    let h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
    // Get the ratio and ensure it is rounded down to whole pixels to fit into the viewport
    let r = Math.floor(h / Game.VIEW_RATIO_Y)
    // Returns the height and width that will fit into the viewport in whole pixels
    return [r * Game.VIEW_RATIO_X, r * Game.VIEW_RATIO_Y]
  }

  /** Play the game. */
  statePlay () {
    // TODO Handle playing.
  }

  /** Pause the game. */
  statePause () {
    // TODO Handle pausing.
  }

  /**
   * Actually run the renderer.
   * NOTE: This needs to be static otherwise it can't call itself.
   */
  static animate (g, callback = null) {
    requestAnimationFrame(Game.animate)
    g.renderer.render(g.scene, g.camera)

    if (callback !== null) callback()
  }
}
