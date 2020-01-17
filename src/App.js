import React, { useState, useEffect } from 'react';
import connect from '@vkontakte/vk-connect';
import View from '@vkontakte/vkui/dist/components/View/View';
import ScreenSpinner from '@vkontakte/vkui/dist/components/ScreenSpinner/ScreenSpinner';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';

const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	useEffect(() => {
		connect.subscribe(({ detail: { type, data }}) => {
			console.log(222222, connect)

			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});

		const url_string = window.location.href;
		const url = new URL(url_string);
		const vk_are_notifications_enabled = url.searchParams.get("vk_are_notifications_enabled");

		if (!+vk_are_notifications_enabled) {
			connect.send("VKWebAppAllowNotifications", {});
		}
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
	if (fetchedUser && fetchedUser.id) {
		fetch('https://glavclub.com/vk/KwgG259rqFt9gdDNpj8f/' + fetchedUser.id)
			.then(response => response.json())
			.then(response => {
				console.log(response)
			});
	}

	return (
		<View activePanel={activePanel} >
			<Home id='home' fetchedUser={fetchedUser} go={go} />
		</View>
	);
}

export default App;

