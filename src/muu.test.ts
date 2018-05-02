import Test from 'ava'
import Muu from './muu'

Test('new Muu returns a instance', (t) => {
  const muu = new Muu()
  t.true(muu instanceof Muu)
})
