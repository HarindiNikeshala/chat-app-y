import React from 'react'

const Message = () => {
    return (
        <div className='chat chat-end'>
            <div className='chat-image avatar'>
                <div className='w-10 rounded-full'>
                    <img src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-color-and-shapes-3/177800/129-1024.png" alt="Tailwind CSS chat bubble component" />
                </div>
            </div>
            <div className='chat-bubble text-white bg-green-700'> Hi What is Up?</div>
            <div className='chat-footer opacity-50 text-xs flex gap-1 items-center'>12:45</div>
        </div>
    )
}

export default Message