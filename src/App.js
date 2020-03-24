import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';
import bridge from '@vkontakte/vk-bridge';

import Home from './panels/Home';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [notificationEnabled, setNotificationEnabled] = useState(false);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);
	const url_string = window.location.href;
	const url = new URL(url_string);
	const vk_are_notifications_enabled = url.searchParams.get("vk_are_notifications_enabled");

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		// TODO включалка нотификаций
		if (!+vk_are_notifications_enabled) {
			// setTimeout(() => {
			// connect.send("VKWebAppAllowNotifications", {})
				// .then(() => {
				// 	setNotificationEnabled(true)
				// })
			// connect.send("VKWebAppDenyNotifications", {});
            // }, 60000)
			setNotificationEnabled(false)
		} else {
			setNotificationEnabled(true)
		}
		console.log(111, vk_are_notifications_enabled)
		async function fetchData() {
			const user = await connect.sendPromise('VKWebAppGetUserInfo');
			console.log(user)
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	const notificationSwitch = () => {
		// setNotificationEnabled(!notificationEnabled)
		if (notificationEnabled) {
			bridge.send("VKWebAppDenyNotifications", {})
				.then(() => setNotificationEnabled(false))
		} else {
			bridge.send("VKWebAppAllowNotifications", {})
				.then(() => (setNotificationEnabled(true)))
				.catch(() => (setNotificationEnabled(false)))
		}
	};
	if (fetchedUser && fetchedUser.id) {
		fetch('https://glavclub.com/vk/KwgG259rqFt9gdDNpj8f/' + fetchedUser.id)
			.then(response => response.json())
			.then(response => {
				console.log(response)
			});
	}


	return (
		<View activePanel={activePanel} >
			<Home id='home'
				  fetchedUser={fetchedUser}
				  go={go}
				  notificationEnabled={notificationEnabled}
				  notificationSwitch={notificationSwitch}
			/>
		</View>
	);
}

export default App;

