// string, boolean, number
let x: number = 10
x = 25

console.log(x)

// inferencia x annotation

//inferencia
let y = 12
y = 14

// annotation
let z: number = 12

// tipos básicos
let firstName: string = 'Daniel'
let age: string = '30'
const isAdmin: boolean = true

// String != string

console.log(typeof firstName)

firstName = 'Gustavo'

console.log(firstName)

// object
console.log('object (arrays):')
const myNumbers: number[] = [1, 2, 3]

console.log(myNumbers)
console.log(myNumbers.length)
// console.log(myNumbers.toUpperCase())
//console.log(firstName.toUpperCase())
myNumbers.push(4)

console.log(myNumbers)

// tuplas -> tuple
let myTuple: [number, string, string[]]

myTuple = [5, 'teste', ['a', 'b']]

// myTuple = [true, false, true]

// object literals -> {prop: value}
console.log('object literals:')
const user: {name: string, age: number} = {
  name: 'Daniel',
  age: 23
}

console.log(user)
console.log(user.name)

// any
let a: any = 0

a = 'teste'
a = true
a = []

// union type
let id: string | number = '10'

id = 200

// type alias
type myIdtype = number | string

const userId: myIdtype = 10
const productId: myIdtype = '0001'

// enum
// Determinar o tamanho de roupas (size: Médio, size: Pequeno...)
console.log('Enum:')

enum Size {
  P = 'Pequeno',
  M = 'Médio',
  G = 'Grande'
}

const camisa = {
  name: 'Camisa gola V',
  size: Size.G
}

console.log(camisa)

// literal types
let teste: 'autenticado' | null

teste = null
teste = 'autenticado'
// teste = 'outroValor' -> Erro: não é possível mudar o valor

// Funções
console.log('Funções:')

function sum(a: number, b: number) {
  return a + b
}

console.log(sum(12, 12))

function sayHelloTo(name: string): string {
  return `Hello ${name}`
}

console.log(sayHelloTo('Daniel'))

function logger(msg: string): void {
  console.log(msg)
}

logger('Teste!')

function greeting(name: string, greet?: string): void {
  if(greet) return console.log(`Olá ${greet} ${name}`)

  console.log(`Olá ${name}`)
}

greeting('Daniel', 'Sr.')

// interface -> Serve para padronizar estruturas
console.log('interface:')

interface MathFunctionParams {
  n1: number,
  n2: number
}

function sumNumbers(nums: MathFunctionParams): number {
  return nums.n1 + nums.n2
}

// console.log(sumNumbers({n1: 1, n2: 2}))

function multiplyNumbers(nums: MathFunctionParams): number {
  return nums.n1 * nums.n2
}

const someNumbers: MathFunctionParams = {
  n1: 5,
  n2: 10,
}

console.log(multiplyNumbers(someNumbers), sumNumbers(someNumbers))


// narrowing
// checagem de tipos
console.log('narrowing:')

function doSomething(info: number | boolean) {
  if(typeof info === 'number') {
    console.log(`O número é ${info}`)
    return
  }

  console.log('Não foi passado um número')
}

doSomething(10)
doSomething(true)

// generics
console.log('generics:')

function showArraysItems<T>(arr: T[]) {
  arr.forEach((item) => {
    console.log(`ITEM: ${item}`)
  })
}

const a1 = [1, 2, 3]
const a2 = ['a', 'b', 'c']

showArraysItems(a1)
showArraysItems(a2)

// classes
console.log('classes:')

class Users {
  name
  role
  isApproved

  constructor(name: string, role: string, isApproved: boolean) {
    this.name = name
    this.role = role
    this.isApproved = isApproved
  }

  showUserName() {
    console.log(`O nome do usuário é ${this.name}`)
  }

  showUserRole(canShow: boolean) {
    if(canShow) {
      console.log(`O usuário é ${this.role}`)
      return 
    }
    console.log('Informação restrita')
  }
}

const zeca = new Users('Zeca', 'Admin', true)

console.log(zeca)

zeca.showUserName()
zeca.showUserRole(true)

// interfaces em classes
console.log('interfaces em classes:')

interface IVehicle {
  brand: string
  showBrand(): void
}

class Car implements IVehicle {
  brand
  wheels

  constructor(brand: string, wheels: number) {
    this.brand = brand
    this.wheels = wheels
  }

  showBrand(): void {
    console.log(`A marca do carro é: ${this.brand}`)
  }
}

const fusca = new Car('VW', 4)

fusca.showBrand()

// herança
console.log('herança:')

class SuperCar extends Car {
  engine

  constructor(brand: string, wheels: number, engine: number) {
    super(brand, wheels)
    this.engine = engine
  }
}

const a4 = new SuperCar('Audi', 4, 2.0)

console.log(a4)

a4.showBrand()

// decorators
console.log('decorators:')

function BaseParameters<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    id = Math.random()
    createdAt = new Date()
  }
}

@BaseParameters
class Person {
  name: string

  constructor(name: string) {
    this.name = name
  }
}

const sam = new Person('Sam')

console.log(sam)
