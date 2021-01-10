import React from 'react'
export const ErrorSnackbar = errorMessage => <div
    style={{
        display: 'flex',
        alignItems: 'center',
        width: '33em',
        height: '2em'
    }}>

    <span span
        className="material-icons"
        style={{
            marginRight: 10,
            verticalAlign: 'top'
        }}>error_outline</span >

    <p style={{ marginTop: 15 }}>
        {errorMessage}
    </p>
</div>

export const errorSnackbarStyle = {
    backgroundColor: '#AA0000',
    border: '2px solid #C85D5D',
    color: 'white',
    fontFamily: 'Roboto',
    fontSize: '18px',
    textAlign: 'center'
}