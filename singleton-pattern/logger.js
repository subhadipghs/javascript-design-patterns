/**
 * Singleton pattern is used to ensure that one instance, and the provide a global point of access it.
 *
 */

class Logger {
	constructor() {
		this.logs = [];
	}

	count() {
		return this.logs.length;
	}

	log(message = "") {
		const stamp = new Date().toISOString();
		this.logs.push({ message: message, time: stamp });
		console.log(`${stamp} => ${message}`);
	}

	allLogs() {
		if (this.count() > 0) {
			this.logs.forEach((e) => console.log(`${e.time} - ${e.message}`));
		} else {
			console.log("No logs found");
		}
	}
	
	lastLog() {
		return this.count() > 0
			? this.logs[this.logs.length - 1]
			: "No logs found";
	}
}

// this class to ensure that only one of the
class SingletonLogger {
	static instance = new Logger();
	getInstance() {
		return SingletonLogger.instance;
	}
}

module.exports = SingletonLogger;
