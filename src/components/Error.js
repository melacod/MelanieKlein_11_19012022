import './Error.css'

export default function Error({ exception }) {
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
