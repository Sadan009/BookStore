import { useEffect, useState } from "react"

export default function Product(Props) {

    let[name, setName] = useState('Sanad')
    let[age, setAge] =useState(0)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
    },[name])
    function doSomething(){
        setName('Farhan')
        console.log('I am doing ' + name)
    }
    return (
        <>
            <h1>Products</h1>
            {/* <ul className="prod-list">
                {
                    Props.products.map((product, index) => {
                        return (
                            <li>{product.id}. {product.name} ~ {product.price}</li>
                        )
                    })
                }
            </ul> */}

            <p>{name}: {age}</p>
            <div>
                <button onClick={() => doSomething('Hoem Work')}>Click Me</button>
                <button onClick={() => setAge(age++)}>Add Age</button>
            </div>
            <div>
                {Props.children}
            </div>
        </>
    )
}