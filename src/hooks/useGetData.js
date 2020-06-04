import { useState, useEffect } from 'react';
import { useFirebaseApp, useFirestoreCollection } from 'reactfire';

import 'firebase/firestore';

export default (props) => {

    const [mydata, setData] = useState([]);

    const firebaseApp = useFirebaseApp();
    const cvRef = firebaseApp
        .firestore()
        .collection('cv')


    useEffect(() => {
        cvRef.doc('about').get().then(doc => {
            if (doc.exists) {
                setData(doc.data());
            }
        }).catch(err => {
            console.log('Error getting document', err);
        });

    }, []);

    return mydata;
}

export const getEducations = (props) => {

    const [mydata, setData] = useState([]);

    const firebaseApp = useFirebaseApp();
    const educationsRef = firebaseApp
        .firestore()
        .collection('cv')
        .doc('about')
        .collection('educations')


    useEffect(() => {

        educationsRef.get().then(queryEducations => {
            let educations = []
            queryEducations.docs.forEach(doc => {
                educations.push(doc.data());
            })
            setData(educations)
        });


    }, []);

    return mydata;
}

export const getExperiences = (props) => {

    const [mydata, setData] = useState([]);

    const firebaseApp = useFirebaseApp();
    const experiencesRef = firebaseApp
        .firestore()
        .collection('cv')
        .doc('about')
        .collection('experiences')
        .orderBy('orden', 'desc')


    useEffect(() => {

        experiencesRef.get().then(queryEducations => {
            let experiences = []
            queryEducations.docs.forEach(doc => {
                experiences.push(doc.data());
            })
            setData(experiences)
        });


    }, []);

    return mydata;
}

export const getSkills = (props) => {

    const [mydata, setData] = useState([]);

    const firebaseApp = useFirebaseApp();
    const skillsRef = firebaseApp
        .firestore()
        .collection('cv')
        .doc('about')
        .collection('skills')
        .orderBy('orden')


    useEffect(() => {

        skillsRef.get().then(queryEducations => {
            let skills = []
            queryEducations.docs.forEach(doc => {
                skills.push(doc.data());
            })
            setData(skills)
        });


    }, []);

    return mydata;
}

export const getSocial = (props) => {

    const [mydata, setData] = useState([]);

    const firebaseApp = useFirebaseApp();
    const socialRef = firebaseApp
        .firestore()
        .collection('cv')
        .doc('about')
        .collection('social')


    useEffect(() => {

        socialRef.get().then(queryEducations => {
            let social = []
            queryEducations.docs.forEach(doc => {
                social.push(doc.data());
            })
            setData(social)
        });


    }, []);

    return mydata;
}