import { Errors } from '../const';

interface ReplaceMessage {
	[ key: string ]: string
}

export class ErrorMessage extends Error {
	constructor(message: Errors | string, replaceOptions: ReplaceMessage = {}) {
		super(ErrorMessage.replace(message, replaceOptions))
	}

	public static replace(message: Errors | string, replaceOptions: ReplaceMessage) {
		Object.keys(replaceOptions).map((key: string) => {
			message = message.replace(`{${ key }}`, replaceOptions[ key ]);
		});
		return message;
	}
}
