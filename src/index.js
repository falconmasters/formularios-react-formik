import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Formulario from './Formulario';

ReactDOM.render(
	<React.StrictMode>
		<div className="contenedor">
			<Formulario />
		</div>
	</React.StrictMode>,
	document.getElementById('root')
);