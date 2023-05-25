import { useEffect, useState } from 'react';
import './Result.css';
import { useSelector } from 'react-redux';


export default function Result() {
    const spec = useSelector(state => state.spec.value)
    const [price, setPrice] = useState(0)

    function createQuery() {
        let result = 'Laptop ';
        if (spec.processor_name === 0) result += 'Intel '
        else result += 'AMD '

        const P_MAP = {
            0: 'Celeron',
            1: 'Core i3',
            2: 'Ryzen 3',
            3: 'Core i5',
            4: 'Ryzen 5',
            5: 'Core i7',
            6: 'Ryzen 7',
            7: 'Core i9',
            8: 'Ryzen 9'
        }
        result += `${P_MAP[spec.processor_name]} ${spec.ram_gb}GB RAM `
        if (spec.ssd !== 0) result += `${spec.ssd}GB SSD `
        if (spec.hdd !== 0) result += `${spec.hdd}GB HDD `
        if (spec.graphic_card_gb !== 0) result += `${spec.graphic_card_gb}GB GPU `
        if (spec.Touchscreen === 1) result += 'Touchscreen'

        return result.replace(' ', '%20');
    }   

    function createTokopediaLink() {
        return `https://www.tokopedia.com/search?st=product&q=${createQuery()}`
    }
    function createShopeeLink() {
        return `https://shopee.co.id/search?keyword=${createQuery()}`
    }
    function createBlibliLink() {
        return `https://www.blibli.com/cari/${createQuery()}`
    }

    useEffect(() => {
        async function getPrice() {
            try {
                const rawResponse = await fetch('https://be-lappyfind.up.railway.app/predict', {
                    method: 'POST',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    mode: 'cors',
                    body: JSON.stringify(spec)
                })
                const response = await rawResponse.json();
                setPrice(response.price)
            } catch (error) {
                console.log(error)
                setPrice(0)
            }
        }
        getPrice()
    })

    return (
        <section id="result">
            <div className='box'>
                <h1>Search Result</h1>
                <div className='content'>
                    <div className='price-prediction'>
                            <h2 className='no-mp'>Estimated Average Price</h2>
                            <span className='no-mp'>{new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR" }).format(price)}</span>
                    </div>
                    <div className='market-btns'>
                        <a target='blank' className='tokopedia' href={createTokopediaLink()}>
                            <img src='./img/tokopedia.png' alt='tokopedia' />
                            Find in Tokopedia
                        </a>
                        <a target='blank' className='shopee' href={createShopeeLink()}>
                            <img src='./img/shopee.png' alt='shopee' />
                            Find in Shopee
                        </a>
                        <a target='blank' className='blibli' href={createBlibliLink()}>
                            <img src='./img/blibli.png' alt='blibli' />
                            Find in Blibli
                        </a>
                    </div>
                </div>
                <span className='footnote'>Developed by the boys (Erick Y., Wilbert, Ariyan S.) &#169; 2022</span>
            </div>
        </section>
    )
}