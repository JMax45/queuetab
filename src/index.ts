interface QueueItem {
	func: () => {};
	callback: (err: any, returnValue?: any) => {};
}

class QueueTab {
	queue: QueueItem[];
	constructor() {
		this.queue = [];
	}
	add(func: () => {}, callback: () => {}) {
		this.queue.push({ func, callback });
		if (this.queue.length === 1) {
			this.exec();
		}
	}
	async next() {
		this.queue.shift();
		this.exec();
	}
	async exec() {
		if (this.queue.length < 1) {
			return;
		}
		try {
			const returnValue = await this.queue[0].func();
			this.queue[0].callback(undefined, returnValue);
		} catch (error) {
			this.queue[0].callback(error);
		}
		this.next();
	}
}

export default QueueTab;
