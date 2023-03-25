import styles from './button.module.scss';

interface IButton {
    name: string;
    icon?: string;
    colorType?: string;
}

export const Button = ({name, icon, colorType}: IButton) => {

    const buttonStyle = {
        backgroundColor: '#0061FE',
        color: 'white'
    }

    const iconStyle = {
        backgroundImage: `url(${icon})`,
        filter: colorType ?  'invert(100%)' : ''
    }

    return (
        <button style={colorType ? buttonStyle : {}} className={styles.root}>
            {icon ? <span style={iconStyle} className={styles.icon}></span> : null}
            {name}
        </button>
    )
}