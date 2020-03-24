import React from 'react';
import PropTypes from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Switch from '@vkontakte/vkui/dist/components/Switch/Switch';

import "./style.css"

const Home = ({ id, go, fetchedUser, notificationSwitch, notificationEnabled }) => (
	<Panel id={id}>
		<Group>
			<Cell asideContent={<Switch
				onChange={e => notificationSwitch()}
				checked={notificationEnabled}
			/>}>
				Уведомления о запусках концертов / акциях
			</Cell>
		</Group>
		<iframe webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen="true"
				allow="geolocation; microphone; camera; autoplay;" frameBorder="0"
				src="https://vk2feed.cultserv.ru/?refcode=glavclub"
				 scrolling="no"></iframe>
	</Panel>
);

Home.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
	notificationSwitch: PropTypes.func.isRequired,
	notificationEnabled: PropTypes.bool,
	fetchedUser: PropTypes.shape({
		photo_200: PropTypes.string,
		first_name: PropTypes.string,
		last_name: PropTypes.string,
		city: PropTypes.shape({
			title: PropTypes.string,
		}),
	}),
};


export default Home;
