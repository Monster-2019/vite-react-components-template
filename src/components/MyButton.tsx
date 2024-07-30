import { FC } from 'react'
import './index.css'

export interface MyButtonProps {
    onClick?: () => void
    children: string
}

const MyButton: FC<MyButtonProps> = ({ onClick, children }) => {
    return (
        <button className="py-4 px-6 bg-blue-500 text-white" onClick={onClick}>
            {children}
        </button>
    )
}

export default MyButton
