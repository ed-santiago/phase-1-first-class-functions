const receivesAFunction = cbFunction => cbFunction()

const returnsANamedFunction = () => function namedFunction() {
  
}

const returnsAnAnonymousFunction = () => (function () {console.log("hello")})
