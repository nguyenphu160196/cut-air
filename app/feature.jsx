import React from 'react'
import axios from 'axios'
import { browserHistory } from 'react-router';
import './css/page-feature.css'

class Feature extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>	
                <div class="feature-1 col-12">
                    <div class="feature-1-txt">
                        <h1>TEXT</h1>
                        <h2>Know when messages are delivered and seen.</h2>
                        <h3>Reach people instantly. You’ll see when your message is delivered to your friend’s phone, plus when they’ve seen it. This way, you can be sure your messages are going through like they’re supposed to.</h3>
                    </div>
                    <div class="feature-1-img"></div>
                </div>
                <div class="feature-2 col-12">
                    <div class="feature-2-txt col-8">
                        <h1>VOICE & VIDEO CALLS</h1>
                        <h2>Call across the world for free</h2>
                        <h3>With HD calls, voices sound clearer and closer. And with video calls, you can have face-to-face conversations with friends and family wherever they are.</h3>
                        <h3>Calls are free, but you’ll get charged for data when you aren’t on Wi-Fi.</h3>
                    </div>
                    <div class="feature-2-img">
                        <div class="feature-2-imgl"></div>
                        <div class="feature-2-imgr"></div>
                    </div>
                </div>
                <div class="feature-3 col-12">
                    <div class="feature-3-txt">
                        <h1>PHOTOS & VIDEOS</h1>
                        <h2>Send photos and videos instantly.</h2>
                        <h3>With a built-in camera, Messenger lets you snap and shoot moments as they happen. You can even add drawings or text to personalize your photos.</h3>
                    </div>
                    <div class="feature-3-img"></div>
                </div>
                <div class="feature-4 col-12">
                    <div class="feature-4-img"></div>
                    <div class="feature-4-txt">
                        <h1>LOCATION</h1>
                        <h2>Send a map of any location.</h2>
                        <h3>Suggest a meeting spot, instantly update friends on where you are and so much more with just a few taps.</h3>
                    </div>
                </div>
                <div class="feature-5 col-12">
                    <div class="feature-5-txt col-8">
                        <h1>STICKERS</h1>
                        <h2>Say it better with stickers.</h2>
                        <h3>Send delightful, silly, cute, weird and expressive stickers to say just about anything. Search for stickers to match your mood or explore categories like Happy and In Love.</h3>
                    </div>
                    <div class="feature-5-img"></div>
                </div>
                <div class="feature-6 col-12">
                    <div class="feature-6-txt">
                        <h1>VOICE MESSAGES</h1>
                        <h2>Say, sing or shout your messages.</h2>
                        <h3>Sometimes you just don’t have the time to type it all out. When you’re on the go or have a lot more to say, record a voice message instead.</h3>
                    </div>
                    <div class="feature-6-img"></div>
                </div>
                <div class="feature-7 col-12">
                    <div class="feature-7-img"></div>
                    <div class="feature-7-txt">
                        <h1>PAYMENTS</h1>
                        <h2>Send money securely and easily.</h2>
                        <h3>Don’t have cash on you and need to pay a friend back? It’s free to send and receive money right from your conversation. Just add your debit card to get started.</h3>
                    </div>
                </div>
                <div class="feature-8 col-12">
                    <div class="feature-8-txt">
                        <h1>GROUPS</h1>
                        <h2>Start group chats with your favorite people.</h2>
                        <h3>Keep in touch with the important groups of people in your life, like your family and best friends. You can name your group chat and add a photo so everyone can get back to it easily.</h3>
                    </div>
                    <div class="feature-8-img"></div>
                </div>
                <div class='footer col-12'>
                    <p>The Facebook, Apple, Google Play, and Windows logos are trademarks of their respective owners. View our Data Policy and Terms.</p>
                </div>
			</div>
		);
	}
}

export default Feature;