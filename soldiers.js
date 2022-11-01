const soldier = {
  name: 'John',
  health: 10,
  gun: { nameGun: 'kalash', cartridges: 30 },
  supplies: 3,
  shot: function () {
    if (this.gun.cartridges === 0) {
      console.log('обойма пуста. Перезаредитесь')
      soldier.recharge()
    }
    this.gun.cartridges--
    console.log(soldier.gun.cartridges)
  },

  recharge: function () {
    this.gun.cartridges = 30
    this.supplies--
    if (this.supplies === 0) {
      console.log('не осталось припасов')
    }
    console.log(this.supplies)
  },
  hurt: function () {
    this.health--
    if (this.health == 0) {
      console.log('Ты проиграл')
    }
    console.log(this.health)
  },
}
