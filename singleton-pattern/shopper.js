const Logger = require("./logger");

const logger = new Logger().getInstance();

class Shopper {
	constructor(name, money) {
		this.name = name;
		this.money = money;
		logger.log(`Shopper: ${name} , ${money}`);
	}
}

module.exports = Shopper;

