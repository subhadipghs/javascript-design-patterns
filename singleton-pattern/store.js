const Logger = require('./logger');

const logger = new Logger().getInstance();

class Store {
	constructor(name, inventory = []) {
		this.name = name;
		this.inventory = inventory;
		logger.log(`New store ${this.name} with ${this.inventory.length} stocks`);
	}
}



module.exports = Store;