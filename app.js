const DANGER_HEALTH = 25
const DEATH_HEALTH = 10

new Vue({ 

  el: '#app', 
  data: { 
    gameOn: false,
    playerHealth : 0,
    monsterHealth : 0,
    logs: [],
    ATTACK_POWER : 0,
    SPECIAL_ATTACK_POWER : 0,
    HEAL_POWER: 0
  },

  computed : {

    playerHealthBar : function() {

      return this.getProgressBarStyle(this.playerHealth)
    },

    monsterHealthBar : function() {

      return this.getProgressBarStyle(this.monsterHealth)
    }
  },

  methods : {

    start: function() {

      this.gameOn = true
      this.ATTACK_POWER = 10
      this.SPECIAL_ATTACK_POWER = this.ATTACK_POWER * 2

      this.HEAL_POWER = this.SPECIAL_ATTACK_POWER / 1.5

      this.logs = []

      this.playerHealth = 100
      this.monsterHealth = 100
    },

    attack : function(attackPower) {
      
      this.playerAttack(attackPower)
      this.monsterAttack(this.ATTACK_POWER)

      this.checkGameStatus()
    },

    playerAttack : function(attackPower) {

      var playerAttack = this.calculateAttack(attackPower, this.playerHealth)

      this.monsterHealth -= playerAttack
      
      this.playerHealth = this.playerHealth < 0 ? 0 : this.playerHealth
      
      this.log("PLAYER", "HITS", "MONSTER", playerAttack)
    },

    monsterAttack : function(attackPower) {

      var monsterAttack = this.calculateAttack(attackPower, this.monsterHealth)

      this.playerHealth -= monsterAttack
      
      this.monsterHealth = this.monsterHealth < 0 ? 0 : this.monsterHealth

      this.log("MONSTER", "HITS", "PLAYER", monsterAttack)
    },

    specialAttack : function() {

      this.attack(this.SPECIAL_ATTACK_POWER)
    },

    heal : function() {

      var playerHeal = this.calculateHeal()
      this.playerHealth += playerHeal

      if(this.playerHealth > 100) {

        this.playerHealth = 100

      } else {

        this.log("PLAYER", "HEALS", "HIMSELF", playerHeal)
        this.monsterAttack(this.ATTACK_POWER)
      }

      this.checkGameStatus()
    },

    giveUp : function() {

      this.playerHealth = 0
      this.monsterHealth = 0

      this.logs = []

      this.gameOn = false
    },

    checkGameStatus : function() {

      var playerLooses = this.playerHealth <= 0
      var monsterLooses = this.monsterHealth <= 0

      if(playerLooses || monsterLooses) {

        var winner = playerLooses ? "MONSTER" : "PLAYER"

        if(window.confirm(winner + " wins! Play again?")) {

          this.start()

        } else {

          this.giveUp()
        }
      }
    },

    calculateAttack : function(attackPower, health) {

      return health > 0 ? Math.round(attackPower * Math.random()) : 0 
    },
    
    calculateHeal : function() {

      return Math.round(this.HEAL_POWER * Math.random())
    },

    getProgressBarStyle : function(health) {

      var style = health > DANGER_HEALTH ?
        'width: ' + health + '%; background-color: green;' :
        'width: ' + health + '%; background-color: red;'

      style = health > DEATH_HEALTH ?
        style :
        'width: ' + health + '%; background-color: purple;'

      return style
    },

    log : function(attacker, action, attacked, amount) {

      var logMessage = ""
      if(amount == 0) {
        
        logMessage = attacker + " MISSED " + attacked

      } else {

        logMessage = attacker + " " + action + " " + attacked + " FOR " + amount

      }
      this.logs.splice(0, 0, logMessage)
    }
  }
}); 
