// se importan librerías incluyendo React
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'

import {
    FirebaseAppProvider
} from 'reactfire';
import firebaseConfig from './services/firestore';
import 'firebase/performance';

const App = React.lazy(() => import('./containers/App'));

// React liga el componente principal de la app a un elemento del DOM
ReactDOM.render(
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense fallback={<p>Cargando...</p>} traceId={'load-app-trace'}>
            <App />
        </Suspense>
    </FirebaseAppProvider>
    ,
    document.getElementById('app')
);