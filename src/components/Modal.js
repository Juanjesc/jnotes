import React, { Component } from 'react'
import Portal from './Portal'
import '../styles/Note.css'

export default class Modal extends Component {
  render() {

    const { children, toggle, active } = this.props;
    if (active){
      document.body.style.overflow='hidden';
    }
    else{
      document.body.style.overflow='auto'; // no tiene soporte en safari, puede dar fallos
    }
    return (
      <Portal>
        {active && (
            <div style={styles.wrapper}>
                <div style={styles.window} className="wobble-horizontal-top">
                    <button style={styles.closeBtn} onClick={toggle}>X</button>
                    <div>{children}</div>
                </div>
                <div onClick={toggle} style={styles.background}/>
            </div>
        )}
      </Portal>
    )
  }
}
const styles = {
    wrapper:{
        position: 'fixed',
        top: 0,
        left: 0,
        bottom:0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 2
    },
    window:{
        borderRadius: 5,
        position: 'relative',
        background: 'repeating-linear-gradient(#f1ede9, #f1ede9 31px, #94acd4 31px, #94acd4 32px)',
        padding: 15,
        boxShadow: '2px 2px 10px black',
        zIndex: 4,
        width:620,
        height: 600,
    },
    closeBtn:{
        position: 'absolute',
        top: 0,
        right: 0,
        cursor: 'pointer'
    },
    background:{
        width: '100%',
        height: '100%',
        background: '#000',
        opacity: 0.4,
        position: 'absolute',
        zIndex: 3
    }
}
 