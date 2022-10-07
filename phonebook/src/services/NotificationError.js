import React from 'react'

const NotificationError =  ({ messageError }) =>{
    if(messageError==null){
        return null
    }
    return(
        <div className='error'>
            {messageError}
        </div>
    )
}

export default NotificationError