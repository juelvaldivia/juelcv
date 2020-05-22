import { useState, useEffect} from 'react';
import { useFirebaseApp, useFirestoreCollection } from 'reactfire';

import 'firebase/firestore';

export default (props) => {
    
    const [mydata, setData] = useState([]);

    const firebaseApp = useFirebaseApp();
    const cvRef = firebaseApp
        .firestore()
        .collection('cv');

    useEffect(() => {

        cvRef.doc('about').get().then(doc => {
            if (doc.exists)
                setData(doc.data());
        }).catch(err => {
            console.log('Error getting document', err);
        });
    }, []);

    return mydata;
}