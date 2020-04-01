import { addDecorator, addParameters } from '@storybook/react';
import { withThemesProvider } from "storybook-addon-styled-component-theme";

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee, faGripHorizontal, faSitemap, faChartLine, faWallet, faEllipsisV, faPlus, faMinus, faCheckCircle, faInfo} from '@fortawesome/free-solid-svg-icons';

import 'react-toastify/dist/ReactToastify.css';
import '../src/App.css'

addParameters({
    backgrounds: [
      { name: 'light', value: '#F7F7F7', default: true },
      { name: 'dark', value: '#161726' },
    ],
});

const themeObject = require('./themes');
addDecorator(withThemesProvider(themeObject));


library.add(
    fab, 
    faCheckSquare, 
    faCoffee,
    faGripHorizontal,
    faSitemap,
    faChartLine,
    faWallet,
    faEllipsisV,
    faPlus,
    faMinus,
    faCheckCircle,
    faInfo
);


