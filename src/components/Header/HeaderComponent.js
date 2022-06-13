import React from 'react';
import { string } from 'prop-types';
import { Row } from 'simple-flexbox';
import { StyleSheet, css } from 'aphrodite';
import IconBellNew from '../../assets/icon-bell-new';
import Img from './img.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faSearch } from '@fortawesome/fontawesome-free-solid'
import {   faEnvelopeOpen } from '@fortawesome/fontawesome-free-solid'


const styles = StyleSheet.create({
    body:{
       overflow:'scroll',
    },
    avatar: {
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 14,
        border: '1px solid #DFE0EB',
    },
    container: {
        height: 40
    },
    cursorPointer: {
        cursor: 'pointer'
    },
    name: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: 14,
        lineHeight: '20px',
        textAlign: 'right',
        letterSpacing: 0.2
    },
    separator: {
        borderLeft: '1px solid #DFE0EB',
        marginLeft: 32,
        marginRight: 32,
        height: 32,
        width: 2
    },
    title: {
        fontFamily: 'Muli',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: '30px',
        letterSpacing: 0.3
    }
});

function HeaderComponent(props) {
    const { icon, title, ...otherProps } = props;
    return (
        <body>
        <Row className={css(styles.container)} vertical="center" horizontal="space-between" {...otherProps}>
            <span className={css(styles.title)}>{title}</span>
            <Row vertical="center">
            <FontAwesomeIcon icon={faSearch} />
            

           

                <div className={css(styles.cursorPointer)}>
                
                    <div style={{ margin: 0, padding: 0, border: 0 }}>
                       
                    </div>
                    <input style={{ marginLeft: 10, borderRadius: 50, width: 600, height: 40, marginTop: 0, marginRight: 5 }} type="text" placeholder="Search here...">
                  
                    </input>
                    
                </div>
               
                <div style={{ marginLeft: 300 }} className={css(styles.cursorPointer)}>
                    <IconBellNew />
                </div>
                <div style={{ marginLeft: 20 }}>
                <FontAwesomeIcon icon={faEnvelopeOpen} />

                </div>
              

                <div className={css(styles.separator)}></div>
                
                <Row vertical="center">
                    <span className={css(styles.name, styles.cursorPointer)}></span>
                    <img src={Img} alt="avatar" className={css(styles.avatar, styles.cursorPointer)} />
                    
                </Row>
                
            </Row>
            
        </Row>
        </body>
        

    );
}

HeaderComponent.propTypes = {
    title: string
};

export default HeaderComponent;