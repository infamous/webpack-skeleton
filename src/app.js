import Scene      from 'motor.js/nodes/Scene'
import Camera     from 'motor.js/nodeComponents/Camera'
import Node       from 'motor.js/nodes/Node'
//import Transition from 'motor.js/animation/Transition'
//import Curve      from 'motor.js/animation/Curve'
//import DOMElement from 'motor.js/nodeComponents/renderables/DOMElement'

// Making a new scene initiates the Motor (if not already initiated). The
// Motor, behind the scenes, creates a web worker for the scene graph,
// plus creates various renderers as needed,
// where each renderer might have it's own worker.
let scene = new Scene(document.body)

// Components assign themselves onto the target node. The resulting property is
// a getter, so that if the user loses references to the Component and removes
// the Component from the node it will be collected from a WeakMap inside of
// the Node. Components are static, meaning they merely contain state, but they
// don't have mechanisms of animating that state.
scene.addComponent(new Camera)
scene.camera.perspective = 1000 // perspective is a setter property on the Component.

//// Nodes have default Components, like Size, Position, Rotation, etc. Maybe
//// they aren't instantiated until their getter is used for the first time? That
//// would save tons of memory compared to instantiating every default Component
//// on every Node.
let square = new Node
//square.size = [200, 200] // Change the default Size component's value.
//scene.addChild(square)

//// Adding a DOMElement component to the Node creates a getter `domEl` on the
//// Node.
//square.addComponent(new DOMElement)

//// Leave the DOMElement API pure and let the user manipulate the DOM elements
//// directly? This might leave room for thrashing flaws in the code of our
//// end-users. What can we do aboue this? It'd be coo to completely abstract
//// away any opportunity for the user to create Motor-based code that is not
//// performant.
//square.domEl.el.style.backfaceVisibility = 'visible'
//square.domEl.el.style.background         = 'pink'
//square.domEl.el.style.padding            = '5px'
//square.domEl.el.style.border             = '2px solid #34fd34'

//// Components are static things. Then we have Drivers (or similarly named, any
//// ideas?) which are things that are not added to a node, but rather take a
//// node and manipulate it.
////
//// Maybe Drivers interact with the Motor and cause calculations to be sent to
//// the Worker of the Scene Graph containing the node that the Driver is acting
//// on?
////
//// This is where I'm wondering: how might we let users write code that
//// might contain calculations, but for that code to be easily placed into a
//// Worker?
////
//// Hypothetical possibility:
//// The following Transition constructor takes a reference to a Node (we're in
//// the UI-thread), which it uses in order to be able to pass the WebWorker
//// instance of the Node into the currentValue function, which runs in the
//// worker of the Scene.
//let squareTransition = new Transition(square)
//squareTransition.go(0, 2*Math.PI, function(square, currentValue) {

    //// using the node's `.rotation` getter to get the rotation component and the
    //// rotation component's `.y` setter.
    //square.rotation.y = currentValue +
        //Math.random()*Math.PI/8 // some random mathematical calculation running in a worker.

//}, {
    //duration: 5000,

    //// easing functions must have a specific signature so that they can be
    //// serialized and used in a worker.
    //curve: Curve.expoInOut,

    //// shorthand for curves shipped with Motor: curve: 'nameOfCurve' The
    //// shorthand is preferable, because in that case the curve is already
    //// loaded inside a worker. User-defined functions will need to be
    //// serialized.
//}).loop()

//let circle = new Node
//circle.size = [100, 100] // Change the default Size component's value.
//scene.addChild(circle)

//circle.addComponent(new DOMElement)
//circle.domEl.el.style.backfaceVisibility = 'visible'
//circle.domEl.el.borderRadius = "50px"
//circle.domEl.el.border = "2px solid blue"

//let circleTransition = new Transition(circle)
//// when setting state in the UI thread, it gets passed to a worker and arrives
//// into that worker at some random point in the future.
//circle.state.init('someValue', 5)
//circleTransition.go(0, 2*Math.PI, function(circle, currentValue) {
    //circle.rotation.y = currentValue + circle.state.someValue
    //circle.state.someValue--
//}, { duration: 5000, curve: Curve.expoInOut }).loop()

//let text = new Node
//text.size = [100, 200] // Change the default Size component's value.
//scene.addChild(text)

//text.addComponent(new DOMElement)
//text.domEl.el.textContent = "Hello Text."

//// Automatically usable event API. Behind the scenes (to save memory) `.on` is
//// a getter that sets up an eventing system only the first time it's used, and
//// returns a function. If `.on` is never called, then we can save memory and
//// CPU by not setting up the event system.
//text.domEl.on('drag', event => {
    //text.position.x = event.deltas[0]
    //text.position.y = event.deltas[1]
    //text.position.z = event.deltas[2]
//})

