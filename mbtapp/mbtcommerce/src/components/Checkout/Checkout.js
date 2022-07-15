



import { addDoc, collection, writeBatch, getDoc, query, documentId } from 'firebase/firestore'
import { db } from '../Services/firebase'


const Checkout = () => {

const handleCreateOrder = () => {
    setLoading(true)

    const objOrder = {
        buyer: {
            name: 'Sebastian Zuviria',
            email: 'seba@zuv.com',
            phone: '123456789',
            address: 'Direccion 123'
        },
        items: cart,
        total: total
    }

    const batch = writeBatch(db)

    const ids = cart.map(prod => prod.id)

    const outOfStock = []

    const collectionRef = collection(db, 'products')

    getDocs(query(collectionRef, where(documentId(), 'in', ids)))
        .then(response => {
            response.docs.forEach(doc => {
                const dataDoc = doc.data()

                const prod = cart.find(prod => prod.id === doc.id)
                const prodQuantity = prod.quantity

                if(dataDoc.stock >= prodQuantity) {
                    batch.update(doc.ref, { stock: dataDoc.stock - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc})
                }
            })
        }).then(() => {
            if(outOfStock.length === 0) {
                const collectionRef = collection(db, 'orders')
                return addDoc(collectionRef, objOrder)
            } else {
                return Promise.reject({ type: 'out_of_stock', products: outOfStock })
            }
        }).then(({ id }) => {
            batch.commit()
            clearCart()
            alert('success',`Su orden se genero correctamente. El id de su orden es: ${id}`)
        }).catch(error => {
            if(error.type === 'out_of_stock') {
                alert('error','Hay productos que no tienen stock')

            } else {
                console.log(error)
            }
        }).finally(() => {
            setLoading(false)
        })

}


if(loading) {
    return <h1>Se esta generando su orden...</h1>
}
return (
   <div>
        <button onClick={handleCreateOrder} className="Button">Generar Orden</button>
        </div>
)
}

export default Checkout