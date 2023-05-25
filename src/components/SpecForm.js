import { useDispatch, useSelector } from 'react-redux';
import {
    updateGpu,
    updateHdd,
    updateProcBrand,
    updateRam,
    updateSsd,
    updateTouch,
    updateProcName
} from '../features/specSlice';
import './SpecForm.css';

export default function SpecForm() {
    const dispatch = useDispatch();
    const processorNameList = {
        0: {
            'Celeron': 0,
            'Core i3': 1,
            'Core i5': 3,
            'Core i7': 5,
            'Core i9': 7
        },
        1: {
            'Ryzen 3': 2,
            'Ryzen 5': 4,
            'Ryzen 7': 6,
            'Ryzen 9': 8
        }
    }

    const procBrand = useSelector(state => state.spec.value.processor_brand)
    const procName = useSelector(state => state.spec.value.processor_name)
    const ram = useSelector(state => state.spec.value.ram_gb)
    const ssd = useSelector(state => state.spec.value.ssd)
    const hdd = useSelector(state => state.spec.value.hdd)
    const gpu = useSelector(state => state.spec.value.graphic_card_gb)
    const touchscreen = useSelector(state => state.spec.touchscreen)

    const processorNameEle = Object.keys(processorNameList[procBrand]).map((key, index) => {
        return (
            <option key={index} value={processorNameList[procBrand][key]}>{key}</option>
        );
    })

    return (
        <section id='specform'>
            <div className='box'>
                <h1>Laptop Hardware Spesification</h1>
                <div className='inputs'>
                    <div className='select-box'>
                        <label htmlFor='processor_brand'>Processor Brand</label>
                        <select value={procBrand} onChange={e => {dispatch(updateProcBrand(e.target.value))}} id='processor_brand' name='processor_brand'>
                            <option value={0}>Intel</option>
                            <option value={1}>AMD</option>
                        </select>
                    </div>

                    <div className='select-box'>
                        <label htmlFor='processor_name'>Processor Name</label>
                        <select value={procName} onChange={e => dispatch(updateProcName(e.target.value))} id='processor_name' name='processor_name'>
                            {processorNameEle}
                        </select>
                    </div>

                    <div className='select-box'>
                        <label htmlFor='ram_gb'>Memory RAM</label>
                        <select value={ram} onChange={e => dispatch(updateRam(e.target.value))} id='ram_gb' name='ram_gb'>
                            <option value={4}>4 GB</option>
                            <option value={8}>8 GB</option>
                            <option value={16}>16 GB</option>
                            <option value={32}>32 GB</option>
                        </select>
                    </div>

                    <div className='select-box'>
                        <label htmlFor='ssd'>SSD Storage</label>
                        <select value={ssd} onChange={e => dispatch(updateSsd(e.target.value))} id='ssd' name='ssd'>
                            <option value={0}>None</option>
                            <option value={256}>256 GB</option>
                            <option value={512}>512 GB</option>
                            <option value={1024}>1TB</option>
                            <option value={2048}>2TB</option>
                        </select>
                    </div>

                    <div className='select-box'>
                        <label htmlFor='hdd'>HDD Storage</label>
                        <select value={hdd} onChange={e => dispatch(updateHdd(e.target.value))} id='hdd' name='hdd'>
                            <option value={0}>None</option>
                            <option value={256}>256 GB</option>
                            <option value={512}>512 GB</option>
                            <option value={1024}>1TB</option>
                            <option value={2048}>2TB</option>
                        </select>
                    </div>

                    <div className='select-box'>
                        <label htmlFor='graphic_card_gb'>Dedicated GPU</label>
                        <select value={gpu} onChange={e =>dispatch(updateGpu(e.target.value))} id='graphic_card_gb' name='graphic_card_gb'>
                            <option value={0}>None</option>
                            <option value={2}>2 GB</option>
                            <option value={4}>4 GB</option>
                            <option value={6}>6 GB</option>
                            <option value={8}>8 GB</option>
                        </select>
                    </div>

                    <div className='select-box'>
                        <label htmlFor='Touchscreen'>Touchscreen?</label>
                        <select value={touchscreen} onChange={e => dispatch(updateTouch(e.target.value))} id='Touchscreen' name='Touchscreen'>
                            <option value={0}>No</option>
                            <option value={1}>Yes</option>
                        </select>
                    </div>
                </div>
            </div>
        </section>
    )
}