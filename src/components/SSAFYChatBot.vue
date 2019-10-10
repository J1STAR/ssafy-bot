<template>
	<div id="chatbot-container" :class="{open: isActive}" @click="openChatScreen">
		<div id="close-btn" @click="closeChatScreen"></div>
		<div id="chatbot-header">SSAFY BOT</div>
		<div id="chatbot-body">
			<div class="bot">
				<div class="thumbnail"></div>
				<div class="chat-wrapper">
					안녕하세요. SSAFY BOT입니다. 저에게 말을 걸어주세요.
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
				this.$http.get('http://j1star.ddns.net:8080/chat?q='+this.message).then((res) => {
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
		position: fixed;
		bottom: 10px;
		right: 10px;

		background-color: #439FF5;

		background-image: url('https://i.imgur.com/2oj8PKT.png');
		background-repeat: no-repeat;
		background-position: center;
		background-size: 25px;

		width: 50px;
		height: 50px;

		border-radius: 50px;

		overflow: hidden;

		z-index: 999;

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

			background-image: url("https://i.imgur.com/g5A35fr.png");
			background-size: 24px;
			background-color: transparent;

			width: 24px;
			height: 24px;
		}

		#chatbot-header, #chatbot-footer {
			visibility: visible;

			width: 100%;
			height: 10%;
		}

		#chatbot-header {
			color: white;
			font-size: 64px;
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

		#chatbot-footer input {
			width: 95%;
			height: 66px;

			padding-left: 20px;
			padding-right: 20px;

			border-radius: 34px;
			border: 0;
		}
	}

	.bot, .user {
		clear: both;
		width: 100%;
		height: 10%;
		min-height: 10%;
		padding: 5px;

		.chat-wrapper {
			float: left;

			background-color: white;

			width: 80%;
			min-height: 100%;

			margin-top: 15px;
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

			background-image: url('https://i.imgur.com/2oj8PKT.png');
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

			background-image: url('https://i.imgur.com/p4Tnnkp.png');
			background-repeat: no-repeat;
			background-position: center;
			background-size: 40px;
		}

		.chat-wrapper {
			border-radius: 10px 0 10px 10px;
		}
	}
</style>