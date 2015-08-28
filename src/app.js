var style                  = require('famous/src/core/famous.css') // needed by famous
var Plane                  = require('infamous/Plane')
var contextWithPerspective = require('infamous/utils').contextWithPerspective

var ctx = contextWithPerspective(1000)
var square = new Plane({
    size: [200,200],
    content: 'Hello.',
    properties: {
        backfaceVisibility: 'visible',
        background: 'pink',
        padding: '5px'
    }
})

ctx.add(square)
square.transform.setRotate([0,2*Math.PI,0], {duration: 5000, curve: 'easeInOut'})
