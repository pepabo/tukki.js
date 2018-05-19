import Test from 'ava'
import Tukki from './tukki'

Test('new Tukki returns a instance', (t) => {
  const tukki = new Tukki()
  t.true(tukki instanceof Tukki)
})
