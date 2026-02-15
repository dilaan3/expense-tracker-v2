
import React, { useState, useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const { addTransaction, updateTransaction, currentTransaction } = useContext(GlobalContext);

    useEffect(() => {
        if (currentTransaction) {
            setText(currentTransaction.text);
            setAmount(currentTransaction.amount);
        } else {
            setText('');
            setAmount(0);
        }
    }, [currentTransaction])

    const onSubmit = e => {
        e.preventDefault();

        if (currentTransaction) {
            // Güncelleme Modu
            const updatedTransaction = {
                id: currentTransaction.id,
                text,
                amount: +amount
            }
            updateTransaction(updatedTransaction);
        } else {
            // Ekleme Modu
            const newTransaction = {
                id: Math.floor(Math.random() * 100000000),
                text,
                amount: +amount
            }
            addTransaction(newTransaction);
        }

        // Formu temizle
        setText('');
        setAmount(0);
    }

    return (
        <>
            <h3>{currentTransaction ? 'İşlemi Düzenle' : 'Yeni İşlem Ekle'}</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Metin</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Ne harcadın?..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Tutar <br />
                        (negatif - gider, pozitif + gelir)</label
                    >
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Tutar girin..." />
                </div>
                <button className="btn" style={{ backgroundColor: currentTransaction ? '#e67e22' : '#9c88ff' }}>
                    {currentTransaction ? 'Güncelle' : 'Ekle'}
                </button>
            </form>
        </>
    )
}

export default AddTransaction
