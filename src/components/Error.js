import './Error.css'

// Composant permettant d'afficher un message d'erreur provenant d'une exception
export default function Error({ exception }) {
    // Formattage du message d'erreur à afficher
    function getMessage() {
        let message = ''
        if (exception) {
            message = (
                <div>
                    An error occurred: <i>{exception.message}</i>
                    <br />
                    Please contact your Administrator.
                </div>
            )
        }
        return message
    }

    return <div className="error">{exception ? getMessage() : ''}</div>
}
