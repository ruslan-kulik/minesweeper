import { useEffect, useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Field from './components/Field';
import Settings from './components/Settings';
import Authors from './components/Authors';
import Rules from './components/Rules';
import Styles from './components/Styles';
import './App.css';


function App() {

    const [field, setField] = useState([]),
        [theme, setTheme] = useState('gray'),
        [minesType, setMinesType] = useState('var(--mine1)'),
        [flagsType, setFlagsType] = useState('var(--flag1)'),
        [custom, setCustom] = useState(false),
        [customSettings, setCustomSettings] = useState({ width: 9, height: 9, mines: 10 }),
        [game, setGame] = useState(false),
        [selectedDifficulty, setSelectedDifficulty] = useState('newfag'),
        [pressed, setPressed] = useState(false),
        [time, setTime] = useState(0),
        [fieldwidth, setFieldwidth] = useState(16),
        [fieldheight, setFieldheight] = useState(16),
        [minescount, setMinescount] = useState(40),
        [flagscount, setFlagscount] = useState(minescount),
        [gamestate, setGamestate] = useState(false),
        [smile, setSmile] = useState('');

    useEffect(() => {
        let interval = setInterval(() => gamestate && setTime(time + 1), 1000);
        return () => clearInterval(interval);
    }, [gamestate, time]);

    useEffect(() => {
        document.documentElement.setAttribute('theme-type', theme);
        document.addEventListener('mousedown', buttonUpDown);
        document.addEventListener('mouseup', buttonUpDown);
    });

    useEffect(() => {
        setFieldheight(customSettings.height);
        setFieldwidth(customSettings.width);
        setMinescount(customSettings.mines);
        setField([]);
        setCustom(false);
        // generateField();
    }, [customSettings]);

    useEffect(() => {
        switch (selectedDifficulty) {

            case ('newfag'):
                setFieldheight(9);
                setFieldwidth(9);
                setMinescount(10);
                setCustom(false);
                break;

            case ('mid'):
                setFieldheight(16);
                setFieldwidth(16);
                setMinescount(40);
                setCustom(false);
                break;

            case ('hard'):
                setFieldheight(16);
                setFieldwidth(30);
                setMinescount(99);
                setCustom(false);
                break;

            case ('ultra'):
                setFieldheight(50);
                setFieldwidth(50);
                setMinescount(500);
                setCustom(false);
                break;

            case ('AI'):
                setFieldheight(100);
                setFieldwidth(100);
                setMinescount(2000);
                setCustom(false);
                break;

            case ('Custom'):
                setCustom(true);
                break;

            default:
                setFieldheight(9);
                setFieldwidth(9);
                setMinescount(10);
                break;
        }
        setField([]);
    }, [selectedDifficulty]);

    useEffect(() => {
        game && setSmile(pressed ? 'pop' : 'smile');
    }, [game, pressed]);

    let size = 28;
    if (!field.length) generateField(fieldwidth, fieldheight);

    function generateField(width = fieldwidth, height = fieldheight) {
        setField([]);
        setSmile('smile');
        setGamestate(false);
        setFlagscount(minescount);
        setTime(0);
        let fieldcopy = new Array(height);
        for (let i = 0; i < height; i++) {
            fieldcopy[i] = new Array(width);
            for (let j = 0; j < width; j++)
                fieldcopy[i][j] = { value: '', open: false, flag: false, active: false };
        }
        setField(fieldcopy);
        setGame(true);
    }

    function check(index1, index2) {
        let fieldcopy = Object.assign([], field);
        if (fieldcopy.every(i => i.every(j => !j.value)) && !fieldcopy[index1][index2].flag) {
            setGamestate(true);
            for (let i = 0; i < minescount;) {
                let i1 = Math.round(Math.random() * (fieldheight - 1)),
                    i2 = Math.round(Math.random() * (fieldwidth - 1));
                if (((i1 !== index1 || i2 !== index2) &&
                    (i1 !== index1 + 1 || i2 !== index2) &&
                    (i1 !== index1 || i2 !== index2 + 1) &&
                    (i1 !== index1 - 1 || i2 !== index2) &&
                    (i1 !== index1 || i2 !== index2 - 1) &&
                    (i1 !== index1 + 1 || i2 !== index2 + 1) &&
                    (i1 !== index1 - 1 || i2 !== index2 - 1) &&
                    (i1 !== index1 + 1 || i2 !== index2 - 1) &&
                    (i1 !== index1 - 1 || i2 !== index2 + 1)) &&
                    fieldcopy[i1][i2].value !== '*') {
                    generateNumbers(i1, i2);
                    fieldcopy[i1][i2].value = '*';
                    i++;
                }
            }
        }
        if (!fieldcopy[index1][index2].flag) open(index1, index2);
        setField(fieldcopy);
    }

    function flag(e, i, j) {
        e.preventDefault();
        let fieldcopy = Object.assign([], field);
        fieldcopy[i][j].flag = !fieldcopy[i][j].open && !fieldcopy[i][j].flag && !fieldcopy[i][j].active;
        setFlagscount(!fieldcopy[i][j].flag ? flagscount + 1 : flagscount - 1);
        setField(fieldcopy);
    }

    function generateNumbers(i, j) {
        let fieldcopy = Object.assign([], field);
        for (let i1 = i - 1; i1 < i + 2; i1++)
            for (let i2 = j - 1; i2 < j + 2; i2++)
                try {
                    if (+fieldcopy[i1][i2].value + 1) fieldcopy[i1][i2].value++;
                } catch { }
        setField(fieldcopy);
    }

    function open(i, j) {
        let fieldcopy = Object.assign([], field);
        try {
            if (!fieldcopy[i][j].open && !fieldcopy[i][j].flag) {
                fieldcopy[i][j].open = true;
                for (let i1 = i - 1; i1 < i + 2; i1++)
                    for (let i2 = j - 1; i2 < j + 2; i2++)
                        if (!fieldcopy[i][j].value)
                            open(i1, i2);
                if (fieldcopy[i][j].value === '*') {
                    setGame(false);
                    setGamestate(false);
                    setSmile('gameover');
                    fieldcopy.forEach(a => a.forEach(b => {
                        b.open = (b.value === '*' || b.open) && !b.flag;
                        b.flag = b.value !== '*' && b.flag ? 'wrong' :
                            b.value === '*' && !b.open;
                    }));
                    fieldcopy[i][j].open = 'tap';
                }
            }
        }
        catch { }
        setField(fieldcopy);
    }

    function openNumber(i, j) {
        let fieldcopy = Object.assign([], field), flagcount = 0;
        for (let i1 = i - 1; i1 < i + 2; i1++)
            for (let i2 = j - 1; i2 < j + 2; i2++)
                try {
                    if (fieldcopy[i1][i2].flag)
                        flagcount++;
                } catch { }
        try {
            if (flagcount === fieldcopy[i][j].value) {
                fieldcopy[i][j].open = true;
                for (let i1 = i - 1; i1 < i + 2; i1++)
                    for (let i2 = j - 1; i2 < j + 2; i2++)
                        if (fieldcopy[i][j].value)
                            open(i1, i2);
            }
        }
        catch { }
        setField(fieldcopy);
    }

    function activeNumber(i, j, value) {
        let fieldcopy = Object.assign([], field);
        for (let i1 = i - 1; i1 < i + 2; i1++)
            for (let i2 = j - 1; i2 < j + 2; i2++)
                try {
                    fieldcopy[i1][i2].active = value;
                } catch { }
        setField(fieldcopy);
    }

    function buttonUpDown(e) {
        e.button === 0 && setPressed(e.type === 'mouseup' ? false : true);
    }

    function isWin() {
        let fieldcopy = Object.assign([], field);
        if (game && !field.some(i => i.some(j => !j.open && j.value !== '*'))) {
            setSmile('gamewin');
            setGame(false);
            setGamestate(false);
            setFlagscount(0);
            fieldcopy.forEach(i => i.forEach(j => j.flag = j.value === '*'));
        }
        setField(fieldcopy);
    }

    function applyCustomSettings(settings) {
        // setCustom(false);
        if (settings.width <= 3 || settings.height <= 3 || settings.mines <= 0)
            setCustomSettings({ width: 9, height: 9, mines: 10 });
        else
            setCustomSettings(settings);
    }

    function applyStyles(styles) {
        setTheme(styles.theme);
        setFlagsType(`var(--${styles.flag})`);
        setMinesType(`var(--${styles.mine})`);
    }

    return (<Routes>
        <Route path='/' element={<>
            <Field
                game={game}
                field={field}
                check={check}
                flag={flag}
                flagscount={flagscount}
                time={time}
                openNumber={openNumber}
                activeNumber={activeNumber}
                generateField={generateField}
                buttonUpDown={buttonUpDown}
                gamestate={gamestate}
                minesType={minesType}
                flagsType={flagsType}
                isWin={isWin}
                pressed={pressed}
                smile={smile}
                settings={{
                    width: 30,
                    height: 16,
                    minescount: 40,
                    fieldstyle: { width: size * fieldwidth },
                    cellstyle: size
                }}
            />
        </>} />
        <Route path='/settings' element={<Settings
            setCS={applyCustomSettings}
            custom={custom}
            onChange={value => setSelectedDifficulty(value)}
        />} />
        <Route path='/authors' element={<Authors />} />
        <Route path='/rules' element={<Rules />} />
        <Route path='/styles' element={<Styles applyStyles={applyStyles} />} />
        {/* <Route path='/styles' element={<Styles/>} /> */}
        <Route path='*' element={<Navigate to='/' replace />} />
    </Routes>)
}

export default App;
