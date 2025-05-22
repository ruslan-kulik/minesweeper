import { Link } from 'react-router-dom';
const Field = (props) => {
    return (
        <div className='gamefield'>
            <div className='stats'>
                {
                    props.gamestate ?
                        <div className="buttons">
                            <Link className="nonClick btnSettings"></Link>
                            <Link className="nonClick btnStyles"></Link>
                            <Link className="nonClick btnRules"></Link>
                            <Link className="nonClick btnCopyright"></Link>
                        </div> :
                        <div className="buttons">
                            <Link to='/settings' className="btnSettings"></Link>
                            <Link to='/styles' className="btnStyles"></Link>
                            <Link to='/rules' className="btnRules"></Link>
                            <Link to='/authors' className="btnCopyright"></Link>
                        </div>
                }
                <div className='numbers'>
                    <div className="number">
                        {
                            props.flagscount >= 0 ?
                                (String(props.flagscount).length === 1 ? '000' + props.flagscount :
                                    String(props.flagscount).length === 2 ? '00' + props.flagscount :
                                        String(props.flagscount).length === 3 ? '0' + props.flagscount :
                                            String(props.flagscount).length === 4 ? props.flagscount :
                                                props.flagscount >= 9999 && '9999') : '0000'
                        }
                    </div>
                    <div className={["restart", props.smile].join(' ')} onClick={() => props.generateField()} />
                    <div className="number">
                        {
                            String(props.time).length === 1 ? '000' + props.time :
                                String(props.time).length === 2 ? '00' + props.time :
                                    String(props.time).length === 3 ? '0' + props.time :
                                        String(props.time).length === 4 ? props.time :
                                            props.time >= 9999 && '9999'
                        }
                    </div>
                </div>
            </div>
            <div
                className='field'
                style={props.settings.fieldstyle}
                onContextMenu={e => e.preventDefault()}
                onClick={props.isWin}
            >
                {props.field.map((array, i) => array.map((e, j) => {
                    let cellstyle = {
                        width: props.settings.cellstyle,
                        height: props.settings.cellstyle,
                        color: ''
                    };
                    switch (e.value) {
                        case 1: cellstyle.color = 'blue';
                            break;
                        case 2: cellstyle.color = 'green';
                            break;
                        case 3: cellstyle.color = 'red';
                            break;
                        case 4: cellstyle.color = 'darkblue';
                            break;
                        case 5: cellstyle.color = 'brown';
                            break;
                        case 6: cellstyle.color = 'lightseagreen';
                            break;
                        case 7: cellstyle.color = 'black';
                            break;
                        case 8: cellstyle.color = 'lightcyan';
                            break;
                        default: cellstyle.color = 'black';
                            break;
                    }
                    return (
                        props.game ?
                            (e.open ?
                                <p
                                    style={cellstyle}
                                    key={j}
                                    className='opened'
                                    onMouseEnter={() => props.pressed && props.activeNumber(i, j, true)}
                                    onMouseDown={e => e.button === 0 && props.activeNumber(i, j, true)}
                                    onMouseUp={() => props.activeNumber(i, j, false)}
                                    onMouseLeave={() => props.activeNumber(i, j, false)}
                                    onClick={() => props.openNumber(i, j)}
                                >
                                    {e.value}
                                </p> :
                                !e.open && !e.flag ?
                                    (e.active ?
                                        <p style={cellstyle}
                                            key={j}
                                            className='active'
                                        >
                                            {e.value}
                                        </p> :
                                        <p style={cellstyle}
                                            key={j}
                                            // onMouseDown={e => e.button === 0 &&
                                            //     e.target.classList.add('active')}
                                            // onMouseUp={e => e.target.classList.remove('active')}
                                            // onMouseLeave={e => e.target.classList.remove('active')}
                                            onMouseEnter={e => props.pressed && e.target.classList.add('active')}
                                            onMouseDown={e => e.button === 0 &&
                                                e.target.classList.add('active')}
                                            onMouseUp={e => e.target.classList.remove('active')}
                                            onMouseLeave={e => e.target.classList.remove('active')}

                                            onContextMenu={e => props.flag(e, i, j)}
                                            onClick={() => props.check(i, j)}
                                        >
                                            {e.value}
                                        </p>) :
                                    !e.open && e.flag &&
                                    <p style={{ ...cellstyle, backgroundImage: props.flagsType }}
                                        key={j}
                                        className='flag'
                                        onContextMenu={e => props.flag(e, i, j)}
                                    >
                                        {e.value}
                                    </p>) :
                            (e.open && e.value !== '*' ?
                                <p style={cellstyle} key={j} className='opened'>{e.value}</p> :
                                e.open && e.value === '*' ?
                                    <p
                                        style={{ ...cellstyle, backgroundImage: props.minesType }}
                                        key={j}
                                        className={e.open === 'tap' ? 'tappedMine' : 'opened bomb'}>{e.value}
                                    </p> :
                                    !e.open && !e.flag ?
                                        <p style={cellstyle} key={j}>{e.value}</p> :
                                        !e.open && e.flag &&
                                        <p style={e.flag === 'wrong' ? { ...cellstyle, backgroundImage: props.minesType } : { ...cellstyle, backgroundImage: props.flagsType }} key={j} className={e.flag === 'wrong' ? 'wrongFlag' : 'flag'}>{e.value}</p>)

                    )
                }))}
            </div>
        </div>
    )
}

export default Field