import Test from 'ava'
import Muu from './muumuu'

Test('new Muu returns a instance', (t) => {
  const muu = new Muu()
  t.true(muu instanceof Muu)
})
