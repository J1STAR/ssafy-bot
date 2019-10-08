<template>
	<div id="chatbot-container" :class="{open: isActive}" @click="openChatScreen">
		<div id="close-btn" @click="closeChatScreen"></div>
		<div id="chatbot-header"></div>
		<div id="chatbot-body">
			<div class="user">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">bbbbbbbbbbbbbbbbbbbbbbbbb</div>
			</div>
			<div class="bot">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">
					aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				</div>
			</div>
			<div class="user">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">bbbbbbbbbbbbbbbbbbbbbbbbb</div>
			</div>
			<div class="bot">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">
					aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				</div>
			</div>
			<div class="user">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">bbbbbbbbbbbbbbbbbbbbbbbbb</div>
			</div>
			<div class="bot">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">
					aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				</div>
			</div>
			<div class="user">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">bbbbbbbbbbbbbbbbbbbbbbbbb</div>
			</div>
			<div class="bot">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">
					aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				</div>
			</div>
			<div class="user">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">bbbbbbbbbbbbbbbbbbbbbbbbb</div>
			</div>
			<div class="bot">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">
					aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				</div>
			</div>
			<div class="user">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">bbbbbbbbbbbbbbbbbbbbbbbbb</div>
			</div>
			<div class="bot">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">
					aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				</div>
			</div>
		</div>
		<div id="chatbot-footer">
			<input id="user-chat" v-model="message" @keydown.enter="sendChat">
		</div>
	</div>
</template>

<script>
	export default {
		name: "SSAFYChatBot",
		props: {},
		data() {
			return {
				isActive: false,
				message: "",
			};
		},
		mounted() {

		},
		methods: {
			openChatScreen: function () {
				if(!this.$el.classList.contains("open"))
					this.isActive = true
			},
			closeChatScreen: function () {
				event.stopPropagation();
				this.isActive = false
			},
			sendChat: function() {
				this.$http.get('http://2d6d1cf4.ngrok.io/chat?q='+this.message).then((res) => {
					document.querySelector("#chatbot-body").innerHTML += "<div class=\"bot\">\n" +
						"\t\t\t\t<div class=\"thumbnail\"></div>\n" +
						"\t\t\t\t<div class=\"chat-wrapper\">"+res.data+"</div>\n" +
						"\t\t\t</div>";

					document.querySelector("#chatbot-body").scrollTop = document.querySelector("#chatbot-body").scrollHeight;
				})
				document.querySelector("#chatbot-body").innerHTML += "<div class=\"user\">\n" +
					"\t\t\t\t<div class=\"thumbnail\"></div>\n" +
					"\t\t\t\t<div class=\"chat-wrapper\">"+this.message+"</div>\n" +
					"\t\t\t</div>";
				this.message = ''
				document.querySelector("#chatbot-body").scrollTop = document.querySelector("#chatbot-body").scrollHeight;
			}
		},
		filters: {},
		components: {}
	}
</script>

<style lang="scss">
	#chatbot-container {
		position: absolute;
		bottom: 10px;
		right: 10px;

		background-color: #439FF5;

		background-image: url('../assets/img/ssafy-icon.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 25px;

		width: 50px;
		height: 50px;

		border-radius: 50px;

		overflow: hidden;

		#chatbot-header, #chatbot-body, #chatbot-footer, #close-btn {
			visibility: hidden;
		}
	}

	#chatbot-container.open {
		background-image: None;

		width: 414px;
		height: 736px;

		border-radius: 0;

		#close-btn {
			visibility: visible;

			position: absolute;
			top: 0;
			right: 0;

			background-color: red;

			width: 24px;
			height: 24px;
		}

		#chatbot-header, #chatbot-footer {
			visibility: visible;

			width: 100%;
			height: 10%;
		}

		#chatbot-body {
			display: inline-block;
			visibility: visible;

			background-color: #B2C7D9;

			width: 100%;
			height: 80%;

			overflow-x: hidden;
			overflow-y: scroll;

			&::-webkit-scrollbar {
				width: 0 !important
			}
		}
	}

	.bot, .user {
		width: 100%;
		height: 10%;
		min-height: 10%;

		padding: 5px;

		.chat-wrapper {
			float: left;

			background-color: white;

			width: 80%;
			min-height: 100%;

			margin-top: 5px;
			padding: 10px;

			text-align: left;
			word-wrap: break-word;
		}
	}

	.bot {
		.thumbnail {
			float: left;

			width: 20%;
			height: 100%;

			background-image: url('../assets/img/ssafy-icon.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: 40px;
		}

		.chat-wrapper {
			border-radius: 0 10px 10px 10px;
		}
	}

	.user {
		.thumbnail {
			float: right;

			width: 20%;
			height: 100%;

			background-image: url('../assets/img/user-icon.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: 40px;
		}

		.chat-wrapper {
			border-radius: 10px 0 10px 10px;
		}
	}
</style>