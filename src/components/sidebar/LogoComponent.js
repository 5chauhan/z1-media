import React from 'react';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import Logo from '../../assets/icon-logo';


const styles = StyleSheet.create({
    container: {
        marginLeft: 32,
        marginRight: 32
    },
    title: {
        fontFamily: 'fantasy',
        fontStyle: 'Bold',
        fontWeight: 'bold',
        fontSize: 35,
        lineHeight: '5px',
        letterSpacing: '0.2px',
        color: '#000000',
        opacity: 1,
        marginLeft: 15,
        marginTop:0
    }
});

function LogoComponent() {
    return (
        <Row className={css(styles.container)} horizontal="center" vertical="center">
            <Logo />
           <h1>
           <span className={css(styles.title)}>Finance</span>
            </h1> 
        </Row>
    );
}

export default LogoComponent;