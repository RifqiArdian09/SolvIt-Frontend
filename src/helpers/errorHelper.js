export function handleError(error) {
    if (error.response && error.status === 432) {
        return error.response.data.erros
    } else if (error.response && error.status === 401) {
        return error.response.data.message
    } else if (error.response && error.status === 400) {
        return error.response.data.message
    } else if (error.response && error.status === 500) {
        return error.response.data.message
    } else {
        alert('Something went wrong. Please try again later.')
    }
}