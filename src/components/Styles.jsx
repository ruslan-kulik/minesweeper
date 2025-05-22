import React, { useState } from 'react';
import Button from './UI/Button/Button';
import bg1 from '../images/bg1.png';
import bg2 from '../images/bg2.png';
import bg3 from '../images/bg3.jpg';
import bg4 from '../images/bg4.png';
import bg5 from '../images/bg5.png';
import bg6 from '../images/bg6.jpg';
import bg7 from '../images/bg7.jpg';
import bg8 from '../images/bg8.jpg';
import bg9 from '../images/bg9.png';

import mine1 from '../images/mine1.png';
import mine2 from '../images/mine2.png';
import mine3 from '../images/mine3.png';
import mine4 from '../images/mine4.png';
import mine5 from '../images/mine5.png';
import mine6 from '../images/mine6.png';
import mine7 from '../images/mine7.png';
import mine8 from '../images/mine8.png';
import mine9 from '../images/mine9.png';
import mine10 from '../images/mine10.png';
import mine11 from '../images/mine11.png';
import mine12 from '../images/mine12.png';
import mine13 from '../images/mine13.png';

import flag1 from '../images/flag1.png';
import flag2 from '../images/flag2.png';
import flag3 from '../images/flag3.png';
import flag4 from '../images/flag4.png';
import flag5 from '../images/flag5.png';
import flag6 from '../images/flag6.png';

const Styles = ({ applyStyles }) => {
    const [styles, setStyles] = useState({ theme: 'gray', mine: 'mine1', flag: 'flag1' });
    return (

        <div className='window'>
            Фон
            <div style={{ display: 'flex' }} onChange={e => setStyles({ ...styles, theme: e.target.value })}>
                <div className='skin'>
                    <div style={{ width: '40px', height: '40px', background: 'gray' }}></div>
                    <input defaultChecked type="radio" value='gray' name='bg' />
                </div>
                <div className='skin'>
                    <img src={bg2} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='bg2' name='bg' />
                </div>
                <div className='skin'>
                    <img src={bg3} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='bg3' name='bg' />
                </div>
                <div className='skin'>
                    <img src={bg4} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='bg4' name='bg' />
                </div>
                <div className='skin'>
                    <img src={bg5} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='bg5' name='bg' />
                </div>
                <div className='skin'>
                    <img src={bg6} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='bg6' name='bg' />
                </div>
                <div className='skin'>
                    <img src={bg7} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='bg7' name='bg' />
                </div>
                <div className='skin'>
                    <img src={bg8} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='bg8' name='bg' />
                </div>
                <div className='skin'>
                    <img src={bg9} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='bg9' name='bg' />
                </div>
                <div className='skin'>
                    <img src={bg1} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='bg1' name='bg' />
                </div>
            </div>

            Мина
            <div style={{ display: 'flex' }} onChange={e => setStyles({ ...styles, mine: e.target.value })}>
                <div className='skin'>
                    <img src={mine1} alt="" style={{ height: '40px' }} />
                    <input defaultChecked type="radio" value='mine1' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine2} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine2' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine3} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine3' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine4} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine4' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine5} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine5' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine6} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine6' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine7} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine7' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine8} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine8' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine9} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine9' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine10} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine10' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine11} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine11' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine12} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine12' name='mine' />
                </div>
                <div className='skin'>
                    <img src={mine13} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='mine13' name='mine' />
                </div>
            </div>


            Флаг
            <div style={{ display: 'flex' }} onChange={e => setStyles({ ...styles, flag: e.target.value })}>
                <div className='skin'>
                    <img src={flag1} alt="" style={{ height: '40px' }} />
                    <input defaultChecked type="radio" value='flag1' name='flag' />
                </div>
                <div className='skin'>
                    <img src={flag2} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='flag2' name='flag' />
                </div>
                <div className='skin'>
                    <img src={flag3} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='flag3' name='flag' />
                </div>
                <div className='skin'>
                    <img src={flag4} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='flag4' name='flag' />
                </div>
                <div className='skin'>
                    <img src={flag5} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='flag5' name='flag' />
                </div>
                <div className='skin'>
                    <img src={flag6} alt="" style={{ height: '40px' }} />
                    <input type="radio" value='flag6' name='flag' />
                </div>
            </div>
            <br />
            <Button to='/' text='Применить' onClick={() => applyStyles(styles)} />
        </div>
    )
}

export default Styles