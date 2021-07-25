import { Subscribe } from './utils/subscribe'
console.log(process.env.NODE_ENV);
console.log(process.env.ROLE)
export default function () {
  return new Subscribe()
}