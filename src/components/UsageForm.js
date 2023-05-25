import './UsageForm.css';
import { useDispatch } from 'react-redux';
import { updateTemplate } from '../features/specSlice';

export default function UsageForm() {
    const dispatch = useDispatch();
    const USE_LIST = {
        "Office Work": "office",
        "School Work": "school",
        "Media Editing": "editor",
        "Light Gaming": "l_gaming",
        "Heavy Gaming": "h_gaming"
    }

    const listElements = [];
    Object.keys(USE_LIST).forEach((key, index) => {
        const val = USE_LIST[key]
        listElements[index] = (
            <button onClick={e => dispatch(updateTemplate(val))} className='usage-li' key={val} href={'/specs?usage=' + val}>
                {key}
            </button>
        )
    })

    return (
        <section id='usage-form'>
            <div className='box'>
                <h1>What do you use your laptop for on a daily basis?</h1>
                <ul>
                    {listElements}
                </ul>
            </div>
        </section>
    )
}