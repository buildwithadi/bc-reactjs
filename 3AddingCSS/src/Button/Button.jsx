import styles from './Button.module.css'

function Button(){

    // const styles = {
    //     background-color: 'hsl(200, 100%, 50%)',
    //     color: 'white',
    //     padding: '10px 20px',
    //     border-radius: '5px',
    //     border: 'none',
    //     cursor: 'pointer',
    // }


    return(
        //  <button style={styles} className={styles.button}>Click Me</button>
        <button className={styles.button}>Click Me</button>
    );

}

export default Button