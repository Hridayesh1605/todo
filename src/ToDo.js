import DeleteIcon from '@mui/icons-material/Delete';
import './ToDo.css'


const ToDo = (props) => {
    return (
        <>
        <div className='cont'>
            <DeleteIcon className='icon' onClick={()=>{
                props.onSelect(props.id);

            }}/>
            <li>{props.lists}</li>
            </div>
        </>

    )
}

export default ToDo;