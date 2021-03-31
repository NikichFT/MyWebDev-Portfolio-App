import {useEffect, useState} from 'react';

const UseTitle = (title) => {
    let text = title;
    const [path, setPath] = useState('Home');
    setPath(text)
    return path
}

export default UseTitle;