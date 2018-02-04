export class ChatModel {
	id?: string;
	uid?: string;
	name?: string;
	img?: string;
	msg?: string;
	date?: string;
	time?: Date;

	toObject () {
		return {
			uid: this.uid,
			msg: this.msg,
			date: this.date,
			time: this.time
		}
	}

	toObjectTemp () {
		return {
			id: this.id,
			name: this.name,
			img: this.img,
			msg: this.msg,
			date: this.date
		}
	}
}