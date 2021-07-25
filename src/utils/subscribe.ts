export class Subscribe {
  private pound: Array<Function>
  constructor() {
    this.pound = []
  }
  add(fun: Function) {
    this.pound.push(fun)
  }
  remove(fun: Function) {
    const index = this.pound.findIndex(item => {
      return Object.is(fun, item)
    })
    if (index > -1) {
      this.pound.splice(index, 1)
    }
  }
  triggle(...args: Array<unknown>) {
    this.pound.forEach(item => {
      item.call(this, ...args)
    })
  }
}

// export const getEnv = () => {
console.log(process.env.ROLE)
// }




