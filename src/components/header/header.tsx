import { Button } from '../button';

import create from '../../assets/create.png';
import download from '../../assets/download.png';
import trash from '../../assets/trash-can.png';
import styles from './header.module.scss';

export const Header = () => {
    return (
        <header className={styles.root}>
            <h1 className={styles.name}>File Explorer</h1>
            <Button name={'Create'} icon={create} colorType='primary'/>
            <Button name={'Download'} icon={download}/>
            <Button name={'Delete'} icon={trash}/>
            <Button name={'Open'}/>
        </header>
    )
}