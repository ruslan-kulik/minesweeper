import { useEffect, useState } from 'react';
import Button from './UI/Button/Button';

const Settings = ({ onChange, custom, setCS }) => {
    useEffect(() => {
        onChange('newfag');
    }, []);
    const [customSettings, setCustomSettings] = useState({ width: 9, height: 9, mines: 10 });
    return (
        <div className='window' onChange={e => onChange(e.target.value)}>
            Сложность <br />
            <input type="radio" defaultChecked value='newfag' name='dif' /> Новичок <br />
            <input type="radio" value='mid' name='dif' /> Любитель <br />
            <input type="radio" value='hard' name='dif' /> Профессионал <br />
            <input type="radio" value='ultra' name='dif' /> Сверхчеловек <br />
            <input type="radio" value='AI' name='dif' /> ИИ <br />
            <input type="radio" value='Custom' name='dif' /> Custom <br />
            {custom && (<>
                Высота: <br />
                <input value={customSettings.height} onChange={e => setCustomSettings({ ...customSettings, height: e.target.value })} type="text" /> <br />
                Ширина: <br />
                <input value={customSettings.width} onChange={e => setCustomSettings({ ...customSettings, width: e.target.value })} type="text" /> <br />
                Кол-во мин: <br />
                <input value={customSettings.mines} onChange={e => setCustomSettings({ ...customSettings, mines: e.target.value })} type="text" /> <br />
            </>)}
            <br />
            <Button to='/' text='Применить' onClick={() => custom && setCS(customSettings)} />
        </div>
    )
}

export default Settings