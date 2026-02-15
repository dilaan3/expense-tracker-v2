
import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Başlangıç Durumu
const initialState = {
    transactions: [
        { id: 1, text: 'Çiçek', amount: -50 },
        { id: 2, text: 'Maaş', amount: 3000 },
        { id: 3, text: 'Kitap', amount: -100 },
        { id: 4, text: 'Freelance İş', amount: 1500 }
    ],
    currentTransaction: null // Düzenlenecek işlem
}

// Context Oluşturma
export const GlobalContext = createContext(initialState);

// Sağlayıcı (Provider) Bileşeni
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Aksiyonlar
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    function updateTransaction(transaction) {
        dispatch({
            type: 'UPDATE_TRANSACTION',
            payload: transaction
        })
    }

    function setCurrentTransaction(transaction) {
        dispatch({
            type: 'SET_CURRENT_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        currentTransaction: state.currentTransaction,
        deleteTransaction,
        addTransaction,
        updateTransaction,
        setCurrentTransaction
    }}>
        {children}
    </GlobalContext.Provider>);
}
