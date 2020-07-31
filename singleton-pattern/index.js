const Store = require("./store");
const Shopper = require("./shopper");
const Logger = require("./logger");
const logger = new Logger().getInstance();

logger.log("Starting app");
const store = new Store("tech", [
	{
		name: "laptops",
		qty: 5
	},
	{
		name: "headphone",
		qty: 2,
	},
]);

const shopper = new Shopper('xyz', 1000);
logger.log("ending app");

console.log("Logs in all");
logger.allLogs();