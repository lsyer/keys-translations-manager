'use strict';
module.exports = {
	setMessages: function(messages) {
		this.messages = messages
	},
	getMsg: function(path) {
		var pathParts = path ? path.split('.') : [""],
			len = arguments.length - 1,
			message, i;

		try {
			message = pathParts.reduce(function (obj, pathPart) {
				return obj[pathPart];
			}, this.messages);
		} catch (e) {
			//console.error(e);
			message = "";
		} finally {
			if (message) {
				for (i = 0; i < len;){
					message = message.replace(
						new RegExp("\\{" + i + "\\}", "gm"),
						arguments[++i]
					);
				}
			} else {
				message = path + ".undefined";
			}
		}

		return message;
	}
}
