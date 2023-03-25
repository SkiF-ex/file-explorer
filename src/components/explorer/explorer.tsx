import { Folder } from '../folder/folder';

import styles from './explorer.module.scss';

export const Explorer = () => {
    return (
        <main className={styles.root}>
            <Folder />
        </main>
    )
}