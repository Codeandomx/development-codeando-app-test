export class FroalaModel {
	id?: string;
	uid?: string;
	author?: string;
	content?: string = "";
	time?: Date;

	toObject () {
		return {
			uid: this.uid,
			content: this.content,
			author: this.author,
			time: this.time
		}
	}

	toObjectTemp () {
		return {
			uid: this.uid,
			content: this.content,
			author: this.author,
			time: this.time
		}
	}
}