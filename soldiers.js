const soldier = {
  name: 'John',
  health: 10,
  gun: { nameGun: 'kalash', cartridges: 30 },
  supplies: 3,
  shot: function () {
    this.gun.cartridges--
    if (this.gun.cartridges == 0) {
      return 'обойма пуста. Перезаредитесь'
    }
  },
  recharge: function () {
    this.gun.cartridges = 30
    this.supplies--
  },
  hurt: function () {
    this.health--
    if (this.health == 0) {
      console.log('Ты проиграл')
    }
  },
}
