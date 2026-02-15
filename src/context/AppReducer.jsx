
export default (state, action) => {
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case 'UPDATE_TRANSACTION':
            return {
                ...state,
                transactions: state.transactions.map(transaction =>
                    // ID karşılaştırmasını string'e çevirerek yapıyoruz ki tip hatası olmasın
                    String(transaction.id) === String(action.payload.id) ? action.payload : transaction
                ),
                currentTransaction: null
            }
        case 'SET_CURRENT_TRANSACTION':
            return {
                ...state,
                currentTransaction: action.payload
            }
        default:
            return state;
    }
}
