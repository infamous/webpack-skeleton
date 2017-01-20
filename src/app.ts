declare const console: any
declare const setTimeout: any

import Foo from './Foo'

const sleep = time => new Promise(r => setTimeout(r, time))

async function main() {
    const f = new Foo
    f.sayHello()
    await sleep(1000)
    console.log('.')
    await sleep(1000)
    console.log('.')
    await sleep(1000)
    console.log('.')
    await sleep(1000)
    f.sayWorld()
}

main()
