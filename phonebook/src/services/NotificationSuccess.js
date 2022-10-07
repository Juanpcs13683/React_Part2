import React from 'react'

const NotificationSuccess = ({ messageSuccess }) => {
    if(messageSuccess === null){
        return null
    }
    return(
        <div className='success'>
            {messageSuccess}
        </div>
    )
}

export default NotificationSuccess