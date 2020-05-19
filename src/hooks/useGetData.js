import { useState, useEffect} from 'react';
const api = 'https://us-central1-gndx-cv.cloudfunctions.net/me';

const useGetData = () => {

    // estado del componente
    const [mydata, setData] = useState([]);

    // realiza petición al api con fetch
    useEffect(() => {
        fetch(api)
            .then(response => response.json())
            .then(data => setData(data))
    }, [])

    // regresa la información
    return mydata;
}

export default useGetData;