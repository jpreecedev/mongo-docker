const mongoose = require('mongoose')
mongoose.connect(
  'mongodb://root:example@localhost:27017/test?authSource=admin&w=1',
  { useNewUrlParser: true }
)

const Cat = mongoose.model('Cat', { name: String })

const kitty = new Cat({ name: 'Zildjian' })
kitty.save().then(() => console.log('meow'))

Cat.find({ name: 'Zildjian' }, (err, cats) => {
  console.log(cats)
})
